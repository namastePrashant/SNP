import React from "react";
import { Typography } from "antd";

import SongCards from "../../Common/Loading/SongCards";
import ShowResult from "../../Common/Result";
import ArtistCard from "../../Common/ArtistCard";

import { isEmpty } from "../../../utils/commonUtils";

const { Title } = Typography;

const RelatedArtists = (props) => {
  const { individualAlbum, individualAlbumLoading } = props;

  return (
    <div className="related-artist-main ">
      <div className="section-header">
        <Title level={4}>Related Artists</Title>
      </div>
      <div className="related-artist related__artist--fixedHeight grid-view">
        {individualAlbumLoading ? (
          <SongCards />
        ) : !isEmpty(individualAlbum.related_artist) ? (
          individualAlbum.related_artist.map((artist) => (
            <ArtistCard 
              key={artist.id}
              artistDetails={artist} 
            />
          ))
        ) : (
          <ShowResult msg="Related Artists Not Found!" home={true} />
        )}
      </div>
    </div>
  );
};

export default RelatedArtists;
