import Link from "next/link";
import { RiArrowDownSLine } from "react-icons/ri";
import { useSectors } from "@/context/useFetchSectors";
import { useState } from "react";

const DesktopNav = () => {
  const { sectors, loading, error } = useSectors();
  const [isOpen, setIsOpen] = useState(false);

   // Close dropdown
  const handleCloseDropdown = () => setIsOpen(false);

  return (
    <div className="flex items-center gap-9 relative">
      <Link
        onClick={handleCloseDropdown}
        className="brand-text-gray font-source font-semibold text-lg"
        href="/employer"
      >
        Employer
      </Link>
      <Link
        onClick={handleCloseDropdown}
        className="brand-text-gray font-semibold font-source text-lg"
        href="/candidate"
      >
        Candidate
      </Link>


      <div className={`relative border border-[#0077B6] m-0 p-0 ${isOpen ? "rounded-t-lg" : "rounded-lg"}`}>
        {/* Dropdown trigger */}
        <div
          className="flex items-center gap-3 px-5 py-2 rounded-md cursor-pointer"
          onClick={() => setIsOpen((prev) => !prev)}
        >
          <p className="brand-text-gray font-source font-semibold text-lg">
            Job Listings
          </p>
          <RiArrowDownSLine size={24} />
        </div>

        {/* Dropdown menu */}
        {isOpen && (
          <div className="absolute top-full right-0 w-full bg-white shadow-lg border border-[#0077B6] rounded-b-lg">
            {loading && <p className="p-4 text-gray-500">Loading...</p>}
            {error && <p className="p-4 text-red-500">Failed to load sectors</p>}
            {!loading && !error && sectors.length > 0 && (
              <ul>
                {sectors.map((sector) => (
                  <li key={sector.id} className="hover:bg-gray-100">
                    <Link
                      onClick={handleCloseDropdown}
                      href={`/sector/${sector.id}`}
                      className="block px-4 py-2 text-gray-700 font-source text-sm"
                    >
                      {sector.name}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
            {!loading && !error && sectors.length === 0 && (
              <p className="p-4 text-gray-500">No sectors available</p>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default DesktopNav;
