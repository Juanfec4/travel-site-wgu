import { FC, useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Footer from "../../../components/misc/footer";
import Navbar from "../../../components/navigation/navbar";
import siteMap from "../../sitemap.json";
const ContentLayout: FC = () => {
  //Scroll
  const location = useLocation();
  useEffect(() => {
    const hash = location.hash.substring(1);
    if (hash) {
      const section = document.getElementById(hash);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  return (
    <>
      <header>
        <nav className="bg-teal-800">
          <h1 className="text-6xl text-center pt-4 font-bold text-white">Taniti</h1>
          <Navbar links={siteMap} />
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
export default ContentLayout;
