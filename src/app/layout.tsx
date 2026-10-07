import type { Metadata } from "next";
import { Newsreader, Source_Sans_3 } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { profile } from "../../content/profile";
import { personJsonLd, websiteJsonLd } from "@/lib/seo";
import { JsonLd } from "@/components/json-ld";
import { ThemeProvider } from "@/components/theme-provider";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import "./globals.css";

const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  variable: "--font-source",
  display: "swap",
});

const newsreader = Newsreader({
  subsets: ["latin"],
  variable: "--font-newsreader",
  display: "swap",
});

const themeScript = `(function(){try{var t=localStorage.getItem("ar-theme");var d=t==="dark"||(t!=="light"&&window.matchMedia("(prefers-color-scheme: dark)").matches);if(d)document.documentElement.classList.add("dark");document.documentElement.style.colorScheme=d?"dark":"light";}catch(e){}})();`;

export const metadata: Metadata = {
  metadataBase: new URL(profile.canonical),
  title: {
    default: profile.seoTitle,
    template: `%s · ${profile.name}`,
  },
  description: profile.seoDescription,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: profile.canonical,
    title: profile.seoTitle,
    description: profile.seoDescription,
    siteName: profile.name,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: profile.seoTitle,
    description: profile.seoDescription,
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${sourceSans.variable} ${newsreader.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="flex min-h-full flex-col">
        <JsonLd data={personJsonLd()} />
        <JsonLd data={websiteJsonLd()} />
        <ThemeProvider>
          <SiteHeader />
          <main id="content" className="flex-1">
            {children}
          </main>
          <SiteFooter />
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
