import { FC } from "react";

const TestimonialCard: FC = () => {
  return (
    <section className="">
      <div className="max-w-screen-xl mx-auto text-center mb-16">
        <figure className="max-w-screen-md mx-auto">
          <svg
            className="h-12 mx-auto mb-3 text-teal-600/50 "
            viewBox="0 0 24 27"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z"
              fill="currentColor"
            />
          </svg>
          <blockquote>
            <p className="tracking-wide font-normal text-gray-700 ">
              "Taniti is a hidden gem in the Pacific! The moment we set foot on its shores, we were
              enchanted by the breathtaking landscapes, friendly locals, and a plethora of
              activities. The pristine beaches, coupled with the rich culture, made our stay
              unforgettable. The island's diverse culinary scene, from local delicacies to
              international flavors, added a delightful touch to our experience. We can't wait to
              return and explore more of Taniti's wonders!"
            </p>
          </blockquote>
          <figcaption className="flex items-center justify-center mt-6 space-x-3">
            <div className="flex items-center divide-x-2 divide-gray-500 ">
              <div className="pr-3 font-medium text-teal-600 ">Sarah and James</div>
              <div className="pl-3 text-sm font-light text-gray-500 italic ">
                Travel Enthusiasts
              </div>
            </div>
          </figcaption>
        </figure>
      </div>
    </section>
  );
};

export default TestimonialCard;
