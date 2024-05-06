import { useState } from "react";
import { Link } from "react-router-dom";
import { onClickCartHandler } from "../../../helpers/onClickCartHandler";
import { togglePanelMobile } from "../../../helpers/togglePanelMobile";

const HeaderMiddle = (): JSX.Element => {
    const [isPanelMobileOpen, setIsPanelMobileOpen] = useState<boolean>(false);

    return (
        <>
            {/* <!-- Header --> */}
            <header id="header-mobile" className="light">
                <div className="module module-nav-toggle">
                    <Link to="#" id="nav-toggle" onClick={() => togglePanelMobile(isPanelMobileOpen, setIsPanelMobileOpen)}>
                        <span></span><span></span><span></span><span></span>
                    </Link>
                </div>

                <div className="module module-logo">
                    <Link to="/">
                        <img src="/assets/img/logo-horizontal-dark.svg" alt="" />
                    </Link>
                </div>

                <Link to="#" className="module module-cart" data-toggle="panel-cart" onClick={onClickCartHandler}>
                    <i className="ti ti-shopping-cart"></i>
                    <span className="notification">0</span>
                </Link>
            </header>
            {/* <!-- Header / End --> */}
        </>
    );
};

export default HeaderMiddle;