import { Link } from "react-router-dom";
import BottomSection from "../../common/BottomSection";

const PageContent = (): JSX.Element => {
    return (
        <>
            {/* <!-- Section --> */}
            <section className="section section-bg-edge">

                <div className="image left bottom col-md-7">
                    <div className="bg-image"><img src="http://assets.suelo.pl/soup/img/photos/bg-chef.jpg" alt="" /></div>
                </div>

                <div className="container">
                    <div className="col-lg-5 offset-lg-5 col-md-9 offset-md-3">
                        <div className="rate mb-5 rate-lg"><i className="fa fa-star active"></i><i
                            className="fa fa-star active"></i><i className="fa fa-star active"></i><i
                                className="fa fa-star active"></i><i className="fa fa-star"></i></div>
                        <h2>The best food in London!</h2>
                        <p className="lead">Donec a eros metus. Vivamus volutpat leo dictum risus ullamcorper condimentum.
                            Cras sollicitudin varius condimentum. Praesent a dolor sem....</p>
                        <p>Nam eleifend elementum sapien et bibendum. Nunc ac diam efficitur, ultrices lorem quis,
                            consectetur odio. Nullam vulputate, eros quis accumsan cursus, elit lectus bibendum nulla,
                            sed dapibus ligula tellus at purus. Fusce id eros id mi cursus semper. Quisque efficitur
                            bibendum nunc a consectetur. Maecenas vitae quam iaculis, scelerisque purus nec, varius
                            purus. Nullam eget varius elit. Donec eget facilisis nunc, non rutrum lorem.</p>
                        <h6>Mark Johnson, Chef</h6>
                        <img src="/assets/img/svg/sign.svg" alt="" className="mb-5" />
                        <h4>What people say about Us?</h4>
                        <Link to="/page/reviews" className="btn btn-outline-primary"><span>Check our reviews</span></Link>
                    </div>
                </div>

            </section>

            {/* <!-- Section --> */}
            <BottomSection />
        </>
    )
};

export default PageContent;