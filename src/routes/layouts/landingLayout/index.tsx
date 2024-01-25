import { FC } from "react";
import { Outlet } from "react-router-dom";
import LandingImg from "../../../assets/images/landingHero.jpg";
import Footer from "../../../components/misc/footer";
import Navbar from "../../../components/navigation/navbar";
import siteMap from "../../sitemap.json";
const LandingLayout: FC = () => {
  return (
    <>
      <header>
        <img src={LandingImg} className=" max-h-[600px] w-full object-center object-cover opaque" />
        <nav className="absolute top-0 left-0 right-0 from-black/30 to-transparent bg-gradient-to-b h-64 font-signika">
          <h1 className="text-6xl text-center pt-4 font-bold text-white">Taniti</h1>
          <Navbar links={siteMap} />
          <div className="layout-sizing rounded-sm my-24 p-6 text-white">
            <h2 className="text-5xl font-light">Discover Endless Horizons</h2>
            <p className="max-w-[60ch] text-xl mt-4">
              Feel the soft grains of pristine beaches beneath your feet, as palm trees sway in
              harmony with the rhythm of the ocean. Our island paradise is a canvas painted with
              nature's finest strokes.
            </p>
          </div>
        </nav>
      </header>
      <main className="layout-sizing min-h-screen p-6">
        <Outlet />
      </main>
      <footer className="bg-teal-950">
        <div className="layout-sizing p-6">
          <Footer />
        </div>
      </footer>
    </>
  );
};
export default LandingLayout;
