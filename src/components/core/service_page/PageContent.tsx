import { Link } from "react-router-dom";
import BottomSection from "../../common/BottomSection";

const PageContent = (): JSX.Element => {

    return (
        <>
            {/* <!-- Section --> */}
            <section className="section section-double">
                <div className="row no-gutters">
                    <div className="content col-xl-4 col-md-5">
                        <h2>Weddings</h2>
                        <p className="lead text-muted">Praesent scelerisque mi ac bibendum tristique. Cras in magna a quam
                            molestie tincidunt nec vitae diam.</p>
                        <Link to="/page/contact" className="btn btn-outline-primary btn-lg"><span>Get a quote</span></Link>
                    </div>
                    <div className="image col-xl-8 col-md-7">
                        <div className="bg-image"><img src="http://assets.suelo.pl/soup/img/photos/service-weddings.jpg" alt="" /></div>
                    </div>
                </div>
            </section>

            {/* <!-- Section --> */}
            <section className="section section-double">
                <div className="row no-gutters">
                    <div className="content col-xl-4 col-md-5">
                        <h2>Engagement Parties</h2>
                        <p className="lead text-muted">Praesent scelerisque mi ac bibendum tristique. Cras in magna a quam
                            molestie tincidunt nec vitae diam.</p>
                        <Link to="/page/contact" className="btn btn-outline-primary btn-lg"><span>Get a quote</span></Link>
                    </div>
                    <div className="image col-xl-8 col-md-7 order-md-first">
                        <div className="bg-image"><img src="http://assets.suelo.pl/soup/img/photos/service-engagement.jpg" alt="" /></div>
                    </div>
                </div>
            </section>

            {/* <!-- Section --> */}
            <section className="section section-double">
                <div className="row no-gutters">
                    <div className="content col-xl-4 col-md-5">
                        <h2>Birthday Parties</h2>
                        <p className="lead text-muted">Praesent scelerisque mi ac bibendum tristique. Cras in magna a quam
                            molestie tincidunt nec vitae diam.</p>
                        <Link to="/page/contact" className="btn btn-outline-primary btn-lg"><span>Get a quote</span></Link>
                    </div>
                    <div className="image col-xl-8 col-md-7">
                        <div className="bg-image"><img src="http://assets.suelo.pl/soup/img/photos/service-birthday.jpg" alt="" /></div>
                    </div>
                </div>
            </section>

            {/* <!-- Section --> */}
            <BottomSection />
        </>
    )
}

export default PageContent;