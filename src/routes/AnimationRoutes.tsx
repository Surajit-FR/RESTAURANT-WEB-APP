import { useLocation } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import Index from "../pages/Index";
import MenuListCollapse from "../pages/others/MenuListCollapse";
import { AnimatePresence } from "framer-motion";
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
import MenuListNavigation from "../pages/others/MenuListNavigation";
import MenuGridNavigation from "../pages/others/MenuGridNavigation";

const AnimationRoutes = (): JSX.Element => {
    const location = useLocation();
    return (
        <>
            <AnimatePresence>
                <Routes location={location} key={location.pathname}>
                    <Route path="/" element={<Index />} />
                    <Route path="/menu/list/collapse" element={<MenuListCollapse />} />
                    <Route path="/menu/list/navigation" element={<MenuListNavigation />} />
                    <Route path="/menu/grid/navigation" element={<MenuGridNavigation />} />
                    <Route path="/page/offers" element={<PageOffer />} />
                    <Route path="/page/about" element={<About />} />
                    <Route path="/page/service" element={<Service />} />
                    <Route path="/page/reviews" element={<Review />} />
                    <Route path="/page/gallery" element={<Gallery />} />
                    <Route path="/page/book/table" element={<BookTable />} />
                    <Route path="/page/contact" element={<Contant />} />
                    <Route path="/page/faq" element={<FAQ />} />
                    <Route path="/page/offer/single" element={<OfferSingle />} />
                    <Route path="/page/product" element={<ProductPage />} />
                    <Route path="/page/checkout" element={<Checkout />} />
                </Routes>
            </AnimatePresence>
        </>
    )
}

export default AnimationRoutes