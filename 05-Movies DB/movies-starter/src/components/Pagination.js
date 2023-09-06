import React from "react";

import { Pagination } from "react-bootstrap";
import ReactPaginate from "react-paginate";

//* https://getbootstrap.com/docs/5.3/components/pagination/
//* https://react-bootstrap.netlify.app/docs/components/pagination

/*
 * <nav aria-label="Page navigation example">
 *   <ul className="pagination">
 *     <li className="page-item"><a className="page-link" href="#">Previous</a></li>
 *     <li className="page-item"><a className="page-link" href="#">1</a></li>
 *     <li className="page-item"><a className="page-link" href="#">2</a></li>
 *     <li className="page-item"><a className="page-link" href="#">3</a></li>
 *     <li className="page-item"><a className="page-link" href="#">Next</a></li>
 *   </ul>
 * </nav>
 */

// * https://www.npmjs.com/package/react-paginate

const PaginationComponent = ({ getPage, pageCount }) => {
  const handlePageClick = (data) => {
    // console.log(data); // {selected: 0}, {selected: 1}, ... , {selected: 499}
    console.log(data.selected + 1); // 1, 2, ... , 500
    getPage(data.selected + 1);
  };

  // const pageCount = 500;

  return (
    // <Pagination>
    //   <Pagination.First />
    //   <Pagination.Prev />
    //   <Pagination.Item>{1}</Pagination.Item>
    //   <Pagination.Ellipsis />

    //   <Pagination.Item>{10}</Pagination.Item>
    //   <Pagination.Item>{11}</Pagination.Item>
    //   <Pagination.Item active>{12}</Pagination.Item>
    //   <Pagination.Item>{13}</Pagination.Item>
    //   <Pagination.Item disabled>{14}</Pagination.Item>

    //   <Pagination.Ellipsis />
    //   <Pagination.Item>{20}</Pagination.Item>
    //   <Pagination.Next />
    //   <Pagination.Last />
    // </Pagination>
    <ReactPaginate
      breakLabel="..."
      nextLabel="التالي"
      onPageChange={handlePageClick}
      marginPagesDisplayed={2}
      pageRangeDisplayed={2}
      pageCount={pageCount}
      previousLabel="السابق"
      renderOnZeroPageCount={null}
      // * containerClassName={"pagination"}: <ul className="pagination">...</ul>
      containerClassName={"pagination justify-content-center p-3"}
      // * pageClassName={"page-item"}: <li className="page-item">..</li> => أرقام عدد الصفحات
      // * pageLinkClassName={"page-link"}: <a className="page-link" href="#">..</a> => أرقام عدد الصفحات
      pageClassName={"page-item"}
      pageLinkClassName={"page-link"}
      // * previousClassName={"page-item"}: <li className="page-item">..</li> => Previous
      // * nextClassName={"page-item"}: <li className="page-item">..</li> => Next
      previousClassName={"page-item"}
      nextClassName={"page-item"}
      // * previousLinkClassName={"page-link"}: <a className="page-link" href="#">Previous</a>
      // * nextLinkClassName={"page-link"}: <a className="page-link" href="#">Next</a>
      previousLinkClassName={"page-link"}
      nextLinkClassName={"page-link"}
      // * <Pagination.Ellipsis /> => Pagination الثلاث نقاط ... في ال
      breakClassName={"page-item"}
      breakLinkClassName={"page-link"}
      // * <li className="page-item active" aria-current="page" />
      activeClassName={"active"}
      // ** وأستخدمهم css بملف ال custom class أعمل bootstrap ممكن بدل ما أستخدم كلاسات ال **
    />
  );
};

export default PaginationComponent;
