import { useEffect, useRef, useState } from "react";
import { HashLink } from "react-router-hash-link";
import Slider from "react-slick";

const PageContent = (): JSX.Element => {
    const [nav1, setNav1] = useState<Slider | undefined>(undefined);
    const [nav2, setNav2] = useState<Slider | undefined>(undefined);
    const sliderRef1 = useRef<Slider>(null);
    const sliderRef2 = useRef<Slider>(null);

    useEffect(() => {
        if (sliderRef1.current && sliderRef2.current) {
            setNav1(sliderRef1.current);
            setNav2(sliderRef2.current);
        }
    }, []);

    return (
        <>
            <section id="gallery" className="section section-gallery cover">
                <div className="gallery-carousel inner-controls">

                    {/* <!-- Gallery Carousel --> */}
                    <Slider asNavFor={nav2} ref={sliderRef1}>
                        <div className="slide">
                            <div className="bg-image bg-parallax">
                                <img src="http://assets.suelo.pl/soup/img/gallery/gallery01.jpg" alt="" />
                            </div>
                        </div>
                        <div className="slide">
                            <div className="bg-image bg-parallax">
                                <img src="http://assets.suelo.pl/soup/img/gallery/gallery02.jpg" alt="" />
                            </div>
                        </div>
                        <div className="slide">
                            <div className="bg-image bg-parallax">
                                <img src="http://assets.suelo.pl/soup/img/gallery/gallery03.jpg" alt="" />
                            </div>
                        </div>
                        <div className="slide">
                            <div className="bg-image bg-parallax">
                                <img src="http://assets.suelo.pl/soup/img/gallery/gallery04.jpg" alt="" />
                            </div>
                        </div>
                        <div className="slide">
                            <div className="bg-image bg-parallax">
                                <img src="http://assets.suelo.pl/soup/img/gallery/gallery05.jpg" alt="" />
                            </div>
                        </div>
                    </Slider>
                </div>

                {/* <!-- Gallery Carousel Nav --> */}
                <div className="gallery-nav">
                    <Slider
                        asNavFor={nav1}
                        ref={sliderRef2}
                        slidesToShow={3}
                        swipeToSlide={true}
                        focusOnSelect={true}
                    >
                        <img src="http://assets.suelo.pl/soup/img/gallery/gallery01-min.jpg" alt="" />
                        <img src="http://assets.suelo.pl/soup/img/gallery/gallery02-min.jpg" alt="" />
                        <img src="http://assets.suelo.pl/soup/img/gallery/gallery03-min.jpg" alt="" />
                        <img src="http://assets.suelo.pl/soup/img/gallery/gallery04-min.jpg" alt="" />
                        <img src="http://assets.suelo.pl/soup/img/gallery/gallery05-min.jpg" alt="" />
                    </Slider>
                </div>

                <div className="set-fullscreen" data-local-scroll>
                    <HashLink to="#gallery"><i className="ti ti-fullscreen"></i></HashLink>
                </div>
            </section>
        </>
    )
}

export default PageContent;