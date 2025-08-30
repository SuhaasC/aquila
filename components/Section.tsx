import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
}

export function Section({ children, className, id }: SectionProps) {
  return (
    <section id={id} className={cn('py-12 md:py-20', className)}>
      <div className='container mx-auto px-6 max-w-6xl'>{children}</div>
    </section>
  );
}
