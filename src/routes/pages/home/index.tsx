import { FC } from "react";
import PlaceCard from "../../../components/cards/placeCard";
import PlaceGallery from "../../../components/galleries/placeGallery";

import { IconChevronRight } from "@tabler/icons-react";
import { useNavigate } from "react-router-dom";
import place4 from "../../../assets/images/bosque-oculto.jpg";
import place8 from "../../../assets/images/coral-dorado.jpg";
import place7 from "../../../assets/images/fresh-food.jpg";
import place3 from "../../../assets/images/local-city.jpg";
import place6 from "../../../assets/images/local-hotel.jpg";
import place2 from "../../../assets/images/mount-vauxlita.jpg";
import place9 from "../../../assets/images/paradise-pearl.jpg";
import place1 from "../../../assets/images/playa-vieja.jpg";
import place5 from "../../../assets/images/snorkeling.jpg";
import SecondaryButton from "../../../components/buttons/secondaryButton";
import CallToAction from "../../../components/cards/callToAction";
import TestimonialCard from "../../../components/cards/testimonialCard";

const HomePage: FC = () => {
  const navigator = useNavigate();
  return (
    <div>
      <section>
        <h1 className="section-title">About the Island</h1>
        <p className=" font-signika tracking-wide text-gray-700">
          Taniti is a small, tropical island in the Pacific. While the island has an area of less
          than 500 square miles, the terrain is varied and includes both sandy and rocky beaches, a
          small but safe harbor, lush tropical rainforests, and a mountainous interior that includes
          a small, active volcano. Taniti has an indigenous population of about 20,000. Until a
          recent increase in tourism, most the Tanitian economy was dominated by fishing or
          agriculture.
        </p>
        <p className=" font-signika tracking-wide text-gray-700 mt-6">
          Most tourists spend most of their time in Taniti City, which boasts native architecture
          and nearby white, sandy beaches that encircle Yellow Leaf Bay. Other popular activities
          include boat or bus tours of the island, hikes in the rainforest, or visits to Taniti’s
          active volcano.
        </p>
      </section>
      <section className="my-16">
        <h1 className="section-title">Explore Taniti</h1>
        <PlaceGallery>
          <PlaceCard title="Playa Vieja" img={place1} description="A beautiful paradise." />
          <PlaceCard
            title="Mount Vauxlita"
            img={place2}
            description="Oldest known volcano in the Pacific."
          />
          <PlaceCard
            title="Costa Coral"
            img={place3}
            description="Experience the rich Pacific culture."
          />
          <PlaceCard title="Bosque Oculto" img={place4} description="Explore local wonders." />
          <PlaceCard
            title="Emerald Club"
            img={place6}
            description="Relax and enjoy the best service."
          />
          <PlaceCard
            title="Arrecife"
            img={place5}
            description="Snorkel and learn local fishing techniques."
          />
          <PlaceCard
            title="Playa Langosta"
            img={place7}
            description="Visit the local food market."
          />
          <PlaceCard
            title="Coral Dorado"
            img={place8}
            description="Helicopter rides, and exploring activities."
          />
          <PlaceCard
            title="Yellow Leaf Bay"
            img={place9}
            description="Each moment feels like a sip of paradise."
          />
        </PlaceGallery>
      </section>
      <section>
        <TestimonialCard />
      </section>
      <section className="my-16">
        <CallToAction
          title="Embark on Your Tropical Escape"
          text="Discover a world where tranquility meets adventure, and every moment is a canvas of serenity. Your paradise awaits – immerse yourself in the ultimate getaway."
          button={
            <SecondaryButton
              text="Explore Now"
              onClick={() => navigator("/travel-guide")}
              Icon={IconChevronRight}
            />
          }
        />
      </section>
    </div>
  );
};
export default HomePage;
