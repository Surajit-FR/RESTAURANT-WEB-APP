import { Link } from "react-router-dom";

const PostSingle = (): JSX.Element => {
    return (
        <>
            {/* <!-- Post / Single --> */}
            <article className="post single">
                <div className="post-image bg-parallax"><img src="http://assets.suelo.pl/soup/img/posts/post01_lg.jpg"
                    alt="" /></div>
                <div className="container container-md">
                    <div className="post-content">
                        <ul className="post-meta">
                            <li>24 July, 2016</li>
                            <li>by Johnatan Doe</li>
                        </ul>
                        <h1 className="post-title">Delicious idea for your Sunday dessert</h1>
                        <hr />
                        <p className="lead">Integer commodo nisi nec hendrerit volutpat. Ut semper lacus felis, vitae
                            malesuada orci dapibus at. Etiam bibendum sed quam vitae scelerisque. Mauris aliquet
                            vulputate lorem ultrices porttitor. Vivamus lobortis nisl felis, laoreet tincidunt lectus
                            bibendum id. </p>
                        <p>Etiam et lobortis turpis, blandit vestibulum nisl. Sed vel enim sit amet lectus mollis
                            feugiat eget et augue. Nunc eu felis dignissim, malesuada mi at, tempor ex. Quisque quis
                            elit non sem vehicula dictum at sed turpis. In dignissim sodales leo nec pharetra. Fusce a
                            lectus quis lorem condimentum consectetur ac at turpis. Nunc pulvinar non nisl tempor
                            blandit.</p>
                        <p>Cras non placerat mi. Sed condimentum tristique gravida. In egestas malesuada tempus. In quis
                            orci eros. Sed risus ligula, scelerisque nec lacinia eu, rutrum a est. Cras sodales libero
                            libero, sagittis tempor augue sollicitudin ut. In tortor nibh, aliquet sed rutrum sit amet,
                            scelerisque sit amet odio. Nulla facilisi. Ut hendrerit justo eu eleifend volutpat.</p>
                        <p>Proin eu faucibus ante. Nunc euismod purus vel neque porta egestas. Nunc pellentesque enim
                            felis, at egestas libero semper quis. Nullam non tristique metus. Cras ipsum justo,
                            dignissim eu euismod id, fermentum eu lectus. Praesent malesuada dolor eu magna posuere, non
                            pharetra est semper. Curabitur interdum lacinia justo ac posuere. Phasellus auctor tempus
                            est, a tempor odio dictum id. Nulla at ullamcorper est. Interdum et malesuada fames ac ante
                            ipsum primis in faucibus. Curabitur pulvinar tristique justo, sit amet rutrum lectus posuere
                            et. Donec quis facilisis dolor, et molestie elit.</p>
                        <hr />
                        <div className="post-comments post-module">
                            <h4><i className="ti ti-comments mr-3 text-primary"></i>Comments</h4>
                            <div className="content">
                                <ul className="comments">
                                    <li>
                                        <div className="avatar"><img
                                            src="http://assets.suelo.pl/soup/img/avatars/avatar01.jpg" alt="" /></div>
                                        <div className="content">
                                            <span className="details">Jessica Biel on September 20, <Link to="#"
                                                className="text-primary">Reply</Link></span>
                                            <p>Morbi ut faucibus nulla, at fringilla est. Morbi lacinia sagittis purus.
                                            </p>
                                        </div>
                                        <ul>
                                            <li>
                                                <div className="avatar"><img
                                                    src="http://assets.suelo.pl/soup/img/avatars/avatar02.jpg"
                                                    alt="" /></div>
                                                <div className="content">
                                                    <span className="details">Jessica Biel on September 20</span>
                                                    <p>Morbi ut faucibus nulla, at fringilla est. Morbi lacinia sagittis
                                                        purus, nec dapibus felis tempus in. Quisque eget elementum sem,
                                                        cursus tristique orci. Donec velit nisi, auctor ac pharetra in,
                                                        maximus eu justo.</p>
                                                </div>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <div className="avatar"><img
                                            src="http://assets.suelo.pl/soup/img/avatars/avatar03.jpg" alt="" /></div>
                                        <div className="content">
                                            <span className="details">Jessica Biel on September 20, <Link to="#"
                                                className="text-primary">Reply</Link></span>
                                            <p>Morbi ut faucibus nulla, at fringilla est. Morbi lacinia sagittis purus.
                                            </p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <hr />
                        <div className="post-add-comment post-module">
                            <h4><i className="ti ti-pencil mr-3 text-primary"></i>Write a comment</h4>
                            <div className="content">
                                <form action="#" id="add-comment" className="validate-form">
                                    <div className="row gutters-sm">
                                        <div className="col-md-6 form-group">
                                            <input type="text" className="form-control" placeholder="Name" required />
                                        </div>
                                        <div className="col-md-6 form-group">
                                            <input type="email" className="form-control" placeholder="E-mail" required />
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <textarea id="comment" cols={30} rows={4} className="form-control"
                                            placeholder="Comment" required></textarea>
                                    </div>
                                    <div className="text-center">
                                        <button className="btn btn-primary"><span>Send a comment</span></button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </article>
        </>
    )
}

export default PostSingle;