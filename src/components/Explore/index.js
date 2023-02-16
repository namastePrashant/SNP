import React, { useState, useEffect } from 'react';
import { Row, Col, Typography, Tabs } from 'antd';
import { useParams, useHistory } from 'react-router-dom';

import ExploreSongs from './Sections/ExploreSongs';
import ExploreAlbums from './Sections/ExploreAlbums';
import ExploreArtists from './Sections/ExploreArtists';
import ExplorePlaylists from './Sections/ExplorePlaylists';
import Advertisement from '../Advertisments';


const { Title } = Typography;
const { TabPane } = Tabs;

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

const Explore = (props) => {

    let history = useHistory();
    const {slug}=useParams()
    const [activeTabKey, setActiveTabKey] = useState("1");
    const {fetchAdvertisementByLocation } = props

    
    const advertisementFetch = ()=>{
        let locations = "explore-footer,belowrecentlyplayed,afterrecommendedartists,banner"
        let formData={
            location:locations,
            platform:'web'
        };
        fetchAdvertisementByLocation(formData)
    }

    useEffect(()=>{
        advertisementFetch();
    },[]);//eslint-disable-line

    const tabs={"artists":"2","albums":"3","playlists":"4"}

    useEffect(() => {
        let activeKey;
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

        history.replace(slugKey?`/explore/${slugKey}`:`/explore`);        
     
    }

    return (
        <Row className='row-main'>
            <Col {...layout.full} className='page-header overlay'>
                <div className='explore-main'>
                    <Title className="header-large">Explore</Title>

                    <Tabs activeKey={activeTabKey} onChange={setActiveKey} >
                        <TabPane tab="Songs" key="1">
                            <Row className='extra-bottom-pad'>
                                <ExploreSongs {...props} />

                                <Col {...layout.full}>
                                 <Advertisement name='banner'/>
                                </Col>
                            
                            </Row>
                        </TabPane>
                        <TabPane tab="Artists" key="2">
                            <Row className='extra-bottom-pad'>

                                <ExploreArtists {...props} />
                                <Col {...layout.full}>
                                <Advertisement name='afterrecommendedartists' />
                                </Col>

                        

                            </Row>
                        </TabPane>
                        <TabPane tab="Albums" key="3">
                            <Row className='extra-bottom-pad'>

                                <ExploreAlbums {...props} />
                                <Col {...layout.full}>
                                <Advertisement name='explore-footer'/>
                                </Col>

                          
                            </Row>
                        </TabPane>
                        <TabPane tab="Playlists" key="4">
                            <Row className='extra-bottom-pad'>
                                <ExplorePlaylists {...props} />
                                <Col {...layout.full}>
                                 <Advertisement name='belowrecentlyplayed'/>
                                </Col>
                             
                            </Row>
                        </TabPane>
                    </Tabs>
                </div>
            </Col>
        </Row>
    );
};

export default Explore;