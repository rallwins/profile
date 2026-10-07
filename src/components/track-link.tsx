"use client";

import { track } from "@vercel/analytics";
import Link from "next/link";

type EventName =
  | "resume_download"
  | "linkedin_click"
  | "github_click"
  | "case_study_opened"
  | "contact_cta";

type Props = {
  event: EventName;
  href: string;
  children: React.ReactNode;
  className?: string;
  external?: boolean;
  download?: boolean;
};

export function TrackLink({ event, href, children, className, external, download }: Props) {
  const classNames = className ?? "text-ink underline-offset-4 hover:text-accent hover:underline";
  if (external) {
    return (
      <a
        href={href}
        className={classNames}
        target="_blank"
        rel="noreferrer"
        onClick={() => track(event)}
      >
        {children}
      </a>
    );
  }
  if (download) {
    return (
      <a href={href} download className={classNames} onClick={() => track(event)}>
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={classNames} onClick={() => track(event)}>
      {children}
    </Link>
  );
}
