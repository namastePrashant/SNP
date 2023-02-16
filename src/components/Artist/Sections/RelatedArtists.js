import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

// import DummyImage from '../../../assets/Images/dummySN.png';
import SongCards from "../../Common/Loading/SongCards";
import ArtistCard from "../../Common/ArtistCard";
import ShowResult from "../../Common/Result";
import { isEmpty } from "../../../utils/commonUtils";

// const { Title } = Typography;

const RelatedArtists = (props) => {
  const {
    fetchRelatedArtistsByArtist,
    relatedArtistsByArtist,
    relatedArtistsByArtistLoading,
  } = props;
  const { id } = useParams();

  useEffect(() => {
    fetchRelatedArtistsByArtist(id);
  }, [id]);//eslint-disable-line

  return (
    <div className="related-artist-main  ">
      <div className="related-artist related__artist--fixedHeight grid-view">
        {relatedArtistsByArtistLoading ? (
          <SongCards />
        ) : !isEmpty(relatedArtistsByArtist) ? (
          relatedArtistsByArtist.map((artist) => (
            <ArtistCard artistDetails={artist} key={artist.id}/>
          ))
        ) : (
          <ShowResult msg="Related Artists Not Found!" home={true} />
        )}
      </div>
    </div>
  );
};

export default RelatedArtists;
