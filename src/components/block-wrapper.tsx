import { forwardRef } from "react";

import { cn } from "@/lib/utils";

import type { HTMLAttributes } from "react";

interface BlockWrapperProps extends HTMLAttributes<HTMLDivElement> {
  wrapperClassName?: string;
}

export const BlockWrapper = forwardRef<HTMLDivElement, BlockWrapperProps>(
  function BlockWrapper(
    { children, className, wrapperClassName, ...props },
    ref
  ) {
    return (
      <section
        ref={ref}
        className={cn("relative overflow-hidden", wrapperClassName)}
      >
        <div
          className={cn("container relative py-12 lg:py-24", className)}
          {...props}
        >
          {children}
        </div>
      </section>
    );
  }
);
