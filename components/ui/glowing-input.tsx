import * as React from "react";
import { cn } from "../../lib/utils";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const GlowingInput = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
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
        <input
          type={type}
          className={cn(
            `flex h-12 w-full rounded-md border-none bg-gray-50 px-3 py-2 text-sm text-black transition duration-300 file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-neutral-400 focus-visible:ring-[2px] focus-visible:ring-neutral-400 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 shadow-[0px_0px_1px_1px_#e5e7eb]`,
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
GlowingInput.displayName = "GlowingInput";

export { GlowingInput };
