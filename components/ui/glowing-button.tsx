import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "../../lib/utils";

interface GlowingButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  isLoading?: boolean;
}

const GlowingButton: React.FC<GlowingButtonProps> = ({ 
  className, 
  children, 
  onClick,
  type = "button",
  disabled = false,
  isLoading = false
}) => {
  return (
    <motion.button
      layout
      type={type}
      onClick={onClick}
      disabled={disabled || isLoading}
      className={cn(
        "group/btn relative block h-12 w-full rounded-md bg-gradient-to-br from-gray-900 to-gray-700 font-medium text-white shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] transition-all duration-300 ease-out hover:shadow-[0px_0px_20px_0px_rgba(59,130,246,0.5)] disabled:opacity-50 disabled:cursor-not-allowed",
        className
      )}
      whileHover={!disabled && !isLoading ? { scale: 1.02 } : {}}
      whileTap={!disabled && !isLoading ? { scale: 0.98 } : {}}
    >
      <motion.div layout className="flex items-center justify-center gap-2">
        <AnimatePresence mode="wait">
          {isLoading ? (
            <motion.svg
              key="loader"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0 }}
              className="h-5 w-5 animate-spin text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              />
            </motion.svg>
          ) : (
            <motion.span
              key="text"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              {children}
            </motion.span>
          )}
        </AnimatePresence>
      </motion.div>
      <BottomGradient />
    </motion.button>
  );
};

const BottomGradient = () => {
  return (
    <>
      <span className="absolute inset-x-0 -bottom-px block h-px w-full bg-gradient-to-r from-transparent via-gray-500 to-transparent opacity-0 transition duration-500 group-hover/btn:opacity-100" />
      <span className="absolute inset-x-10 -bottom-px mx-auto block h-px w-1/2 bg-gradient-to-r from-transparent via-gray-400 to-transparent opacity-0 blur-sm transition duration-500 group-hover/btn:opacity-100" />
    </>
  );
};

export { GlowingButton };
