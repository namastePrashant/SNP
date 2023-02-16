import React from 'react';
import { Row, Col, Typography, Tabs } from 'antd';

import Free from '../../assets/Images/spotify-free-trial.png'

import RockPlaylists from './Sections/RockPlaylists';
import ClassicPlaylists from './Sections/ClassicPlaylists';
import PopPlaylists from './Sections/PopPlaylists';
import Rock from './Sections/Rock';
import Classic from './Sections/Classic';
import Folk from './Sections/Folk';
import HipHop from './Sections/HipHop';
import Movie from './Sections/Movie';
import Pop from './Sections/Pop';

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

const PlaylistsList = () => {
    return (
        <Row className='row-main'>
            <Col {...layout.full} className='page-header overlay'>
                <div className='explore-main'>
                    <Title>Playlists </Title>

                    <Tabs defaultActiveKey="1">
                        <TabPane tab="All" key="1">
                            <Row className='extra-bottom-pad'>
                                <Col {...layout.full}>
                                    {/* Rock playlists */}
                                    <RockPlaylists />
                                </Col>

                                <Col {...layout.full}>
                                    {/* Classic Playlists */}
                                    <ClassicPlaylists />
                                </Col>
                                <Col {...layout.full}>
                                    {/* Pop Playlists */}
                                    <PopPlaylists />
                                </Col>

                            </Row>

                        </TabPane>
                        <TabPane tab="Rock" key="2">
                            <Row className='extra-bottom-pad'>
                                <Col {...layout.full}>
                                    <Rock />
                                </Col>
                                {/* <div className="ad-banner2">
                                    <img src={Free} alt="Free" />
                                </div> */}
                            </Row>
                        </TabPane>
                        <TabPane tab="Classic" key="3">
                            <Row className='extra-bottom-pad'>
                                <Col {...layout.full}>
                                    <Classic />
                                </Col>
                                {/* <div className="ad-banner2">
                                    <img src={Free} alt="Free" />
                                </div> */}
                            </Row>
                        </TabPane>
                        <TabPane tab="Pop" key="4">
                            <Row className='extra-bottom-pad'>
                                <Col {...layout.full}>
                                    <Pop />
                                </Col>
                                {/* <div className="ad-banner2">
                                    <img src={Free} alt="Free" />
                                </div> */}
                            </Row>
                        </TabPane>
                        <TabPane tab="HipHop" key="5">
                            <Row className='extra-bottom-pad'>
                                <Col {...layout.full}>
                                    <HipHop />
                                </Col>
                                {/* <div className="ad-banner2">
                                    <img src={Free} alt="Free" />
                                </div> */}
                            </Row>
                        </TabPane>
                        <TabPane tab="Movie" key="6">
                            <Row className='extra-bottom-pad'>
                                <Col {...layout.full}>
                                    <Movie />
                                </Col>
                                <div className="ad-banner2">
                                    <img src={Free} alt="Free" />
                                </div>
                            </Row>
                        </TabPane>
                        <TabPane tab="Folk" key="7">
                            <Row className='extra-bottom-pad'>
                                <Col {...layout.full}>
                                    <Folk />
                                </Col>
                                {/* <div className="ad-banner2">
                                    <img src={Free} alt="Free" />
                                </div> */}
                            </Row>
                        </TabPane>
                    </Tabs>

                </div>
            </Col>
        </Row>
    );
};

export default PlaylistsList;
