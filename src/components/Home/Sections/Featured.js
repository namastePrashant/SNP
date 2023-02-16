import React, { useEffect } from "react";
import { Carousel } from "antd";

import featuredDummy from "../../../mock/featured";
// import MusicOverlay from "../../Common/MusicOverlay";
import CustomSpin from "../../Common/CustomSpin";
import PlayFeatured from "../../Common/PlayFeatured";
import ShowResult from "../../Common/Result";
const Featured = (props) => {
  const {
    fetchFeatured,
    featured,
    featuredLoading,
    setCurrentPlaySong,
    currentPlayKey,
    isPlayerPlaying,
    setIsPlayerPlaying,
    fetchFavoriteButton,
    favoriteButton,
    favoriteButtonLoading,
    favoriteButtonLoadingId,

  } = props;

  useEffect(() => {
    fetchFeatured();
  }, []);//eslint-disable-line
  const setSongToPlay = (item, key) => {
    setCurrentPlaySong(item, key);
  };
  return (
    <div className="featured">
      {featuredLoading ? (
        <CustomSpin />
      ) : (
          <Carousel autoplay={true}>
            {featured ? (
              featured.map((item, index) => (
                <div key={index} className="slick-slide-wrapper">
                  <img
                    // src={featuredDummy[0].cover}
                    src={item? item.cover_image === '' ? featuredDummy[0].cover : item.cover_image:""}
                    alt="Featured"
                    className="featured-image"
                  />
                  
                  <PlayFeatured
                    item={item}
                    key={item.id}
                    setSongToPlay={setSongToPlay}
                    allData={item}
                    currentPlayKey={currentPlayKey}
                    isPlayerPlaying={isPlayerPlaying}
                    setIsPlayerPlaying={setIsPlayerPlaying}
                    fetchFavoriteButton={fetchFavoriteButton}
                    favoriteButton={favoriteButton}
                    favoriteButtonLoading={favoriteButtonLoading}
                    favoriteButtonLoadingId={favoriteButtonLoadingId}
                  />

                  {/*  <MusicOverlay {...item} /> */}
                </div>
              ))
            ) : (
                <ShowResult msg="Featured Songs Not Found!" />
              )}
          </Carousel>
        )}
    </div>
  );
};

export default Featured;
