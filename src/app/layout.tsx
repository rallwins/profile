import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { profile } from "../../content/profile";
import { personJsonLd, websiteJsonLd } from "@/lib/seo";
import { JsonLd } from "@/components/json-ld";
import { StyleProvider } from "@/components/style-provider";
import { ThemeProvider } from "@/components/theme-provider";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
});

const themeScript = `(function(){try{var t=localStorage.getItem("ar-theme");var d=t==="dark"||(t!=="light"&&window.matchMedia("(prefers-color-scheme: dark)").matches);if(d)document.documentElement.classList.add("dark");document.documentElement.style.colorScheme=d?"dark":"light";var allowed={"glass-funnel":1,"glass-dashboard":1,"hire-sheet":1};var s=localStorage.getItem("ar-style");if(!allowed[s])s="glass-dashboard";document.documentElement.setAttribute("data-style",s);}catch(e){document.documentElement.setAttribute("data-style","glass-dashboard");}})();`;

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
      data-style="glass-dashboard"
      className={`${jakarta.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="flex min-h-full flex-col">
        <JsonLd data={personJsonLd()} />
        <JsonLd data={websiteJsonLd()} />
        <ThemeProvider>
          <StyleProvider>
            <SiteHeader />
            <div className="site-frame flex min-h-full flex-1 flex-col xl:pl-[19.5rem]">
              <main id="content" className="flex-1">
                {children}
              </main>
              <SiteFooter />
            </div>
          </StyleProvider>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
