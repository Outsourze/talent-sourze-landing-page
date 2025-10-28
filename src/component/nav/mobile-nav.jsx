import { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { IoClose, IoMenu, IoChevronDown, IoChevronUp } from "react-icons/io5";
import { useSectors } from "@/context/useFetchSectors";

const MobileNav = () => {
  const [isMenuNavOpen, setIsMenuNavOpen] = useState(false);
  const [isJobDropdownOpen, setIsJobDropdownOpen] = useState(false);
  const { sectors, loading, error } = useSectors();

  const handleMenuNavOpen = () => setIsMenuNavOpen((prev) => !prev);
  const handleMenuClose = () => setIsMenuNavOpen(false);
  const toggleJobDropdown = () => setIsJobDropdownOpen((prev) => !prev);

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
                  className="block brand-text-gray font-source font-semibold px-2 py-1 rounded-md hover:bg-gray-100 active:bg-gray-200 transition-colors"
                >
                  Home
                </Link>
              </li>

              <li>
                <Link
                  onClick={handleMenuClose}
                  href="/candidate"
                  className="block brand-text-gray font-source font-semibold px-2 py-1 rounded-md hover:bg-gray-100 active:bg-gray-200 transition-colors"
                >
                  Candidate
                </Link>
              </li>

              <li>
                <Link
                  onClick={handleMenuClose}
                  href="/employer"
                  className="block brand-text-gray font-source font-semibold px-2 py-1 rounded-md hover:bg-gray-100 active:bg-gray-200 transition-colors"
                >
                  Employer
                </Link>
              </li>

              <li>
                <Link
                  onClick={handleMenuClose}
                  href="/about"
                  className="block brand-text-gray font-source font-semibold px-2 py-1 rounded-md hover:bg-gray-100 active:bg-gray-200 transition-colors"
                >
                  About
                </Link>
              </li>

              {/* Job Listings Dropdown */}
              <li>
                <button
                  onClick={toggleJobDropdown}
                  className="w-full flex justify-between items-center px-2 py-1 rounded-md hover:bg-gray-100 active:bg-gray-200 transition-colors brand-text-gray font-source font-semibold"
                >
                  Job Listings
                  {isJobDropdownOpen ? <IoChevronUp size={20} /> : <IoChevronDown size={20} />}
                </button>

                <AnimatePresence>
                  {isJobDropdownOpen && (
                    <motion.ul
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="flex flex-col gap-2 overflow-hidden pl-4 mt-2"
                    >
                      {loading && <li className="text-gray-500">Loading...</li>}
                      {error && <li className="text-red-500">Failed to load sectors</li>}
                      {!loading && !error && sectors.length > 0
                        ? sectors.map((sector) => (
                            <li key={sector.id}>
                              <Link
                                onClick={handleMenuClose}
                                href={`/sector/${sector.id}`}
                                className="block px-2 py-1 rounded-md hover:bg-gray-200 transition-colors brand-text-gray font-source text-sm"
                              >
                                {sector.name}
                              </Link>
                            </li>
                          ))
                        : null}
                      {!loading && !error && sectors.length === 0 && (
                        <li className="text-gray-500">No sectors available</li>
                      )}
                    </motion.ul>
                  )}
                </AnimatePresence>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default MobileNav;
