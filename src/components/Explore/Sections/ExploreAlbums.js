import React, { useEffect } from "react";
import { Typography, Button, Col } from "antd";
import Slider from "react-slick";

import {CarsouelSettings} from "../../../utils/carouselSettings";
import ShowResult from "../../Common/Result";
import AlbumCard from "../../Common/AlbumCard";
import SongCards from "../../Common/Loading/SongCards";
import { Link } from "react-router-dom";
import { isEmpty } from "../../../utils/commonUtils";
import ScrollPagination from '../../Common/ScrollPagination'

const { Title } = Typography;

const ExploreAlbums = (props) => {
  const { exploreAlbums,
    exploreAlbumsLoading,
    fetchExploreAlbums,
    exploreAlbumsMeta,
    exploreAlbumsHasMore,
    exploreAlbumsLoadingMore,
    setCurrentPlaySong, isPlayerPlaying, setIsPlayerPlaying,
    currentPlayReferrerId, currentPlayReferrer, currentPlayKey,addSongToCurrentAudioQueue,
  } = props;

  const { current_page } = exploreAlbumsMeta || {};

  useEffect(() => {
    if (exploreAlbums.length === 0) {
      fetchExploreAlbums();
    }
  }, []);// eslint-disable-line

  const settings = CarsouelSettings(2,5) // carsouel setting

  const setBulkSongsToPlay = (songData) => {
    setCurrentPlaySong(songData);
  }
  const setAlbumToFavourite = (formdata,id)=>{
    props.actions.setFavouriteAlbum(formdata,id)
  }

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

  return (
    <>
      {exploreAlbumsLoading ? (
        <SongCards />
      ) : Array.isArray(exploreAlbums) && exploreAlbums.length !== 0 ? (
        exploreAlbums.map((albumsByGenre, index) => {
          return (
            <Col {...layout.full} key={albumsByGenre.id} >
              {!isEmpty(albumsByGenre.albums.data) ? (
                <div className="section">
                  <div className="section-header">
                    <Title level={4}>{albumsByGenre.title}</Title>
                    <span className="section-link">
                      <Link to={`/genre/${albumsByGenre.id}/albums`}>
                        <Button type="text">See All</Button>
                      </Link>
                    </span>
                  </div>

                  <div className="section-body custom-slick">
                    <Slider {...settings}>
                      {albumsByGenre.albums.data.map((album, index) => {
                        return (
                          <div key={album.id}>
                            <AlbumCard
                              albumDetails={album}
                              setBulkSongsToPlay={setBulkSongsToPlay}
                              currentPlayKey={currentPlayKey}
                              currentPlayReferrerId={currentPlayReferrerId}
                              currentPlayReferrer={currentPlayReferrer}
                              isPlayerPlaying={isPlayerPlaying}
                              setIsPlayerPlaying={setIsPlayerPlaying}
                              addSongToCurrentAudioQueue={addSongToCurrentAudioQueue}
                              setAlbumToFavourite={setAlbumToFavourite}
                              {...props}
                            />
                          </div>
                        );
                      })}
                    </Slider>
                  </div>
                </div>
              ) : (
                  <ShowResult msg="Songs Not Found!" home={true} />
                )}
            </Col>
          );
        })
      ) : (
            <ShowResult msg="Albums by Genre Not Found!" home={true} />
          )}
      <ScrollPagination 
        current_page={current_page} 
        pagination={fetchExploreAlbums} 
        HasMore={exploreAlbumsHasMore} 
        loadingMore={exploreAlbumsLoadingMore} 
        data={exploreAlbums}/>

    </>
  );
};

export default ExploreAlbums;
