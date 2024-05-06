import React, { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';

const SectionAbout = (): JSX.Element => {
    const [isVisible, setIsVisible] = useState(false);
    const [isTopVisible, setIsTopVisible] = useState(false);
    const [isBottomVisible, setIsBottomVisible] = useState(false);
    const controlsTop = useAnimation();
    const controlsBottom = useAnimation();

    const handleScroll = () => {
        const section = document.getElementById('about-section');
        if (section) {
            const sectionTop = section.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            if (sectionTop < windowHeight * 0.75) {
                setIsVisible(true);
            }
            if (sectionTop < windowHeight * 0.5) {
                setIsTopVisible(true);
            }
            if (sectionTop < windowHeight * 0.25) {
                setIsBottomVisible(true);
            }
        }
    };

    // Add event listener for scroll on component mount
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [isVisible]);

    useEffect(() => {
        if (isTopVisible) {
            controlsTop.start({ opacity: 1, x: 0 });
        }
    }, [isTopVisible, controlsTop]);

    useEffect(() => {
        if (isBottomVisible) {
            controlsBottom.start({ opacity: 1, x: 0 });
        }
    }, [isBottomVisible, controlsBottom]);

    return (
        <section id="about-section" className="section section-bg-edge">
            <div className="image right col-md-6 offset-md-6">
                <div className="bg-image"><img src="/assets/img/bg-food.jpg" alt="" /></div>
            </div>
            <div className="container">
                <div className="col-lg-5 col-md-9">
                    {/* First blockquote */}
                    <motion.blockquote
                        className="blockquote light"
                        animate={controlsTop}
                        initial={{ opacity: 0, x: -20 }}
                        transition={{ delay: 0.2 }}
                        style={{ marginRight: "80px" }}
                    >
                        <div className="blockquote-content">
                            <div className="rate rate-sm mb-3">
                                <i className="fa fa-star active"></i>
                                <i className="fa fa-star active"></i>
                                <i className="fa fa-star active"></i>
                                <i className="fa fa-star active"></i>
                                <i className="fa fa-star"></i>
                            </div>
                            <p>It was an amazing feeling for my belly!</p>
                        </div>
                        <footer>
                            <img src="/assets/img/avatar02.jpg" alt="" />
                            <span className="name">Mark Johnson<span className="text-muted">, Google</span></span>
                        </footer>
                    </motion.blockquote>
                    {/* Second blockquote */}
                    <motion.blockquote
                        className="blockquote"
                        animate={controlsBottom}
                        initial={{ opacity: 0, x: 20 }}
                        transition={{ delay: 0.2 }}
                        style={{ marginLeft: "80px" }}
                    >
                        <div className="blockquote-content dark">
                            <div className="rate rate-sm mb-3">
                                <i className="fa fa-star active"></i>
                                <i className="fa fa-star active"></i>
                                <i className="fa fa-star active"></i>
                                <i className="fa fa-star active"></i>
                                <i className="fa fa-star"></i>
                            </div>
                            <p>Great food and great atmosphere!</p>
                        </div>
                        <footer>
                            <img src="/assets/img/avatar01.jpg" alt="" />
                            <span className="name">Kate Hudson<span className="text-muted">, LinkedIn</span></span>
                        </footer>
                    </motion.blockquote>
                </div>
            </div>
        </section>
    );
};

export default SectionAbout;