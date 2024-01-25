import { FC, ReactNode } from "react";

interface PlaceGalleryProps {
  children?: ReactNode;
}
const PlaceGallery: FC<PlaceGalleryProps> = ({ children }) => {
  return <div className="grid grid-cols-3 gap-6">{children}</div>;
};
export default PlaceGallery;
