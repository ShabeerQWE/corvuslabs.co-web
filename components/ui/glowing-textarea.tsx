import * as React from "react";
import { cn } from "../../lib/utils";

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

const GlowingTextarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, ...props }, ref) => {
    const [isFocused, setIsFocused] = React.useState(false);
    const [isHovered, setIsHovered] = React.useState(false);

    return (
      <div
        className={cn(
          "group/input rounded-lg p-[2px] transition-all duration-300",
          (isFocused || isHovered) && "bg-gradient-to-r from-gray-300 to-gray-400"
        )}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <textarea
          className={cn(
            `flex min-h-[120px] w-full rounded-md border-none bg-gray-50 px-3 py-2 text-sm text-black transition duration-300 placeholder:text-neutral-400 focus-visible:ring-[2px] focus-visible:ring-neutral-400 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 shadow-[0px_0px_1px_1px_#e5e7eb] resize-none`,
            className,
          )}
          ref={ref}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          {...props}
        />
      </div>
    );
  },
);
GlowingTextarea.displayName = "GlowingTextarea";

export { GlowingTextarea };
