import { motion } from "framer-motion";

const BookTable = (): JSX.Element => {

    return (
        <>
            <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "100%", opacity: 1 }}
                exit={{ opacity: 0, y: -window.innerHeight }} // Fade out instantly
                transition={{ duration: 1 }} // Opacity transitions over 1 second, y movement is instant
            >
                {/* <!-- Section --> */}
                <section className="section section-lg bg-dark">

                    {/* <!-- Video BG --> */}

                    {/* <!-- BG Video --> */}
                    <div className="bg-video dark-overlay" data-src="http://assets.suelo.pl/soup/video/video_3.mp4" data-type="video/mp4"></div>

                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-6">
                                {/* <!-- Book a Table --> */}
                                <div className="utility-box">
                                    <div className="utility-box-title bg-dark dark">
                                        <div className="bg-image"><img src="http://assets.suelo.pl/soup/img/photos/modal-review.jpg" alt="" /></div>
                                        <div>
                                            <span className="icon icon-primary"><i className="ti ti-bookmark-alt"></i></span>
                                            <h4 className="mb-0">Book a table</h4>
                                            <p className="lead text-muted mb-0">Details about your reservation.</p>
                                        </div>
                                    </div>
                                    <form action="#" id="booking-form" className="booking-form" data-validate>
                                        <div className="utility-box-content">
                                            <div className="form-group">
                                                <label>Name and surename:</label>
                                                <input type="text" name="name" className="form-control" required />
                                            </div>
                                            <div className="form-group">
                                                <label>E-mail:</label>
                                                <input type="email" name="email" className="form-control" required />
                                            </div>
                                            <div className="form-group">
                                                <label>Phone:</label>
                                                <input type="text" name="phone" className="form-control" required />
                                            </div>
                                            <div className="row">
                                                <div className="col-sm-6">
                                                    <div className="form-group">
                                                        <label>Date:</label>
                                                        <input type="date" name="date" className="form-control" required />
                                                    </div>
                                                </div>
                                                <div className="col-sm-6">
                                                    <div className="form-group">
                                                        <label>Attendens:</label>
                                                        <input type="number" name="attendents" min="1" className="form-control" required />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <button className="utility-box-btn btn btn-secondary btn-block btn-lg btn-submit" type="submit">
                                            <span className="description">Make reservation!</span>
                                            <span className="success">
                                                <svg x="0px" y="0px" viewBox="0 0 32 32"><path strokeDasharray="19.79 19.79" strokeDashoffset="19.79" fill="none" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="square" strokeMiterlimit="10" d="M9,17l3.9,3.9c0.1,0.1,0.2,0.1,0.3,0L23,11" /></svg>
                                            </span>
                                            <span className="error">Try again...</span>
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>

                </section>
            </motion.div>
        </>
    )
}

export default BookTable