import { useEffect, useState } from "react";
import { HashLink } from "react-router-hash-link";

const PageContent = (): JSX.Element => {
    const [isSticky, setIsSticky] = useState<boolean>(false);

    useEffect(() => {
        const handleScroll = () => {
            const offset = window.scrollY;
            // Change the threshold as needed
            if (offset > 500) {
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
            {/* <!-- Section --> */}
            <section className="section bg-light">

                <div className="container">
                    <div className="row">
                        <div className={`col-xl-4 col-lg-5 ${isSticky ? "sticky-sidebar" : ""}`}>
                            <div className="cart-details shadow bg-white stick-to-content mb-4" style={{ position: isSticky ? "fixed" : "static", top: "0", width: "350px" }}>
                                <div className="bg-dark dark p-4">
                                    <h5 className="mb-0">You order</h5>
                                </div>
                                <table className="cart-table">
                                    <tr>
                                        <td className="title">
                                            <span className="name"><HashLink to="#product-modal" data-toggle="modal">Pizza
                                                Chicked BBQ</HashLink></span>
                                            <span className="caption text-muted">26”, deep-pan, thin-crust</span>
                                        </td>
                                        <td className="price">$9.82</td>
                                        <td className="actions">
                                            <HashLink to="#product-modal" data-toggle="modal" className="action-icon"><i
                                                className="ti ti-pencil"></i></HashLink>
                                            <HashLink to="#" className="action-icon"><i className="ti ti-close"></i></HashLink>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="title">
                                            <span className="name"><HashLink to="#product-modal" data-toggle="modal">Beef
                                                Burger</HashLink></span>
                                            <span className="caption text-muted">Large (500g)</span>
                                        </td>
                                        <td className="price">$9.82</td>
                                        <td className="actions">
                                            <HashLink to="#product-modal" data-toggle="modal" className="action-icon"><i
                                                className="ti ti-pencil"></i></HashLink>
                                            <HashLink to="#" className="action-icon"><i className="ti ti-close"></i></HashLink>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="title">
                                            <span className="name"><HashLink to="#product-modal" data-toggle="modal">Extra
                                                Burger</HashLink></span>
                                            <span className="caption text-muted">Small (200g)</span>
                                        </td>
                                        <td className="price text-success">$0.00</td>
                                        <td className="actions">
                                            <HashLink to="#product-modal" data-toggle="modal" className="action-icon"><i
                                                className="ti ti-pencil"></i></HashLink>
                                            <HashLink to="#" className="action-icon"><i className="ti ti-close"></i></HashLink>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="title">
                                            <span className="name">Weekend 20% OFF</span>
                                        </td>
                                        <td className="price text-success">-$8.22</td>
                                        <td className="actions"></td>
                                    </tr>
                                </table>
                                <div className="cart-summary">
                                    <div className="row">
                                        <div className="col-7 text-right text-muted">Order total:</div>
                                        <div className="col-5"><strong>$<span
                                            className="cart-products-total">0.00</span></strong></div>
                                    </div>
                                    <div className="row">
                                        <div className="col-7 text-right text-muted">Devliery:</div>
                                        <div className="col-5"><strong>$<span className="cart-delivery">0.00</span></strong>
                                        </div>
                                    </div>
                                    <hr className="hr-sm" />
                                    <div className="row text-lg">
                                        <div className="col-7 text-right text-muted">Total:</div>
                                        <div className="col-5"><strong>$<span className="cart-total">0.00</span></strong></div>
                                    </div>
                                </div>
                                <div className="cart-empty">
                                    <i className="ti ti-shopping-cart"></i>
                                    <p>Your cart is empty...</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-xl-8 col-lg-7 order-lg-first">
                            <div className="bg-white p-4 p-md-5 mb-4">
                                <h4 className="border-bottom pb-4"><i className="ti ti-user mr-3 text-primary"></i>Basic
                                    informations</h4>
                                <div className="row mb-5">
                                    <div className="form-group col-sm-6">
                                        <label>Name:</label>
                                        <input type="text" className="form-control" />
                                    </div>
                                    <div className="form-group col-sm-6">
                                        <label>Surename:</label>
                                        <input type="text" className="form-control" />
                                    </div>
                                    <div className="form-group col-sm-6">
                                        <label>Street and number:</label>
                                        <input type="text" className="form-control" />
                                    </div>
                                    <div className="form-group col-sm-6">
                                        <label>City:</label>
                                        <input type="text" className="form-control" />
                                    </div>
                                    <div className="form-group col-sm-6">
                                        <label>Phone number:</label>
                                        <input type="text" className="form-control" />
                                    </div>
                                    <div className="form-group col-sm-6">
                                        <label>E-mail address:</label>
                                        <input type="email" className="form-control" />
                                    </div>
                                </div>

                                <h4 className="border-bottom pb-4"><i className="ti ti-package mr-3 text-primary"></i>Delivery
                                </h4>
                                <div className="row mb-5">
                                    <div className="form-group col-sm-6">
                                        <label>Delivery time:</label>
                                        <div className="select-container">
                                            <select className="form-control">
                                                <option>As fast as possible</option>
                                                <option>In one hour</option>
                                                <option>In two hours</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>

                                <h4 className="border-bottom pb-4"><i className="ti ti-wallet mr-3 text-primary"></i>Payment
                                </h4>
                                <div className="row text-lg">
                                    <div className="col-md-4 col-sm-6 form-group">
                                        <label className="custom-control custom-radio">
                                            <input type="radio" name="payment_type" className="custom-control-input" />
                                            <span className="custom-control-indicator"></span>
                                            <span className="custom-control-description">PayPal</span>
                                        </label>
                                    </div>
                                    <div className="col-md-4 col-sm-6 form-group">
                                        <label className="custom-control custom-radio">
                                            <input type="radio" name="payment_type" className="custom-control-input" />
                                            <span className="custom-control-indicator"></span>
                                            <span className="custom-control-description">Credit Card</span>
                                        </label>
                                    </div>
                                    <div className="col-md-4 col-sm-6 form-group">
                                        <label className="custom-control custom-radio">
                                            <input type="radio" name="payment_type" className="custom-control-input" />
                                            <span className="custom-control-indicator"></span>
                                            <span className="custom-control-description">Cash</span>
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div className="text-center">
                                <button className="btn btn-primary btn-lg"><span>Order now!</span></button>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
        </>
    )
}

export default PageContent;