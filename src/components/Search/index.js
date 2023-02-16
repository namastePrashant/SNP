import React, { Fragment } from 'react';
import { Row, Col } from 'antd';
import { isEmpty } from '../../utils/commonUtils';

// import TopResult from './Sections/TopResult';
import Songs from './Sections/Songs';
import Artists from './Sections/Artists';
import Albums from './Sections/Albums';
import Free from '../../assets/Images/spotify-free-trial.png'
import ShowResult from '../Common/Result';

// const { Title } = Typography;

const layout = {
    full: {
        xxl: { span: 24 },
        xl: { span: 24 },
        lg: { span: 24 },
        md: { span: 24 },
        sm: { span: 24 },
        xs: { span: 24 },
    },

    main: {
        xxl: { span: 12 },
        xl: { span: 12 },
        lg: { span: 24 },
        md: { span: 24 },
        sm: { span: 24 },
        xs: { span: 24 },
    },
    side: {
        xxl: { span: 8 },
        xl: { span: 12 },
        lg: { span: 24 },
        md: { span: 24 },
        sm: { span: 24 },
        xs: { span: 24 },
    }

};

const Search = (props) => {
    const { searchesArtists,searchesAlbums,searchesSongs,noSearchResult,searchedKey} = props

    return (
        <Fragment>
            {isEmpty(searchesArtists) && isEmpty(searchesAlbums)  && isEmpty(searchesSongs)? <ShowResult 
            msg={
              noSearchResult?"Sorry no results found for '"+ searchedKey+ " '":
              "Please search for a song, album or artist"
            } home={true} /> :
                <Row className='row-main home-layout' >
                    {/* <Col {...layout.full}>
                   <div className='explore-main'>
                       <Title>Top Result</Title>
   
                       <Row className=''>
                           <Col {...layout.full}>
                               <TopResult />
                           </Col>
                       </Row>
                   </div>
               </Col> */}

                    {/* {isEmpty(searches) ? '' : } */}

                    <Col {...layout.full}>
                        <div className='explore-main'>
                            <Row className=''>
                                <Col {...layout.full}>
                                    <Songs data={isEmpty(searchesSongs) ? '' : searchesSongs} {...props} />
                                </Col>
                            </Row>
                        </div>
                    </Col>

                    <Col
                        xxl={{ span: 11, }}
                        xl={{ span: 11, }}
                        lg={{ span: 24, }}
                        md={{ span: 24, }}

                    >
                        <div className='explore-main'>
                            <Row className=''>
                                <Col {...layout.full}>
                                    <Artists data={isEmpty(searchesArtists) ? '' : searchesArtists} {...props} />
                                </Col>
                            </Row>
                        </div>
                    </Col>

                    <Col
                        xxl={{ span: 11, offset: 2 }}
                        xl={{ span: 11, offset: 2 }}
                        lg={{ span: 24, }}
                        md={{ span: 24, }}
                    >
                        <div className='explore-main'>
                            <Row className=''>
                                <Col {...layout.full}>
                                    <Albums data={isEmpty(searchesAlbums) ? '' :searchesAlbums} {...props} />
                                </Col>
                            </Row>
                        </div>

                    </Col>

                    <Col {...layout.full}>

                        <div className="ad-banner2">
                            <img src={Free} alt="Free" />
                        </div>

                    </Col>


                </Row>
            }
        </Fragment>

    );
};

export default Search;