import React from 'react'
import ScrollPagination from '../../../../Common/ScrollPagination'; 
import {Row,Col,Typography} from 'antd'
import {Redirect} from 'react-router-dom'
import ArtistCard from '../../../../Common/ArtistCard'
const { Title } = Typography;


const SearchedArtist = props =>{
  const {
    LoadMoreSearchResults,
    searchArtists,
    loadMore,
    hasMoreArtists,
    currentPage,
    searchedKey
  } = props

  
  return(
    <>
    {
      searchArtists.length?(
        <div className='section'>
        <div className='section-header'>
          <Title level={4}>Search results for Songs </Title>
        </div>
  
        <div className="section-body">
          <Row className="section-body col__centered__items grid-view">
            {
              searchArtists.map((artist,index)=>(
                <Col key={index}>
                  <ArtistCard
                   artistDetails={artist}
                  />
                </Col>
              ))
            }
          </Row>
          {searchArtists.length?(
            <div>
            <ScrollPagination 
             current_page={currentPage} 
             pagination={LoadMoreSearchResults} 
             HasMore={hasMoreArtists} 
             loadingMore={loadMore} 
             data={searchArtists}
             searchKey={searchedKey}
           />

          </div>
  
          ):""}
        </div>  
  
        
      </div>
      ):(
        <Redirect to='/search'/>
      )
    }
    </>
  )

}


export default SearchedArtist