import { Link } from "react-router-dom";
import Slider from "react-slick";
import { useRef, useState } from "react";
import ProductModal from "../../../utils/ProductModal";

const SectionMain = (): JSX.Element => {
    const [page, setPage] = useState<string>("SectionMain");

    const slider1 = useRef<Slider>(null);
    const slider2 = useRef<Slider>(null);

    const autoplaySettings = {
        autoplay: true,
        autoplaySpeed: 3000
    };

    const settings1 = {
        ...autoplaySettings,
        dots: true,
        infinite: true,
        speed: 800,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        ref: slider1
    };

    const settings2 = {
        ...autoplaySettings,
        infinite: true,
        speed: 800,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        ref: slider2
    };

    const goToPrevSlide = () => {
        slider1.current?.slickPrev();
        slider2.current?.slickPrev();
    };

    const goToNextSlide = () => {
        slider1.current?.slickNext();
        slider2.current?.slickNext();
    };

    return (
        <>
            {/* <!-- Section - Main --> */}
            <section className="section section-main section-main-1 bg-light">

                <div className="container dark">
                    <div className="slide-container">
                        <div id="section-main-1-carousel-image" className="image inner-controls">
                            <Slider {...settings1}>
                                <div className="slide">
                                    <div className="bg-image"><img src="/assets/img/slider-pasta.jpg"
                                        alt="" /></div>
                                </div>
                                <div className="slide">
                                    <div className="bg-image"><img
                                        src="/assets/img/slider-burger.jpg" alt="" /></div>
                                </div>
                                <div className="slide">
                                    <div className="bg-image"><img
                                        src="/assets/img/slider-dessert.jpg" alt="" /></div>
                                </div>
                            </Slider>
                        </div>

                        <div className="content dark">
                            <div id="section-main-1-carousel-content">
                                <Slider {...settings2}>
                                    <div className="content-inner">
                                        <h4 className="text-muted">New product!</h4>
                                        <h1>Boscaiola Pasta</h1>
                                        <div className="btn-group">
                                            <button className="btn btn-outline-primary btn-lg" data-bs-toggle="modal" data-bs-target={`#exampleModal${page}`} onClick={() => setPage('SectionMain')}><span>Add to cart</span></button>
                                            <span className="price price-lg">from $9.98</span>
                                        </div>
                                    </div>
                                    <div className="content-inner">
                                        <h1>Get 10% off coupon</h1>
                                        <h5 className="text-muted mb-5">and use it with your next order!</h5>
                                        <Link to="/page/offers" className="btn btn-outline-primary btn-lg"><span>Get it
                                            now!</span></Link>
                                    </div>
                                    <div className="content-inner">
                                        <h1>Delicious Desserts</h1>
                                        <h5 className="text-muted mb-5">Order it online even now!</h5>
                                        <Link to="/menu/list/collapse" className="btn btn-outline-primary btn-lg"><span>Order
                                            now!</span></Link>
                                    </div>
                                </Slider>
                            </div>
                            <nav className="content-nav">
                                <Link to="#!" className="prev" onClick={goToPrevSlide}><i className="ti ti-arrow-left"></i></Link>
                                <Link to="#!" className="next" onClick={goToNextSlide}><i className="ti ti-arrow-right"></i></Link>
                            </nav>
                        </div>
                    </div>
                </div>

            </section >

            <ProductModal
                page={page}
            />
        </>
    )
}

export default SectionMain;