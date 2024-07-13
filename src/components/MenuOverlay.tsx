import NavLink from "./NavLink";
interface link {
  label: string;
  href: string;
}
interface LINKS {
  links: link[];
}

const MenuOverlay = ({ links }: LINKS) => {
  return (
    <ul className="flex flex-col bg-opacity-90 items-center py-4 ">
      {links.map((link) => (
        <NavLink href={link.href} label={link.label} key={link.label} />
      ))}
    </ul>
  );
};

export default MenuOverlay;
