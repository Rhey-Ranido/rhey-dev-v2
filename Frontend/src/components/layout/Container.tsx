import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "#/lib/utils";
import type { PropsWithChildren } from "react";

const containerVariants = cva("mx-auto w-full px-4 sm:px-6 lg:px-8", {
  variants: {
    variant: {
      default: "max-w-[1360px]", // slightly wider than 1280
      narrow: "max-w-6xl", // keep as-is (~1152)
      wide: "max-w-[1480px]", // slightly narrower than 1536
      full: "max-w-none",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

type ContainerProps = PropsWithChildren &
  VariantProps<typeof containerVariants> & {
    className?: string;
  };

export const Container = ({ children, variant, className }: ContainerProps) => {
  return <div className={cn(containerVariants({ variant, className }))}>{children}</div>;
};
