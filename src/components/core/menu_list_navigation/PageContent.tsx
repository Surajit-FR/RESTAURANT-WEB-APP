import { useEffect, useState } from "react";
import ProductModal from "../../../utils/ProductModal";
import { HashLink } from "react-router-hash-link";

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
                                    <div className="bg-image"><img src="http://assets.suelo.pl/soup/img/photos/menu-title-burgers.jpg" alt="" /></div>
                                    <h2 className="title">Burgers</h2>
                                </div>
                                <div className="menu-category-content">
                                    {/* <!-- Menu Item --> */}
                                    <div className="menu-item menu-list-item">
                                        <div className="row align-items-center">
                                            <div className="col-sm-6 mb-2 mb-sm-0">
                                                <h6 className="mb-0">Beef Burger</h6>
                                                <span className="text-muted text-sm">Beef, cheese, potato, onion, fries</span>
                                            </div>
                                            <div className="col-sm-6 text-sm-right">
                                                <span className="text-md mr-4"><span className="text-muted">from</span> $<span data-product-base-price>9.00</span></span>
                                                <button
                                                    className="btn btn-outline-secondary btn-sm"
                                                    data-bs-toggle="modal"
                                                    data-bs-target={`#exampleModal${page}`}
                                                    onClick={() => setPage("List_Navigation_Burgers_Beef_Burger")}
                                                ><span>Add to cart</span></button>
                                            </div>
                                        </div>
                                    </div>
                                    {/* <!-- Menu Item --> */}
                                    <div className="menu-item menu-list-item">
                                        <div className="row align-items-center">
                                            <div className="col-sm-6 mb-2 mb-sm-0">
                                                <h6 className="mb-0">Broccoli</h6>
                                                <span className="text-muted text-sm">Chicken, cheese, potato, onion, fries</span>
                                            </div>
                                            <div className="col-sm-6 text-sm-right">
                                                <span className="text-md mr-4"><span className="text-muted">from</span> $<span data-product-base-price>9.00</span></span>
                                                <button
                                                    className="btn btn-outline-secondary btn-sm"
                                                    data-bs-toggle="modal"
                                                    data-bs-target={`#exampleModal${page}`}
                                                    onClick={() => setPage("List_Navigation_Burgers_Broccoli")}
                                                ><span>Add to cart</span></button>
                                            </div>
                                        </div>
                                    </div>
                                    {/* <!-- Menu Item --> */}
                                    <div className="menu-item menu-list-item">
                                        <div className="row align-items-center">
                                            <div className="col-sm-6 mb-2 mb-sm-0">
                                                <h6 className="mb-0">Chicken Burger</h6>
                                                <span className="text-muted text-sm">Chicken, cheese, potato, onion, fries</span>
                                            </div>
                                            <div className="col-sm-6 text-sm-right">
                                                <span className="text-md mr-4"><span className="text-muted">from</span> $<span data-product-base-price>14.00</span></span>
                                                <button
                                                    className="btn btn-outline-secondary btn-sm"
                                                    data-bs-toggle="modal"
                                                    data-bs-target={`#exampleModal${page}`}
                                                    onClick={() => setPage("List_Navigation_Burgers_Chicken_Burger")}
                                                ><span>Add to cart</span></button>
                                            </div>
                                        </div>
                                    </div>
                                    {/* <!-- Menu Item --> */}
                                    <div className="menu-item menu-list-item">
                                        <div className="row align-items-center">
                                            <div className="col-sm-6 mb-2 mb-sm-0">
                                                <h6 className="mb-0">Creste di Galli</h6>
                                                <span className="text-muted text-sm">Pasta, cheese, potato, onion, fries</span>
                                            </div>
                                            <div className="col-sm-6 text-sm-right">
                                                <span className="text-md mr-4"><span className="text-muted">from</span> $<span data-product-base-price>13.00</span></span>
                                                <button
                                                    className="btn btn-outline-secondary btn-sm"
                                                    data-bs-toggle="modal"
                                                    data-bs-target={`#exampleModal${page}`}
                                                    onClick={() => setPage("List_Navigation_Burgers_Creste_di_Galli")}
                                                ><span>Add to cart</span></button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* <!-- Menu Category / Pasta --> */}
                            <div id="Pasta" className="menu-category">
                                <div className="menu-category-title">
                                    <div className="bg-image"><img src="http://assets.suelo.pl/soup/img/photos/menu-title-pasta.jpg" alt="" /></div>
                                    <h2 className="title">Pasta</h2>
                                </div>
                                <div className="menu-category-content">
                                    {/* <!-- Menu Item --> */}
                                    <div className="menu-item menu-list-item">
                                        <div className="row align-items-center">
                                            <div className="col-sm-6 mb-2 mb-sm-0">
                                                <h6 className="mb-0">Beef Burger</h6>
                                                <span className="text-muted text-sm">Beef, cheese, potato, onion, fries</span>
                                            </div>
                                            <div className="col-sm-6 text-sm-right">
                                                <span className="text-md mr-4"><span className="text-muted">from</span> $<span data-product-base-price>9.00</span></span>
                                                <button
                                                    className="btn btn-outline-secondary btn-sm"
                                                    data-bs-toggle="modal"
                                                    data-bs-target={`#exampleModal${page}`}
                                                    onClick={() => setPage("List_Navigation_Pasta_Beef_Burger")}
                                                ><span>Add to cart</span></button>
                                            </div>
                                        </div>
                                    </div>
                                    {/* <!-- Menu Item --> */}
                                    <div className="menu-item menu-list-item">
                                        <div className="row align-items-center">
                                            <div className="col-sm-6 mb-2 mb-sm-0">
                                                <h6 className="mb-0">Broccoli</h6>
                                                <span className="text-muted text-sm">Chicken, cheese, potato, onion, fries</span>
                                            </div>
                                            <div className="col-sm-6 text-sm-right">
                                                <span className="text-md mr-4"><span className="text-muted">from</span> $<span data-product-base-price>9.00</span></span>
                                                <button
                                                    className="btn btn-outline-secondary btn-sm"
                                                    data-bs-toggle="modal"
                                                    data-bs-target={`#exampleModal${page}`}
                                                    onClick={() => setPage("List_Navigation_Pasta_Broccoli")}
                                                ><span>Add to cart</span></button>
                                            </div>
                                        </div>
                                    </div>
                                    {/* <!-- Menu Item --> */}
                                    <div className="menu-item menu-list-item">
                                        <div className="row align-items-center">
                                            <div className="col-sm-6 mb-2 mb-sm-0">
                                                <h6 className="mb-0">Chicken Burger</h6>
                                                <span className="text-muted text-sm">Chicken, cheese, potato, onion, fries</span>
                                            </div>
                                            <div className="col-sm-6 text-sm-right">
                                                <span className="text-md mr-4"><span className="text-muted">from</span> $<span data-product-base-price>14.00</span></span>
                                                <button
                                                    className="btn btn-outline-secondary btn-sm"
                                                    data-bs-toggle="modal"
                                                    data-bs-target={`#exampleModal${page}`}
                                                    onClick={() => setPage("List_Navigation_Pasta_Chicken_Burger")}
                                                ><span>Add to cart</span></button>
                                            </div>
                                        </div>
                                    </div>
                                    {/* <!-- Menu Item --> */}
                                    <div className="menu-item menu-list-item">
                                        <div className="row align-items-center">
                                            <div className="col-sm-6 mb-2 mb-sm-0">
                                                <h6 className="mb-0">Creste di Galli</h6>
                                                <span className="text-muted text-sm">Pasta, cheese, potato, onion, fries</span>
                                            </div>
                                            <div className="col-sm-6 text-sm-right">
                                                <span className="text-md mr-4"><span className="text-muted">from</span> $<span data-product-base-price>13.00</span></span>
                                                <button
                                                    className="btn btn-outline-secondary btn-sm"
                                                    data-bs-toggle="modal"
                                                    data-bs-target={`#exampleModal${page}`}
                                                    onClick={() => setPage("List_Navigation_Pasta_Creste_di_Galli")}
                                                ><span>Add to cart</span></button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* <!-- Menu Category / Pizza --> */}
                            <div id="Pizza" className="menu-category">
                                <div className="menu-category-title">
                                    <div className="bg-image"><img src="http://assets.suelo.pl/soup/img/photos/menu-title-pizza.jpg" alt="" /></div>
                                    <h2 className="title">Pizza</h2>
                                </div>
                                <div className="menu-category-content">
                                    {/* <!-- Menu Item --> */}
                                    <div className="menu-item menu-list-item">
                                        <div className="row align-items-center">
                                            <div className="col-sm-6 mb-2 mb-sm-0">
                                                <h6 className="mb-0">Beef Burger</h6>
                                                <span className="text-muted text-sm">Beef, cheese, potato, onion, fries</span>
                                            </div>
                                            <div className="col-sm-6 text-sm-right">
                                                <span className="text-md mr-4"><span className="text-muted">from</span> $<span data-product-base-price>9.00</span></span>
                                                <button
                                                    className="btn btn-outline-secondary btn-sm"
                                                    data-bs-toggle="modal"
                                                    data-bs-target={`#exampleModal${page}`}
                                                    onClick={() => setPage("List_Navigation_Pizza_Beef_Burger")}
                                                ><span>Add to cart</span></button>
                                            </div>
                                        </div>
                                    </div>
                                    {/* <!-- Menu Item --> */}
                                    <div className="menu-item menu-list-item">
                                        <div className="row align-items-center">
                                            <div className="col-sm-6 mb-2 mb-sm-0">
                                                <h6 className="mb-0">Broccoli</h6>
                                                <span className="text-muted text-sm">Chicken, cheese, potato, onion, fries</span>
                                            </div>
                                            <div className="col-sm-6 text-sm-right">
                                                <span className="text-md mr-4"><span className="text-muted">from</span> $<span data-product-base-price>9.00</span></span>
                                                <button
                                                    className="btn btn-outline-secondary btn-sm"
                                                    data-bs-toggle="modal"
                                                    data-bs-target={`#exampleModal${page}`}
                                                    onClick={() => setPage("List_Navigation_Pizza_Broccoli")}
                                                ><span>Add to cart</span></button>
                                            </div>
                                        </div>
                                    </div>
                                    {/* <!-- Menu Item --> */}
                                    <div className="menu-item menu-list-item">
                                        <div className="row align-items-center">
                                            <div className="col-sm-6 mb-2 mb-sm-0">
                                                <h6 className="mb-0">Chicken Burger</h6>
                                                <span className="text-muted text-sm">Chicken, cheese, potato, onion, fries</span>
                                            </div>
                                            <div className="col-sm-6 text-sm-right">
                                                <span className="text-md mr-4"><span className="text-muted">from</span> $<span data-product-base-price>14.00</span></span>
                                                <button
                                                    className="btn btn-outline-secondary btn-sm"
                                                    data-bs-toggle="modal"
                                                    data-bs-target={`#exampleModal${page}`}
                                                    onClick={() => setPage("List_Navigation_Pizza_Chicken_Burger")}
                                                ><span>Add to cart</span></button>
                                            </div>
                                        </div>
                                    </div>
                                    {/* <!-- Menu Item --> */}
                                    <div className="menu-item menu-list-item">
                                        <div className="row align-items-center">
                                            <div className="col-sm-6 mb-2 mb-sm-0">
                                                <h6 className="mb-0">Creste di Galli</h6>
                                                <span className="text-muted text-sm">Pasta, cheese, potato, onion, fries</span>
                                            </div>
                                            <div className="col-sm-6 text-sm-right">
                                                <span className="text-md mr-4"><span className="text-muted">from</span> $<span data-product-base-price>13.00</span></span>
                                                <button
                                                    className="btn btn-outline-secondary btn-sm"
                                                    data-bs-toggle="modal"
                                                    data-bs-target={`#exampleModal${page}`}
                                                    onClick={() => setPage("List_Navigation_Pizza_Creste_di_Galli")}
                                                ><span>Add to cart</span></button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* <!-- Menu Category / Sushi --> */}
                            <div id="Sushi" className="menu-category">
                                <div className="menu-category-title">
                                    <div className="bg-image"><img src="http://assets.suelo.pl/soup/img/photos/menu-title-sushi.jpg" alt="" /></div>
                                    <h2 className="title">Sushi</h2>
                                </div>
                                <div className="menu-category-content">
                                    {/* <!-- Menu Item --> */}
                                    <div className="menu-item menu-list-item">
                                        <div className="row align-items-center">
                                            <div className="col-sm-6 mb-2 mb-sm-0">
                                                <h6 className="mb-0">Beef Burger</h6>
                                                <span className="text-muted text-sm">Beef, cheese, potato, onion, fries</span>
                                            </div>
                                            <div className="col-sm-6 text-sm-right">
                                                <span className="text-md mr-4"><span className="text-muted">from</span> $<span data-product-base-price>9.00</span></span>
                                                <button
                                                    className="btn btn-outline-secondary btn-sm"
                                                    data-bs-toggle="modal"
                                                    data-bs-target={`#exampleModal${page}`}
                                                    onClick={() => setPage("List_Navigation_Sushi_Beef_Burger")}
                                                ><span>Add to cart</span></button>
                                            </div>
                                        </div>
                                    </div>
                                    {/* <!-- Menu Item --> */}
                                    <div className="menu-item menu-list-item">
                                        <div className="row align-items-center">
                                            <div className="col-sm-6 mb-2 mb-sm-0">
                                                <h6 className="mb-0">Broccoli</h6>
                                                <span className="text-muted text-sm">Chicken, cheese, potato, onion, fries</span>
                                            </div>
                                            <div className="col-sm-6 text-sm-right">
                                                <span className="text-md mr-4"><span className="text-muted">from</span> $<span data-product-base-price>9.00</span></span>
                                                <button
                                                    className="btn btn-outline-secondary btn-sm"
                                                    data-bs-toggle="modal"
                                                    data-bs-target={`#exampleModal${page}`}
                                                    onClick={() => setPage("List_Navigation_Sushi_Broccoli")}
                                                ><span>Add to cart</span></button>
                                            </div>
                                        </div>
                                    </div>
                                    {/* <!-- Menu Item --> */}
                                    <div className="menu-item menu-list-item">
                                        <div className="row align-items-center">
                                            <div className="col-sm-6 mb-2 mb-sm-0">
                                                <h6 className="mb-0">Chicken Burger</h6>
                                                <span className="text-muted text-sm">Chicken, cheese, potato, onion, fries</span>
                                            </div>
                                            <div className="col-sm-6 text-sm-right">
                                                <span className="text-md mr-4"><span className="text-muted">from</span> $<span data-product-base-price>14.00</span></span>
                                                <button
                                                    className="btn btn-outline-secondary btn-sm"
                                                    data-bs-toggle="modal"
                                                    data-bs-target={`#exampleModal${page}`}
                                                    onClick={() => setPage("List_Navigation_Sushi_Chicken_Burger")}
                                                ><span>Add to cart</span></button>
                                            </div>
                                        </div>
                                    </div>
                                    {/* <!-- Menu Item --> */}
                                    <div className="menu-item menu-list-item">
                                        <div className="row align-items-center">
                                            <div className="col-sm-6 mb-2 mb-sm-0">
                                                <h6 className="mb-0">Creste di Galli</h6>
                                                <span className="text-muted text-sm">Pasta, cheese, potato, onion, fries</span>
                                            </div>
                                            <div className="col-sm-6 text-sm-right">
                                                <span className="text-md mr-4"><span className="text-muted">from</span> $<span data-product-base-price>13.00</span></span>
                                                <button
                                                    className="btn btn-outline-secondary btn-sm"
                                                    data-bs-toggle="modal"
                                                    data-bs-target={`#exampleModal${page}`}
                                                    onClick={() => setPage("List_Navigation_Sushi_Creste_di_Galli")}
                                                ><span>Add to cart</span></button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* <!-- Menu Category / Desserts --> */}
                            <div id="Desserts" className="menu-category">
                                <div className="menu-category-title">
                                    <div className="bg-image"><img src="http://assets.suelo.pl/soup/img/photos/menu-title-desserts.jpg" alt="" /></div>
                                    <h2 className="title">Desserts</h2>
                                </div>
                                <div className="menu-category-content">
                                    {/* <!-- Menu Item --> */}
                                    <div className="menu-item menu-list-item">
                                        <div className="row align-items-center">
                                            <div className="col-sm-6 mb-2 mb-sm-0">
                                                <h6 className="mb-0">Beef Burger</h6>
                                                <span className="text-muted text-sm">Beef, cheese, potato, onion, fries</span>
                                            </div>
                                            <div className="col-sm-6 text-sm-right">
                                                <span className="text-md mr-4"><span className="text-muted">from</span> $<span data-product-base-price>9.00</span></span>
                                                <button
                                                    className="btn btn-outline-secondary btn-sm"
                                                    data-bs-toggle="modal"
                                                    data-bs-target={`#exampleModal${page}`}
                                                    onClick={() => setPage("List_Navigation_Desserts_Beef_Burger")}
                                                ><span>Add to cart</span></button>
                                            </div>
                                        </div>
                                    </div>
                                    {/* <!-- Menu Item --> */}
                                    <div className="menu-item menu-list-item">
                                        <div className="row align-items-center">
                                            <div className="col-sm-6 mb-2 mb-sm-0">
                                                <h6 className="mb-0">Broccoli</h6>
                                                <span className="text-muted text-sm">Chicken, cheese, potato, onion, fries</span>
                                            </div>
                                            <div className="col-sm-6 text-sm-right">
                                                <span className="text-md mr-4"><span className="text-muted">from</span> $<span data-product-base-price>9.00</span></span>
                                                <button
                                                    className="btn btn-outline-secondary btn-sm"
                                                    data-bs-toggle="modal"
                                                    data-bs-target={`#exampleModal${page}`}
                                                    onClick={() => setPage("List_Navigation_Desserts_Broccoli")}
                                                ><span>Add to cart</span></button>
                                            </div>
                                        </div>
                                    </div>
                                    {/* <!-- Menu Item --> */}
                                    <div className="menu-item menu-list-item">
                                        <div className="row align-items-center">
                                            <div className="col-sm-6 mb-2 mb-sm-0">
                                                <h6 className="mb-0">Chicken Burger</h6>
                                                <span className="text-muted text-sm">Chicken, cheese, potato, onion, fries</span>
                                            </div>
                                            <div className="col-sm-6 text-sm-right">
                                                <span className="text-md mr-4"><span className="text-muted">from</span> $<span data-product-base-price>14.00</span></span>
                                                <button
                                                    className="btn btn-outline-secondary btn-sm"
                                                    data-bs-toggle="modal"
                                                    data-bs-target={`#exampleModal${page}`}
                                                    onClick={() => setPage("List_Navigation_Desserts_Chicken_Burger")}
                                                ><span>Add to cart</span></button>
                                            </div>
                                        </div>
                                    </div>
                                    {/* <!-- Menu Item --> */}
                                    <div className="menu-item menu-list-item">
                                        <div className="row align-items-center">
                                            <div className="col-sm-6 mb-2 mb-sm-0">
                                                <h6 className="mb-0">Creste di Galli</h6>
                                                <span className="text-muted text-sm">Pasta, cheese, potato, onion, fries</span>
                                            </div>
                                            <div className="col-sm-6 text-sm-right">
                                                <span className="text-md mr-4"><span className="text-muted">from</span> $<span data-product-base-price>13.00</span></span>
                                                <button
                                                    className="btn btn-outline-secondary btn-sm"
                                                    data-bs-toggle="modal"
                                                    data-bs-target={`#exampleModal${page}`}
                                                    onClick={() => setPage("List_Navigation_Desserts_Creste_di_Galli")}
                                                ><span>Add to cart</span></button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* <!-- Menu Category / Drinks --> */}
                            <div id="Drinks" className="menu-category">
                                <div className="menu-category-title">
                                    <div className="bg-image"><img src="http://assets.suelo.pl/soup/img/photos/menu-title-drinks.jpg" alt="" /></div>
                                    <h2 className="title">Drinks</h2>
                                </div>
                                <div className="menu-category-content">
                                    {/* <!-- Menu Item --> */}
                                    <div className="menu-item menu-list-item">
                                        <div className="row align-items-center">
                                            <div className="col-sm-6 mb-2 mb-sm-0">
                                                <h6 className="mb-0">Beef Burger</h6>
                                                <span className="text-muted text-sm">Beef, cheese, potato, onion, fries</span>
                                            </div>
                                            <div className="col-sm-6 text-sm-right">
                                                <span className="text-md mr-4"><span className="text-muted">from</span> $<span data-product-base-price>9.00</span></span>
                                                <button
                                                    className="btn btn-outline-secondary btn-sm"
                                                    data-bs-toggle="modal"
                                                    data-bs-target={`#exampleModal${page}`}
                                                    onClick={() => setPage("List_Navigation_Drinks_Beef_Burger")}
                                                ><span>Add to cart</span></button>
                                            </div>
                                        </div>
                                    </div>
                                    {/* <!-- Menu Item --> */}
                                    <div className="menu-item menu-list-item">
                                        <div className="row align-items-center">
                                            <div className="col-sm-6 mb-2 mb-sm-0">
                                                <h6 className="mb-0">Broccoli</h6>
                                                <span className="text-muted text-sm">Chicken, cheese, potato, onion, fries</span>
                                            </div>
                                            <div className="col-sm-6 text-sm-right">
                                                <span className="text-md mr-4"><span className="text-muted">from</span> $<span data-product-base-price>9.00</span></span>
                                                <button
                                                    className="btn btn-outline-secondary btn-sm"
                                                    data-bs-toggle="modal"
                                                    data-bs-target={`#exampleModal${page}`}
                                                    onClick={() => setPage("List_Navigation_Drinks_Broccoli")}
                                                ><span>Add to cart</span></button>
                                            </div>
                                        </div>
                                    </div>
                                    {/* <!-- Menu Item --> */}
                                    <div className="menu-item menu-list-item">
                                        <div className="row align-items-center">
                                            <div className="col-sm-6 mb-2 mb-sm-0">
                                                <h6 className="mb-0">Chicken Burger</h6>
                                                <span className="text-muted text-sm">Chicken, cheese, potato, onion, fries</span>
                                            </div>
                                            <div className="col-sm-6 text-sm-right">
                                                <span className="text-md mr-4"><span className="text-muted">from</span> $<span data-product-base-price>14.00</span></span>
                                                <button
                                                    className="btn btn-outline-secondary btn-sm"
                                                    data-bs-toggle="modal"
                                                    data-bs-target={`#exampleModal${page}`}
                                                    onClick={() => setPage("List_Navigation_Drinks_Chicken_Burger")}
                                                ><span>Add to cart</span></button>
                                            </div>
                                        </div>
                                    </div>
                                    {/* <!-- Menu Item --> */}
                                    <div className="menu-item menu-list-item">
                                        <div className="row align-items-center">
                                            <div className="col-sm-6 mb-2 mb-sm-0">
                                                <h6 className="mb-0">Creste di Galli</h6>
                                                <span className="text-muted text-sm">Pasta, cheese, potato, onion, fries</span>
                                            </div>
                                            <div className="col-sm-6 text-sm-right">
                                                <span className="text-md mr-4"><span className="text-muted">from</span> $<span data-product-base-price>13.00</span></span>
                                                <button
                                                    className="btn btn-outline-secondary btn-sm"
                                                    data-bs-toggle="modal"
                                                    data-bs-target={`#exampleModal${page}`}
                                                    onClick={() => setPage("List_Navigation_Drinks_Creste_di_Galli")}
                                                ><span>Add to cart</span></button>
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

export default PageContent