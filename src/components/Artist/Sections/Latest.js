import React, { useEffect } from "react";
import { useParams,Link } from "react-router-dom";
import { Typography, Button } from "antd";

import AlbumCard from "../../Common/AlbumCard";
import Slider from "react-slick";

import {CarsouelSettings}  from "../../../utils/carouselSettings";
import ShowResult from "../../Common/Result";
// import DummyImage from '../../../assets/Images/dummySN.png';
import SongCards from "../../Common/Loading/SongCards";
import { isEmpty } from "../../../utils/commonUtils";

const { Title } = Typography;

const Latest = (props) => {
  const {
    fetchArtistLatestReleases,
    artistLatestReleases,
    artistLatestReleasesLoading,
    fetchArtistLatestReleasedAlbum,
  } = props;
  const { id } = useParams();

  useEffect(() => {
    fetchArtistLatestReleases(id);
  }, [id]);//eslint-disable-line

  useEffect(() => {
    if (artistLatestReleases.albums && !isEmpty(artistLatestReleases.albums.data)) {
      fetchArtistLatestReleasedAlbum(artistLatestReleases.albums.data[0].id);
    }
  }, [artistLatestReleases]);//eslint-disable-line

  const fetchSelectedAlbum = (id) => {
    fetchArtistLatestReleasedAlbum(id);
  };

  const settings = CarsouelSettings(1,3)


  return (
    <div className="section">
      <div className="section-header no-line">
        <Title level={4}>Latest Releases</Title>
        <span className="section-link">
          <Link to={props.match.url+"/latest-release-album"}><Button type="text">See All</Button></Link>
        </span>
      </div>

      <div className="section-body custom-slick">
        {artistLatestReleasesLoading ? (
          <SongCards />
        ) : !isEmpty(artistLatestReleases.albums) ? (
          <Slider {...settings}>
            {artistLatestReleases.albums.data.map((album) => {
              return (
                <div key={album.id}>
                  <AlbumCard
                    className="recent-card"
                    albumDetails={album}
                    selectedAlbum={true}                    
                    fetchSelectedAlbum={fetchSelectedAlbum}
                    artistInfo={artistLatestReleases.profile}
                  />
                </div>
              );
            })}
          </Slider>
        ) : (
          <ShowResult msg="Latest Releases Not Found!" home={true} />
        )}
      </div>
    </div>
  );
};

export default Latest;
