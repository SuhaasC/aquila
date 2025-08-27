import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-2xl text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-primary text-surface hover:bg-primary/90 active:scale-95",
        destructive: "bg-red-500 text-surface hover:bg-red-500/90 active:scale-95",
        outline: "border border-border bg-transparent hover:bg-accent hover:text-surface active:scale-95",
        secondary: "bg-secondary text-text hover:bg-secondary/80 active:scale-95",
        ghost: "hover:bg-accent hover:text-surface active:scale-95",
        link: "text-primary underline-offset-4 hover:underline",
        primaryQuiet: "inline-flex items-center rounded-xl border border-brand-gold/40 px-5 py-3 text-brand-gold bg-transparent hover:bg-brand-gold/10 focus:ring-2 focus:ring-brand-gold/30",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-xl px-3",
        lg: "h-11 rounded-2xl px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
