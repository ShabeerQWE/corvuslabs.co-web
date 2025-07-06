import React, { useState, useEffect } from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

interface AnimatedModalProps {
  trigger: React.ReactNode;
  title: string;
  children: React.ReactNode;
}

export const AnimatedModal: React.FC<AnimatedModalProps> = ({
  trigger,
  title,
  children,
}) => {
  const [open, setOpen] = useState(false);

  // Simple mobile back button handling
  useEffect(() => {
    if (!open) return;

    let modalHistoryAdded = false;

    // Add history entry for modal
    if (typeof window !== 'undefined') {
      // Push a hash change to history
      const currentUrl = window.location.href;
      if (!currentUrl.includes('#modal')) {
        window.history.pushState({ modal: true }, '', currentUrl + '#modal');
        modalHistoryAdded = true;
      }

      // Handle back button
      const handlePopState = () => {
        if (open && modalHistoryAdded) {
          setOpen(false);
        }
      };

      // Handle escape key
      const handleEscape = (event: KeyboardEvent) => {
        if (event.key === 'Escape') {
          setOpen(false);
        }
      };

      window.addEventListener('popstate', handlePopState);
      window.addEventListener('keydown', handleEscape);

      return () => {
        window.removeEventListener('popstate', handlePopState);
        window.removeEventListener('keydown', handleEscape);
        
        // Clean up history if modal is being unmounted
        if (modalHistoryAdded && window.location.hash === '#modal') {
          window.history.back();
        }
      };
    }
  }, [open]);

  const handleOpenChange = (isOpen: boolean) => {
    setOpen(isOpen);
    
    // When closing, remove hash if present
    if (!isOpen && window.location.hash === '#modal') {
      // Replace current state to remove the hash
      const urlWithoutHash = window.location.href.replace('#modal', '');
      window.history.replaceState(null, '', urlWithoutHash);
    }
  };

  return (
    <Dialog.Root open={open} onOpenChange={handleOpenChange}>
      <Dialog.Trigger asChild>
        <button
          type="button"
          className="inline-flex items-center justify-center rounded-md bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2"
        >
          {trigger}
        </button>
      </Dialog.Trigger>

      <AnimatePresence>
        {open && (
          <Dialog.Portal forceMount>
            <Dialog.Overlay asChild>
              <motion.div
                className="fixed inset-0 bg-black/40 z-40"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                onClick={() => handleOpenChange(false)}
                onTouchEnd={(e) => {
                  // Prevent accidental closure on mobile scrolling
                  if (e.target === e.currentTarget) {
                    handleOpenChange(false);
                  }
                }}
              />
            </Dialog.Overlay>

            <Dialog.Content asChild>
              <div
                className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4"
                onClick={(e) => e.stopPropagation()}
              >
                <motion.div
                  className="bg-white rounded-lg shadow-xl w-full max-w-6xl mx-auto p-3 sm:p-6 max-h-[95vh] sm:max-h-[90vh] overflow-y-auto"
                  initial={{
                    opacity: 0,
                    scale: 0.8,
                    y: 50,
                  }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                    y: 0,
                  }}
                  exit={{
                    opacity: 0,
                    scale: 0.8,
                    y: 50,
                  }}
                  transition={{
                    type: 'spring',
                    damping: 30,
                    stiffness: 400,
                    duration: 0.15,
                  }}
                  onClick={(e) => e.stopPropagation()}
                >
                  <div className="flex justify-between items-center mb-3 sm:mb-4">
                    <Dialog.Title className="text-base sm:text-lg font-medium text-gray-900">
                      {title}
                    </Dialog.Title>
                    <Dialog.Close asChild>
                      <button
                        type="button"
                        className="rounded-full p-1.5 sm:p-1 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        aria-label="Close"
                      >
                        <X size={20} className="sm:w-[18px] sm:h-[18px]" />
                      </button>
                    </Dialog.Close>
                  </div>
                  <div className="mt-2">{children}</div>
                </motion.div>
              </div>
            </Dialog.Content>
          </Dialog.Portal>
        )}
      </AnimatePresence>
    </Dialog.Root>
  );
};
