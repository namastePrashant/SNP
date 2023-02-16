import React, { useEffect, useState } from 'react';
import { Row, Col, Typography, Tabs } from 'antd';
import { useParams, useHistory } from 'react-router-dom';

// import Premium from '../../assets/Images/Premium.png'
// import Free from '../../assets/Images/spotify-free-trial.png'

import GenreSongs from './Sections/GenreSongs';
import GenreArtists from './Sections/GenreArtists';
import GenreAlbums from './Sections/GenreAlbums';
import GenrePlaylist from './Sections/GenrePlaylist';
import Songs from './Sections/Songs';
import Artists from './Sections/Artists';
import Albums from './Sections/Albums';
import Playlists from './Sections/Playlists';
import CustomSpin from '../Common/CustomSpin';
import Advertisement from '../Advertisments'

const { TabPane } = Tabs;
const { Title } = Typography;

const layout = {
    full: {
        xxl: { span: 24 },
        xl: { span: 24 },
        lg: { span: 24 },
        md: { span: 24 },
        sm: { span: 24 },
        xs: { span: 24 },
    },
};

const Genre = (props) => {

    let history = useHistory();

    const { fetchIndividualGenre,fetchAdvertisementByLocation, individual, individualLoading, setCurrentPlaySong, currentPlayKey, isPlayerPlaying, } = props
    const { id, slug } = useParams();
    const [activeTabKey, setActiveTabKey] = useState("1");

    const fetchAds = ()=>{
        const location = 'belowrecentlyplayed,afterrecommendedartists,explore-footer'
        const formData = {
          location:location,
          platform:'web'
        }
        fetchAdvertisementByLocation(formData)
      }

      useEffect(() => {
        fetchIndividualGenre(id)
        fetchAds()
    }, [])//eslint-disable-line

    const tabs={"songs":"2","artists":"3","albums":"4","playlists":"5"}
    // const tabList=["songs","artists","albums","playlists", "all"];

    useEffect(() => {
        let activeKey;

        // Object.keys(tabs).forEach(tab=>{        
        //     if(slug===tab){
        //         console.log('tab, slug', tab, slug);
        //         activeKey=tabs[slug];
        //     }
        // })        
        
        // can change the keys to string and directly change the keys according to the slug
        activeKey=tabs[slug];        
        setActiveTabKey(activeKey);
    }, [slug])//eslint-disable-line
    

    const setActiveKey = (key) => {
        let slugKey;

        Object.keys(tabs).forEach(tabKey=>{
            
            if(tabs[tabKey]===key){                
                slugKey=tabKey;
            }else if(key==="1"){                
                slugKey=null;
            }
        })        

        history.replace(slugKey?`/genre/${id}/${slugKey}`:`/genre/${id}`);        
        // setActiveTabKey(key);
    }

    return (
        <Row className='row-main'>
            <Col {...layout.full} className='page-header overlay'>
                <div className='explore-main'>
                    <Title>{individualLoading ? <CustomSpin /> : individual.title} </Title>

                    <Tabs activeKey={activeTabKey} onChange={setActiveKey}>
                        <TabPane tab="All" key="1">
                            <Row className='extra-bottom-pad'>
                                <Col {...layout.full}>
                                    <GenreSongs
                                        songs={individual?.songs?.data}
                                        loading={individualLoading}
                                        genre={individual?.title}
                                        setCurrentPlaySong={setCurrentPlaySong}
                                        currentPlayKey={currentPlayKey}
                                        isPlayerPlaying={isPlayerPlaying}
                                        setActiveKey={setActiveKey}
                                        {...props}
                                    />
                                    <Advertisement name='belowrecentlyplayed'/>

                                </Col>

                                <Col {...layout.full}>
                                    <GenreAlbums
                                        albums={individual?.albums?.data}
                                        loading={individualLoading}
                                        genre={individual?.title}
                                        setActiveKey={setActiveKey}
                                        {...props}
                                    />
                                </Col>
                                <Col {...layout.full}>
                                    <GenreArtists
                                        artists={individual?.artists?.data}
                                        loading={individualLoading}
                                        genre={individual?.title}
                                        setActiveKey={setActiveKey}
                                        {...props}
                                    />
                                </Col>
                                <Col {...layout.full}>
                                    <GenrePlaylist
                                        playlists={individual?.playlists?.data}
                                        loading={individualLoading}
                                        genre={individual?.title}
                                        setActiveKey={setActiveKey}
                                        {...props}
                                    />
                                    <Advertisement name='explore-footer'/>
                                </Col>
                            </Row>

                        </TabPane>
                        <TabPane tab="Songs" key="2">
                            <Row className='extra-bottom-pad'>
                                <Col {...layout.full}>
                                    <Songs {...props} />
                                    <Advertisement name='afterrecommendedartists'/>

                                </Col>
                            </Row>
                        </TabPane>
                        <TabPane tab="Artists" key="3">
                            <Row className='extra-bottom-pad'>
                                <Col {...layout.full}>
                                    <Artists {...props} />
                                    <Advertisement name='belowrecentlyplayed'/>

                                </Col>
                            </Row>
                        </TabPane>
                        <TabPane tab="Albums" key="4">
                            <Row className='extra-bottom-pad'>
                                <Col {...layout.full}>
                                    <Albums {...props} />
                                    <Advertisement name='afterrecommendedartists'/>

                                </Col>
                            </Row>
                        </TabPane>
                        <TabPane tab="Playlists" key="5">
                            <Row className='extra-bottom-pad'>
                                <Col {...layout.full}>
                                    <Playlists {...props} />
                                    <Advertisement name='explore-footer'/>

                                </Col>

                            </Row>
                        </TabPane>
                    </Tabs>

                </div>
            </Col>
        </Row>
    );
};

export default Genre;