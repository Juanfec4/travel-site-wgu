import { IconBrandAirbnb, IconBrandInstagram, IconBrandTripadvisor } from "@tabler/icons-react";
import { FC } from "react";
import FooterCard from "../../cards/footerCard";

const Footer: FC = () => {
  return (
    <div className="grid grid-cols-4 gap-24">
      <FooterCard title="">
        <h1 className="text-6xl text-center pt-4 font-bold text-white">Taniti</h1>
      </FooterCard>
      <FooterCard title="About Us">
        <p>
          Taniti - where every step leads to adventure, tranquility, and the timeless beauty of our
          Pacific island retreat.
        </p>
      </FooterCard>
      <FooterCard title="Explore">
        <ul>
          <li>
            <a
              href=""
              className="font-normal underline italic hover:text-teal-400 transition duration-200"
            >
              Local tours
            </a>
          </li>
          <li>
            <a
              href=""
              className="font-normal underline italic hover:text-teal-400 transition duration-200"
            >
              Book a hotel
            </a>
          </li>
        </ul>
      </FooterCard>
      <FooterCard title="Connect">
        <div className="flex gap-2">
          <IconBrandInstagram className="cursor-pointer hover:text-teal-400 transition duration-200" />
          <IconBrandAirbnb className="cursor-pointer hover:text-teal-400 transition duration-200" />
          <IconBrandTripadvisor className="cursor-pointer hover:text-teal-400 transition duration-200" />
        </div>
      </FooterCard>
    </div>
  );
};

export default Footer;
