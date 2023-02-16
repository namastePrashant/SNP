import React,{useState,useEffect} from 'react';
import { Row, Col, Typography, Tabs } from 'antd';
import { useParams, useHistory } from 'react-router-dom';

// import Free from '../../assets/Images/spotify-free-trial.png'

import LatestSongs from './Sections/LatestSongs';
import LatestArtists from './Sections/LatestArtists';
import LatestAlbums from './Sections/LatestAlbums';
import Songs from './Sections/Songs';
import Albums from '../New/Sections/Albums';
import Artists from '../New/Sections/Artists';
import Advertisement from '../Advertisments';

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

const New = (props) => {
    let history = useHistory();
const {slug}=useParams()
const [activeTabKey, setActiveTabKey] = useState("1");
    const {fetchAdvertisementByLocation} = props;

    const advertisementFetch = ()=>{
        let locations = "banner,afterrecommendedartists,belowrecentlyplayed"
        let formData={
            location:locations,
            platform:'web'
        };
        fetchAdvertisementByLocation(formData)
    }

    useEffect(()=>{
        advertisementFetch();
    },[]);//eslint-disable-line

    const tabs={"latest-songs":"2","latest-album":"3","new-artists":"4"}

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

        history.replace(slugKey?`/new/${slugKey}`:`/new`);        
     
    }
    return (
        <Row className='row-main'>
            <Col {...layout.full} className='page-header overlay'>
                <div className='explore-main'>
                    <Title className="header-large">New Releases </Title>

                    <Tabs activeKey={activeTabKey} onChange={setActiveKey} >
                        <TabPane tab="All" key="1">
                            <Row className='extra-bottom-pad'>
                                <Col {...layout.full}>
                                    <LatestSongs setActiveKey={setActiveKey}
                                    {...props} />
                                </Col>
                                <Advertisement name='banner'/>

                                <Col {...layout.full}>
                                    <LatestAlbums setActiveKey={setActiveKey}{...props} />
                                </Col>
                                <Col {...layout.full}>
                                    <LatestArtists setActiveKey={setActiveKey}{...props} />
                                </Col>
                                <Col {...layout.full}>
                                <Advertisement name='afterrecommendedartists'/>
                                </Col>
                            </Row>
                        </TabPane>
                        <TabPane tab="Latest Songs" key="2">
                            <Row className='extra-bottom-pad'>
                                <Col {...layout.full}>
                                    <Songs {...props} />
                                </Col>
                                <Col {...layout.full}>

                                <Advertisement name='banner'/>
                                </Col>
                            </Row>
                        </TabPane>
                        <TabPane tab="Latest Albums" key="3">
                            <Row className='extra-bottom-pad'>
                                <Col {...layout.full}>
                                    <Albums {...props} />
                                </Col>
                                <Col {...layout.full}>

                                <Advertisement name='belowrecentlyplayed'/>
                                </Col>

                            </Row>
                        </TabPane>
                        <TabPane tab="New Artists" key="4">
                            <Row className='extra-bottom-pad'>
                                <Col {...layout.full}>
                                    <Artists {...props} />
                                </Col>
                                <Col {...layout.full}>

                                <Advertisement name='banner'/>
                                </Col>


                            </Row>
                        </TabPane>
                    </Tabs>

                </div>
            </Col>
        </Row>
    );
};

export default New;