import { FC } from "react";
import NavLink, { NavLinkType } from "../../misc/navLink";

interface NavbarProps {
  links: NavLinkType[];
}

const Navbar: FC<NavbarProps> = ({ links }) => {
  return (
    <div className="select-none">
      <ul className="flex gap-16 justify-center p-6 font-semibold text-white">
        {links.map((link, index) => (
          <li key={index}>
            <NavLink navLink={link} />
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Navbar;
