import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Typography } from "antd";
import Slider from "react-slick";

import AlbumCard from "../../Common/AlbumCard";

import SongCards from "../../Common/Loading/SongCards";

import { CarsouelSettings } from "../../../utils/carouselSettings";
import ShowResult from "../../Common/Result";
import { isEmpty } from "../../../utils/commonUtils";

const { Title } = Typography;

const RelatedAlbums = (props) => {
  const {
    fetchRelatedAlbumsByAlbum,
    relatedAlbumsByAlbum,
    relatedAlbumsByAlbumLoading,
    individualAlbum,
  } = props;
  const { id } = useParams();

  useEffect(() => {
    fetchRelatedAlbumsByAlbum(id);
  }, [id]);//eslint-disable-line

  const settings = CarsouelSettings(2, 5)


  const artistNames =
    Array.isArray(individualAlbum.artists) &&
      individualAlbum.artists.length !== 0 ? (
        individualAlbum.artists.map((artist, index) => {
          let artistsCount = individualAlbum.artists.length;
          if (index === artistsCount - 1)
            return <span key={artist.id}> {artist.profile.name}</span>;
          else {
            return <span key={artist.id}> {artist.profile.name}, </span>;
          }
        })
      ) : (
        <span> ...</span>
      );

  return (
    <div className="section">
      <div className="section-header">
        <Title level={4}>
          More By
          {
            // artist name
            // individualAlbum.title ? <span> {individualAlbum.title}</span> : "..."
          }
          {artistNames}
        </Title>
      </div>

      <div className="section-body custom-slick">
        {relatedAlbumsByAlbumLoading ? (
          <SongCards />
        ) : !isEmpty(relatedAlbumsByAlbum) ? (
          <Slider {...settings}>
            {relatedAlbumsByAlbum.map((album, index) => {
              
              return (
                <div
                  key={album.id}>
                  <AlbumCard
                    albumDetails={album}
                  />
                </div>
              );
            })}
          </Slider>
        ) : (
              <ShowResult msg="Related Albums Not Found!" home={true} />
            )}
      </div>
    </div>
  );
};

export default RelatedAlbums;
