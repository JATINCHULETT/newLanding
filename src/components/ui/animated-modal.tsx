import React, { createContext, useContext, useEffect, useRef, useState, ReactNode } from "react";
import { AnimatePresence, motion } from "motion/react";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";

interface ModalContextType {
  open: boolean;
  setOpen: (open: boolean) => void;
}

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export const ModalProvider = ({
  children,
  open: controlledOpen,
  setOpen: setControlledOpen,
}: {
  children: ReactNode;
  open?: boolean | undefined;
  setOpen?: ((open: boolean) => void) | undefined;
}) => {
  const [internalOpen, setInternalOpen] = useState(false);

  const open = controlledOpen !== undefined ? controlledOpen : internalOpen;
  const setOpen = setControlledOpen !== undefined ? setControlledOpen : setInternalOpen;

  return <ModalContext.Provider value={{ open, setOpen }}>{children}</ModalContext.Provider>;
};

export const useModal = () => {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error("useModal must be used within a ModalProvider");
  }
  return context;
};

export function Modal({
  children,
  open,
  setOpen,
}: {
  children: ReactNode;
  open?: boolean | undefined;
  setOpen?: ((open: boolean) => void) | undefined;
}) {
  return (
    <ModalProvider open={open} setOpen={setOpen}>
      {children}
    </ModalProvider>
  );
}

export const ModalTrigger = ({
  children,
  className,
  onClick,
}: {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
}) => {
  const { setOpen } = useModal();
  return (
    <button
      type="button"
      onClick={(e) => {
        onClick?.();
        setOpen(true);
      }}
      className={cn(
        "relative overflow-hidden rounded-full text-center transition duration-300",
        className,
      )}
    >
      {children}
    </button>
  );
};

export const ModalBody = ({ children, className }: { children: ReactNode; className?: string }) => {
  const { open, setOpen } = useModal();
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // Handle ESC key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && open) {
        setOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [open, setOpen]);

  // Click outside to close
  const handleBackdropClick = (e: React.MouseEvent) => {
    if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
      setOpen(false);
    }
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            backdropFilter: "blur(8px)",
          }}
          exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
          transition={{ duration: 0.25 }}
          onClick={handleBackdropClick}
          className="fixed inset-0 z-50 flex h-full w-full items-center justify-center p-3 sm:p-5 md:p-8 [perspective:1000px] [transform-style:preserve-3d] bg-black/65"
        >
          <motion.div
            ref={modalRef}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{
              duration: 0.2,
              ease: [0.16, 1, 0.3, 1],
            }}
            onClick={(e) => e.stopPropagation()}
            className={cn(
              "relative z-50 flex max-h-[92vh] w-full max-w-2xl flex-col overflow-y-auto rounded-3xl border border-border/80 bg-card text-card-foreground shadow-2xl",
              className,
            )}
          >
            {/* Close Button */}
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close modal"
              className="absolute right-4 top-4 z-20 flex h-8 w-8 items-center justify-center rounded-full bg-secondary/80 text-muted-foreground transition-all hover:bg-secondary hover:text-foreground hover:scale-105 active:scale-95 cursor-pointer"
            >
              <X className="h-4 w-4" />
            </button>

            {children}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export const ModalContent = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return <div className={cn("flex flex-1 flex-col p-6 sm:p-8", className)}>{children}</div>;
};

export const ModalFooter = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "flex items-center justify-end gap-3 border-t border-border/70 bg-secondary/30 p-4 sm:px-8",
        className,
      )}
    >
      {children}
    </div>
  );
};
