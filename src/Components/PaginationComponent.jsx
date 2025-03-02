import React from 'react'

import ReactPaginate from 'react-paginate';
const PaginationComponent = ({count,getSpecificPage}) => {
    const handlePageClick=(data)=>{
  
        getSpecificPage(data.selected+1)
    
    }
    const pageCount=count;
    return (
        <>
    
        <ReactPaginate 
        breakLabel="..."
        nextLabel="التالي"
        onPageChange={handlePageClick}
        pageRangeDisplayed={2}
        pageCount={pageCount}
        previousLabel="السابق"
        onPageActive={"page-link"}
        previousClassName={"page-item"}
        activeLinkClassName={"page-link"}
        containerClassName={"pagination justify-content-center"}
        marginPagesDisplayed={2}
        pageClassName={'page-item'}
        pageLinkClassName={'page-link'}
      
         activeClassName={'active'}
          breakLinkClassName={'page-link'}
         breakClassName={'page-item'}
         nextLinkClassName={'page-link'}
         previousLinkClassName={'page-link'}
         nextClassName={'page-item'}
    


 


      />
   
    
        </>
    )
}

export default PaginationComponent
