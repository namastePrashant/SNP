import React, { useRef, useCallback } from 'react';
import { Row } from 'antd'
import SpiningSvg from '../../assets/Images/loadMore.svg'

const ScrollPagination = props => {

  const { current_page, pagination, HasMore, loadingMore, data, id, searchKey, hasDate,DateRange } = props;

  const observer = useRef();

  const lastElement = useCallback(node => {
    if (loadingMore) return;
    if (observer.current) { observer.current.disconnect() }
    observer.current = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting && HasMore) {
        if (id) {
          pagination(id, current_page + 1);
        }else if(hasDate){
          pagination(DateRange, current_page + 1, searchKey);
        }  else if (searchKey) {
          pagination(searchKey, current_page + 1);
        }else {
          pagination(current_page + 1);
        }

      }
    })

    if (node) { observer.current.observe(node) }

  }, [data, current_page]);//eslint-disable-line


  return (
    <>
      <Row className="justify-content-center" style={{ width: "100%" }}>
        {
          loadingMore ?
            <>
              <div className="loadmore_text">
                <img src={SpiningSvg} alt="" />
                <p>Loading</p>
              </div>
            </> : <>
              {/* changes coz if triggered while loading same page will be called */}
              <div ref={lastElement}>
              </div>
            </>
        }

      </Row>
    </>
  )


}

export default ScrollPagination;