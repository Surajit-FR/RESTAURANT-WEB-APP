import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Cookies from "js-cookie";

const CookieBar = (): JSX.Element => {
    const [acceptedCookies, setAcceptedCookies] = useState(Cookies.get("CyberMindCookies"));
    const [isCookieVisible, setIsCookieVisible] = useState(!acceptedCookies); // Initially show if cookies not accepted

    useEffect(() => {
        // Check if the user has already accepted cookies
        if (acceptedCookies) {
            setIsCookieVisible(false);
        }
    }, [acceptedCookies]);

    const acceptCookies = () => {
        // Set a cookie to remember that the user has accepted cookies
        Cookies.set("CyberMindCookies", "true", { expires: 365 }); // Expires after 365 days
        setAcceptedCookies("true");
        setIsCookieVisible(false);
    };

    return (
        <>
            {/* <!-- Cookies Bar --> */}
            <div id="cookies-bar" className="body-bar cookies-bar" style={{ display: isCookieVisible ? "block" : "none" }}>
                <div className="body-bar-container container">
                    <div className="body-bar-text">
                        <h4 className="mb-2">Cookies & GDPR</h4>
                        <p>This is a sample Cookies / GDPR information. You can use it easily on your site and even add link to
                            <Link to="#">Privacy Policy</Link>.</p>
                    </div>
                    <div className="body-bar-action">
                        <button className="btn btn-primary" data-accept="cookies" onClick={acceptCookies}><span>Accept</span></button>
                    </div>
                </div>
            </div >
        </>
    )
}

export default CookieBar;