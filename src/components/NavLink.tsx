import Link from "next/link";

const NavLink = ({ label, href }: { label: string; href: string }) => {
  return (
    <Link
      href={href}
      className="block py-2 pl-3 pr-4 text-[#adb7be] hover:text-white"
    >
      {label}
    </Link>
  );
};

export default NavLink;
