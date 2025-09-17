import { useEffect } from "react";

const Modal = ({ children }) => {
  //This will lock outside the modal scroll
  useEffect(() => {
    // Lock scroll on mount
    const originalStyle = window.getComputedStyle(document.body).overflow;
    document.body.style.overflow = "hidden";

    // Restore on unmount
    return () => {
      document.body.style.overflow = originalStyle;
    };
  }, []);

  return (
    <div className="fixed inset-0 z-[100] w-full h-screen backdrop-blur-lg bg-black/30 flex items-center justify-center overflow-hidden">
      {/* scrollable content wrapper */}
      <div className="max-h-[100vh] w-full overflow-y-auto">
        {children}
      </div>
    </div>
  );
};

export default Modal;
