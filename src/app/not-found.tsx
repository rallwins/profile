import Link from "next/link";
import { Frame } from "@/components/page-intro";
import { buttonVariants } from "@/components/ui/button";

export default function NotFound() {
  return (
    <Frame>
      <p className="eyebrow">Page not found</p>
      <h1 className="mt-3 text-4xl leading-tight text-ink">This page doesn&apos;t exist.</h1>
      <Link href="/" className={`${buttonVariants({ variant: "primary" })} mt-6`}>
        Go to the home page
      </Link>
    </Frame>
  );
}
