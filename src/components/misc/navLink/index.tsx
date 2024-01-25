import { FC, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export type NavLinkType = {
  target: string;
  text: string;
  children?: NavLinkType[];
};

interface NavLinkProps {
  navLink: NavLinkType;
}

const NavLink: FC<NavLinkProps> = ({ navLink }) => {
  const [isOpen, setIsOpen] = useState(false);
  const navigator = useNavigate();
  const location = useLocation();

  const handleNavigate = () => {
    navigator(navLink.target);
    setIsOpen(false);
  };

  return (
    <div
      onMouseLeave={() => setIsOpen(false)}
      onMouseEnter={() => setIsOpen(true)}
      className="relative w-full"
    >
      {location.pathname === navLink.target ? (
        <a
          onClick={handleNavigate}
          className="cursor-pointer border-b-2 border-teal-400 transition duration-200 font-bold text-lg"
        >
          {navLink.text}
        </a>
      ) : (
        <a
          onClick={handleNavigate}
          className="cursor-pointer hover:border-b-2 border-teal-400 transition duration-200 font-bold text-lg"
        >
          {navLink.text}
        </a>
      )}

      {navLink.children && isOpen && (
        <ul className="absolute rounded-md py-2 bg-teal-800 p-2">
          {navLink.children.map((child, index) => (
            <li key={index} className="w-max">
              <NavLink navLink={child} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
export default NavLink;
