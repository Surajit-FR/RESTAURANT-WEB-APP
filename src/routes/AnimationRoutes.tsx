import { useLocation } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import Index from "../pages/Index";
import MenuListCollapse from "../pages/others/MenuListCollapse";
import MenuListNavigation from "../pages/others/MenuListNavigation";
import MenuGridCollapse from "../pages/others/MenuGridCollapse";
import MenuGridNavigation from "../pages/others/MenuGridNavigation";
import PageOffer from "../components/core/PageOffer";
import About from "../pages/others/About";
import Service from "../pages/others/Service";
import Review from "../pages/others/Review";
import BookTable from "../pages/others/BookTable";
import Contant from "../pages/others/Contant";
import FAQ from "../pages/others/FAQ";
import OfferSingle from "../pages/others/OfferSingle";
import ProductPage from "../pages/others/ProductPage";
import Gallery from "../pages/others/Gallery";
import Checkout from "../pages/others/Checkout";
import Confirmation from "../pages/others/Confirmation";
import Blogs from "../pages/others/Blogs";
import BlogPost from "../pages/others/BlogPost";
import BlogSlider from "../pages/others/BlogSlider";
import { RouteData } from "../config/DataTypesInterface.config";


// Define your route data as an array of objects
const routesData: RouteData[] = [
    { path: "/", component: <Index /> },
    { path: "/menu/list/collapse", component: <MenuListCollapse /> },
    { path: "/menu/list/navigation", component: <MenuListNavigation /> },
    { path: "/menu/grid/collapse", component: <MenuGridCollapse /> },
    { path: "/menu/grid/navigation", component: <MenuGridNavigation /> },
    { path: "/page/offers", component: <PageOffer /> },
    { path: "/page/about", component: <About /> },
    { path: "/page/service", component: <Service /> },
    { path: "/page/reviews", component: <Review /> },
    { path: "/page/gallery", component: <Gallery /> },
    { path: "/page/book/table", component: <BookTable /> },
    { path: "/page/contact", component: <Contant /> },
    { path: "/page/faq", component: <FAQ /> },
    { path: "/page/offer/single", component: <OfferSingle /> },
    { path: "/page/product", component: <ProductPage /> },
    { path: "/page/checkout", component: <Checkout /> },
    { path: "/page/confirmation", component: <Confirmation /> },
    { path: "/page/blogs", component: <Blogs /> },
    { path: "/page/blog/post", component: <BlogPost /> },
    { path: "/page/blog/slider", component: <BlogSlider /> }
];

const AnimationRoutes = (): JSX.Element => {
    const location = useLocation();
    return (
        <>
            <AnimatePresence>
                <Routes location={location} key={location.pathname}>
                    {routesData?.map(route => (
                        <Route key={route?.path} path={route?.path} element={route?.component} />
                    ))}
                </Routes>
            </AnimatePresence>
        </>
    );
};

export default AnimationRoutes;