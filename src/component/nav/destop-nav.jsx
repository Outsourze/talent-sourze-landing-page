import Link from "next/link";

const DesktopNav = () => {

  return (
    <div className="flex items-center gap-9">
      <Link className="text-[var(--color-gray)] font-medium font-cta" href="/">
        Candidate
      </Link>
      <Link className="text-[var(--color-gray)] font-cta font-medium" href="/about">
        Employer
      </Link>
    </div>
  );
};

export default DesktopNav;
