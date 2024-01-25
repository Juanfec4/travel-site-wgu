import { FC } from "react";
import ItemCard from "../../../components/cards/itemCard";

import local2 from "../../../assets/images/fried-fish.jpg";
import local1 from "../../../assets/images/rice-fish.jpg";

import international1 from "../../../assets/images/SAI-fish.jpg";
import international2 from "../../../assets/images/joey-bbq.jpg";

import grocery2 from "../../../assets/images/antojitos.jpg";
import grocery1 from "../../../assets/images/fresh-market.jpg";

import ItemGallery from "../../../components/galleries/itemGallery";

const FoodPage: FC = () => {
  return (
    <div>
      <h1 className="page-title">Food</h1>
      <p className="text-xl font-thin tracking-wide text-gray-700">
        Taniti currently has 10 restaurants: five serve mostly local fish and rice, three serve
        American-style meals, and two serve Pan-Asian cuisine. Taniti has two supermarkets, two
        smaller grocery stores, and one convenience store that is open 24 hours a day.
      </p>
      <ItemGallery title="Local Food" id="local-food">
        <ItemCard
          image={local1}
          title="Divina Food"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer convallis tempor eros eget eleifend. Donec pharetra nec est eu fermentum. Duis vel velit id lorem placerat molestie non at sapien. Fusce magna enim, volutpat eu suscipit nec, elementum quis neque. Etiam sagittis nisi id tortor tempus, non tempor mi pharetra. Cras id enim eros."
        />
        <ItemCard
          image={local2}
          title="Tropica Eats"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer convallis tempor eros eget eleifend. Donec pharetra nec est eu fermentum. Duis vel velit id lorem placerat molestie non at sapien. Fusce magna enim, volutpat eu suscipit nec, elementum quis neque. Etiam sagittis nisi id tortor tempus, non tempor mi pharetra. Cras id enim eros."
        />
      </ItemGallery>
      <ItemGallery title="International Food" id="international">
        <ItemCard
          image={international1}
          title="SAI Fish & Ships"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer convallis tempor eros eget eleifend. Donec pharetra nec est eu fermentum. Duis vel velit id lorem placerat molestie non at sapien. Fusce magna enim, volutpat eu suscipit nec, elementum quis neque. Etiam sagittis nisi id tortor tempus, non tempor mi pharetra. Cras id enim eros."
        />
        <ItemCard
          image={international2}
          title="Joey's BBQ"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer convallis tempor eros eget eleifend. Donec pharetra nec est eu fermentum. Duis vel velit id lorem placerat molestie non at sapien. Fusce magna enim, volutpat eu suscipit nec, elementum quis neque. Etiam sagittis nisi id tortor tempus, non tempor mi pharetra. Cras id enim eros."
        />
      </ItemGallery>
      <ItemGallery title="Grocery Stores" id="groceries">
        <ItemCard
          image={grocery1}
          title="Fresh Market"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer convallis tempor eros eget eleifend. Donec pharetra nec est eu fermentum. Duis vel velit id lorem placerat molestie non at sapien. Fusce magna enim, volutpat eu suscipit nec, elementum quis neque. Etiam sagittis nisi id tortor tempus, non tempor mi pharetra. Cras id enim eros."
        />
        <ItemCard
          image={grocery2}
          title="Antojitos"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer convallis tempor eros eget eleifend. Donec pharetra nec est eu fermentum. Duis vel velit id lorem placerat molestie non at sapien. Fusce magna enim, volutpat eu suscipit nec, elementum quis neque. Etiam sagittis nisi id tortor tempus, non tempor mi pharetra. Cras id enim eros."
        />
      </ItemGallery>
    </div>
  );
};
export default FoodPage;
