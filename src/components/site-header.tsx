"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import * as Dialog from "@radix-ui/react-dialog";
import { Menu, X } from "lucide-react";
import { profile } from "../../content/profile";
import { routes } from "@/lib/routes";
import { ThemeToggle } from "@/components/theme-toggle";
import { TrackLink } from "@/components/track-link";
import { cn } from "@/lib/utils";

function isCurrent(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-paper/95 backdrop-blur-sm">
      <a
        href="#content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-3 focus:z-50 focus:bg-panel focus:px-3 focus:py-2"
      >
        Skip to content
      </a>
      <div className="mx-auto flex w-full max-w-[76rem] items-center justify-between gap-4 px-5 py-3 md:px-8">
        <Link href="/" className="font-serif text-lg text-ink">
          {profile.name}
        </Link>
        <div className="flex items-center gap-2">
          <TrackLink
            event="resume_download"
            href="/resume.pdf"
            download
            className="hidden h-9 items-center border border-ink px-3 text-xs tracking-[0.14em] uppercase text-ink hover:border-accent hover:text-accent sm:inline-flex"
          >
            Download résumé
          </TrackLink>
          <ThemeToggle />
          <Dialog.Root open={open} onOpenChange={setOpen}>
            <Dialog.Trigger asChild>
              <button
                type="button"
                className="inline-flex h-9 w-9 items-center justify-center border border-line lg:hidden"
                aria-label="Open menu"
              >
                <Menu aria-hidden="true" size={18} />
              </button>
            </Dialog.Trigger>
            <Dialog.Portal>
              <Dialog.Overlay className="fixed inset-0 z-50 bg-ink/40" />
              <Dialog.Content className="fixed inset-y-0 right-0 z-50 flex w-[min(100%,22rem)] flex-col border-l border-line bg-paper p-6 outline-none">
                <div className="flex items-center justify-between">
                  <Dialog.Title className="font-serif text-2xl">Menu</Dialog.Title>
                  <Dialog.Close className="inline-flex h-9 w-9 items-center justify-center border border-line" aria-label="Close menu">
                    <X aria-hidden="true" size={18} />
                  </Dialog.Close>
                </div>
                <Dialog.Description className="sr-only">Profile sections</Dialog.Description>
                <nav className="mt-8 flex flex-col" aria-label="Mobile">
                  {routes.map((route) => (
                    <Link
                      key={route.href}
                      href={route.href}
                      aria-current={isCurrent(pathname, route.href) ? "page" : undefined}
                      onClick={() => setOpen(false)}
                      className={cn(
                        "border-b border-line py-3 text-lg",
                        isCurrent(pathname, route.href) ? "text-accent" : "text-ink",
                      )}
                    >
                      <span className="mr-3 text-xs tracking-[0.16em] text-slate">{route.index}</span>
                      {route.label}
                    </Link>
                  ))}
                </nav>
                <TrackLink
                  event="resume_download"
                  href="/resume.pdf"
                  download
                  className="mt-6 inline-flex h-11 items-center justify-center border border-ink px-4 text-sm"
                >
                  Download résumé
                </TrackLink>
              </Dialog.Content>
            </Dialog.Portal>
          </Dialog.Root>
        </div>
      </div>
      <nav className="mx-auto hidden w-full max-w-[76rem] gap-x-4 gap-y-1 px-8 pb-3 lg:flex lg:flex-wrap" aria-label="Primary">
        {routes.map((route) => (
          <Link
            key={route.href}
            href={route.href}
            aria-current={isCurrent(pathname, route.href) ? "page" : undefined}
            className={cn(
              "text-sm",
              isCurrent(pathname, route.href) ? "text-accent" : "text-slate hover:text-ink",
            )}
          >
            {route.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
