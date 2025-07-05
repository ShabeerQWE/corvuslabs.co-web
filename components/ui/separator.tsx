import * as React from "react";

export interface SeparatorProps extends React.HTMLAttributes<HTMLDivElement> {
  orientation?: "horizontal" | "vertical";
}

export function Separator({ orientation = "horizontal", className = "", ...props }: SeparatorProps) {
  return (
    <div
      role="separator"
      className={
        orientation === "vertical"
          ? "shrink-0 bg-border w-px h-full " + className
          : "shrink-0 bg-border h-px w-full " + className
      }
      {...props}
    />
  );
}
