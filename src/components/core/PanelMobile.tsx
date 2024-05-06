import { useState } from "react";
import { Link } from "react-router-dom";
import { togglePanelMobile } from "../../helpers/togglePanelMobile";

const PanelMobile = (): JSX.Element => {
    const [isPanelMobileOpen, setIsPanelMobileOpen] = useState<boolean>(false);
    const [dropdownStates, setDropdownStates] = useState<{ [key: string]: boolean }>({
        home: false,
        about: false,
        menu: false,
        more: false,
        menuList: false, // State for the nested menu list
        menuGrid: false // State for the nested menu grid
    });

    const toggleDropdown = (dropdownName: string) => {
        setDropdownStates(prevState => ({
            ...prevState,
            [dropdownName]: !prevState[dropdownName]
        }));
    };

    // Prevent event propagation for nested list items
    const stopPropagation = (e: React.MouseEvent) => {
        e.stopPropagation();
    };

    return (
        <>
            {/* Overlay */}
            <div id="body-overlay1" style={{ display: isPanelMobileOpen ? "block" : "none" }} onClick={() => togglePanelMobile(isPanelMobileOpen, setIsPanelMobileOpen)}></div>

            {/* Panel Mobile */}
            <nav id="panel-mobile">
                <div className="module module-logo bg-dark dark">
                    <Link to="/">
                        <img src="/assets/img/logo-light.svg" alt="" width="88" />
                    </Link>
                    <button className="close" data-toggle="panel-mobile" onClick={() => togglePanelMobile(isPanelMobileOpen, setIsPanelMobileOpen)}><i className="ti ti-close"></i></button>
                </div>
                <nav className="module module-navigation">
                    <ul id="nav-main-mobile" className="nav nav-main-mobile">
                        <li className="has-dropdown" onClick={() => toggleDropdown('home')} >
                            <Link to="#">Home</Link>
                            <div className="dropdown-container" style={{ display: dropdownStates['home'] ? "block" : "none" }}>
                                <ul>
                                    <li><Link to="/">Home Basic</Link></li>
                                    <li><Link to="#">Home Burgers</Link></li>
                                    <li><Link to="#">Home Fullwidth Slider</Link></li>
                                    <li><Link to="#">Home Video</Link></li>
                                    <li><Link to="#">Home Fresh <span className="badge badge-success">New</span></Link></li>
                                    <li><Link to="#">Home Dark <span className="badge badge-success">New</span></Link></li>
                                </ul>
                            </div>
                        </li>
                        <li className="has-dropdown" onClick={() => toggleDropdown('about')}>
                            <Link to="#">About</Link>
                            <div className="dropdown-container" style={{ display: dropdownStates['about'] ? "block" : "none" }}>
                                <ul className="dropdown-mega">
                                    <li><Link to="/page/about">About Us</Link></li>
                                    <li><Link to="/page/services">Services</Link></li>
                                    <li><Link to="/page/gallery">Gallery</Link></li>
                                    <li><Link to="/page/reviews">Reviews</Link></li>
                                    <li><Link to="/page/faq">FAQ</Link></li>
                                    <li><Link to="/page/offer/single">Offer Single</Link></li>
                                    <li><Link to="/page/product">Product</Link></li>
                                </ul>
                                <div className="dropdown-image">
                                    <img src="http://assets.suelo.pl/soup/img/photos/dropdown-about.jpg" alt="" />
                                </div>
                            </div>
                        </li>
                        <li className="has-dropdown" onClick={() => toggleDropdown('menu')}>
                            <Link to="#">Menu</Link>
                            <div className="dropdown-container" style={{ display: dropdownStates['menu'] ? "block" : "none", }}>
                                <ul>
                                    <li className="has-dropdown" onClick={(e) => { toggleDropdown('menuList'); stopPropagation(e); }}>
                                        <Link to="#">List</Link>
                                        <ul style={{ display: dropdownStates['menuList'] ? "block" : "none" }}>
                                            <li><Link to="/menu/list/navigation">Navigation</Link></li>
                                            <li><Link to="/menu/list/collapse">Collapse</Link></li>
                                        </ul>
                                    </li>
                                    <li className="has-dropdown" onClick={(e) => { toggleDropdown('menuGrid'); stopPropagation(e); }}>
                                        <Link to="#">Grid</Link>
                                        <ul style={{ display: dropdownStates['menuGrid'] ? "block" : "none" }}>
                                            <li><Link to="/menu/grid/navigation">Navigation</Link></li>
                                            <li><Link to="menu-grid-collapse.html">Collapse</Link></li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li><Link to="/page/offers">Offers</Link></li>
                        <li><Link to="/page/contact">Contact</Link></li>
                        <li className="has-dropdown" onClick={() => toggleDropdown('more')}>
                            <Link to="#">More</Link>
                            <div className="dropdown-container" style={{ display: dropdownStates['more'] ? "block" : "none" }}>
                                <ul className="dropdown-mega">
                                    <li><Link to="/page/offer/single">Offer single</Link></li>
                                    <li><Link to="/page/product">Product</Link></li>
                                    <li><Link to="/page/book/table">Book a table</Link></li>
                                    <li><Link to="/page/checkout">Checkout</Link></li>
                                    <li><Link to="confirmation">Confirmation</Link></li>
                                    <li><Link to="blog">Blog</Link></li>
                                    <li><Link to="blog-sidebar">Blog + Sidebar</Link></li>
                                    <li><Link to="blog-post">Blog Post</Link></li>
                                    <li><Link to="documentation/" target="_blank">Documentation</Link></li>
                                </ul>
                                <div className="dropdown-image">
                                    <img src="http://assets.suelo.pl/soup/img/photos/dropdown-more.jpg" alt="" />
                                </div>
                            </div>
                        </li>
                    </ul>
                </nav>
                <div className="module module-social">
                    <h6 className="text-sm mb-3">Follow Us!</h6>
                    <Link to="#" className="icon icon-social icon-circle icon-sm icon-facebook mr-1"><i className="fa fa-facebook"></i></Link>
                    <Link to="#" className="icon icon-social icon-circle icon-sm icon-google mr-1"><i className="fa fa-google"></i></Link>
                    <Link to="#" className="icon icon-social icon-circle icon-sm icon-twitter mr-1"><i className="fa fa-twitter"></i></Link>
                    <Link to="#" className="icon icon-social icon-circle icon-sm icon-youtube mr-1"><i className="fa fa-youtube"></i></Link>
                    <Link to="#" className="icon icon-social icon-circle icon-sm icon-instagram mr-1"><i
                        className="fa fa-instagram"></i></Link>
                </div>
            </nav>
        </>
    );
};

export default PanelMobile;