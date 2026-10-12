import Link from "next/link";
import { Frame } from "@/components/page-intro";

export default function NotFound() {
  return (
    <Frame>
      <p className="text-xs uppercase tracking-[0.04em] text-accent">404</p>
      <h1 className="mt-4 font-semibold tracking-tight text-4xl">That page is not in the profile.</h1>
      <Link href="/" className="mt-6 inline-block text-accent">
        Return home
      </Link>
    </Frame>
  );
}
