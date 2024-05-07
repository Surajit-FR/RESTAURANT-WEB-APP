const PageTitle = (): JSX.Element => {
    return (
        <>
            {/* <!-- Page Title --> */}
            <div className="page-title page-title-lg bg-dark dark">
                <div className="bg-image bg-parallax"><img src="http://assets.suelo.pl/soup/img/photos/bg-croissant.jpg" alt="" /></div>
                <div className="row">
                    <div className="col-lg-4 offset-lg-4 text-center">
                        <h1 className="mb-2">Reviews</h1>
                        <h5 className="text-muted mb-0">Some informations about our restaurant</h5>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PageTitle;