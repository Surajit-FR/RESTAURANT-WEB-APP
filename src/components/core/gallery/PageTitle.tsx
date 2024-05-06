const PageTitle = (): JSX.Element => {
    return (
        <>
            {/* <!-- Page Title --> */}
            <div className="page-title border-top dark bg-dark">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-7 offset-lg-4">
                            <h1 className="mb-0">Gallery</h1>
                            <h4 className="text-muted mb-0">Some informations about our restaurant</h4>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PageTitle;