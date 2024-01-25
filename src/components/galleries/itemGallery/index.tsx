import { FC, ReactNode } from "react";

interface ItemGalleryProps {
  children: ReactNode;
  title: string;
  id: string;
}

const ItemGallery: FC<ItemGalleryProps> = ({ children, title, id }) => {
  return (
    <div className="py-16" id={id}>
      <h5 className="section-title">{title}</h5>
      <div className="flex flex-col gap-8">{children}</div>
    </div>
  );
};
export default ItemGallery;
