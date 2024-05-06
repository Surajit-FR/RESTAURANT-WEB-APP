import { useEffect, useState } from 'react';
import { HashLink } from 'react-router-hash-link';

const PageContent = (): JSX.Element => {
    // State to keep track of which FAQ section is open
    const [activeSection, setActiveSection] = useState<string | null>(null);
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
            <section className="section">

                <div className="container">
                    <div className="row">
                        <div className="col-md-3">
                            {/* <!-- Side Navigation --> */}
                            <nav id="side-navigation" className="stick-to-content pt-4" data-local-scroll style={{ position: isSticky ? "fixed" : "static", top: "0", width: "255px" }}>
                                <h5 className="mb-3"><i className="ti ti-align-justify mr-3 text-muted"></i>Pick a content:</h5>
                                <ul className="nav nav-vertical">
                                    <li className="nav-item">
                                        <HashLink
                                            to="#faq1"
                                            className={`nav-link ${activeSection === "faq1" ? "active" : ""}`}
                                            onClick={() => setActiveSection("faq1")}
                                        >
                                            General
                                        </HashLink>
                                        <ul style={{ display: (activeSection === "faq1") ? "block" : "none" }}>
                                            <li className="nav-item">
                                                <HashLink to="#faq1_1" className="nav-link" style={{ color: "#666464" }}>How does it work?</HashLink>
                                            </li>
                                            <li className="nav-item">
                                                <HashLink to="#faq1_2" className="nav-link" style={{ color: "#666464" }}>How long does it take?</HashLink>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="nav-item">
                                        <HashLink
                                            to="#faq2"
                                            className={`nav-link ${activeSection === "faq2" ? "active" : ""}`}
                                            onClick={() => setActiveSection("faq2")}
                                        >
                                            Delivery</HashLink>
                                        <ul style={{ display: (activeSection === "faq2") ? "block" : "none" }}>
                                            <li className="nav-item">
                                                <HashLink to="#faq2_1" className="nav-link" style={{ color: "#666464" }}>How does it work?</HashLink>
                                            </li>
                                            <li className="nav-item">
                                                <HashLink to="#faq2_2" className="nav-link" style={{ color: "#666464" }}>How long does it take?</HashLink>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="nav-item">
                                        <HashLink
                                            to="#faq3"
                                            className={`nav-link ${activeSection === "faq3" ? "active" : ""}`}
                                            onClick={() => setActiveSection("faq3")}
                                        >
                                            Payments</HashLink>
                                        <ul style={{ display: (activeSection === "faq3") ? "block" : "none" }}>
                                            <li className="nav-item">
                                                <HashLink to="#faq3_1" className="nav-link" style={{ color: "#666464" }}>How does it work?</HashLink>
                                            </li>
                                            <li className="nav-item">
                                                <HashLink to="#faq3_2" className="nav-link" style={{ color: "#666464" }}>How long does it take?</HashLink>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                        <div className="col-md-8 offset-md-1">
                            <div id="faq1">
                                <h3><i className="ti ti-file mr-4 text-primary"></i>General info</h3>
                                <hr />
                                <div id="faq1_1" className="pb-5">
                                    <h4>How does it work?</h4>
                                    <p className="lead">Vivamus non euismod dui. Curabitur rhoncus massa sit amet nisi
                                        molestie lobortis. Nam quis neque nec odio vestibulum pulvinar sit amet sed
                                        enim.</p>
                                    <p>Sed lacus lacus, tincidunt a posuere sed, varius ut sapien. Vivamus nulla odio,
                                        scelerisque eu orci ut, tincidunt consequat ligula. Etiam ante felis, consequat
                                        vel accumsan vitae, gravida nec mauris. Maecenas vitae lobortis nisl. Donec
                                        lorem libero, vulputate sed arcu nec, sollicitudin vestibulum nisi.</p>
                                </div>
                                <div id="faq1_2" className="pb-5">
                                    <h4>How long does it take?</h4>
                                    <p className="lead">Vivamus non euismod dui. Curabitur rhoncus massa sit amet nisi
                                        molestie lobortis. Nam quis neque nec odio vestibulum pulvinar sit amet sed
                                        enim.</p>
                                    <p> Vivamus nulla odio, scelerisque eu orci ut, tincidunt consequat ligula. Etiam
                                        ante felis, consequat vel accumsan vitae, gravida nec mauris. Maecenas vitae
                                        lobortis nisl. Donec lorem libero, vulputate sed arcu nec, sollicitudin
                                        vestibulum nisi.</p>
                                </div>
                            </div>
                            <div id="faq2">
                                <h3><i className="ti ti-package mr-4 text-primary"></i>Delivery</h3>
                                <hr />
                                <div id="faq2_1" className="pb-5">
                                    <h4>How does it work?</h4>
                                    <p className="lead">Vivamus non euismod dui. Curabitur rhoncus massa sit amet nisi
                                        molestie lobortis. Nam quis neque nec odio vestibulum pulvinar sit amet sed
                                        enim.</p>
                                    <p>Sed lacus lacus, tincidunt a posuere sed, varius ut sapien. Vivamus nulla odio,
                                        scelerisque eu orci ut, tincidunt consequat ligula. Etiam ante felis, consequat
                                        vel accumsan vitae, gravida nec mauris. Maecenas vitae lobortis nisl. Donec
                                        lorem libero, vulputate sed arcu nec, sollicitudin vestibulum nisi.</p>
                                </div>
                                <div id="faq2_2" className="pb-5">
                                    <h4>How long does it take?</h4>
                                    <p className="lead">Vivamus non euismod dui. Curabitur rhoncus massa sit amet nisi
                                        molestie lobortis. Nam quis neque nec odio vestibulum pulvinar sit amet sed
                                        enim.</p>
                                    <p> Vivamus nulla odio, scelerisque eu orci ut, tincidunt consequat ligula. Etiam
                                        ante felis, consequat vel accumsan vitae, gravida nec mauris. Maecenas vitae
                                        lobortis nisl. Donec lorem libero, vulputate sed arcu nec, sollicitudin
                                        vestibulum nisi.</p>
                                </div>
                            </div>
                            <div id="faq3">
                                <h3><i className="ti ti-wallet mr-4 text-primary"></i>Payments</h3>
                                <hr />
                                <div id="faq3_1" className="pb-5">
                                    <h4>How does it work?</h4>
                                    <p className="lead">Vivamus non euismod dui. Curabitur rhoncus massa sit amet nisi
                                        molestie lobortis. Nam quis neque nec odio vestibulum pulvinar sit amet sed
                                        enim.</p>
                                    <p>Sed lacus lacus, tincidunt a posuere sed, varius ut sapien. Vivamus nulla odio,
                                        scelerisque eu orci ut, tincidunt consequat ligula. Etiam ante felis, consequat
                                        vel accumsan vitae, gravida nec mauris. Maecenas vitae lobortis nisl. Donec
                                        lorem libero, vulputate sed arcu nec, sollicitudin vestibulum nisi.</p>
                                </div>
                                <div id="faq3_2" className="pb-5">
                                    <h4>How long does it take?</h4>
                                    <p className="lead">Vivamus non euismod dui. Curabitur rhoncus massa sit amet nisi
                                        molestie lobortis. Nam quis neque nec odio vestibulum pulvinar sit amet sed
                                        enim.</p>
                                    <p> Vivamus nulla odio, scelerisque eu orci ut, tincidunt consequat ligula. Etiam
                                        ante felis, consequat vel accumsan vitae, gravida nec mauris. Maecenas vitae
                                        lobortis nisl. Donec lorem libero, vulputate sed arcu nec, sollicitudin
                                        vestibulum nisi.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
        </>
    )
}

export default PageContent