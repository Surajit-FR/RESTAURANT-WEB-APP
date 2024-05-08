import { Link } from "react-router-dom"
import ReactGoogleMap from "../../../utils/ReactGoogleMap"

const PageContent = (): JSX.Element => {
    return (
        <>
            {/* <!-- Section --> */}
            <section className="section">

                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-4 offset-lg-1 col-md-6 mb-5 mb-md-0">
                            <img src="/assets/img/logo-horizontal-dark.svg" alt="" className="mb-5" width="130" />
                            <h4 className="mb-0">Soup Restaurant</h4>
                            <span className="text-muted">Green Street 22, New York</span>
                            <hr className="hr-md" />
                            <div className="row">
                                <div className="col-sm-6 mb-3 mb-sm-0">
                                    <h6 className="mb-1 text-muted">Phone:</h6>
                                    +48 21200 2122 221
                                </div>
                                <div className="col-sm-6">
                                    <h6 className="mb-1 text-muted">E-mail:</h6>
                                    <Link to="#">hello@example.com</Link>
                                </div>
                            </div>
                            <hr className="hr-md" />
                            <h6 className="mb-3 text-muted">Follow Us!</h6>
                            <Link to="#" className="icon icon-social icon-circle icon-sm icon-facebook mr-1"><i className="fa fa-facebook"></i></Link>
                            <Link to="#" className="icon icon-social icon-circle icon-sm icon-google mr-1"><i className="fa fa-google"></i></Link>
                            <Link to="#" className="icon icon-social icon-circle icon-sm icon-twitter mr-1"><i className="fa fa-twitter"></i></Link>
                            <Link to="#" className="icon icon-social icon-circle icon-sm icon-youtube mr-1"><i className="fa fa-youtube"></i></Link>
                            <Link to="#" className="icon icon-social icon-circle icon-sm icon-instagram mr-1"><i className="fa fa-instagram"></i></Link>
                        </div>
                        <div className="col-lg-5 offset-lg-2 col-md-6">
                            <div className="google-map h-500 shadow">
                                {/* Google Map */}
                                <ReactGoogleMap
                                    lat={50.064651}
                                    lng={19.944981}
                                />
                            </div>
                        </div>
                    </div>
                </div>

            </section >

            {/* <!-- Section --> */}
            <section className="section" >
                <div className="container">
                    <div className="row align-items-center flex-md-row-reverse">
                        <div className="col-lg-4 offset-lg-2 col-md-6 mb-5 mb-md-0">
                            <img src="/assets/img/logo-horizontal-dark.svg" alt="" className="mb-5" width="130" />
                            <h4 className="mb-0">Soup Restaurant</h4>
                            <span className="text-muted">Green Street 22, New York</span>
                            <hr className="hr-md" />
                            <div className="row">
                                <div className="col-sm-6 mb-3 mb-sm-0">
                                    <h6 className="mb-1 text-muted">Phone:</h6>
                                    +48 21200 2122 221
                                </div>
                                <div className="col-sm-6">
                                    <h6 className="mb-1 text-muted">E-mail:</h6>
                                    <Link to="#">hello@example.com</Link>
                                </div>
                            </div>
                            <hr className="hr-md" />
                            <h6 className="mb-3 text-muted">Follow Us!</h6>
                            <Link to="#" className="icon icon-social icon-circle icon-sm icon-facebook mr-1"><i className="fa fa-facebook"></i></Link>
                            <Link to="#" className="icon icon-social icon-circle icon-sm icon-google mr-1"><i className="fa fa-google"></i></Link>
                            <Link to="#" className="icon icon-social icon-circle icon-sm icon-twitter mr-1"><i className="fa fa-twitter"></i></Link>
                            <Link to="#" className="icon icon-social icon-circle icon-sm icon-youtube mr-1"><i className="fa fa-youtube"></i></Link>
                            <Link to="#" className="icon icon-social icon-circle icon-sm icon-instagram mr-1"><i className="fa fa-instagram"></i></Link>
                        </div>
                        <div className="col-lg-5 offset-lg-1 col-md-6">
                            <div className="google-map h-500 shadow">
                                {/* Google Map */}
                                <ReactGoogleMap
                                    lat={52.229675}
                                    lng={21.012230}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section >

        </>
    )
};

export default PageContent;