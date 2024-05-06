const PageContent = (): JSX.Element => {

    return (
        <>
            {/* <!-- Page Content --> */}
            <div className="page-content bg-light">
                <div className="container">
                    {/* <!-- Special Offer --> */}
                    <div className="special-offer mb-5" data-animation="fadeIn">
                        <img src="http://assets.suelo.pl/soup/img/photos/special-burger.jpg" alt=""
                            className="special-offer-image" />
                        <div className="special-offer-content">
                            <h2 className="mb-2">Free Burger</h2>
                            <h5 className="text-muted mb-5">Get free burger from orders higher that $40!</h5>
                            <ul className="list-check text-lg mb-0">
                                <li>Only on Tuesdays</li>
                                <li className="false">Order higher that $40</li>
                                <li>Unless one burger ordered</li>
                            </ul>
                        </div>
                    </div>
                    {/* <!-- Special Offer --> */}
                    <div className="special-offer mb-5" data-animation="fadeIn">
                        <img src="http://assets.suelo.pl/soup/img/photos/special-pizza.jpg" alt=""
                            className="special-offer-image" />
                        <div className="special-offer-content">
                            <h2 className="mb-2">Free Small Pizza</h2>
                            <h5 className="text-muted mb-5">Get free burger from orders higher that $40!</h5>
                            <ul className="list-check text-lg mb-0">
                                <li>Only on Weekends</li>
                                <li className="false">Order higher that $40</li>
                            </ul>
                        </div>
                    </div>
                    {/* <!-- Special Offer --> */}
                    <div className="special-offer mb-5" data-animation="fadeIn">
                        <img src="http://assets.suelo.pl/soup/img/photos/special-dish.jpg" alt=""
                            className="special-offer-image" />
                        <div className="special-offer-content">
                            <h2 className="mb-2">Chip Friday</h2>
                            <h5 className="text-muted mb-5">10% Off for all dishes!</h5>
                            <ul className="list-check text-lg mb-0">
                                <li>Only on Friday</li>
                                <li>All products</li>
                                <li>Online order</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PageContent