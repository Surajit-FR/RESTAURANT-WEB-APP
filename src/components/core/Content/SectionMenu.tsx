import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import Slider from "react-slick"

const SectionMenu = (): JSX.Element => {
    const settings1 = {
        dots: true,
        infinite: true,
        speed: 800,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        responsive: [
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 690,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <>
            {/* <!-- Section - Menu --> */}
            <section className="section pb-0 protrude">

                <div className="container">
                    <h1 className="mb-6">Our menu</h1>
                </div>

                <div className="menu-sample-carousel carousel inner-controls">
                    <Slider {...settings1}>
                        {/* <!-- Menu Sample --> */}
                        <div className="menu-sample">
                            <Link to="/menu/list/navigation#Burgers">
                                <img src="http://assets.suelo.pl/soup/img/photos/menu-sample-burgers.jpg" alt="" className="image" />
                                <h3 className="title">Burgers</h3>
                            </Link>
                        </div>
                        {/* <!-- Menu Sample --> */}
                        <div className="menu-sample">
                            <Link to="/menu/list/navigation#Pizza">
                                <img src="http://assets.suelo.pl/soup/img/photos/menu-sample-pizza.jpg" alt="" className="image" />
                                <h3 className="title">Pizza</h3>
                            </Link>
                        </div>
                        {/* <!-- Menu Sample --> */}
                        <div className="menu-sample">
                            <Link to="/menu/list/navigation#Sushi">
                                <img src="http://assets.suelo.pl/soup/img/photos/menu-sample-sushi.jpg" alt="" className="image" />
                                <h3 className="title">Sushi</h3>
                            </Link>
                        </div>
                        {/* <!-- Menu Sample --> */}
                        <div className="menu-sample">
                            <HashLink to="/menu/list/navigation#Pasta">
                                <img src="http://assets.suelo.pl/soup/img/photos/menu-sample-pasta.jpg" alt="" className="image" />
                                <h3 className="title">Pasta</h3>
                            </HashLink>
                        </div>
                        {/* <!-- Menu Sample --> */}
                        <div className="menu-sample">
                            <Link to="/menu/list/navigation#Desserts">
                                <img src="http://assets.suelo.pl/soup/img/photos/menu-sample-dessert.jpg" alt="" className="image" />
                                <h3 className="title">Desserts</h3>
                            </Link>
                        </div>
                        {/* <!-- Menu Sample --> */}
                        <div className="menu-sample">
                            <Link to="/menu/list/navigation#Drinks">
                                <img src="http://assets.suelo.pl/soup/img/photos/menu-sample-drinks.jpg" alt="" className="image" />
                                <h3 className="title">Drinks</h3>
                            </Link>
                        </div>
                    </Slider>
                </div>
            </section>
        </>
    )
}

export default SectionMenu