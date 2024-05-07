import { useState } from "react";
import { ProductModalProps } from "../config/DataTypesInterface.config"

const ProductModal = ({ page }: ProductModalProps): JSX.Element => {
    const [sizeChecked, setSizeChecked] = useState<boolean>(false);
    const [additionsChecked, setAdditionsChecked] = useState<boolean>(false);
    const [otherChecked, setOtherChecked] = useState<boolean>(false);

    const handleAnchorClick = (section: string) => {
        switch (section) {
            case "size":
                setSizeChecked(!sizeChecked);
                break;
            case "additions":
                setAdditionsChecked(!additionsChecked);
                break;
            case "other":
                setOtherChecked(!otherChecked);
                break;
            default:
                break;
        }
    };

    return (
        <>
            {/* <!-- Modal / Product --> */}
            <div className="modal fade" id={`exampleModal${page}`} data-bs-backdrop="static" data-bs-keyboard="false" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header modal-header-lg dark bg-dark">
                            <div className="bg-image"><img src="http://assets.suelo.pl/soup/img/photos/modal-add.jpg" alt="" /></div>
                            <h4 className="modal-title">Specify your dish</h4>
                            <button type="button" className="close" data-bs-dismiss="modal" aria-label="Close"><i
                                className="ti ti-close"></i></button>
                        </div>
                        <div className="modal-product-details">
                            <div className="row align-items-center">
                                <div className="col-9">
                                    <h6 className="mb-1 product-modal-name">Boscaiola Pasta</h6>
                                    <span className="text-muted product-modal-ingredients">Pasta, Cheese, Tomatoes, Olives</span>
                                </div>
                                <div className="col-3 text-lg text-right">$<span className="product-modal-price">9.00</span></div>
                            </div>
                        </div>
                        <div className="modal-body panel-details-container">
                            {/* <!-- Panel Details / Size --> */}
                            <div className="panel-details panel-details-size">
                                <h5 className="panel-details-title">
                                    <label className="custom-control custom-radio">
                                        <input
                                            name="radio_title_size"
                                            type="radio"
                                            className="custom-control-input"
                                            checked={sizeChecked}
                                            onChange={() => setSizeChecked(!sizeChecked)}
                                        />
                                        <span className="custom-control-indicator"></span>
                                    </label>
                                    <a href="#panel-details-sizes-list" data-toggle="collapse" onClick={() => handleAnchorClick("size")}>
                                        Size
                                    </a>
                                </h5>
                                <div id="panel-details-sizes-list" className="collapse show">
                                    <div className="panel-details-content">
                                        <div className="product-modal-sizes">
                                            <div className="form-group">
                                                <label className="custom-control custom-radio">
                                                    <input name="radio_size" type="radio" className="custom-control-input" defaultChecked />
                                                    <span className="custom-control-indicator"></span>
                                                    <span className="custom-control-description">Small - 100g ($9.99)</span>
                                                </label>
                                            </div>
                                            <div className="form-group">
                                                <label className="custom-control custom-radio">
                                                    <input name="radio_size" type="radio" className="custom-control-input" />
                                                    <span className="custom-control-indicator"></span>
                                                    <span className="custom-control-description">Medium - 200g ($14.99)</span>
                                                </label>
                                            </div>
                                            <div className="form-group">
                                                <label className="custom-control custom-radio">
                                                    <input name="radio_size" type="radio" className="custom-control-input" />
                                                    <span className="custom-control-indicator"></span>
                                                    <span className="custom-control-description">Large - 350g ($21.99)</span>
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- Panel Details / Additions --> */}
                            <div className="panel-details panel-details-additions">
                                <h5 className="panel-details-title">
                                    <label className="custom-control custom-radio">
                                        <input
                                            name="radio_title_additions"
                                            type="radio"
                                            className="custom-control-input"
                                            checked={additionsChecked}
                                            onChange={() => setAdditionsChecked(!additionsChecked)}
                                        />
                                        <span className="custom-control-indicator"></span>
                                    </label>
                                    <a href="#panel-details-additions-content" data-toggle="collapse" onClick={() => handleAnchorClick("additions")}>
                                        Additions
                                    </a>
                                </h5>
                                <div id="panel-details-additions-content" className="collapse">
                                    <div className="panel-details-content">
                                        {/* <!-- Additions List --> */}
                                        <div className="row product-modal-additions">
                                            <div className="col-sm-6">
                                                <div className="form-group">
                                                    <label className="custom-control custom-checkbox">
                                                        <input type="checkbox" className="custom-control-input" />
                                                        <span className="custom-control-indicator"></span>
                                                        <span className="custom-control-description">Tomato ($1.29)</span>
                                                    </label>
                                                </div>
                                                <div className="form-group">
                                                    <label className="custom-control custom-checkbox">
                                                        <input type="checkbox" className="custom-control-input" />
                                                        <span className="custom-control-indicator"></span>
                                                        <span className="custom-control-description">Ham ($1.29)</span>
                                                    </label>
                                                </div>
                                                <div className="form-group">
                                                    <label className="custom-control custom-checkbox">
                                                        <input type="checkbox" className="custom-control-input" />
                                                        <span className="custom-control-indicator"></span>
                                                        <span className="custom-control-description">Chicken ($1.29)</span>
                                                    </label>
                                                </div>
                                            </div>
                                            <div className="col-sm-6">
                                                <div className="form-group">
                                                    <label className="custom-control custom-checkbox">
                                                        <input type="checkbox" className="custom-control-input" />
                                                        <span className="custom-control-indicator"></span>
                                                        <span className="custom-control-description">Cheese($1.29)</span>
                                                    </label>
                                                </div>
                                                <div className="form-group">
                                                    <label className="custom-control custom-checkbox">
                                                        <input type="checkbox" className="custom-control-input" />
                                                        <span className="custom-control-indicator"></span>
                                                        <span className="custom-control-description">Bacon ($1.29)</span>
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- Panel Details / Other --> */}
                            <div className="panel-details panel-details-form">
                                <h5 className="panel-details-title">
                                    <label className="custom-control custom-radio">
                                        <input
                                            name="radio_title_other"
                                            type="radio"
                                            className="custom-control-input"
                                            checked={otherChecked}
                                            onChange={() => setOtherChecked(!otherChecked)}
                                        />
                                        <span className="custom-control-indicator"></span>
                                    </label>
                                    <a href="#panel-details-other" data-toggle="collapse" onClick={() => handleAnchorClick("other")}>
                                        Other
                                    </a>
                                </h5>
                                <div id="panel-details-other" className="collapse">
                                    <form action="#">
                                        <textarea cols={30} rows={4} className="form-control"
                                            placeholder="Put this any other informations..."></textarea>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <button type="button" className="modal-btn btn btn-secondary btn-block btn-lg"
                            data-action="add-to-cart" data-bs-dismiss="modal"><span>Add to Cart</span></button>
                        <button type="button" className="modal-btn btn btn-secondary btn-block btn-lg"
                            data-action="update-cart" data-bs-dismiss="modal"><span>Update</span></button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductModal