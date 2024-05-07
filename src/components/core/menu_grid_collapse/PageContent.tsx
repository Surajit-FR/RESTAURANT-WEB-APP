import { useState } from "react";
import ProductModal from "../../../utils/ProductModal";

const PageContent = (): JSX.Element => {
    const [page, setPage] = useState<string>("");

    return (
        <>
            {/* <!-- Page Content --> */}
            <div className="page-content">
                <div className="container">
                    <div className="row no-gutters">
                        <div className="col-md-10 offset-md-1" role="tablist">

                            {/* <!-- Menu Category / Burgers --> */}
                            <div id="Burgers" className="menu-category">
                                <div className="menu-category-title collapse-toggle" role="tab"
                                    data-target="#menuBurgersContent" data-toggle="collapse" aria-expanded="true">
                                    <div className="bg-image"><img
                                        src="http://assets.suelo.pl/soup/img/photos/menu-title-burgers.jpg" alt="" />
                                    </div>
                                    <h2 className="title">Burgers</h2>
                                </div>
                                <div id="menuBurgersContent" className="menu-category-content collapse show">
                                    <div className="p-4">
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
                                                                onClick={() => setPage("Grid_Collapse_Burgers_Beef_Burger")}
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
                                                                onClick={() => setPage("Grid_Collapse_Burgers_Broccoli")}
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
                                                                onClick={() => setPage("Grid_Collapse_Burgers_Chicken_Burger")}
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
                                                                onClick={() => setPage("Grid_Collapse_Burgers_Creste_di_Galli")}
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
                                                                onClick={() => setPage("Grid_Collapse_Burgers_Chicken_wings")}
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
                                                                onClick={() => setPage("Grid_Collapse_Burgers_Nigiri_sushi")}
                                                            ><span>Add to cart</span>
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- Menu Category / Pasta --> */}
                            <div id="Pasta" className="menu-category">
                                <div className="menu-category-title collapse-toggle collapsed" role="tab"
                                    data-target="#menuPastaContent" data-toggle="collapse" aria-expanded="false">
                                    <div className="bg-image"><img
                                        src="http://assets.suelo.pl/soup/img/photos/menu-title-pasta.jpg" alt="" />
                                    </div>
                                    <h2 className="title">Pasta</h2>
                                </div>
                                <div id="menuPastaContent" className="menu-category-content collapse">
                                    <div className="p-4">
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
                                                                onClick={() => setPage("Grid_Collapse_Pasta_Beef_Burger")}
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
                                                                onClick={() => setPage("Grid_Collapse_Pasta_Broccoli")}
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
                                                                onClick={() => setPage("Grid_Collapse_Pasta_Chicken_Burger")}
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
                                                                onClick={() => setPage("Grid_Collapse_Pasta_Creste_di_Galli")}
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
                                                                onClick={() => setPage("Grid_Collapse_Pasta_Chicken_wings")}
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
                                                                onClick={() => setPage("Grid_Collapse_Pasta_Nigiri_sushi")}
                                                            ><span>Add to cart</span>
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- Menu Category / Pizza --> */}
                            <div id="Pizza" className="menu-category">
                                <div className="menu-category-title collapse-toggle collapsed" role="tab"
                                    data-target="#menuPizzaContent" data-toggle="collapse" aria-expanded="false">
                                    <div className="bg-image"><img
                                        src="http://assets.suelo.pl/soup/img/photos/menu-title-pizza.jpg" alt="" />
                                    </div>
                                    <h2 className="title">Pizza</h2>
                                </div>
                                <div id="menuPizzaContent" className="menu-category-content collapse">
                                    <div className="p-4">
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
                                                                onClick={() => setPage("Grid_Collapse_Pizza_Beef_Burger")}
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
                                                                onClick={() => setPage("Grid_Collapse_Pizza_Broccoli")}
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
                                                                onClick={() => setPage("Grid_Collapse_Pizza_Chicken_Burger")}
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
                                                                onClick={() => setPage("Grid_Collapse_Pizza_Creste_di_Galli")}
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
                                                                onClick={() => setPage("Grid_Collapse_Pizza_Chicken_wings")}
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
                                                                onClick={() => setPage("Grid_Collapse_Pizza_Nigiri_sushi")}
                                                            ><span>Add to cart</span>
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- Menu Category / Sushi --> */}
                            <div id="Sushi" className="menu-category">
                                <div className="menu-category-title collapse-toggle collapsed" role="tab"
                                    data-target="#menuSushiContent" data-toggle="collapse" aria-expanded="false">
                                    <div className="bg-image"><img
                                        src="http://assets.suelo.pl/soup/img/photos/menu-title-sushi.jpg" alt="" />
                                    </div>
                                    <h2 className="title">Sushi</h2>
                                </div>
                                <div id="menuSushiContent" className="menu-category-content collapse">
                                    <div className="p-4">
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
                                                                onClick={() => setPage("Grid_Collapse_Sushi_Beef_Burger")}
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
                                                                onClick={() => setPage("Grid_Collapse_Sushi_Broccoli")}
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
                                                                onClick={() => setPage("Grid_Collapse_Sushi_Chicken_Burger")}
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
                                                                onClick={() => setPage("Grid_Collapse_Sushi_Creste_di_Galli")}
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
                                                                onClick={() => setPage("Grid_Collapse_Sushi_Chicken_wings")}
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
                                                                onClick={() => setPage("Grid_Collapse_Sushi_Nigiri_sushi")}
                                                            ><span>Add to cart</span>
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- Menu Category / Desserts --> */}
                            <div id="Desserts" className="menu-category">
                                <div className="menu-category-title collapse-toggle collapsed" role="tab"
                                    data-target="#menuDessertsContent" data-toggle="collapse" aria-expanded="false">
                                    <div className="bg-image"><img
                                        src="http://assets.suelo.pl/soup/img/photos/menu-title-desserts.jpg" alt="" />
                                    </div>
                                    <h2 className="title">Desserts</h2>
                                </div>
                                <div id="menuDessertsContent" className="menu-category-content collapse">
                                    <div className="p-4">
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
                                                                onClick={() => setPage("Grid_Collapse_Desserts_Beef_Burger")}
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
                                                                onClick={() => setPage("Grid_Collapse_Desserts_Broccoli")}
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
                                                                onClick={() => setPage("Grid_Collapse_Desserts_Chicken_Burger")}
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
                                                                onClick={() => setPage("Grid_Collapse_Desserts_Creste_di_Galli")}
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
                                                                onClick={() => setPage("Grid_Collapse_Desserts_Chicken_wings")}
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
                                                                onClick={() => setPage("Grid_Collapse_Desserts_Nigiri_sushi")}
                                                            ><span>Add to cart</span>
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- Menu Category / Drinks --> */}
                            <div id="Drinks" className="menu-category">
                                <div className="menu-category-title collapse-toggle collapsed" role="tab"
                                    data-target="#menuDrinksContent" data-toggle="collapse" aria-expanded="false">
                                    <div className="bg-image"><img
                                        src="http://assets.suelo.pl/soup/img/photos/menu-title-drinks.jpg" alt="" />
                                    </div>
                                    <h2 className="title">Drinks</h2>
                                </div>
                                <div id="menuDrinksContent" className="menu-category-content collapse">
                                    <div className="p-4">
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
                                                                onClick={() => setPage("Grid_Collapse_Drinks_Beef_Burger")}
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
                                                                onClick={() => setPage("Grid_Collapse_Drinks_Broccoli")}
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
                                                                onClick={() => setPage("Grid_Collapse_Drinks_Chicken_Burger")}
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
                                                                onClick={() => setPage("Grid_Collapse_Drinks_Creste_di_Galli")}
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
                                                                onClick={() => setPage("Grid_Collapse_Drinks_Chicken_wings")}
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
                                                                onClick={() => setPage("Grid_Collapse_Drinks_Nigiri_sushi")}
                                                            ><span>Add to cart</span>
                                                            </button>
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