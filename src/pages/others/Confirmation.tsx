import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Confirmation = () => {
    return (
        <>
            <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "100%", opacity: 1 }}
                exit={{ opacity: 0, y: -window.innerHeight }} // Fade out instantly
                transition={{ duration: 1 }} // Opacity transitions over 1 second, y movement is instant
            >
                {/* <!-- Section --> */}
                <section className="section bg-light">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8 offset-lg-4">
                                <span className="icon icon-xl icon-success"><i className="ti ti-check-box"></i></span>
                                <h1 className="mb-2">Thank you for your order!</h1>
                                <h4 className="text-muted mb-5">You will recieve it in 30 minutes.</h4>
                                <Link to="/menu/list/navigation" className="btn btn-outline-secondary"><span>Go back to
                                    menu</span></Link>
                            </div>
                        </div>
                    </div>
                </section>
            </motion.div>
        </>
    )
}

export default Confirmation