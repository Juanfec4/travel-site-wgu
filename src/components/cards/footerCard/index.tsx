import { FC, ReactNode } from "react";

interface FooterCardProps {
  title: string;
  children?: ReactNode;
}

const FooterCard: FC<FooterCardProps> = ({ children, title }) => {
  return (
    <div className="text-white tracking-wide font-thin">
      <h3 className=" text-2xl border-b-2 border-teal-500 max-w-max font-bold mb-4">{title}</h3>
      {children}
    </div>
  );
};

export default FooterCard;
