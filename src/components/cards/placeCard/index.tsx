import { FC } from "react";

interface PlaceCardProps {
  img: string;
  title: string;
  description: string;
}

const PlaceCard: FC<PlaceCardProps> = ({ img, title, description }) => {
  return (
    <div className="rounded-md overflow-hidden relative h-80 w-full group">
      <img src={img} className="absolute object-cover object-center h-full w-full brightness-95" />
      <div className="absolute bottom-0 left-0 from-transparent to-black/90 bg-gradient-to-b w-full p-2 opacity-0 group-hover:opacity-100 transition duration-200">
        <h3 className="text-white font-semibold text-2xl mb-2">{title}</h3>
        <p className="text-white">{description}</p>
      </div>
    </div>
  );
};
export default PlaceCard;
