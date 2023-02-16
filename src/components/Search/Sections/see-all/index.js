import React from 'react'
import {useParams} from 'react-router-dom'
import SearchedSongs from './songs'
import SearchedArtist from './artists'
import SearchedAlbums from './albums'
import {Row,Col} from 'antd'
import {Redirect} from 'react-router-dom'


const SearchResults = props =>{

  const {identifier} = useParams();


  const layout = {
    full: {
      xxl: { span: 24 },
      xl: { span: 24 },
      lg: { span: 24 },
      md: { span: 24 },
      sm: { span: 24 },
      xs: { span: 24 },
    }
  };

  
  return(
     <>
     <Row className='row-main home-layout' >
      <Col {...layout.full}>
        <div className='explore-main'>
          <Row className=''>
            <Col {...layout.full}>
            
              {identifier==='song'?(
                <SearchedSongs {...props}/>
              ):identifier==='artist'?(
                <SearchedArtist {...props}/>
              ):identifier==='album'?(
                <SearchedAlbums {...props}/>
              ):(
                <Redirect to="/search"/>
              )}

              
            </Col>
          </Row>
        </div>
      </Col>
    </Row>

     </>
  ) 
}


export default SearchResults 

