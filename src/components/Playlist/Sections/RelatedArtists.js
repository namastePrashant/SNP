import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Typography } from "antd";
import ShowResult from "../../Common/Result";
// import DummyImage from "../../../assets/Images/Impala.png";
import SongCards from "../../Common/Loading/SongCards";
import ArtistCard from "../../Common/ArtistCard";
import { isEmpty } from "../../../utils/commonUtils";

const { Title } = Typography;

const RelatedArtists = (props) => {
  const {
    fetchRelatedArtistsByPlaylist,
    relatedArtistsByPlaylist,
    relatedArtistsByPlaylistLoading,
    individualPlaylist,
  } = props;
  const { id } = useParams();

  useEffect(() => {
    // needs genre id
    if (individualPlaylist && individualPlaylist.genre) {
      fetchRelatedArtistsByPlaylist(individualPlaylist.genre.id);
    }
  }, [props.individualPlaylist, id]);// eslint-disable-line

  return (
    <div className="related-artist-main">
      <div className="section-header">
        <Title level={4}>Related Artists</Title>
      </div>
      <div className="related-artist  related__artist--fixedHeight grid-view">
        {relatedArtistsByPlaylistLoading ? (
          <SongCards />
        ) : !isEmpty(relatedArtistsByPlaylist) ? (
          relatedArtistsByPlaylist.map((artist, index) => {
            return <ArtistCard
              artistDetails={artist}
              key={artist.id}
              {...props}
            />;
          })
        ) : (
              <ShowResult msg="Related Artist Not Found!" home={true} />
            )}
      </div>
    </div>
  );
};

export default RelatedArtists;
