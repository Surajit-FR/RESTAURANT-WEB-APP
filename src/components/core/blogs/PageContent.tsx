import { useState } from "react"
import { Link } from "react-router-dom"
import ReactPagination from "../../../utils/ReactPagination";

const PageContent = (): JSX.Element => {
    const [pageNumber, setPageNumber] = useState<number>(0);
    const blogData: Array<number> = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

    // pagination
    const dataPerPage = 5;
    const pagesVisited = pageNumber * dataPerPage;
    const newBlogData = blogData?.slice(pagesVisited, pagesVisited + dataPerPage); // will be looped for show data
    const pageCount = Math.ceil((blogData?.length || 0) / dataPerPage);

    const changePage = ({ selected }: { selected: number }) => {
        setPageNumber(selected);
    };

    console.log({ newBlogData });

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
                                <ReactPagination
                                    pageCount={pageCount}
                                    changePage={changePage}
                                />
                            </nav>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default PageContent