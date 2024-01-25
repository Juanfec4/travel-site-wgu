import { createBrowserRouter } from "react-router-dom";
import ContentLayout from "./layouts/contentLayout";
import LandingLayout from "./layouts/landingLayout";
import FoodPage from "./pages/food";
import HomePage from "./pages/home";
import HotelsPage from "./pages/hotels";
import TransportationPage from "./pages/transportation";
import TravelGuidePage from "./pages/travelGuide";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingLayout />,
    children: [{ path: "/", element: <HomePage /> }],
  },
  {
    path: "/hotels",
    element: <ContentLayout />,
    children: [
      {
        path: "/hotels",
        element: <HotelsPage />,
      },
    ],
  },
  {
    path: "/food",
    element: <ContentLayout />,
    children: [
      {
        path: "/food",
        element: <FoodPage />,
      },
    ],
  },
  {
    path: "/transportation",
    element: <ContentLayout />,
    children: [
      {
        path: "/transportation",
        element: <TransportationPage />,
      },
    ],
  },
  {
    path: "/travel-guide",
    element: <ContentLayout />,
    children: [
      {
        path: "/travel-guide",
        element: <TravelGuidePage />,
      },
    ],
  },
]);

export default router;
