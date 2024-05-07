import { Link } from "react-router-dom";

const PageContent = (): JSX.Element => {
    return (
        <>
            {/* <!-- Page Content --> */}
            <div className="page-content bg-light">

                <div className="container clearfix">
                    <div className="main left">
                        {/* <!-- Post / Item --> */}
                        <article className="post post-wide" data-animation="fadeIn">
                            <div className="post-image"><img src="http://assets.suelo.pl/soup/img/posts/post01.jpg" alt="" />
                            </div>
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
                            <div className="post-image"><img src="http://assets.suelo.pl/soup/img/posts/post02.jpg" alt="" />
                            </div>
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
                            <div className="post-image"><img src="http://assets.suelo.pl/soup/img/posts/post03.jpg" alt="" />
                            </div>
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
                            <div className="post-image"><img src="http://assets.suelo.pl/soup/img/posts/post04.jpg" alt="" />
                            </div>
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
                            <div className="post-image"><img src="http://assets.suelo.pl/soup/img/posts/post05.jpg" alt="" />
                            </div>
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
                    <div className="sidebar right">
                        {/* <!-- Widget - Newsletter --> */}
                        <div className="widget widget-newsletter">
                            <h5>Subscribe Us</h5>
                            <form
                                action="//suelo.us12.list-manage.com/subscribe/post-json?u=ed47dbfe167d906f2bc46a01b&amp;id=24ac8a22ad"
                                id="sign-up-form2" className="sign-up-form validate-form" method="POST"
                                data-message-error="Opps... Something went wrong - please try again later"
                                data-message-success="Yeah! You will recieve a confirmation email soon...">
                                <div className="form-group mb-0">
                                    <input type="email" name="EMAIL" id="mce-EMAIL2" value="" className="form-control"
                                        placeholder="Your e-mail..." required />
                                </div>
                                <div className="form-group">
                                    <button type="submit" className="btn btn-secondary btn-block">
                                        <span>Subscribe!</span>
                                    </button>
                                </div>
                            </form>
                        </div>
                        <hr />
                        {/* <!-- Widget - Recent posts --> */}
                        <div className="widget widget-recent-posts">
                            <h5>Recent Posts</h5>
                            <ul className="list-posts">
                                <li>
                                    <Link to="/page/blog/post" className="title">How to create effective webdeisign?</Link>
                                    <span className="date">February 14, 2015</span>
                                </li>
                                <li>
                                    <Link to="/page/blog/post" className="title">Awesome weekend in Polish mountains!</Link>
                                    <span className="date">February 14, 2015</span>
                                </li>
                                <li>
                                    <Link to="/page/blog/post" className="title">How to create effective webdeisign?</Link>
                                    <span className="date">February 14, 2015</span>
                                </li>
                            </ul>
                        </div>
                        <hr />
                        {/* <!-- Widget - Twitter --> */}
                        <div className="widget widget-twitter">
                            <h5>Latest Tweets</h5>
                            <div id="twitter-feed" className="twitter-feed"></div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default PageContent;