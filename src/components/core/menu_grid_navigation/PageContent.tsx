import { useEffect, useState } from "react";
import { HashLink } from "react-router-hash-link";
import ProductModal from "../../../utils/ProductModal";

const PageContent = (): JSX.Element => {
    const [page, setPage] = useState<string>("");

    const [isSticky, setIsSticky] = useState<boolean>(false);

    useEffect(() => {
        const handleScroll = () => {
            const offset = window.scrollY;
            // Change the threshold as needed
            if (offset > 490) {
                setIsSticky(true);
            } else {
                setIsSticky(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <>
            {/* <!-- Page Content --> */}
            <div className="page-content">
                <div className="container">
                    <div className="row no-gutters">
                        <div className="col-md-3">
                            {/* <!-- Menu Navigation --> */}
                            <nav id="menu-navigation" className="stick-to-content" data-local-scroll style={{ position: isSticky ? "fixed" : "static", top: "0", width: "278px" }}>
                                <ul className="nav nav-menu bg-dark dark">
                                    <li><HashLink to="#Burgers">Burgers</HashLink></li>
                                    <li><HashLink to="#Pasta">Pasta</HashLink></li>
                                    <li><HashLink to="#Pizza">Pizza</HashLink></li>
                                    <li><HashLink to="#Sushi">Sushi</HashLink></li>
                                    <li><HashLink to="#Desserts">Desserts</HashLink></li>
                                    <li><HashLink to="#Drinks">Drinks</HashLink></li>
                                </ul>
                            </nav>
                        </div>
                        <div className="col-md-9">

                            {/* <!-- Menu Category / Burgers --> */}
                            <div id="Burgers" className="menu-category">
                                <div className="menu-category-title">
                                    <div className="bg-image"><img
                                        src="http://assets.suelo.pl/soup/img/photos/menu-title-burgers.jpg" alt="" />
                                    </div>
                                    <h2 className="title">Burgers</h2>
                                </div>
                                <div className="menu-category-content padded">
                                    <div className="row gutters-sm">
                                        <div className="col-lg-4 col-6">
                                            {/* <!-- Menu Item --> */}
                                            <div className="menu-item menu-grid-item">
                                                <img className="mb-4"
                                                    src="http://assets.suelo.pl/soup/img/products/product-burger.jpg"
                                                    alt="" />
                                                <h6 className="mb-0">Beef Burger</h6>
                                                <span className="text-muted text-sm">Beef, cheese, potato, onion,
                                                    fries</span>
                                                <div className="row align-items-center mt-4">
                                                    <div className="col-sm-6"><span className="text-md mr-4"><span
                                                        className="text-muted">from</span> $<span
                                                            data-product-base-price>9.00</span></span></div>
                                                    <div className="col-sm-6 text-sm-right mt-2 mt-sm-0">
                                                        <button
                                                            className="btn btn-outline-secondary btn-sm"
                                                            data-bs-toggle="modal"
                                                            data-bs-target={`#exampleModal${page}`}
                                                            onClick={() => setPage("Grid_Navigation_Burgers_Beef_Burger")}
                                                        ><span>Add to cart</span>
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-6">
                                            {/* <!-- Menu Item --> */}
                                            <div className="menu-item menu-grid-item">
                                                <img className="mb-4"
                                                    src="http://assets.suelo.pl/soup/img/products/product-pizza.jpg"
                                                    alt="" />
                                                <h6 className="mb-0">Broccoli</h6>
                                                <span className="text-muted text-sm">Beef, cheese, potato, onion,
                                                    fries</span>
                                                <div className="row align-items-center mt-4">
                                                    <div className="col-sm-6"><span className="text-md mr-4"><span
                                                        className="text-muted">from</span> $<span
                                                            data-product-base-price>9.00</span></span></div>
                                                    <div className="col-sm-6 text-sm-right mt-2 mt-sm-0">
                                                        <button
                                                            className="btn btn-outline-secondary btn-sm"
                                                            data-bs-toggle="modal"
                                                            data-bs-target={`#exampleModal${page}`}
                                                            onClick={() => setPage("Grid_Navigation_Burgers_Broccoli")}
                                                        ><span>Add to cart</span>
                                                        </button></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-6">
                                            {/* <!-- Menu Item --> */}
                                            <div className="menu-item menu-grid-item">
                                                <img className="mb-4"
                                                    src="http://assets.suelo.pl/soup/img/products/product-chicken-burger.jpg"
                                                    alt="" />
                                                <h6 className="mb-0">Chicken Burger</h6>
                                                <span className="text-muted text-sm">Beef, cheese, potato, onion,
                                                    fries</span>
                                                <div className="row align-items-center mt-4">
                                                    <div className="col-sm-6"><span className="text-md mr-4"><span
                                                        className="text-muted">from</span> $<span
                                                            data-product-base-price>14.00</span></span></div>
                                                    <div className="col-sm-6 text-sm-right mt-2 mt-sm-0">
                                                        <button
                                                            className="btn btn-outline-secondary btn-sm"
                                                            data-bs-toggle="modal"
                                                            data-bs-target={`#exampleModal${page}`}
                                                            onClick={() => setPage("Grid_Navigation_Burgers_Chicken_Burger")}
                                                        ><span>Add to cart</span>
                                                        </button></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-6">
                                            {/* <!-- Menu Item --> */}
                                            <div className="menu-item menu-grid-item">
                                                <img className="mb-4"
                                                    src="http://assets.suelo.pl/soup/img/products/product-pasta.jpg"
                                                    alt="" />
                                                <h6 className="mb-0">Creste di Galli</h6>
                                                <span className="text-muted text-sm">Beef, cheese, potato, onion,
                                                    fries</span>
                                                <div className="row align-items-center mt-4">
                                                    <div className="col-sm-6"><span className="text-md mr-4"><span
                                                        className="text-muted">from</span> $<span
                                                            data-product-base-price>13.00</span></span></div>
                                                    <div className="col-sm-6 text-sm-right mt-2 mt-sm-0">
                                                        <button
                                                            className="btn btn-outline-secondary btn-sm"
                                                            data-bs-toggle="modal"
                                                            data-bs-target={`#exampleModal${page}`}
                                                            onClick={() => setPage("Grid_Navigation_Burgers_Creste_di_Galli")}
                                                        ><span>Add to cart</span>
                                                        </button></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-6">
                                            {/* <!-- Menu Item --> */}
                                            <div className="menu-item menu-grid-item">
                                                <img className="mb-4"
                                                    src="http://assets.suelo.pl/soup/img/products/product-chicken-wings.jpg"
                                                    alt="" />
                                                <h6 className="mb-0">Chicken wings</h6>
                                                <span className="text-muted text-sm">Beef, cheese, potato, onion,
                                                    fries</span>
                                                <div className="row align-items-center mt-4">
                                                    <div className="col-sm-6"><span className="text-md mr-4"><span
                                                        className="text-muted">from</span> $<span
                                                            data-product-base-price>13.00</span></span></div>
                                                    <div className="col-sm-6 text-sm-right mt-2 mt-sm-0">
                                                        <button
                                                            className="btn btn-outline-secondary btn-sm"
                                                            data-bs-toggle="modal"
                                                            data-bs-target={`#exampleModal${page}`}
                                                            onClick={() => setPage("Grid_Navigation_Burgers_Chicken_wings")}
                                                        ><span>Add to cart</span>
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-6">
                                            {/* <!-- Menu Item --> */}
                                            <div className="menu-item menu-grid-item">
                                                <img className="mb-4"
                                                    src="http://assets.suelo.pl/soup/img/products/product-sushi.jpg"
                                                    alt="" />
                                                <h6 className="mb-0">Nigiri-sushi</h6>
                                                <span className="text-muted text-sm">Beef, cheese, potato, onion,
                                                    fries</span>
                                                <div className="row align-items-center mt-4">
                                                    <div className="col-sm-6"><span className="text-md mr-4"><span
                                                        className="text-muted">from</span> $<span
                                                            data-product-base-price>13.00</span></span></div>
                                                    <div className="col-sm-6 text-sm-right mt-2 mt-sm-0">
                                                        <button
                                                            className="btn btn-outline-secondary btn-sm"
                                                            data-bs-toggle="modal"
                                                            data-bs-target={`#exampleModal${page}`}
                                                            onClick={() => setPage("Grid_Navigation_Burgers_Nigiri_sushi")}
                                                        ><span>Add to cart</span>
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* <!-- Menu Category / Pasta --> */}
                            <div id="Pasta" className="menu-category">
                                <div className="menu-category-title">
                                    <div className="bg-image"><img
                                        src="http://assets.suelo.pl/soup/img/photos/menu-title-pasta.jpg" alt="" />
                                    </div>
                                    <h2 className="title">Pasta</h2>
                                </div>
                                <div className="menu-category-content padded">
                                    <div className="row gutters-sm">
                                        <div className="col-lg-4 col-6">
                                            {/* <!-- Menu Item --> */}
                                            <div className="menu-item menu-grid-item">
                                                <img className="mb-4"
                                                    src="http://assets.suelo.pl/soup/img/products/product-burger.jpg"
                                                    alt="" />
                                                <h6 className="mb-0">Beef Burger</h6>
                                                <span className="text-muted text-sm">Beef, cheese, potato, onion,
                                                    fries</span>
                                                <div className="row align-items-center mt-4">
                                                    <div className="col-sm-6"><span className="text-md mr-4"><span
                                                        className="text-muted">from</span> $<span
                                                            data-product-base-price>9.00</span></span></div>
                                                    <div className="col-sm-6 text-sm-right mt-2 mt-sm-0"><button
                                                        className="btn btn-outline-secondary btn-sm"
                                                        data-action="open-cart-modal" data-id="1"><span>Add to
                                                            cart</span></button></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-6">
                                            {/* <!-- Menu Item --> */}
                                            <div className="menu-item menu-grid-item">
                                                <img className="mb-4"
                                                    src="http://assets.suelo.pl/soup/img/products/product-pizza.jpg"
                                                    alt="" />
                                                <h6 className="mb-0">Broccoli</h6>
                                                <span className="text-muted text-sm">Beef, cheese, potato, onion,
                                                    fries</span>
                                                <div className="row align-items-center mt-4">
                                                    <div className="col-sm-6"><span className="text-md mr-4"><span
                                                        className="text-muted">from</span> $<span
                                                            data-product-base-price>9.00</span></span></div>
                                                    <div className="col-sm-6 text-sm-right mt-2 mt-sm-0"><button
                                                        className="btn btn-outline-secondary btn-sm"
                                                        data-action="open-cart-modal" data-id="2"><span>Add to
                                                            cart</span></button></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-6">
                                            {/* <!-- Menu Item --> */}
                                            <div className="menu-item menu-grid-item">
                                                <img className="mb-4"
                                                    src="http://assets.suelo.pl/soup/img/products/product-chicken-burger.jpg"
                                                    alt="" />
                                                <h6 className="mb-0">Chicken Burger</h6>
                                                <span className="text-muted text-sm">Beef, cheese, potato, onion,
                                                    fries</span>
                                                <div className="row align-items-center mt-4">
                                                    <div className="col-sm-6"><span className="text-md mr-4"><span
                                                        className="text-muted">from</span> $<span
                                                            data-product-base-price>14.00</span></span></div>
                                                    <div className="col-sm-6 text-sm-right mt-2 mt-sm-0"><button
                                                        className="btn btn-outline-secondary btn-sm"
                                                        data-action="open-cart-modal" data-id="3"><span>Add to
                                                            cart</span></button></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-6">
                                            {/* <!-- Menu Item --> */}
                                            <div className="menu-item menu-grid-item">
                                                <img className="mb-4"
                                                    src="http://assets.suelo.pl/soup/img/products/product-pasta.jpg"
                                                    alt="" />
                                                <h6 className="mb-0">Creste di Galli</h6>
                                                <span className="text-muted text-sm">Beef, cheese, potato, onion,
                                                    fries</span>
                                                <div className="row align-items-center mt-4">
                                                    <div className="col-sm-6"><span className="text-md mr-4"><span
                                                        className="text-muted">from</span> $<span
                                                            data-product-base-price>13.00</span></span></div>
                                                    <div className="col-sm-6 text-sm-right mt-2 mt-sm-0"><button
                                                        className="btn btn-outline-secondary btn-sm"
                                                        data-action="open-cart-modal" data-id="4"><span>Add to
                                                            cart</span></button></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-6">
                                            {/* <!-- Menu Item --> */}
                                            <div className="menu-item menu-grid-item">
                                                <img className="mb-4"
                                                    src="http://assets.suelo.pl/soup/img/products/product-chicken-wings.jpg"
                                                    alt="" />
                                                <h6 className="mb-0">Chicken wings</h6>
                                                <span className="text-muted text-sm">Beef, cheese, potato, onion,
                                                    fries</span>
                                                <div className="row align-items-center mt-4">
                                                    <div className="col-sm-6"><span className="text-md mr-4"><span
                                                        className="text-muted">from</span> $<span
                                                            data-product-base-price>13.00</span></span></div>
                                                    <div className="col-sm-6 text-sm-right mt-2 mt-sm-0"><button
                                                        className="btn btn-outline-secondary btn-sm"
                                                        data-action="open-cart-modal" data-id="5"><span>Add to
                                                            cart</span></button></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-6">
                                            {/* <!-- Menu Item --> */}
                                            <div className="menu-item menu-grid-item">
                                                <img className="mb-4"
                                                    src="http://assets.suelo.pl/soup/img/products/product-sushi.jpg"
                                                    alt="" />
                                                <h6 className="mb-0">Nigiri-sushi</h6>
                                                <span className="text-muted text-sm">Beef, cheese, potato, onion,
                                                    fries</span>
                                                <div className="row align-items-center mt-4">
                                                    <div className="col-sm-6"><span className="text-md mr-4"><span
                                                        className="text-muted">from</span> $<span
                                                            data-product-base-price>13.00</span></span></div>
                                                    <div className="col-sm-6 text-sm-right mt-2 mt-sm-0"><button
                                                        className="btn btn-outline-secondary btn-sm"
                                                        data-action="open-cart-modal" data-id="6"><span>Add to
                                                            cart</span></button></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* <!-- Menu Category / Pizza --> */}
                            <div id="Pizza" className="menu-category">
                                <div className="menu-category-title">
                                    <div className="bg-image"><img
                                        src="http://assets.suelo.pl/soup/img/photos/menu-title-pizza.jpg" alt="" />
                                    </div>
                                    <h2 className="title">Pizza</h2>
                                </div>
                                <div className="menu-category-content padded">
                                    <div className="row gutters-sm">
                                        <div className="col-lg-4 col-6">
                                            {/* <!-- Menu Item --> */}
                                            <div className="menu-item menu-grid-item">
                                                <img className="mb-4"
                                                    src="http://assets.suelo.pl/soup/img/products/product-burger.jpg"
                                                    alt="" />
                                                <h6 className="mb-0">Beef Burger</h6>
                                                <span className="text-muted text-sm">Beef, cheese, potato, onion,
                                                    fries</span>
                                                <div className="row align-items-center mt-4">
                                                    <div className="col-sm-6"><span className="text-md mr-4"><span
                                                        className="text-muted">from</span> $<span
                                                            data-product-base-price>9.00</span></span></div>
                                                    <div className="col-sm-6 text-sm-right mt-2 mt-sm-0"><button
                                                        className="btn btn-outline-secondary btn-sm"
                                                        data-action="open-cart-modal" data-id="1"><span>Add to
                                                            cart</span></button></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-6">
                                            {/* <!-- Menu Item --> */}
                                            <div className="menu-item menu-grid-item">
                                                <img className="mb-4"
                                                    src="http://assets.suelo.pl/soup/img/products/product-pizza.jpg"
                                                    alt="" />
                                                <h6 className="mb-0">Broccoli</h6>
                                                <span className="text-muted text-sm">Beef, cheese, potato, onion,
                                                    fries</span>
                                                <div className="row align-items-center mt-4">
                                                    <div className="col-sm-6"><span className="text-md mr-4"><span
                                                        className="text-muted">from</span> $<span
                                                            data-product-base-price>9.00</span></span></div>
                                                    <div className="col-sm-6 text-sm-right mt-2 mt-sm-0"><button
                                                        className="btn btn-outline-secondary btn-sm"
                                                        data-action="open-cart-modal" data-id="2"><span>Add to
                                                            cart</span></button></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-6">
                                            {/* <!-- Menu Item --> */}
                                            <div className="menu-item menu-grid-item">
                                                <img className="mb-4"
                                                    src="http://assets.suelo.pl/soup/img/products/product-chicken-burger.jpg"
                                                    alt="" />
                                                <h6 className="mb-0">Chicken Burger</h6>
                                                <span className="text-muted text-sm">Beef, cheese, potato, onion,
                                                    fries</span>
                                                <div className="row align-items-center mt-4">
                                                    <div className="col-sm-6"><span className="text-md mr-4"><span
                                                        className="text-muted">from</span> $<span
                                                            data-product-base-price>14.00</span></span></div>
                                                    <div className="col-sm-6 text-sm-right mt-2 mt-sm-0"><button
                                                        className="btn btn-outline-secondary btn-sm"
                                                        data-action="open-cart-modal" data-id="3"><span>Add to
                                                            cart</span></button></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-6">
                                            {/* <!-- Menu Item --> */}
                                            <div className="menu-item menu-grid-item">
                                                <img className="mb-4"
                                                    src="http://assets.suelo.pl/soup/img/products/product-pasta.jpg"
                                                    alt="" />
                                                <h6 className="mb-0">Creste di Galli</h6>
                                                <span className="text-muted text-sm">Beef, cheese, potato, onion,
                                                    fries</span>
                                                <div className="row align-items-center mt-4">
                                                    <div className="col-sm-6"><span className="text-md mr-4"><span
                                                        className="text-muted">from</span> $<span
                                                            data-product-base-price>13.00</span></span></div>
                                                    <div className="col-sm-6 text-sm-right mt-2 mt-sm-0"><button
                                                        className="btn btn-outline-secondary btn-sm"
                                                        data-action="open-cart-modal" data-id="4"><span>Add to
                                                            cart</span></button></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-6">
                                            {/* <!-- Menu Item --> */}
                                            <div className="menu-item menu-grid-item">
                                                <img className="mb-4"
                                                    src="http://assets.suelo.pl/soup/img/products/product-chicken-wings.jpg"
                                                    alt="" />
                                                <h6 className="mb-0">Chicken wings</h6>
                                                <span className="text-muted text-sm">Beef, cheese, potato, onion,
                                                    fries</span>
                                                <div className="row align-items-center mt-4">
                                                    <div className="col-sm-6"><span className="text-md mr-4"><span
                                                        className="text-muted">from</span> $<span
                                                            data-product-base-price>13.00</span></span></div>
                                                    <div className="col-sm-6 text-sm-right mt-2 mt-sm-0"><button
                                                        className="btn btn-outline-secondary btn-sm"
                                                        data-action="open-cart-modal" data-id="5"><span>Add to
                                                            cart</span></button></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-6">
                                            {/* <!-- Menu Item --> */}
                                            <div className="menu-item menu-grid-item">
                                                <img className="mb-4"
                                                    src="http://assets.suelo.pl/soup/img/products/product-sushi.jpg"
                                                    alt="" />
                                                <h6 className="mb-0">Nigiri-sushi</h6>
                                                <span className="text-muted text-sm">Beef, cheese, potato, onion,
                                                    fries</span>
                                                <div className="row align-items-center mt-4">
                                                    <div className="col-sm-6"><span className="text-md mr-4"><span
                                                        className="text-muted">from</span> $<span
                                                            data-product-base-price>13.00</span></span></div>
                                                    <div className="col-sm-6 text-sm-right mt-2 mt-sm-0"><button
                                                        className="btn btn-outline-secondary btn-sm"
                                                        data-action="open-cart-modal" data-id="6"><span>Add to
                                                            cart</span></button></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* <!-- Menu Category / Sushi --> */}
                            <div id="Sushi" className="menu-category">
                                <div className="menu-category-title">
                                    <div className="bg-image"><img
                                        src="http://assets.suelo.pl/soup/img/photos/menu-title-sushi.jpg" alt="" />
                                    </div>
                                    <h2 className="title">Sushi</h2>
                                </div>
                                <div className="menu-category-content padded">
                                    <div className="row gutters-sm">
                                        <div className="col-lg-4 col-6">
                                            {/* <!-- Menu Item --> */}
                                            <div className="menu-item menu-grid-item">
                                                <img className="mb-4"
                                                    src="http://assets.suelo.pl/soup/img/products/product-burger.jpg"
                                                    alt="" />
                                                <h6 className="mb-0">Beef Burger</h6>
                                                <span className="text-muted text-sm">Beef, cheese, potato, onion,
                                                    fries</span>
                                                <div className="row align-items-center mt-4">
                                                    <div className="col-sm-6"><span className="text-md mr-4"><span
                                                        className="text-muted">from</span> $<span
                                                            data-product-base-price>9.00</span></span></div>
                                                    <div className="col-sm-6 text-sm-right mt-2 mt-sm-0"><button
                                                        className="btn btn-outline-secondary btn-sm"
                                                        data-action="open-cart-modal" data-id="1"><span>Add to
                                                            cart</span></button></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-6">
                                            {/* <!-- Menu Item --> */}
                                            <div className="menu-item menu-grid-item">
                                                <img className="mb-4"
                                                    src="http://assets.suelo.pl/soup/img/products/product-pizza.jpg"
                                                    alt="" />
                                                <h6 className="mb-0">Broccoli</h6>
                                                <span className="text-muted text-sm">Beef, cheese, potato, onion,
                                                    fries</span>
                                                <div className="row align-items-center mt-4">
                                                    <div className="col-sm-6"><span className="text-md mr-4"><span
                                                        className="text-muted">from</span> $<span
                                                            data-product-base-price>9.00</span></span></div>
                                                    <div className="col-sm-6 text-sm-right mt-2 mt-sm-0"><button
                                                        className="btn btn-outline-secondary btn-sm"
                                                        data-action="open-cart-modal" data-id="2"><span>Add to
                                                            cart</span></button></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-6">
                                            {/* <!-- Menu Item --> */}
                                            <div className="menu-item menu-grid-item">
                                                <img className="mb-4"
                                                    src="http://assets.suelo.pl/soup/img/products/product-chicken-burger.jpg"
                                                    alt="" />
                                                <h6 className="mb-0">Chicken Burger</h6>
                                                <span className="text-muted text-sm">Beef, cheese, potato, onion,
                                                    fries</span>
                                                <div className="row align-items-center mt-4">
                                                    <div className="col-sm-6"><span className="text-md mr-4"><span
                                                        className="text-muted">from</span> $<span
                                                            data-product-base-price>14.00</span></span></div>
                                                    <div className="col-sm-6 text-sm-right mt-2 mt-sm-0"><button
                                                        className="btn btn-outline-secondary btn-sm"
                                                        data-action="open-cart-modal" data-id="3"><span>Add to
                                                            cart</span></button></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-6">
                                            {/* <!-- Menu Item --> */}
                                            <div className="menu-item menu-grid-item">
                                                <img className="mb-4"
                                                    src="http://assets.suelo.pl/soup/img/products/product-pasta.jpg"
                                                    alt="" />
                                                <h6 className="mb-0">Creste di Galli</h6>
                                                <span className="text-muted text-sm">Beef, cheese, potato, onion,
                                                    fries</span>
                                                <div className="row align-items-center mt-4">
                                                    <div className="col-sm-6"><span className="text-md mr-4"><span
                                                        className="text-muted">from</span> $<span
                                                            data-product-base-price>13.00</span></span></div>
                                                    <div className="col-sm-6 text-sm-right mt-2 mt-sm-0"><button
                                                        className="btn btn-outline-secondary btn-sm"
                                                        data-action="open-cart-modal" data-id="4"><span>Add to
                                                            cart</span></button></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-6">
                                            {/* <!-- Menu Item --> */}
                                            <div className="menu-item menu-grid-item">
                                                <img className="mb-4"
                                                    src="http://assets.suelo.pl/soup/img/products/product-chicken-wings.jpg"
                                                    alt="" />
                                                <h6 className="mb-0">Chicken wings</h6>
                                                <span className="text-muted text-sm">Beef, cheese, potato, onion,
                                                    fries</span>
                                                <div className="row align-items-center mt-4">
                                                    <div className="col-sm-6"><span className="text-md mr-4"><span
                                                        className="text-muted">from</span> $<span
                                                            data-product-base-price>13.00</span></span></div>
                                                    <div className="col-sm-6 text-sm-right mt-2 mt-sm-0"><button
                                                        className="btn btn-outline-secondary btn-sm"
                                                        data-action="open-cart-modal" data-id="5"><span>Add to
                                                            cart</span></button></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-6">
                                            {/* <!-- Menu Item --> */}
                                            <div className="menu-item menu-grid-item">
                                                <img className="mb-4"
                                                    src="http://assets.suelo.pl/soup/img/products/product-sushi.jpg"
                                                    alt="" />
                                                <h6 className="mb-0">Nigiri-sushi</h6>
                                                <span className="text-muted text-sm">Beef, cheese, potato, onion,
                                                    fries</span>
                                                <div className="row align-items-center mt-4">
                                                    <div className="col-sm-6"><span className="text-md mr-4"><span
                                                        className="text-muted">from</span> $<span
                                                            data-product-base-price>13.00</span></span></div>
                                                    <div className="col-sm-6 text-sm-right mt-2 mt-sm-0"><button
                                                        className="btn btn-outline-secondary btn-sm"
                                                        data-action="open-cart-modal" data-id="6"><span>Add to
                                                            cart</span></button></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* <!-- Menu Category / Desserts --> */}
                            <div id="Desserts" className="menu-category">
                                <div className="menu-category-title">
                                    <div className="bg-image"><img
                                        src="http://assets.suelo.pl/soup/img/photos/menu-title-desserts.jpg" alt="" />
                                    </div>
                                    <h2 className="title">Desserts</h2>
                                </div>
                                <div className="menu-category-content padded">
                                    <div className="row gutters-sm">
                                        <div className="col-lg-4 col-6">
                                            {/* <!-- Menu Item --> */}
                                            <div className="menu-item menu-grid-item">
                                                <img className="mb-4"
                                                    src="http://assets.suelo.pl/soup/img/products/product-burger.jpg"
                                                    alt="" />
                                                <h6 className="mb-0">Beef Burger</h6>
                                                <span className="text-muted text-sm">Beef, cheese, potato, onion,
                                                    fries</span>
                                                <div className="row align-items-center mt-4">
                                                    <div className="col-sm-6"><span className="text-md mr-4"><span
                                                        className="text-muted">from</span> $<span
                                                            data-product-base-price>9.00</span></span></div>
                                                    <div className="col-sm-6 text-sm-right mt-2 mt-sm-0"><button
                                                        className="btn btn-outline-secondary btn-sm"
                                                        data-action="open-cart-modal" data-id="1"><span>Add to
                                                            cart</span></button></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-6">
                                            {/* <!-- Menu Item --> */}
                                            <div className="menu-item menu-grid-item">
                                                <img className="mb-4"
                                                    src="http://assets.suelo.pl/soup/img/products/product-pizza.jpg"
                                                    alt="" />
                                                <h6 className="mb-0">Broccoli</h6>
                                                <span className="text-muted text-sm">Beef, cheese, potato, onion,
                                                    fries</span>
                                                <div className="row align-items-center mt-4">
                                                    <div className="col-sm-6"><span className="text-md mr-4"><span
                                                        className="text-muted">from</span> $<span
                                                            data-product-base-price>9.00</span></span></div>
                                                    <div className="col-sm-6 text-sm-right mt-2 mt-sm-0"><button
                                                        className="btn btn-outline-secondary btn-sm"
                                                        data-action="open-cart-modal" data-id="2"><span>Add to
                                                            cart</span></button></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-6">
                                            {/* <!-- Menu Item --> */}
                                            <div className="menu-item menu-grid-item">
                                                <img className="mb-4"
                                                    src="http://assets.suelo.pl/soup/img/products/product-chicken-burger.jpg"
                                                    alt="" />
                                                <h6 className="mb-0">Chicken Burger</h6>
                                                <span className="text-muted text-sm">Beef, cheese, potato, onion,
                                                    fries</span>
                                                <div className="row align-items-center mt-4">
                                                    <div className="col-sm-6"><span className="text-md mr-4"><span
                                                        className="text-muted">from</span> $<span
                                                            data-product-base-price>14.00</span></span></div>
                                                    <div className="col-sm-6 text-sm-right mt-2 mt-sm-0"><button
                                                        className="btn btn-outline-secondary btn-sm"
                                                        data-action="open-cart-modal" data-id="3"><span>Add to
                                                            cart</span></button></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-6">
                                            {/* <!-- Menu Item --> */}
                                            <div className="menu-item menu-grid-item">
                                                <img className="mb-4"
                                                    src="http://assets.suelo.pl/soup/img/products/product-pasta.jpg"
                                                    alt="" />
                                                <h6 className="mb-0">Creste di Galli</h6>
                                                <span className="text-muted text-sm">Beef, cheese, potato, onion,
                                                    fries</span>
                                                <div className="row align-items-center mt-4">
                                                    <div className="col-sm-6"><span className="text-md mr-4"><span
                                                        className="text-muted">from</span> $<span
                                                            data-product-base-price>13.00</span></span></div>
                                                    <div className="col-sm-6 text-sm-right mt-2 mt-sm-0"><button
                                                        className="btn btn-outline-secondary btn-sm"
                                                        data-action="open-cart-modal" data-id="4"><span>Add to
                                                            cart</span></button></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-6">
                                            {/* <!-- Menu Item --> */}
                                            <div className="menu-item menu-grid-item">
                                                <img className="mb-4"
                                                    src="http://assets.suelo.pl/soup/img/products/product-chicken-wings.jpg"
                                                    alt="" />
                                                <h6 className="mb-0">Chicken wings</h6>
                                                <span className="text-muted text-sm">Beef, cheese, potato, onion,
                                                    fries</span>
                                                <div className="row align-items-center mt-4">
                                                    <div className="col-sm-6"><span className="text-md mr-4"><span
                                                        className="text-muted">from</span> $<span
                                                            data-product-base-price>13.00</span></span></div>
                                                    <div className="col-sm-6 text-sm-right mt-2 mt-sm-0"><button
                                                        className="btn btn-outline-secondary btn-sm"
                                                        data-action="open-cart-modal" data-id="5"><span>Add to
                                                            cart</span></button></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-6">
                                            {/* <!-- Menu Item --> */}
                                            <div className="menu-item menu-grid-item">
                                                <img className="mb-4"
                                                    src="http://assets.suelo.pl/soup/img/products/product-sushi.jpg"
                                                    alt="" />
                                                <h6 className="mb-0">Nigiri-sushi</h6>
                                                <span className="text-muted text-sm">Beef, cheese, potato, onion,
                                                    fries</span>
                                                <div className="row align-items-center mt-4">
                                                    <div className="col-sm-6"><span className="text-md mr-4"><span
                                                        className="text-muted">from</span> $<span
                                                            data-product-base-price>13.00</span></span></div>
                                                    <div className="col-sm-6 text-sm-right mt-2 mt-sm-0"><button
                                                        className="btn btn-outline-secondary btn-sm"
                                                        data-action="open-cart-modal" data-id="6"><span>Add to
                                                            cart</span></button></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* <!-- Menu Category / Drinks --> */}
                            <div id="Drinks" className="menu-category">
                                <div className="menu-category-title">
                                    <div className="bg-image"><img
                                        src="http://assets.suelo.pl/soup/img/photos/menu-title-drinks.jpg" alt="" />
                                    </div>
                                    <h2 className="title">Drinks</h2>
                                </div>
                                <div className="menu-category-content padded">
                                    <div className="row gutters-sm">
                                        <div className="col-lg-4 col-6">
                                            {/* <!-- Menu Item --> */}
                                            <div className="menu-item menu-grid-item">
                                                <img className="mb-4"
                                                    src="http://assets.suelo.pl/soup/img/products/product-burger.jpg"
                                                    alt="" />
                                                <h6 className="mb-0">Beef Burger</h6>
                                                <span className="text-muted text-sm">Beef, cheese, potato, onion,
                                                    fries</span>
                                                <div className="row align-items-center mt-4">
                                                    <div className="col-sm-6"><span className="text-md mr-4"><span
                                                        className="text-muted">from</span> $<span
                                                            data-product-base-price>9.00</span></span></div>
                                                    <div className="col-sm-6 text-sm-right mt-2 mt-sm-0"><button
                                                        className="btn btn-outline-secondary btn-sm"
                                                        data-action="open-cart-modal" data-id="1"><span>Add to
                                                            cart</span></button></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-6">
                                            {/* <!-- Menu Item --> */}
                                            <div className="menu-item menu-grid-item">
                                                <img className="mb-4"
                                                    src="http://assets.suelo.pl/soup/img/products/product-pizza.jpg"
                                                    alt="" />
                                                <h6 className="mb-0">Broccoli</h6>
                                                <span className="text-muted text-sm">Beef, cheese, potato, onion,
                                                    fries</span>
                                                <div className="row align-items-center mt-4">
                                                    <div className="col-sm-6"><span className="text-md mr-4"><span
                                                        className="text-muted">from</span> $<span
                                                            data-product-base-price>9.00</span></span></div>
                                                    <div className="col-sm-6 text-sm-right mt-2 mt-sm-0"><button
                                                        className="btn btn-outline-secondary btn-sm"
                                                        data-action="open-cart-modal" data-id="2"><span>Add to
                                                            cart</span></button></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-6">
                                            {/* <!-- Menu Item --> */}
                                            <div className="menu-item menu-grid-item">
                                                <img className="mb-4"
                                                    src="http://assets.suelo.pl/soup/img/products/product-chicken-burger.jpg"
                                                    alt="" />
                                                <h6 className="mb-0">Chicken Burger</h6>
                                                <span className="text-muted text-sm">Beef, cheese, potato, onion,
                                                    fries</span>
                                                <div className="row align-items-center mt-4">
                                                    <div className="col-sm-6"><span className="text-md mr-4"><span
                                                        className="text-muted">from</span> $<span
                                                            data-product-base-price>14.00</span></span></div>
                                                    <div className="col-sm-6 text-sm-right mt-2 mt-sm-0"><button
                                                        className="btn btn-outline-secondary btn-sm"
                                                        data-action="open-cart-modal" data-id="3"><span>Add to
                                                            cart</span></button></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-6">
                                            {/* <!-- Menu Item --> */}
                                            <div className="menu-item menu-grid-item">
                                                <img className="mb-4"
                                                    src="http://assets.suelo.pl/soup/img/products/product-pasta.jpg"
                                                    alt="" />
                                                <h6 className="mb-0">Creste di Galli</h6>
                                                <span className="text-muted text-sm">Beef, cheese, potato, onion,
                                                    fries</span>
                                                <div className="row align-items-center mt-4">
                                                    <div className="col-sm-6"><span className="text-md mr-4"><span
                                                        className="text-muted">from</span> $<span
                                                            data-product-base-price>13.00</span></span></div>
                                                    <div className="col-sm-6 text-sm-right mt-2 mt-sm-0"><button
                                                        className="btn btn-outline-secondary btn-sm"
                                                        data-action="open-cart-modal" data-id="4"><span>Add to
                                                            cart</span></button></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-6">
                                            {/* <!-- Menu Item --> */}
                                            <div className="menu-item menu-grid-item">
                                                <img className="mb-4"
                                                    src="http://assets.suelo.pl/soup/img/products/product-chicken-wings.jpg"
                                                    alt="" />
                                                <h6 className="mb-0">Chicken wings</h6>
                                                <span className="text-muted text-sm">Beef, cheese, potato, onion,
                                                    fries</span>
                                                <div className="row align-items-center mt-4">
                                                    <div className="col-sm-6"><span className="text-md mr-4"><span
                                                        className="text-muted">from</span> $<span
                                                            data-product-base-price>13.00</span></span></div>
                                                    <div className="col-sm-6 text-sm-right mt-2 mt-sm-0"><button
                                                        className="btn btn-outline-secondary btn-sm"
                                                        data-action="open-cart-modal" data-id="5"><span>Add to
                                                            cart</span></button></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-6">
                                            {/* <!-- Menu Item --> */}
                                            <div className="menu-item menu-grid-item">
                                                <img className="mb-4"
                                                    src="http://assets.suelo.pl/soup/img/products/product-sushi.jpg"
                                                    alt="" />
                                                <h6 className="mb-0">Nigiri-sushi</h6>
                                                <span className="text-muted text-sm">Beef, cheese, potato, onion,
                                                    fries</span>
                                                <div className="row align-items-center mt-4">
                                                    <div className="col-sm-6"><span className="text-md mr-4"><span
                                                        className="text-muted">from</span> $<span
                                                            data-product-base-price>13.00</span></span></div>
                                                    <div className="col-sm-6 text-sm-right mt-2 mt-sm-0"><button
                                                        className="btn btn-outline-secondary btn-sm"
                                                        data-action="open-cart-modal" data-id="6"><span>Add to
                                                            cart</span></button></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

            {/* ProductModal */}
            <ProductModal
                page={page}
            />
        </>
    )
}

export default PageContent;