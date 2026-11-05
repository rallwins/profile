/**
 * Publishes the résumé without its contact details.
 *
 *   npm run resume -- path/to/Allwins_Rajaiah_AI_Solutions_Architect.pdf
 *
 * The original prints an email address, a phone number, and a city under the
 * title. That line is redacted (the text is removed, not covered), and the
 * LinkedIn link is drawn back centred in its place. The source PDF stays
 * outside the repository.
 */
import { readFileSync, writeFileSync } from "node:fs";
import * as mupdf from "mupdf";
import { PDFDocument, PDFName, PDFString, StandardFonts, rgb } from "pdf-lib";

const source = process.argv[2];
if (!source) {
  console.error("Usage: npm run resume -- <path to the original résumé PDF>");
  process.exit(1);
}

// Page 1 contact line, in top-left PDF points: below the title, above the first heading.
const contactLine = [80, 94, 520, 106];
const linkedin = { label: "linkedin.com/in/allwinsrajaiah", url: "https://www.linkedin.com/in/allwinsrajaiah/" };
// Patterns rather than the values themselves, so the details never enter the repository.
const forbidden = [
  { name: "email address", pattern: /[\w.+-]+@[\w-]+\.[\w.]+/ },
  { name: "phone number", pattern: /\+\d{1,3}[\s-]?\d{4,}|\d{5}\s\d{5}/ },
  { name: "contact icons", pattern: /[✉☎⌖]/ },
  { name: "mailto link", pattern: /mailto:/ },
];

const doc = new mupdf.PDFDocument(readFileSync(source));
const page = doc.loadPage(0);
page.createAnnotation("Redact").setRect(contactLine);
page.applyRedactions(false, mupdf.PDFPage.REDACT_IMAGE_PIXELS);
for (const link of page.getLinks()) page.deleteLink(link);
const redacted = doc.saveToBuffer("garbage=4,compress,sanitize").asUint8Array();

const pdf = await PDFDocument.load(redacted);
const first = pdf.getPage(0);
const font = await pdf.embedFont(StandardFonts.Helvetica);
const size = 9;
const width = font.widthOfTextAtSize(linkedin.label, size);
const x = (first.getWidth() - width) / 2;
const baseline = first.getHeight() - 103;
first.drawText(linkedin.label, { x, y: baseline, size, font, color: rgb(0.12, 0.22, 0.4) });
const annotation = pdf.context.register(
  pdf.context.obj({
    Type: "Annot",
    Subtype: "Link",
    Rect: [x, baseline - 2, x + width, baseline + size],
    Border: [0, 0, 0],
    A: { Type: "Action", S: "URI", URI: PDFString.of(linkedin.url) },
  }),
);
first.node.set(PDFName.of("Annots"), pdf.context.obj([annotation]));
pdf.setTitle("Allwins Kannan Rajaiah, AI Solutions Architect");
pdf.setAuthor("Allwins Kannan Rajaiah");
const bytes = await pdf.save();

const check = mupdf.Document.openDocument(bytes, "application/pdf");
let text = Buffer.from(bytes).toString("latin1");
for (let index = 0; index < check.countPages(); index++) {
  text += check.loadPage(index).toStructuredText().asText();
}
const leaked = forbidden.filter((item) => item.pattern.test(text)).map((item) => item.name);
if (leaked.length > 0) {
  console.error(`Contact details still present (${leaked.join(", ")}); public/resume.pdf was not written.`);
  process.exit(1);
}

writeFileSync(new URL("../public/resume.pdf", import.meta.url), bytes);
console.log(`Wrote resume.pdf (${bytes.length} bytes, ${check.countPages()} pages)`);
