import { Link } from "react-router-dom"

const PageContent = (): JSX.Element => {
    return (
        <>
            {/* <!-- Page Content --> */}
            <div className="page-content bg-light">

                <div className="container">
                    <div className="row">
                        <div className="col-lg-10 offset-lg-1">
                            {/* <!-- Post / Item --> */}
                            <article className="post post-wide" data-animation="fadeIn">
                                <div className="post-image"><img src="http://assets.suelo.pl/soup/img/posts/post01.jpg"
                                    alt="" /></div>
                                <div className="post-content">
                                    <ul className="post-meta">
                                        <li>24 July, 2016</li>
                                        <li>by Johnatan Doe</li>
                                    </ul>
                                    <h4><Link to="/page/blog/post">Delicious idea for your Sunday dessert</Link></h4>
                                    <p>Nulla leo lectus, commodo porttitor lacus a, placerat facilisis ligula.</p>
                                </div>
                            </article>
                            {/* <!-- Post / Item --> */}
                            <article className="post post-wide" data-animation="fadeIn">
                                <div className="post-image"><img src="http://assets.suelo.pl/soup/img/posts/post02.jpg"
                                    alt="" /></div>
                                <div className="post-content">
                                    <ul className="post-meta">
                                        <li>24 July, 2016</li>
                                        <li>by Johnatan Doe</li>
                                    </ul>
                                    <h4><Link to="/page/blog/post">How to make perfect Pasta?</Link></h4>
                                    <p>Nulla leo lectus, commodo porttitor lacus a, placerat facilisis ligula.</p>
                                </div>
                            </article>
                            {/* <!-- Post / Item --> */}
                            <article className="post post-wide" data-animation="fadeIn">
                                <div className="post-image"><img src="http://assets.suelo.pl/soup/img/posts/post03.jpg"
                                    alt="" /></div>
                                <div className="post-content">
                                    <ul className="post-meta">
                                        <li>24 July, 2016</li>
                                        <li>by Johnatan Doe</li>
                                    </ul>
                                    <h4><Link to="/page/blog/post">Delicious idea for your Sunday dessert</Link></h4>
                                    <p>Nulla leo lectus, commodo porttitor lacus a, placerat facilisis ligula.</p>
                                </div>
                            </article>
                            {/* <!-- Post / Item --> */}
                            <article className="post post-wide" data-animation="fadeIn">
                                <div className="post-image"><img src="http://assets.suelo.pl/soup/img/posts/post04.jpg"
                                    alt="" /></div>
                                <div className="post-content">
                                    <ul className="post-meta">
                                        <li>24 July, 2016</li>
                                        <li>by Johnatan Doe</li>
                                    </ul>
                                    <h4><Link to="/page/blog/post">How to make perfect Pasta?</Link></h4>
                                    <p>Nulla leo lectus, commodo porttitor lacus a, placerat facilisis ligula.</p>
                                </div>
                            </article>
                            {/* <!-- Post / Item --> */}
                            <article className="post post-wide" data-animation="fadeIn">
                                <div className="post-image"><img src="http://assets.suelo.pl/soup/img/posts/post05.jpg"
                                    alt="" /></div>
                                <div className="post-content">
                                    <ul className="post-meta">
                                        <li>24 July, 2016</li>
                                        <li>by Johnatan Doe</li>
                                    </ul>
                                    <h4><Link to="/page/blog/post">How to make perfect Pasta?</Link></h4>
                                    <p>Nulla leo lectus, commodo porttitor lacus a, placerat facilisis ligula.</p>
                                </div>
                            </article>
                            {/* <!-- Pagination --> */}
                            <nav aria-label="Page navigation" className="mt-5">
                                <ul className="pagination justify-content-center">
                                    <li className="page-item">
                                        <Link className="page-link" to="#" aria-label="Previous">
                                            <i className="ti ti-arrow-left"></i>
                                            <span className="sr-only">Previous</span>
                                        </Link>
                                    </li>
                                    <li className="page-item"><Link className="page-link active" to="#">1</Link></li>
                                    <li className="page-item"><Link className="page-link" to="#">2</Link></li>
                                    <li className="page-item"><Link className="page-link" to="#">3</Link></li>
                                    <li className="page-item">
                                        <Link className="page-link" to="#" aria-label="Next">
                                            <i className="ti ti-arrow-right"></i>
                                            <span className="sr-only">Next</span>
                                        </Link>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default PageContent