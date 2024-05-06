import { Link } from "react-router-dom";

const BottomSection = (): JSX.Element => {
    return (
        <>
            {/* <!-- Section --> */}
            <section className="section section-lg dark bg-dark">
                {/* <!-- BG Image --> */}
                <div className="bg-image bg-parallax"><img src="http://assets.suelo.pl/soup/img/photos/bg-croissant.jpg" alt="" /></div>

                <div className="container text-center">
                    <div className="col-lg-8 offset-lg-2">
                        <h2 className="mb-3">Would you like to visit Us?</h2>
                        <h5 className="text-muted">Book a table even right now or make an online order!</h5>
                        <Link to="/menu/list/navigation" className="btn btn-primary mr-1"><span>Order Online</span></Link>
                        <Link to="/page/book/table" className="btn btn-outline-primary"><span>Book a table</span></Link>
                    </div>
                </div>

            </section>
        </>
    )
}

export default BottomSection;