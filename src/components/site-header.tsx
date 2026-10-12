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
              "rounded-2xl px-3 py-2 text-sm font-medium",
              current ? "bg-accent text-accent-ink" : "text-slate hover:bg-paper hover:text-ink",
            )}
          >
            <span className={cn("mr-2 text-xs font-semibold", current ? "text-accent-ink" : "text-accent")}>
              {route.index}
            </span>
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
      <header className="sticky top-0 z-40 border-b border-line bg-panel xl:hidden">
        <a
          href="#content"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-3 focus:z-50 focus:rounded-full focus:bg-paper focus:px-3 focus:py-2"
        >
          Skip to content
        </a>
        <div className="flex items-center justify-between gap-3 px-5 py-3">
          <Link href="/" className="text-lg font-semibold tracking-tight text-ink">
            {profile.name}
          </Link>
          <div className="flex items-center gap-2">
            <ThemeToggle />
            <Dialog.Root open={open} onOpenChange={setOpen}>
              <Dialog.Trigger asChild>
                <button
                  type="button"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-paper text-ink"
                  aria-label="Open menu"
                >
                  <Menu aria-hidden="true" size={18} />
                </button>
              </Dialog.Trigger>
              <Dialog.Portal>
                <Dialog.Overlay className="fixed inset-0 z-50 bg-ink/45" />
                <Dialog.Content className="fixed inset-y-0 right-0 z-50 flex w-[min(100%,22rem)] flex-col rounded-l-[1.75rem] bg-panel p-6 outline-none">
                  <div className="flex items-center justify-between">
                    <Dialog.Title className="text-2xl font-semibold tracking-tight">Menu</Dialog.Title>
                    <Dialog.Close
                      className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-paper"
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
                    className="mt-8 inline-flex h-11 items-center justify-center rounded-full bg-accent px-4 text-sm font-semibold text-accent-ink"
                  >
                    Download résumé
                  </TrackLink>
                </Dialog.Content>
              </Dialog.Portal>
            </Dialog.Root>
          </div>
        </div>
      </header>
      <aside className="fixed bottom-3 left-3 top-3 z-40 hidden w-72 flex-col rounded-[1.5rem] bg-panel px-5 py-7 xl:flex">
        <a
          href="#content"
          className="sr-only focus:not-sr-only focus:mb-4 focus:rounded-full focus:bg-paper focus:px-3 focus:py-2"
        >
          Skip to content
        </a>
        <Link href="/" className="text-[1.65rem] font-semibold leading-none tracking-tight text-ink">
          {profile.name}
        </Link>
        <p className="mt-3 text-xs font-semibold uppercase tracking-[0.06em] text-slate">
          Director of Technology
        </p>
        <NavLinks pathname={pathname} className="mt-8 flex flex-col gap-1" />
        <div className="mt-auto flex flex-col gap-4 pt-8">
          <ThemeToggle />
          <TrackLink
            event="resume_download"
            href="/resume.pdf"
            download
            className="inline-flex h-11 items-center justify-center rounded-full bg-accent px-4 text-sm font-semibold text-accent-ink"
          >
            Download résumé
          </TrackLink>
          <p className="text-xs text-slate">{profile.canonical.replace("https://", "")}</p>
        </div>
      </aside>
    </>
  );
}
