import { Link } from "react-router-dom";
import { onClickCartHandler } from "../../helpers/onClickCartHandler";

const PanelCart = (): JSX.Element => {

    return (
        <>
            {/* <!-- Panel Cart --> */}
            <div id="panel-cart">
                <div className="panel-cart-container">
                    <div className="panel-cart-title">
                        <h5 className="title">Your Cart</h5>
                        <button className="close" data-toggle="panel-cart" onClick={onClickCartHandler}><i className="ti ti-close"></i></button>
                    </div>
                    <div className="panel-cart-content cart-details">
                        <table className="cart-table">
                            <tbody>
                                <tr>
                                    <td className="title">
                                        <span className="name"><Link to="#product-modal" data-toggle="modal">Beef Burger</Link></span>
                                        <span className="caption text-muted">Large (500g)</span>
                                    </td>
                                    <td className="price">$9.00</td>
                                    <td className="actions">
                                        <Link to="#product-modal" data-toggle="modal" className="action-icon"><i className="ti ti-pencil"></i></Link>
                                        <Link to="#" className="action-icon"><i className="ti ti-close"></i></Link>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="title">
                                        <span className="name"><Link to="#product-modal" data-toggle="modal">Extra Burger</Link></span>
                                        <span className="caption text-muted">Small (200g)</span>
                                    </td>
                                    <td className="price text-success">$9.00</td>
                                    <td className="actions">
                                        <Link to="#product-modal" data-toggle="modal" className="action-icon"><i className="ti ti-pencil"></i></Link>
                                        <Link to="#" className="action-icon"><i className="ti ti-close"></i></Link>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <div className="cart-summary">
                            <div className="row">
                                <div className="col-7 text-right text-muted">Order total:</div>
                                <div className="col-5"><strong>$<span className="cart-products-total">0.00</span></strong></div>
                            </div>
                            <div className="row">
                                <div className="col-7 text-right text-muted">Devliery:</div>
                                <div className="col-5"><strong>$<span className="cart-delivery">0.00</span></strong></div>
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
                <Link to="/page/checkout" className="panel-cart-action btn btn-secondary btn-block btn-lg"><span>Go to
                    checkout</span></Link>
            </div>

            <div id="body-overlay" onClick={onClickCartHandler}></div>
        </>
    )
}

export default PanelCart