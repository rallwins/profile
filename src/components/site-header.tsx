"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import * as Dialog from "@radix-ui/react-dialog";
import { Menu, X } from "lucide-react";
import { profile } from "../../content/profile";
import { primaryNav } from "@/lib/routes";
import { ThemeToggle } from "@/components/theme-toggle";
import { TrackLink } from "@/components/track-link";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

function isCurrent(pathname: string, href: string) {
  return pathname === href || pathname.startsWith(`${href}/`);
}

function NavLinks({
  pathname,
  onNavigate,
  className,
  linkClassName,
}: {
  pathname: string;
  onNavigate?: () => void;
  className?: string;
  linkClassName?: string;
}) {
  return (
    <nav className={className} aria-label={onNavigate ? "Mobile" : "Primary"}>
      {primaryNav.map((route) => {
        const current = isCurrent(pathname, route.href);
        return (
          <Link
            key={route.href}
            href={route.href}
            aria-current={current ? "page" : undefined}
            onClick={onNavigate}
            className={cn(
              "inline-flex min-h-11 items-center rounded-lg px-3 text-[0.9375rem] font-medium transition-colors",
              current ? "text-accent underline decoration-2 underline-offset-8" : "text-slate hover:text-ink",
              linkClassName,
            )}
          >
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
    <header className="sticky top-0 z-40 border-b border-line bg-canvas/90 backdrop-blur">
      <a href="#content" className="skip-link">
        Skip to content
      </a>
      <div className="flex h-[3.75rem] w-full items-center justify-between gap-4 px-[clamp(1rem,4vw,3.5rem)]">
        <div className="flex min-w-0 items-center gap-3">
          <Link href="/" className="flex items-center gap-2.5 font-semibold whitespace-nowrap text-ink">
            <Image src="/avatar.png" alt="" width={32} height={32} className="h-8 w-8 rounded-full bg-white" />
            {profile.name}
          </Link>
          <p className="meta hidden whitespace-nowrap xl:block">/ {profile.role}</p>
        </div>
        <div className="flex items-center gap-2">
          <NavLinks pathname={pathname} className="mr-2 hidden items-center gap-0.5 xl:flex" />
          <ThemeToggle />
          <TrackLink
            event="resume_download"
            href="/resume.pdf"
            download
            className={cn(buttonVariants({ variant: "primary", size: "small" }), "hidden sm:inline-flex")}
          >
            Download résumé
          </TrackLink>
          <Dialog.Root open={open} onOpenChange={setOpen}>
            <Dialog.Trigger asChild>
              <button
                type="button"
                className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-line text-ink xl:hidden"
                aria-label="Open menu"
              >
                <Menu aria-hidden="true" size={20} />
              </button>
            </Dialog.Trigger>
            <Dialog.Portal>
              <Dialog.Overlay className="fixed inset-0 z-50 bg-black/40" />
              <Dialog.Content className="fixed inset-y-0 right-0 z-50 flex w-[min(100%,22rem)] flex-col overflow-y-auto border-l border-line bg-paper p-6 outline-none">
                <div className="flex items-center justify-between">
                  <Dialog.Title className="font-serif text-2xl font-medium tracking-tight text-ink">
                    Menu
                  </Dialog.Title>
                  <Dialog.Close
                    className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-line text-ink"
                    aria-label="Close menu"
                  >
                    <X aria-hidden="true" size={20} />
                  </Dialog.Close>
                </div>
                <Dialog.Description className="sr-only">Site sections</Dialog.Description>
                <NavLinks
                  pathname={pathname}
                  onNavigate={() => setOpen(false)}
                  className="mt-6 flex flex-col gap-1"
                  linkClassName="text-lg"
                />
                <TrackLink
                  event="resume_download"
                  href="/resume.pdf"
                  download
                  className={cn(buttonVariants({ variant: "primary" }), "mt-6")}
                >
                  Download résumé
                </TrackLink>
              </Dialog.Content>
            </Dialog.Portal>
          </Dialog.Root>
        </div>
      </div>
    </header>
  );
}
