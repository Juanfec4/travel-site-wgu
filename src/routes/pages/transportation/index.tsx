import { FC } from "react";
import ItemCard from "../../../components/cards/itemCard";

import local2 from "../../../assets/images/beach-bike.jpg";
import local3 from "../../../assets/images/bus.jpg";
import local1 from "../../../assets/images/taxi.jpg";

import international1 from "../../../assets/images/cruise-dock.jpg";
import international2 from "../../../assets/images/small-plane.jpg";

import ItemGallery from "../../../components/galleries/itemGallery";

const TransportationPage: FC = () => {
  return (
    <div>
      <h1 className="page-title">Transportation</h1>
      <p className="text-xl font-thin tracking-wide text-gray-700 mb-32">
        Taniti has a wide variety of lodging that ranges from an inexpensive hostel to one large,
        four-star resort. There are many small, family-owned hotels and a growing number of bed and
        breakfasts. All types of lodging are strictly regulated and regularly inspected by the
        Tanitian government.
      </p>
      <section id="international-transport">
        <h1 className="section-title">Arrive to Taniti</h1>
        <p className="text-xl font-thin tracking-wide text-gray-700">
          Embark on your journey to Taniti, where seamless travel experiences await. While the
          majority of our visitors arrive via air, with convenient access through our small yet
          efficient airport catering to various aircraft sizes, we also extend a warm welcome to
          those seeking a nautical adventure. Discover the enchantment of Taniti through our weekly
          docking of small cruise ships in the picturesque Yellow Leaf Bay, offering a unique and
          tranquil introduction to our tropical paradise. As we continue to grow, our ongoing
          airport expansion project ensures that in the coming years, larger jets will effortlessly
          bring you to the heart of this idyllic island oasis.
        </p>
      </section>
      <ItemGallery title="" id="">
        <ItemCard
          image={international1}
          title="Cruisely"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer convallis tempor eros eget eleifend. Donec pharetra nec est eu fermentum. Duis vel velit id lorem placerat molestie non at sapien. Fusce magna enim, volutpat eu suscipit nec, elementum quis neque. Etiam sagittis nisi id tortor tempus, non tempor mi pharetra. Cras id enim eros."
        />
        <ItemCard
          image={international2}
          title="Taniti City Regional Airport"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer convallis tempor eros eget eleifend. Donec pharetra nec est eu fermentum. Duis vel velit id lorem placerat molestie non at sapien. Fusce magna enim, volutpat eu suscipit nec, elementum quis neque. Etiam sagittis nisi id tortor tempus, non tempor mi pharetra. Cras id enim eros."
        />
      </ItemGallery>
      <section id="local-transport">
        <h1 className="section-title">Island Transportation</h1>
        <p className="text-xl font-thin tracking-wide text-gray-700">
          Public buses serve Taniti City and run from 5 a.m. to 11 p.m. every day. Private buses
          serve the rest of the island. Taxis are available in Taniti City, and rental cars can be
          rented from a local rental agency near the airport. Bikes and helmets are available to
          rent from several vendors (helmets are required by law). Taniti City is fairly flat and
          very walkable. Many tourists stay in the area surrounding Merriton Landing: this area is
          easy to explore on foot.
        </p>
      </section>
      <ItemGallery title="" id="">
        <ItemCard
          image={local1}
          title="Local taxi Service"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer convallis tempor eros eget eleifend. Donec pharetra nec est eu fermentum. Duis vel velit id lorem placerat molestie non at sapien. Fusce magna enim, volutpat eu suscipit nec, elementum quis neque. Etiam sagittis nisi id tortor tempus, non tempor mi pharetra. Cras id enim eros."
        />
        <ItemCard
          image={local2}
          title="Public Bikes"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer convallis tempor eros eget eleifend. Donec pharetra nec est eu fermentum. Duis vel velit id lorem placerat molestie non at sapien. Fusce magna enim, volutpat eu suscipit nec, elementum quis neque. Etiam sagittis nisi id tortor tempus, non tempor mi pharetra. Cras id enim eros."
        />
        <ItemCard
          image={local3}
          title="Bus Service"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer convallis tempor eros eget eleifend. Donec pharetra nec est eu fermentum. Duis vel velit id lorem placerat molestie non at sapien. Fusce magna enim, volutpat eu suscipit nec, elementum quis neque. Etiam sagittis nisi id tortor tempus, non tempor mi pharetra. Cras id enim eros."
        />
      </ItemGallery>
    </div>
  );
};
export default TransportationPage;
