import { FC } from "react";

interface ItemCardProps {
  image: string;
  title: string;
  text: string;
}

const ItemCard: FC<ItemCardProps> = ({ image, title, text }) => {
  return (
    <div className="h-64 w-full bg-neutral-100 rounded-md shadow-lg overflow-hidden flex">
      <img src={image} alt="" className=" object-center min-w-80 max-w-80" />
      <div className="p-6">
        <h4 className="text-3xl font-bold">{title}</h4>
        <p className="text-gray-700 font-light">{text}</p>
      </div>
    </div>
  );
};
export default ItemCard;
