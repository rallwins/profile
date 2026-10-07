import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap border text-sm font-medium transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[3px] focus-visible:outline-accent disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary: "border-accent bg-accent text-accent-ink hover:bg-ink hover:border-ink",
        ghost: "border-line bg-transparent text-ink hover:border-accent hover:text-accent",
        quiet: "border-transparent bg-transparent px-0 text-ink underline-offset-4 hover:text-accent hover:underline",
      },
      size: {
        default: "h-11 px-4",
        small: "h-9 px-3 text-[0.8125rem]",
      },
    },
    defaultVariants: {
      variant: "ghost",
      size: "default",
    },
  },
);

export function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & { asChild?: boolean }) {
  const Comp = asChild ? Slot : "button";
  return <Comp className={cn(buttonVariants({ variant, size }), className)} {...props} />;
}
