const ReviewModal = (): JSX.Element => {
    return (
        <>
            {/* <!-- Modal / Review --> */}
            <div className="modal fade" id="reviewModal" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex={-1} aria-labelledby="reviewModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header modal-header-lg dark bg-dark">
                            <div className="bg-image"><img src="http://assets.suelo.pl/soup/img/photos/modal-review.jpg" alt="" />
                            </div>
                            <h4 className="modal-title">Write a review!</h4>
                            <button type="button" className="close" data-bs-dismiss="modal" aria-label="Close"><i
                                className="ti ti-close"></i></button>
                        </div>
                        <div className="modal-body">
                            <form action="#">
                                <div className="form-group">
                                    <textarea cols={30} rows={6} className="form-control"
                                        placeholder="Write here your review..."></textarea>
                                </div>
                                <div className="form-group">
                                    <label>Your rate:</label>
                                    <div className="rate rate-lg rating mb-2"><i className="fa fa-star"></i><i className="fa fa-star"></i><i
                                        className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i></div>
                                </div>
                                <div className="form-group">
                                    <label>Your name:</label>
                                    <input type="text" className="form-control" placeholder="Your name" />
                                </div>
                                <div className="text-center">
                                    <button className="btn btn-primary" data-bs-dismiss="modal">Add review</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ReviewModal;