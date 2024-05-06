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
                                    <div className="bg-image"><img src="http://assets.suelo.pl/soup/img/photos/menu-title-burgers.jpg" alt="" />
                                    </div>
                                    <h2 className="title">Burgers</h2>
                                </div>
                                <div id="menuBurgersContent" className="menu-category-content collapse show">
                                    {/* <!-- Menu Item --> */}
                                    <div className="menu-item menu-list-item">
                                        <div className="row align-items-center">
                                            <div className="col-sm-6 mb-2 mb-sm-0">
                                                <h6 className="mb-0">Beef Burger</h6>
                                                <span className="text-muted text-sm">Beef, cheese, potato, onion,
                                                    fries</span>
                                            </div>
                                            <div className="col-sm-6 text-sm-right">
                                                <span className="text-md mr-4"><span className="text-muted">from</span> $<span
                                                    data-product-base-price>9.00</span></span>
                                                <button
                                                    className="btn btn-outline-secondary btn-sm"
                                                    data-bs-toggle="modal"
                                                    data-bs-target={`#exampleModal${page}`}
                                                    onClick={() => setPage("List_Collapse_Burgers_Beef_Burger")}
                                                ><span>Add to
                                                    cart</span></button>
                                            </div>
                                        </div>
                                    </div>
                                    {/* <!-- Menu Item --> */}
                                    <div className="menu-item menu-list-item">
                                        <div className="row align-items-center">
                                            <div className="col-sm-6 mb-2 mb-sm-0">
                                                <h6 className="mb-0">Broccoli</h6>
                                                <span className="text-muted text-sm">Chicken, cheese, potato, onion,
                                                    fries</span>
                                            </div>
                                            <div className="col-sm-6 text-sm-right">
                                                <span className="text-md mr-4"><span className="text-muted">from</span> $<span
                                                    data-product-base-price>9.00</span></span>
                                                <button
                                                    className="btn btn-outline-secondary btn-sm"
                                                    data-bs-toggle="modal"
                                                    data-bs-target={`#exampleModal${page}`}
                                                    onClick={() => setPage("List_Collapse_Burgers_Broccoli")}
                                                ><span>Add to
                                                    cart</span></button>
                                            </div>
                                        </div>
                                    </div>
                                    {/* <!-- Menu Item --> */}
                                    <div className="menu-item menu-list-item">
                                        <div className="row align-items-center">
                                            <div className="col-sm-6 mb-2 mb-sm-0">
                                                <h6 className="mb-0">Chicken Burger</h6>
                                                <span className="text-muted text-sm">Chicken, cheese, potato, onion,
                                                    fries</span>
                                            </div>
                                            <div className="col-sm-6 text-sm-right">
                                                <span className="text-md mr-4"><span className="text-muted">from</span> $<span
                                                    data-product-base-price>9.00</span></span>
                                                <button
                                                    className="btn btn-outline-secondary btn-sm"
                                                    data-bs-toggle="modal"
                                                    data-bs-target={`#exampleModal${page}`}
                                                    onClick={() => setPage("List_Collapse_Burgers_Chicken_Burger")}
                                                ><span>Add to
                                                    cart</span></button>
                                            </div>
                                        </div>
                                    </div>
                                    {/* <!-- Menu Item --> */}
                                    <div className="menu-item menu-list-item">
                                        <div className="row align-items-center">
                                            <div className="col-sm-6 mb-2 mb-sm-0">
                                                <h6 className="mb-0">Creste di Galli</h6>
                                                <span className="text-muted text-sm">Pasta, cheese, potato, onion,
                                                    fries</span>
                                            </div>
                                            <div className="col-sm-6 text-sm-right">
                                                <span className="text-md mr-4"><span className="text-muted">from</span> $<span
                                                    data-product-base-price>9.00</span></span>
                                                <button
                                                    className="btn btn-outline-secondary btn-sm"
                                                    data-bs-toggle="modal"
                                                    data-bs-target={`#exampleModal${page}`}
                                                    onClick={() => setPage("List_Collapse_Burgers_Creste_di_Galli")}
                                                ><span>Add to
                                                    cart</span></button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- Menu Category / Pasta --> */}
                            <div id="Pasta" className="menu-category">
                                <div className="menu-category-title collapse-toggle" role="tab"
                                    data-target="#menuPastaContent" data-toggle="collapse" aria-expanded="false">
                                    <div className="bg-image"><img src="http://assets.suelo.pl/soup/img/photos/menu-title-pasta.jpg" alt="" />
                                    </div>
                                    <h2 className="title">Pasta</h2>
                                </div>
                                <div id="menuPastaContent" className="menu-category-content collapse">
                                    {/* <!-- Menu Item --> */}
                                    <div className="menu-item menu-list-item">
                                        <div className="row align-items-center">
                                            <div className="col-sm-6 mb-2 mb-sm-0">
                                                <h6 className="mb-0">Beef Burger</h6>
                                                <span className="text-muted text-sm">Beef, cheese, potato, onion,
                                                    fries</span>
                                            </div>
                                            <div className="col-sm-6 text-sm-right">
                                                <span className="text-md mr-4"><span className="text-muted">from</span> $<span
                                                    data-product-base-price>9.00</span></span>
                                                <button
                                                    className="btn btn-outline-secondary btn-sm"
                                                    data-bs-toggle="modal"
                                                    data-bs-target={`#exampleModal${page}`}
                                                    onClick={() => setPage("List_Collapse_Pasta_Beef_Burger")}
                                                ><span>Add to
                                                    cart</span></button>
                                            </div>
                                        </div>
                                    </div>
                                    {/* <!-- Menu Item --> */}
                                    <div className="menu-item menu-list-item">
                                        <div className="row align-items-center">
                                            <div className="col-sm-6 mb-2 mb-sm-0">
                                                <h6 className="mb-0">Broccoli</h6>
                                                <span className="text-muted text-sm">Chicken, cheese, potato, onion,
                                                    fries</span>
                                            </div>
                                            <div className="col-sm-6 text-sm-right">
                                                <span className="text-md mr-4"><span className="text-muted">from</span> $<span
                                                    data-product-base-price>9.00</span></span>
                                                <button
                                                    className="btn btn-outline-secondary btn-sm"
                                                    data-bs-toggle="modal"
                                                    data-bs-target={`#exampleModal${page}`}
                                                    onClick={() => setPage("List_Collapse_Pasta_Broccoli")}
                                                ><span>Add to
                                                    cart</span></button>
                                            </div>
                                        </div>
                                    </div>
                                    {/* <!-- Menu Item --> */}
                                    <div className="menu-item menu-list-item">
                                        <div className="row align-items-center">
                                            <div className="col-sm-6 mb-2 mb-sm-0">
                                                <h6 className="mb-0">Chicken Burger</h6>
                                                <span className="text-muted text-sm">Chicken, cheese, potato, onion,
                                                    fries</span>
                                            </div>
                                            <div className="col-sm-6 text-sm-right">
                                                <span className="text-md mr-4"><span className="text-muted">from</span> $<span
                                                    data-product-base-price>9.00</span></span>
                                                <button
                                                    className="btn btn-outline-secondary btn-sm"
                                                    data-bs-toggle="modal"
                                                    data-bs-target={`#exampleModal${page}`}
                                                    onClick={() => setPage("List_Collapse_Pasta_Chicken_Burger")}
                                                ><span>Add to
                                                    cart</span></button>
                                            </div>
                                        </div>
                                    </div>
                                    {/* <!-- Menu Item --> */}
                                    <div className="menu-item menu-list-item">
                                        <div className="row align-items-center">
                                            <div className="col-sm-6 mb-2 mb-sm-0">
                                                <h6 className="mb-0">Creste di Galli</h6>
                                                <span className="text-muted text-sm">Pasta, cheese, potato, onion,
                                                    fries</span>
                                            </div>
                                            <div className="col-sm-6 text-sm-right">
                                                <span className="text-md mr-4"><span className="text-muted">from</span> $<span
                                                    data-product-base-price>9.00</span></span>
                                                <button
                                                    className="btn btn-outline-secondary btn-sm"
                                                    data-bs-toggle="modal"
                                                    data-bs-target={`#exampleModal${page}`}
                                                    onClick={() => setPage("List_Collapse_Pasta_Creste_di_Galli")}
                                                ><span>Add to
                                                    cart</span></button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- Menu Category / Pizza --> */}
                            <div id="Pizza" className="menu-category">
                                <div className="menu-category-title collapse-toggle" role="tab"
                                    data-target="#menuPizzaContent" data-toggle="collapse" aria-expanded="false">
                                    <div className="bg-image"><img src="http://assets.suelo.pl/soup/img/photos/menu-title-pizza.jpg" alt="" />
                                    </div>
                                    <h2 className="title">Pizza</h2>
                                </div>
                                <div id="menuPizzaContent" className="menu-category-content collapse">
                                    {/* <!-- Menu Item --> */}
                                    <div className="menu-item menu-list-item">
                                        <div className="row align-items-center">
                                            <div className="col-sm-6 mb-2 mb-sm-0">
                                                <h6 className="mb-0">Beef Burger</h6>
                                                <span className="text-muted text-sm">Beef, cheese, potato, onion,
                                                    fries</span>
                                            </div>
                                            <div className="col-sm-6 text-sm-right">
                                                <span className="text-md mr-4"><span className="text-muted">from</span> $<span
                                                    data-product-base-price>9.00</span></span>
                                                <button
                                                    className="btn btn-outline-secondary btn-sm"
                                                    data-bs-toggle="modal"
                                                    data-bs-target={`#exampleModal${page}`}
                                                    onClick={() => setPage("List_Collapse_Pizza_Beef_Burger")}
                                                ><span>Add to
                                                    cart</span></button>
                                            </div>
                                        </div>
                                    </div>
                                    {/* <!-- Menu Item --> */}
                                    <div className="menu-item menu-list-item">
                                        <div className="row align-items-center">
                                            <div className="col-sm-6 mb-2 mb-sm-0">
                                                <h6 className="mb-0">Broccoli</h6>
                                                <span className="text-muted text-sm">Chicken, cheese, potato, onion,
                                                    fries</span>
                                            </div>
                                            <div className="col-sm-6 text-sm-right">
                                                <span className="text-md mr-4"><span className="text-muted">from</span> $<span
                                                    data-product-base-price>9.00</span></span>
                                                <button
                                                    className="btn btn-outline-secondary btn-sm"
                                                    data-bs-toggle="modal"
                                                    data-bs-target={`#exampleModal${page}`}
                                                    onClick={() => setPage("List_Collapse_Pizza_Broccoli")}
                                                ><span>Add to
                                                    cart</span></button>
                                            </div>
                                        </div>
                                    </div>
                                    {/* <!-- Menu Item --> */}
                                    <div className="menu-item menu-list-item">
                                        <div className="row align-items-center">
                                            <div className="col-sm-6 mb-2 mb-sm-0">
                                                <h6 className="mb-0">Chicken Burger</h6>
                                                <span className="text-muted text-sm">Chicken, cheese, potato, onion,
                                                    fries</span>
                                            </div>
                                            <div className="col-sm-6 text-sm-right">
                                                <span className="text-md mr-4"><span className="text-muted">from</span> $<span
                                                    data-product-base-price>9.00</span></span>
                                                <button
                                                    className="btn btn-outline-secondary btn-sm"
                                                    data-bs-toggle="modal"
                                                    data-bs-target={`#exampleModal${page}`}
                                                    onClick={() => setPage("List_Collapse_Pizza_Chicken_Burger")}
                                                ><span>Add to
                                                    cart</span></button>
                                            </div>
                                        </div>
                                    </div>
                                    {/* <!-- Menu Item --> */}
                                    <div className="menu-item menu-list-item">
                                        <div className="row align-items-center">
                                            <div className="col-sm-6 mb-2 mb-sm-0">
                                                <h6 className="mb-0">Creste di Galli</h6>
                                                <span className="text-muted text-sm">Pasta, cheese, potato, onion,
                                                    fries</span>
                                            </div>
                                            <div className="col-sm-6 text-sm-right">
                                                <span className="text-md mr-4"><span className="text-muted">from</span> $<span
                                                    data-product-base-price>9.00</span></span>
                                                <button
                                                    className="btn btn-outline-secondary btn-sm"
                                                    data-bs-toggle="modal"
                                                    data-bs-target={`#exampleModal${page}`}
                                                    onClick={() => setPage("List_Collapse_Pizza_Creste_di_Galli")}
                                                ><span>Add to
                                                    cart</span></button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- Menu Category / Sushi --> */}
                            <div id="Sushi" className="menu-category">
                                <div className="menu-category-title collapse-toggle" role="tab"
                                    data-target="#menuSushiContent" data-toggle="collapse" aria-expanded="false">
                                    <div className="bg-image"><img src="http://assets.suelo.pl/soup/img/photos/menu-title-sushi.jpg" alt="" />
                                    </div>
                                    <h2 className="title">Sushi</h2>
                                </div>
                                <div id="menuSushiContent" className="menu-category-content collapse">
                                    {/* <!-- Menu Item --> */}
                                    <div className="menu-item menu-list-item">
                                        <div className="row align-items-center">
                                            <div className="col-sm-6 mb-2 mb-sm-0">
                                                <h6 className="mb-0">Beef Burger</h6>
                                                <span className="text-muted text-sm">Beef, cheese, potato, onion,
                                                    fries</span>
                                            </div>
                                            <div className="col-sm-6 text-sm-right">
                                                <span className="text-md mr-4"><span className="text-muted">from</span> $<span
                                                    data-product-base-price>9.00</span></span>
                                                <button
                                                    className="btn btn-outline-secondary btn-sm"
                                                    data-bs-toggle="modal"
                                                    data-bs-target={`#exampleModal${page}`}
                                                    onClick={() => setPage("List_Collapse_Sushi_Beef_Burger")}
                                                ><span>Add to
                                                    cart</span></button>
                                            </div>
                                        </div>
                                    </div>
                                    {/* <!-- Menu Item --> */}
                                    <div className="menu-item menu-list-item">
                                        <div className="row align-items-center">
                                            <div className="col-sm-6 mb-2 mb-sm-0">
                                                <h6 className="mb-0">Broccoli</h6>
                                                <span className="text-muted text-sm">Chicken, cheese, potato, onion,
                                                    fries</span>
                                            </div>
                                            <div className="col-sm-6 text-sm-right">
                                                <span className="text-md mr-4"><span className="text-muted">from</span> $<span
                                                    data-product-base-price>9.00</span></span>
                                                <button
                                                    className="btn btn-outline-secondary btn-sm"
                                                    data-bs-toggle="modal"
                                                    data-bs-target={`#exampleModal${page}`}
                                                    onClick={() => setPage("List_Collapse_Sushi_Broccoli")}
                                                ><span>Add to
                                                    cart</span></button>
                                            </div>
                                        </div>
                                    </div>
                                    {/* <!-- Menu Item --> */}
                                    <div className="menu-item menu-list-item">
                                        <div className="row align-items-center">
                                            <div className="col-sm-6 mb-2 mb-sm-0">
                                                <h6 className="mb-0">Chicken Burger</h6>
                                                <span className="text-muted text-sm">Chicken, cheese, potato, onion,
                                                    fries</span>
                                            </div>
                                            <div className="col-sm-6 text-sm-right">
                                                <span className="text-md mr-4"><span className="text-muted">from</span> $<span
                                                    data-product-base-price>9.00</span></span>
                                                <button
                                                    className="btn btn-outline-secondary btn-sm"
                                                    data-bs-toggle="modal"
                                                    data-bs-target={`#exampleModal${page}`}
                                                    onClick={() => setPage("List_Collapse_Sushi_Chicken_Burger")}
                                                ><span>Add to
                                                    cart</span></button>
                                            </div>
                                        </div>
                                    </div>
                                    {/* <!-- Menu Item --> */}
                                    <div className="menu-item menu-list-item">
                                        <div className="row align-items-center">
                                            <div className="col-sm-6 mb-2 mb-sm-0">
                                                <h6 className="mb-0">Creste di Galli</h6>
                                                <span className="text-muted text-sm">Pasta, cheese, potato, onion,
                                                    fries</span>
                                            </div>
                                            <div className="col-sm-6 text-sm-right">
                                                <span className="text-md mr-4"><span className="text-muted">from</span> $<span
                                                    data-product-base-price>9.00</span></span>
                                                <button
                                                    className="btn btn-outline-secondary btn-sm"
                                                    data-bs-toggle="modal"
                                                    data-bs-target={`#exampleModal${page}`}
                                                    onClick={() => setPage("List_Collapse_Sushi_Creste_di_Galli")}
                                                ><span>Add to
                                                    cart</span></button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- Menu Category / Desserts --> */}
                            <div id="Desserts" className="menu-category">
                                <div className="menu-category-title collapse-toggle" role="tab"
                                    data-target="#menuDessertsContent" data-toggle="collapse" aria-expanded="false">
                                    <div className="bg-image"><img src="http://assets.suelo.pl/soup/img/photos/menu-title-desserts.jpg" alt="" />
                                    </div>
                                    <h2 className="title">Desserts</h2>
                                </div>
                                <div id="menuDessertsContent" className="menu-category-content collapse">
                                    {/* <!-- Menu Item --> */}
                                    <div className="menu-item menu-list-item">
                                        <div className="row align-items-center">
                                            <div className="col-sm-6 mb-2 mb-sm-0">
                                                <h6 className="mb-0">Beef Burger</h6>
                                                <span className="text-muted text-sm">Beef, cheese, potato, onion,
                                                    fries</span>
                                            </div>
                                            <div className="col-sm-6 text-sm-right">
                                                <span className="text-md mr-4"><span className="text-muted">from</span> $<span
                                                    data-product-base-price>9.00</span></span>
                                                <button
                                                    className="btn btn-outline-secondary btn-sm"
                                                    data-bs-toggle="modal"
                                                    data-bs-target={`#exampleModal${page}`}
                                                    onClick={() => setPage("List_Collapse_Desserts_Beef_Burger")}
                                                ><span>Add to
                                                    cart</span></button>
                                            </div>
                                        </div>
                                    </div>
                                    {/* <!-- Menu Item --> */}
                                    <div className="menu-item menu-list-item">
                                        <div className="row align-items-center">
                                            <div className="col-sm-6 mb-2 mb-sm-0">
                                                <h6 className="mb-0">Broccoli</h6>
                                                <span className="text-muted text-sm">Chicken, cheese, potato, onion,
                                                    fries</span>
                                            </div>
                                            <div className="col-sm-6 text-sm-right">
                                                <span className="text-md mr-4"><span className="text-muted">from</span> $<span
                                                    data-product-base-price>9.00</span></span>
                                                <button
                                                    className="btn btn-outline-secondary btn-sm"
                                                    data-bs-toggle="modal"
                                                    data-bs-target={`#exampleModal${page}`}
                                                    onClick={() => setPage("List_Collapse_Desserts_Broccoli")}
                                                ><span>Add to
                                                    cart</span></button>
                                            </div>
                                        </div>
                                    </div>
                                    {/* <!-- Menu Item --> */}
                                    <div className="menu-item menu-list-item">
                                        <div className="row align-items-center">
                                            <div className="col-sm-6 mb-2 mb-sm-0">
                                                <h6 className="mb-0">Chicken Burger</h6>
                                                <span className="text-muted text-sm">Chicken, cheese, potato, onion,
                                                    fries</span>
                                            </div>
                                            <div className="col-sm-6 text-sm-right">
                                                <span className="text-md mr-4"><span className="text-muted">from</span> $<span
                                                    data-product-base-price>9.00</span></span>
                                                <button
                                                    className="btn btn-outline-secondary btn-sm"
                                                    data-bs-toggle="modal"
                                                    data-bs-target={`#exampleModal${page}`}
                                                    onClick={() => setPage("List_Collapse_Desserts_Chicken_Burger")}
                                                ><span>Add to
                                                    cart</span></button>
                                            </div>
                                        </div>
                                    </div>
                                    {/* <!-- Menu Item --> */}
                                    <div className="menu-item menu-list-item">
                                        <div className="row align-items-center">
                                            <div className="col-sm-6 mb-2 mb-sm-0">
                                                <h6 className="mb-0">Creste di Galli</h6>
                                                <span className="text-muted text-sm">Pasta, cheese, potato, onion,
                                                    fries</span>
                                            </div>
                                            <div className="col-sm-6 text-sm-right">
                                                <span className="text-md mr-4"><span className="text-muted">from</span> $<span
                                                    data-product-base-price>9.00</span></span>
                                                <button
                                                    className="btn btn-outline-secondary btn-sm"
                                                    data-bs-toggle="modal"
                                                    data-bs-target={`#exampleModal${page}`}
                                                    onClick={() => setPage("List_Collapse_Desserts_Creste_di_Galli")}
                                                ><span>Add to
                                                    cart</span></button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- Menu Category / Drinks --> */}
                            <div id="Drinks" className="menu-category">
                                <div className="menu-category-title collapse-toggle" role="tab"
                                    data-target="#menuDrinksContent" data-toggle="collapse" aria-expanded="false">
                                    <div className="bg-image"><img src="http://assets.suelo.pl/soup/img/photos/menu-title-drinks.jpg" alt="" />
                                    </div>
                                    <h2 className="title">Drinks</h2>
                                </div>
                                <div id="menuDrinksContent" className="menu-category-content collapse">
                                    {/* <!-- Menu Item --> */}
                                    <div className="menu-item menu-list-item">
                                        <div className="row align-items-center">
                                            <div className="col-sm-6 mb-2 mb-sm-0">
                                                <h6 className="mb-0">Beef Burger</h6>
                                                <span className="text-muted text-sm">Beef, cheese, potato, onion,
                                                    fries</span>
                                            </div>
                                            <div className="col-sm-6 text-sm-right">
                                                <span className="text-md mr-4"><span className="text-muted">from</span> $<span
                                                    data-product-base-price>9.00</span></span>
                                                <button
                                                    className="btn btn-outline-secondary btn-sm"
                                                    data-bs-toggle="modal"
                                                    data-bs-target={`#exampleModal${page}`}
                                                    onClick={() => setPage("List_Collapse_Drinks_Beef_Burger")}
                                                ><span>Add to
                                                    cart</span></button>
                                            </div>
                                        </div>
                                    </div>
                                    {/* <!-- Menu Item --> */}
                                    <div className="menu-item menu-list-item">
                                        <div className="row align-items-center">
                                            <div className="col-sm-6 mb-2 mb-sm-0">
                                                <h6 className="mb-0">Broccoli</h6>
                                                <span className="text-muted text-sm">Chicken, cheese, potato, onion,
                                                    fries</span>
                                            </div>
                                            <div className="col-sm-6 text-sm-right">
                                                <span className="text-md mr-4"><span className="text-muted">from</span> $<span
                                                    data-product-base-price>9.00</span></span>
                                                <button
                                                    className="btn btn-outline-secondary btn-sm"
                                                    data-bs-toggle="modal"
                                                    data-bs-target={`#exampleModal${page}`}
                                                    onClick={() => setPage("List_Collapse_Drinks_Broccoli")}
                                                ><span>Add to
                                                    cart</span></button>
                                            </div>
                                        </div>
                                    </div>
                                    {/* <!-- Menu Item --> */}
                                    <div className="menu-item menu-list-item">
                                        <div className="row align-items-center">
                                            <div className="col-sm-6 mb-2 mb-sm-0">
                                                <h6 className="mb-0">Chicken Burger</h6>
                                                <span className="text-muted text-sm">Chicken, cheese, potato, onion,
                                                    fries</span>
                                            </div>
                                            <div className="col-sm-6 text-sm-right">
                                                <span className="text-md mr-4"><span className="text-muted">from</span> $<span
                                                    data-product-base-price>9.00</span></span>
                                                <button
                                                    className="btn btn-outline-secondary btn-sm"
                                                    data-bs-toggle="modal"
                                                    data-bs-target={`#exampleModal${page}`}
                                                    onClick={() => setPage("List_Collapse_Drinks_Chicken_Burger")}
                                                ><span>Add to
                                                    cart</span></button>
                                            </div>
                                        </div>
                                    </div>
                                    {/* <!-- Menu Item --> */}
                                    <div className="menu-item menu-list-item">
                                        <div className="row align-items-center">
                                            <div className="col-sm-6 mb-2 mb-sm-0">
                                                <h6 className="mb-0">Creste di Galli</h6>
                                                <span className="text-muted text-sm">Pasta, cheese, potato, onion,
                                                    fries</span>
                                            </div>
                                            <div className="col-sm-6 text-sm-right">
                                                <span className="text-md mr-4"><span className="text-muted">from</span> $<span
                                                    data-product-base-price>9.00</span></span>
                                                <button
                                                    className="btn btn-outline-secondary btn-sm"
                                                    data-bs-toggle="modal"
                                                    data-bs-target={`#exampleModal${page}`}
                                                    onClick={() => setPage("List_Collapse_Drinks_Creste_di_Galli")}
                                                ><span>Add to
                                                    cart</span></button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <ProductModal
                page={page}
            />
        </>
    )
}

export default PageContent