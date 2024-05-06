import { motion } from "framer-motion";
import BottomSection from "../../components/common/BottomSection";

const ProductPage = () => {
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
                            <div className="col-lg-8 offset-lg-2">
                                {/* <!-- Product Single --> */}
                                <div className="product-single">
                                    <div className="product-image">
                                        <img src="http://assets.suelo.pl/soup/img/photos/product-single.jpg" alt="" />
                                    </div>
                                    <div className="product-content">
                                        <div className="product-header text-center">
                                            <h1 className="product-title">Angus Burger</h1>
                                            <span className="product-caption text-muted">Beef, cheese, potato, onion,
                                                fries</span>
                                        </div>
                                        <p className="lead">Nam eleifend elementum sapien et bibendum. Nunc ac diam efficitur,
                                            ultrices lorem quis, consectetur odio. Nullam vulputate, eros quis accumsan
                                            cursus, elit lectus bibendum nulla, sed dapibus ligula tellus at purus. Fusce id
                                            eros id mi cursus semper. Quisque efficitur bibendum nunc a consectetur.</p>
                                        <hr className="hr-primary" />
                                        <h5 className="text-center text-muted">Order details</h5>
                                        <div className="panel-details-container">
                                            {/* <!-- Panel Details / Size --> */}
                                            <div className="panel-details">
                                                <h5 className="panel-details-title">
                                                    <label className="custom-control custom-radio">
                                                        <input name="radio_title_size" type="radio"
                                                            className="custom-control-input" />
                                                        <span className="custom-control-indicator"></span>
                                                    </label>
                                                    <a href="#panelDetailsSize" data-toggle="collapse">Size</a>
                                                </h5>
                                                <div id="panelDetailsSize" className="collapse">
                                                    <div className="panel-details-content">
                                                        <div className="form-group">
                                                            <label className="custom-control custom-radio">
                                                                <input name="radio_size" type="radio"
                                                                    className="custom-control-input" checked />
                                                                <span className="custom-control-indicator"></span>
                                                                <span className="custom-control-description">Small - 100g
                                                                    ($9.99)</span>
                                                            </label>
                                                        </div>
                                                        <div className="form-group">
                                                            <label className="custom-control custom-radio">
                                                                <input name="radio_size" type="radio"
                                                                    className="custom-control-input" />
                                                                <span className="custom-control-indicator"></span>
                                                                <span className="custom-control-description">Medium - 200g
                                                                    ($14.99)</span>
                                                            </label>
                                                        </div>
                                                        <div className="form-group">
                                                            <label className="custom-control custom-radio">
                                                                <input name="radio_size" type="radio"
                                                                    className="custom-control-input" />
                                                                <span className="custom-control-indicator"></span>
                                                                <span className="custom-control-description">Large - 350g
                                                                    ($21.99)</span>
                                                            </label>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* <!-- Panel Details / Additions --> */}
                                            <div className="panel-details">
                                                <h5 className="panel-details-title">
                                                    <label className="custom-control custom-radio">
                                                        <input name="radio_title_additions" type="radio"
                                                            className="custom-control-input" />
                                                        <span className="custom-control-indicator"></span>
                                                    </label>
                                                    <a href="#panelDetailsAdditions" data-toggle="collapse">Additions</a>
                                                </h5>
                                                <div id="panelDetailsAdditions" className="collapse">
                                                    <div className="panel-details-content">
                                                        <div className="row">
                                                            <div className="col-sm-6">
                                                                <div className="form-group">
                                                                    <label className="custom-control custom-checkbox">
                                                                        <input type="checkbox" className="custom-control-input" />
                                                                        <span className="custom-control-indicator"></span>
                                                                        <span className="custom-control-description">Tomato
                                                                            ($1.29)</span>
                                                                    </label>
                                                                </div>
                                                                <div className="form-group">
                                                                    <label className="custom-control custom-checkbox">
                                                                        <input type="checkbox" className="custom-control-input" />
                                                                        <span className="custom-control-indicator"></span>
                                                                        <span className="custom-control-description">Ham
                                                                            ($1.29)</span>
                                                                    </label>
                                                                </div>
                                                                <div className="form-group">
                                                                    <label className="custom-control custom-checkbox">
                                                                        <input type="checkbox" className="custom-control-input" />
                                                                        <span className="custom-control-indicator"></span>
                                                                        <span className="custom-control-description">Chicken
                                                                            ($1.29)</span>
                                                                    </label>
                                                                </div>
                                                            </div>
                                                            <div className="col-sm-6">
                                                                <div className="form-group">
                                                                    <label className="custom-control custom-checkbox">
                                                                        <input type="checkbox" className="custom-control-input" />
                                                                        <span className="custom-control-indicator"></span>
                                                                        <span
                                                                            className="custom-control-description">Cheese($1.29)</span>
                                                                    </label>
                                                                </div>
                                                                <div className="form-group">
                                                                    <label className="custom-control custom-checkbox">
                                                                        <input type="checkbox" className="custom-control-input" />
                                                                        <span className="custom-control-indicator"></span>
                                                                        <span className="custom-control-description">Bacon
                                                                            ($1.29)</span>
                                                                    </label>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* <!-- Panel Details / Other --> */}
                                            <div className="panel-details">
                                                <h5 className="panel-details-title">
                                                    <label className="custom-control custom-radio">
                                                        <input name="radio_title_other" type="radio"
                                                            className="custom-control-input" />
                                                        <span className="custom-control-indicator"></span>
                                                    </label>
                                                    <a href="#panelDetailsOther" data-toggle="collapse">Other</a>
                                                </h5>
                                                <div id="panelDetailsOther" className="collapse">
                                                    <textarea cols={30} rows={4} className="form-control"
                                                        placeholder="Put this any other informations..."></textarea>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6">

                                            </div>
                                        </div>
                                        <h5 className="text-center text-muted">Order now!</h5>
                                        <div className="product-price text-center">$28.98</div>
                                        <div className="row">
                                            <div className="col-sm-6">
                                                <div className="form-group text-center">
                                                    <input type="number" className="form-control input-qty form-control-lg"
                                                        value="1" />
                                                </div>
                                            </div>
                                            <div className="col-sm-6">
                                                <button className="btn btn-outline-primary btn-lg btn-block"><span>Add to
                                                    cart</span></button>
                                            </div>
                                        </div>
                                        <div className="text-center mt-4">
                                            <a href="menu-list-collapse.html" className="btn btn-link">Back to menu</a>
                                        </div>
                                    </div>
                                    <h3 className="mt-5 mb-5 text-center">Reviews</h3>
                                    {/* <!-- Blockquote --> */}
                                    <blockquote className="blockquote blockquote-lganimated" data-animation="fadeIn">
                                        <div className="blockquote-content dark">
                                            <div className="rate rate-sm mb-3"><i className="fa fa-star active"></i><i
                                                className="fa fa-star active"></i><i className="fa fa-star active"></i><i
                                                    className="fa fa-star active"></i><i className="fa fa-star active"></i></div>
                                            <p>The best paste I have ever ate in my entire life!</p>
                                        </div>
                                        <footer>
                                            <img src="http://assets.suelo.pl/soup/img/avatars/avatar03.jpg" alt="" />
                                            <span className="name">Kate Hudson<span className="text-muted">, LinkedIn</span></span>
                                        </footer>
                                    </blockquote>
                                    {/* <!-- Blockquote --> */}
                                    <blockquote className="blockquote blockquote-lganimated" data-animation="fadeIn">
                                        <div className="blockquote-content dark">
                                            <div className="rate rate-sm mb-3"><i className="fa fa-star active"></i><i
                                                className="fa fa-star active"></i><i className="fa fa-star active"></i><i
                                                    className="fa fa-star active"></i><i className="fa fa-star"></i></div>
                                            <p>Great food and great atmosphere!</p>
                                        </div>
                                        <footer>
                                            <img src="http://assets.suelo.pl/soup/img/avatars/avatar04.jpg" alt="" />
                                            <span className="name">Kate Hudson<span className="text-muted">, LinkedIn</span></span>
                                        </footer>
                                    </blockquote>
                                </div>
                            </div>
                        </div>
                    </div>
                </section >

                {/* <!-- Section --> */}
                <BottomSection />

            </motion.div>
        </>
    )
}

export default ProductPage