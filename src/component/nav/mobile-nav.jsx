import { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { IoClose, IoMenu } from "react-icons/io5";

const MobileNav = () => {
  const [isMenuNavOpen, setIsMenuNavOpen] = useState(false);

  const handleMenuNavOpen = () => {
    setIsMenuNavOpen((prev) => !prev);
  };

  const handleMenuClose = () => {
    setIsMenuNavOpen(false);
  }

  return (
    <nav aria-label="Mobile navigation" className="flex items-center gap-5">
      {/* Menu Toggle */}
      <button
        onClick={handleMenuNavOpen}
        aria-expanded={isMenuNavOpen}
        aria-controls="mobile-menu"
        className="p-1"
        aria-label={isMenuNavOpen ? "Close menu" : "Open menu"}
      >
        {isMenuNavOpen ? <IoClose size={30} /> : <IoMenu size={30} />}
      </button>

      {/* Full menu */}
      <AnimatePresence>
        {isMenuNavOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="absolute left-0 top-full mt-0 w-full bg-[#F6F6FE] shadow-md rounded-b-xl z-50 overflow-hidden"
          >
            <ul className="flex flex-col gap-4 p-4">
              <li>
                <Link
                  onClick={handleMenuClose}
                  href="/"
                  className="block font-cta font-medium px-2 py-1 rounded-md hover:bg-gray-100 active:bg-gray-200 transition-colors"
                >
                  Home
                </Link>
              </li>

              <li>
                <Link
                  onClick={handleMenuClose}
                  href="/candidate"
                  className="block font-cta font-medium px-2 py-1 rounded-md hover:bg-gray-100 active:bg-gray-200 transition-colors"
                >
                  Candidate
                </Link>
              </li>
              <li>
                <Link
                  onClick={handleMenuClose}
                  href="/employer"
                  className="block font-cta font-medium px-2 py-1 rounded-md hover:bg-gray-100 active:bg-gray-200 transition-colors"
                >
                  Employer
                </Link>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default MobileNav;
