import ReactPaginate from "react-paginate";

const ReactPagination = ({ pageCount, changePage }: { pageCount: number; changePage: (data: { selected: number }) => void }): JSX.Element => {
    return (
        <>
            <ul className="pagination justify-content-center">
                <ReactPaginate
                    breakLabel=''
                    previousLabel={<i className="ti ti-arrow-left"></i>}
                    nextLabel={<i className="ti ti-arrow-right"></i>}
                    pageCount={pageCount}
                    onPageChange={changePage}
                    containerClassName={"pagination"}
                    pageClassName={"page-item"}
                    pageLinkClassName={"page-link"}
                    previousClassName={"page-item"}
                    previousLinkClassName={"page-link"}
                    nextClassName={"page-item"}
                    nextLinkClassName={"page-link"}
                    activeClassName={"active"}
                    renderOnZeroPageCount={null}
                />
            </ul>
        </>
    )
}

export default ReactPagination;