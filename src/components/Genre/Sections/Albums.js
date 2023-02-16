import React, { useEffect } from "react";
import { Row, Col } from "antd";
import { useParams } from "react-router-dom";
import ScrollPagination from '../../Common/ScrollPagination'
import AlbumCard from "../../Common/AlbumCard";

import SongCards from "../../Common/Loading/SongCards";
import ShowResult from "../../Common/Result";
import { isEmpty } from "../../../utils/commonUtils";

const Albums = (props) => {
  const {
    individualGenreAlbums,
    fetchIndividualGenreAlbums,
    individualGenreAlbumsLoading,
    individualGenreAlbumsLoadingMore,
    individualGenreAlbumsMetaInfo,
    individualGenreAlbumsHasMore,
    setCurrentPlaySong, isPlayerPlaying, setIsPlayerPlaying,
    currentPlayReferrerId, currentPlayReferrer, currentPlayKey,addSongToCurrentAudioQueue,
  } = props;
  const { id } = useParams();

  const {current_page}= individualGenreAlbumsMetaInfo || {};


  useEffect(() => {
    fetchIndividualGenreAlbums(id);
  }, []);// eslint-disable-line
  
  const setBulkSongsToPlay = (songData)=>{      
    setCurrentPlaySong(songData);     
  }

  return (
    <div className="section">
      <Row className="section-body grid-view">
        {individualGenreAlbumsLoading ? (
          <SongCards />
        ) : !isEmpty(individualGenreAlbums) ? (
          individualGenreAlbums.map((album, index) => {
            return (
              <Col key={album.id}>
                <AlbumCard 
                  albumDetails={album}                                                          
                  setBulkSongsToPlay={setBulkSongsToPlay}                                    
                  currentPlayKey={currentPlayKey}
                  currentPlayReferrerId={currentPlayReferrerId}
                  currentPlayReferrer={currentPlayReferrer}
                  isPlayerPlaying={isPlayerPlaying}
                  setIsPlayerPlaying={setIsPlayerPlaying}
                  addSongToCurrentAudioQueue={addSongToCurrentAudioQueue}
                  {...props}
                />
              </Col>
            );
          })
        ) : (
          <ShowResult msg="Albums Not Found!" home={true} />
        )}
      </Row>
      <ScrollPagination 
        current_page={current_page} 
        pagination={fetchIndividualGenreAlbums} 
        HasMore={individualGenreAlbumsHasMore} 
        loadingMore={individualGenreAlbumsLoadingMore} 
        data={individualGenreAlbums}
        id={id}/>
     
    </div>
  );
};

export default Albums;
