import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { onClickCartHandler } from "../../../helpers/onClickCartHandler";
import { dropdown_type } from "../../../config/DataTypesInterface.config";

const HeaderTop = (): JSX.Element => {
    const [dropdownStates, setDropdownStates] = useState<dropdown_type>({
        home: false,
        about: false,
        menu: false,
        menuList: false,
        menuGrid: false,
        more: false
    });

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            // Close dropdowns if clicked outside
            if (!(event.target instanceof Element && event.target.closest('.has-dropdown'))) {
                setDropdownStates({
                    home: false,
                    about: false,
                    menu: false,
                    menuList: false,
                    menuGrid: false,
                    more: false
                });
                // Remove body class
                document.body.classList.remove("dropdown-visible");
            }
        };

        // Add event listener when component mounts
        document.addEventListener("mousedown", handleClickOutside);

        // Remove event listener when component unmounts
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    const toggleDropdown = (dropdownName: keyof typeof dropdownStates) => {
        const updatedDropdownStates = { ...dropdownStates };

        // Close all dropdowns except the one being toggled
        Object.keys(updatedDropdownStates).forEach((key) => {
            if (key !== dropdownName) {
                updatedDropdownStates[key as keyof typeof dropdownStates] = false;
            }
        });

        updatedDropdownStates[dropdownName] = !dropdownStates[dropdownName];

        setDropdownStates(updatedDropdownStates);

        // Toggle body class
        document.body.classList.toggle("dropdown-visible", !dropdownStates[dropdownName]);
    };

    const toggleNestedDropdown = (dropdownName: keyof typeof dropdownStates) => {
        setDropdownStates({
            ...dropdownStates,
            [dropdownName]: !dropdownStates[dropdownName]
        });
    };

    return (
        <>
            {/* <!-- Header --> */}
            <header id="header" className="light">
                <div className="container">
                    <div className="row">
                        <div className="col-md-3">
                            {/* <!-- Logo --> */}
                            <div className="module module-logo dark">
                                <Link to="/">
                                    <img src="/assets/img/logo-light.svg" alt="" width="88" />
                                </Link>
                            </div>
                        </div>
                        <div className="col-md-7">
                            {/* <!-- Navigation --> */}
                            <nav className="module module-navigation left mr-4">
                                <ul id="nav-main" className="nav nav-main">
                                    <li className={`has-dropdown ${dropdownStates.home ? 'dropdown-show' : ''}`} onClick={() => toggleDropdown('home')}>
                                        <Link to="#">Home</Link>
                                        <div className="dropdown-container">
                                            <ul>
                                                <li><Link to="/">Home Basic</Link></li>
                                                <li><Link to="#">Home Burgers</Link></li>
                                                <li><Link to="#">Home Fullwidth Slider</Link></li>
                                                <li><Link to="#">Home Video</Link></li>
                                                <li><Link to="#">Home Fresh <span
                                                    className="badge badge-success">New</span></Link></li>
                                                <li><Link to="#">Home Dark <span
                                                    className="badge badge-success">New</span></Link></li>
                                            </ul>
                                        </div>
                                    </li>
                                    <li className={`has-dropdown ${dropdownStates.about ? 'dropdown-show' : ''}`} onClick={() => toggleDropdown('about')}>
                                        <Link to="#">About</Link>
                                        <div className="dropdown-container">
                                            <ul className="dropdown-mega">
                                                <li><Link to="/page/about">About Us</Link></li>
                                                <li><Link to="/page/service">Services</Link></li>
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
                                    <li className={`has-dropdown ${dropdownStates.menu ? 'dropdown-show' : ''}`} onClick={() => toggleDropdown('menu')}>
                                        <Link to="#">Menu</Link>
                                        <div className="dropdown-container">
                                            <ul>
                                                <li className={`has-dropdown ${dropdownStates.menuList ? 'dropdown-show' : ''}`} onClick={(e) => { e.stopPropagation(); toggleNestedDropdown('menuList') }}>
                                                    <Link to="#">List</Link>
                                                    <ul className={dropdownStates.menuList ? 'dropdown-show' : ''}>
                                                        <li><Link to="/menu/list/navigation">Navigation</Link></li>
                                                        <li><Link to="/menu/list/collapse">Collapse</Link></li>
                                                    </ul>
                                                </li>
                                                <li className={`has-dropdown ${dropdownStates.menuGrid ? 'dropdown-show' : ''}`} onClick={(e) => { e.stopPropagation(); toggleNestedDropdown('menuGrid') }}>
                                                    <Link to="#">Grid</Link>
                                                    <ul className={dropdownStates.menuGrid ? 'dropdown-show' : ''}>
                                                        <li><Link to="/menu/grid/navigation">Navigation</Link></li>
                                                        <li><Link to="/menu/grid/collapse">Collapse</Link></li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </div>
                                    </li>
                                    <li><Link to="/page/offers">Offers</Link></li>
                                    <li><Link to="/page/contact">Contact</Link></li>
                                    <li className={`has-dropdown ${dropdownStates.more ? 'dropdown-show' : ''}`} onClick={() => toggleDropdown('more')}>
                                        <Link to="#">More</Link>
                                        <div className="dropdown-container">
                                            <ul className="dropdown-mega">
                                                <li><Link to="/page/offer/single">Offer single</Link></li>
                                                <li><Link to="/page/product">Product</Link></li>
                                                <li><Link to="/page/book/table">Book a table</Link></li>
                                                <li><Link to="/page/checkout">Checkout</Link></li>
                                                <li><Link to="/page/confirmation">Confirmation</Link></li>
                                                <li><Link to="/page/blogs">Blog</Link></li>
                                                <li><Link to="/page/blog/slider">Blog + Sidebar</Link></li>
                                                <li><Link to="/page/blog/post">Blog Post</Link></li>
                                            </ul>
                                            <div className="dropdown-image">
                                                <img src="http://assets.suelo.pl/soup/img/photos/dropdown-more.jpg" alt="" />
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </nav>
                            <div className="module left">
                                <Link to="/menu/list" className="btn btn-outline-secondary"><span>Order</span></Link>
                            </div>
                        </div>
                        <div className="col-md-2">
                            <Link to="#" className="module module-cart right" data-toggle="panel-cart" onClick={onClickCartHandler}>
                                <span className="cart-icon">
                                    <i className="ti ti-shopping-cart"></i>
                                    <span className="notification">3</span>
                                </span>
                                <span className="cart-value">$<span className="value">0.00</span></span>
                            </Link>
                        </div>
                    </div>
                </div>
            </header>
            {/* <!-- Header / End --> */}
        </>
    )
}

export default HeaderTop;