import { cva } from "class-variance-authority";

export const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-[0.625rem] text-[0.9375rem] font-semibold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[3px] focus-visible:outline-accent",
  {
    variants: {
      variant: {
        primary: "bg-ink text-canvas hover:opacity-85",
        secondary: "border border-line bg-paper text-ink hover:border-accent hover:text-accent",
      },
      size: {
        default: "h-12 px-6",
        small: "h-11 px-4",
      },
    },
    defaultVariants: {
      variant: "secondary",
      size: "default",
    },
  },
);
