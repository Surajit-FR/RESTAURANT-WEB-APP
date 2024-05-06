import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import BottomSection from "../../components/common/BottomSection";

const OfferSingle = () => {
    return (
        <>
            <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "100%", opacity: 1 }}
                exit={{ opacity: 0, y: -window.innerHeight }} // Fade out instantly
                transition={{ duration: 1 }} // Opacity transitions over 1 second, y movement is instant
            >
                {/* <!-- Section --> */}
                <section className="section section-double border-top">
                    <div className="row no-gutters flex-md-row-reverse">
                        <div className="content col-xl-4 col-md-5">
                            <h2>Free Small Pizza</h2>
                            <p className="lead text-muted">Praesent scelerisque mi ac bibendum tristique. Cras in magna a quam
                                molestie tincidunt nec vitae diam.</p>
                            <ul className="list-check text-lg">
                                <li>Only on Weekends</li>
                                <li className="false">Order higher that $40</li>
                            </ul>
                            <Link to="/checkout" className="btn btn-outline-primary"><span>Go to checkout!</span></Link>
                            <Link to="/" className="btn btn-link"><span>Back</span></Link>
                        </div>
                        <div className="image col-xl-8 col-md-7">
                            <div className="bg-image"><img src="http://assets.suelo.pl/soup/img/photos/offer-single.jpg" alt="" />
                            </div>
                        </div>
                    </div>
                </section>

                {/* <!-- Section --> */}
                <BottomSection />

            </motion.div>
        </>
    )
}

export default OfferSingle