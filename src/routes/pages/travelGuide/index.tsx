import { FC } from "react";
import ItemCard from "../../../components/cards/itemCard";

import ItemGallery from "../../../components/galleries/itemGallery";

import place4 from "../../../assets/images/bosque-oculto.jpg";
import place8 from "../../../assets/images/coral-dorado.jpg";
import place3 from "../../../assets/images/local-city.jpg";
import place6 from "../../../assets/images/local-hotel.jpg";
import place2 from "../../../assets/images/mount-vauxlita.jpg";
import place9 from "../../../assets/images/paradise-pearl.jpg";
import place1 from "../../../assets/images/playa-vieja.jpg";

import place7 from "../../../assets/images/fresh-food.jpg";
import place5 from "../../../assets/images/snorkeling.jpg";

const TravelGuidePage: FC = () => {
  return (
    <div>
      <h1 className="page-title">Travel Guide</h1>
      <p className="text-xl font-thin tracking-wide text-gray-700">
        Most people visit Taniti to enjoy the beaches, explore the rainforest, and to visit the
        volcano. However, there are other things to do, including visiting a local history museum,
        going on chartered fishing tours, snorkeling, zip-lining in the rainforest, visiting several
        pubs, including a microbrewery, dancing at a new dance club, seeing a movie, taking
        helicopter rides, playing at an arcade, visiting art galleries, and bowling. Also, a
        nine-hole golf course should be operational by next year. Many of these activities are
        located in Merriton Landing, which is a rapidly developing area on the north side of Yellow
        Leaf Bay.
      </p>

      <ItemGallery title="For Explorers" id="for-explorers">
        <ItemCard
          image={place2}
          title="Mount Vauzlita Volcano"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer convallis tempor eros eget eleifend. Donec pharetra nec est eu fermentum. Duis vel velit id lorem placerat molestie non at sapien. Fusce magna enim, volutpat eu suscipit nec, elementum quis neque. Etiam sagittis nisi id tortor tempus, non tempor mi pharetra. Cras id enim eros."
        />
        <ItemCard
          image={place4}
          title="Bosque Oculto"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer convallis tempor eros eget eleifend. Donec pharetra nec est eu fermentum. Duis vel velit id lorem placerat molestie non at sapien. Fusce magna enim, volutpat eu suscipit nec, elementum quis neque. Etiam sagittis nisi id tortor tempus, non tempor mi pharetra. Cras id enim eros."
        />
        <ItemCard
          image={place8}
          title="Coral Dorado - Day Trip"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer convallis tempor eros eget eleifend. Donec pharetra nec est eu fermentum. Duis vel velit id lorem placerat molestie non at sapien. Fusce magna enim, volutpat eu suscipit nec, elementum quis neque. Etiam sagittis nisi id tortor tempus, non tempor mi pharetra. Cras id enim eros."
        />
      </ItemGallery>
      <ItemGallery title="Relaxing Days" id="relaxing-days">
        <ItemCard
          image={place9}
          title="Paradise Pearl"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer convallis tempor eros eget eleifend. Donec pharetra nec est eu fermentum. Duis vel velit id lorem placerat molestie non at sapien. Fusce magna enim, volutpat eu suscipit nec, elementum quis neque. Etiam sagittis nisi id tortor tempus, non tempor mi pharetra. Cras id enim eros."
        />
        <ItemCard
          image={place1}
          title="Playa Vieja"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer convallis tempor eros eget eleifend. Donec pharetra nec est eu fermentum. Duis vel velit id lorem placerat molestie non at sapien. Fusce magna enim, volutpat eu suscipit nec, elementum quis neque. Etiam sagittis nisi id tortor tempus, non tempor mi pharetra. Cras id enim eros."
        />
        <ItemCard
          image={place6}
          title="Emerald Club"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer convallis tempor eros eget eleifend. Donec pharetra nec est eu fermentum. Duis vel velit id lorem placerat molestie non at sapien. Fusce magna enim, volutpat eu suscipit nec, elementum quis neque. Etiam sagittis nisi id tortor tempus, non tempor mi pharetra. Cras id enim eros."
        />
      </ItemGallery>
      <ItemGallery title="Family Retreats" id="family-retreats">
        <ItemCard
          image={place3}
          title="Costa Coral Golfing"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer convallis tempor eros eget eleifend. Donec pharetra nec est eu fermentum. Duis vel velit id lorem placerat molestie non at sapien. Fusce magna enim, volutpat eu suscipit nec, elementum quis neque. Etiam sagittis nisi id tortor tempus, non tempor mi pharetra. Cras id enim eros."
        />
        <ItemCard
          image={place5}
          title="Family Snorkeling"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer convallis tempor eros eget eleifend. Donec pharetra nec est eu fermentum. Duis vel velit id lorem placerat molestie non at sapien. Fusce magna enim, volutpat eu suscipit nec, elementum quis neque. Etiam sagittis nisi id tortor tempus, non tempor mi pharetra. Cras id enim eros."
        />
        <ItemCard
          image={place7}
          title="Food Classics"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer convallis tempor eros eget eleifend. Donec pharetra nec est eu fermentum. Duis vel velit id lorem placerat molestie non at sapien. Fusce magna enim, volutpat eu suscipit nec, elementum quis neque. Etiam sagittis nisi id tortor tempus, non tempor mi pharetra. Cras id enim eros."
        />
      </ItemGallery>
    </div>
  );
};
export default TravelGuidePage;
