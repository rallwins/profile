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

function NavLinks({
  pathname,
  onNavigate,
  className,
}: {
  pathname: string;
  onNavigate?: () => void;
  className?: string;
}) {
  return (
    <nav className={className} aria-label={onNavigate ? "Mobile" : "Primary"}>
      {routes.map((route) => {
        const current = isCurrent(pathname, route.href);
        return (
          <Link
            key={route.href}
            href={route.href}
            aria-current={current ? "page" : undefined}
            onClick={onNavigate}
            className={cn(
              "border-l-2 py-1.5 pl-3 text-sm",
              current ? "border-accent text-ink" : "border-transparent text-slate hover:text-ink",
            )}
          >
            <span className="mr-2 font-serif text-xs text-accent">{route.index}</span>
            {route.label}
          </Link>
        );
      })}
    </nav>
  );
}

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-40 border-b border-line bg-paper/95 backdrop-blur-sm xl:hidden">
        <a
          href="#content"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-3 focus:z-50 focus:bg-panel focus:px-3 focus:py-2"
        >
          Skip to content
        </a>
        <div className="flex items-center justify-between gap-3 px-5 py-3">
          <Link href="/" className="font-serif text-2xl font-light italic text-ink">
            {profile.name}
          </Link>
          <div className="flex items-center gap-2">
            <ThemeToggle />
            <Dialog.Root open={open} onOpenChange={setOpen}>
              <Dialog.Trigger asChild>
                <button
                  type="button"
                  className="inline-flex h-10 w-10 items-center justify-center bg-panel text-ink"
                  aria-label="Open menu"
                >
                  <Menu aria-hidden="true" size={18} />
                </button>
              </Dialog.Trigger>
              <Dialog.Portal>
                <Dialog.Overlay className="fixed inset-0 z-50 bg-ink/45" />
                <Dialog.Content className="fixed inset-y-0 right-0 z-50 flex w-[min(100%,22rem)] flex-col bg-paper p-6 shadow-[inset_3px_0_0_var(--accent)] outline-none">
                  <div className="flex items-center justify-between">
                    <Dialog.Title className="font-serif text-3xl font-light italic">Menu</Dialog.Title>
                    <Dialog.Close
                      className="inline-flex h-10 w-10 items-center justify-center bg-panel"
                      aria-label="Close menu"
                    >
                      <X aria-hidden="true" size={18} />
                    </Dialog.Close>
                  </div>
                  <Dialog.Description className="sr-only">Profile sections</Dialog.Description>
                  <NavLinks
                    pathname={pathname}
                    onNavigate={() => setOpen(false)}
                    className="mt-8 flex flex-col gap-1"
                  />
                  <TrackLink
                    event="resume_download"
                    href="/resume.pdf"
                    download
                    className="mt-8 inline-flex h-11 items-center justify-center bg-accent px-4 text-sm text-accent-ink"
                  >
                    Download résumé
                  </TrackLink>
                </Dialog.Content>
              </Dialog.Portal>
            </Dialog.Root>
          </div>
        </div>
      </header>
      <aside className="fixed inset-y-0 left-0 z-40 hidden w-72 flex-col border-r border-line bg-panel px-6 py-8 xl:flex">
        <a
          href="#content"
          className="sr-only focus:not-sr-only focus:mb-4 focus:bg-paper focus:px-3 focus:py-2"
        >
          Skip to content
        </a>
        <Link href="/" className="font-serif text-[2rem] font-light italic leading-none text-ink">
          {profile.name}
        </Link>
        <p className="mt-4 text-[0.68rem] font-medium uppercase tracking-[0.22em] text-slate">
          Director of Technology
        </p>
        <NavLinks pathname={pathname} className="mt-10 flex flex-col gap-1" />
        <div className="mt-auto flex flex-col gap-4 pt-8">
          <ThemeToggle />
          <TrackLink
            event="resume_download"
            href="/resume.pdf"
            download
            className="inline-flex h-10 items-center justify-center bg-accent px-3 text-xs font-medium uppercase tracking-[0.16em] text-accent-ink"
          >
            Download résumé
          </TrackLink>
          <p className="text-xs text-slate">{profile.canonical.replace("https://", "")}</p>
        </div>
      </aside>
    </>
  );
}
