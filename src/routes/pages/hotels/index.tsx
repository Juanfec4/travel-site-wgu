import { FC } from "react";
import ItemCard from "../../../components/cards/itemCard";

import bnb1 from "../../../assets/images/airbnb-cabin.jpg";
import bnb2 from "../../../assets/images/cabana.jpg";
import bnb3 from "../../../assets/images/coastal-place.jpg";

import hotel2 from "../../../assets/images/irish-resort.jpg";
import hotel1 from "../../../assets/images/local-hotel.jpg";

import bundle1 from "../../../assets/images/cruise.jpg";
import bundle2 from "../../../assets/images/glamping.jpg";

import ItemGallery from "../../../components/galleries/itemGallery";

const HotelsPage: FC = () => {
  return (
    <div>
      <h1 className="page-title">Hotels</h1>
      <p className="text-xl font-thin tracking-wide text-gray-700">
        Taniti has a wide variety of lodging that ranges from an inexpensive hostel to one large,
        four-star resort. There are many small, family-owned hotels and a growing number of bed and
        breakfasts. All types of lodging are strictly regulated and regularly inspected by the
        Tanitian government.
      </p>
      <ItemGallery title="Local Hostels" id="local-hotels">
        <ItemCard
          image={bnb1}
          title="Tropical Bungalows"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer convallis tempor eros eget eleifend. Donec pharetra nec est eu fermentum. Duis vel velit id lorem placerat molestie non at sapien. Fusce magna enim, volutpat eu suscipit nec, elementum quis neque. Etiam sagittis nisi id tortor tempus, non tempor mi pharetra. Cras id enim eros."
        />
        <ItemCard
          image={bnb2}
          title="Cabana Sol"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer convallis tempor eros eget eleifend. Donec pharetra nec est eu fermentum. Duis vel velit id lorem placerat molestie non at sapien. Fusce magna enim, volutpat eu suscipit nec, elementum quis neque. Etiam sagittis nisi id tortor tempus, non tempor mi pharetra. Cras id enim eros."
        />
        <ItemCard
          image={bnb3}
          title="Coastal place"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer convallis tempor eros eget eleifend. Donec pharetra nec est eu fermentum. Duis vel velit id lorem placerat molestie non at sapien. Fusce magna enim, volutpat eu suscipit nec, elementum quis neque. Etiam sagittis nisi id tortor tempus, non tempor mi pharetra. Cras id enim eros."
        />
      </ItemGallery>
      <ItemGallery title="Resorts" id="resorts">
        <ItemCard
          image={hotel1}
          title="Resort Blanc"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer convallis tempor eros eget eleifend. Donec pharetra nec est eu fermentum. Duis vel velit id lorem placerat molestie non at sapien. Fusce magna enim, volutpat eu suscipit nec, elementum quis neque. Etiam sagittis nisi id tortor tempus, non tempor mi pharetra. Cras id enim eros."
        />
        <ItemCard
          image={hotel2}
          title="Irish Resort"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer convallis tempor eros eget eleifend. Donec pharetra nec est eu fermentum. Duis vel velit id lorem placerat molestie non at sapien. Fusce magna enim, volutpat eu suscipit nec, elementum quis neque. Etiam sagittis nisi id tortor tempus, non tempor mi pharetra. Cras id enim eros."
        />
      </ItemGallery>
      <ItemGallery title="Bundles" id="bundles">
        <ItemCard
          image={bundle1}
          title="2 night Cruise & Local Resort"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer convallis tempor eros eget eleifend. Donec pharetra nec est eu fermentum. Duis vel velit id lorem placerat molestie non at sapien. Fusce magna enim, volutpat eu suscipit nec, elementum quis neque. Etiam sagittis nisi id tortor tempus, non tempor mi pharetra. Cras id enim eros."
        />
        <ItemCard
          image={bundle2}
          title=" Beach Glamping (Offer)"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer convallis tempor eros eget eleifend. Donec pharetra nec est eu fermentum. Duis vel velit id lorem placerat molestie non at sapien. Fusce magna enim, volutpat eu suscipit nec, elementum quis neque. Etiam sagittis nisi id tortor tempus, non tempor mi pharetra. Cras id enim eros."
        />
      </ItemGallery>
    </div>
  );
};
export default HotelsPage;
