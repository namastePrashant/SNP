import React, { useEffect } from "react";
import { Row, Col } from "antd";

import TopHits from "./Sections/TopHits";
import Popular from "./Sections/Popular";
import Featured from "./Sections/Featured";
import TopSongs from "./Sections/TopSongs";
import Fresh from "./Sections/Fresh";
import Recents from "./Sections/Recents";
import RecommendedArtists from "./Sections/RecommendedArtists";
import Personalized from "./Sections/Personalized";
import RecommendedAlbums from "./Sections/RecommendedAlbums";
import Advertisement from '../Advertisments';


const Home = (props) => {
  const { fetchAdvertisementByLocation } = props;

  useEffect(() => {
    fetchAds();
  }, []);//eslint-disable-line


  const fetchAds = () => {
    const location = 'aftercurrenttophits,belowrecentlyplayed,afterrecommendedartists,explore-footer'
    const formData = {
      location: location,
      platform: 'web'
    }
    fetchAdvertisementByLocation(formData)
  }


  return (
    <section className="row-main home-layout">
      <Row gutter={[8,8]}>
        <Col xl={14} xs={24} xxl={16}>
          <Featured {...props} />
        </Col>
        <Col xl={10} xs={24}  xxl={8}>
          <TopHits {...props} />
        </Col>
      </Row>

      <Row gutter={[8,8]}>
        <Col xl={14} xs={24}  xxl={16}>
          <Fresh {...props} />
          <Recents {...props} />
          <Advertisement name='belowrecentlyplayed' />
        </Col>
        <Col xl={10} xs={24}   xxl={8}>
          <Advertisement name='aftercurrenttophits' />
          <Popular {...props} />
        </Col>
      </Row>


      <Row>
        <Col span={24}>
          <TopSongs {...props} />
        </Col>

        <Col span={24}>
          <RecommendedArtists {...props} />
        </Col>

        <Col span={24}>
          <Advertisement name='afterrecommendedartists' />
        </Col>


        <Col span={24}>
        <Personalized {...props} />
        </Col>

        <Col span={24}>
          <RecommendedAlbums {...props} />
        </Col>

        <Col span={24}>
          <Advertisement name='explore-footer' />
        </Col>
      </Row>
    </section>
  );
};

export default Home;
