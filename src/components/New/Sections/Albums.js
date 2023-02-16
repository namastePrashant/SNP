import React, { useEffect } from "react";
import { Row, Col } from "antd";

import AlbumCard from "../../Common/AlbumCard";
import ScrollPagination from '../../Common/ScrollPagination';

import SongCards from "../../Common/Loading/SongCards";
import { isEmpty } from "../../../utils/commonUtils";
import ShowResult from "../../Common/Result";
const Albums = (props) => {
  const { 
    latestAlbumsAll,
    fetchLatestAlbumsAll,
    latestAlbumsAllLoading,
    latestAlbumsAllLoadingMore,
    latestAlbumsAllMeta,
    latestAlbumsAllHasMore,
    setCurrentPlaySong, isPlayerPlaying, setIsPlayerPlaying,
    currentPlayReferrerId, currentPlayReferrer, currentPlayKey,
  } = props;

  const {current_page}= latestAlbumsAllMeta || {};

  useEffect(() => {
    if (latestAlbumsAll.length === 0) {
      fetchLatestAlbumsAll();
    }
  }, []);// eslint-disable-line

  

  const setBulkSongsToPlay = (songData)=>{      
    setCurrentPlaySong(songData);     
  }

  return (
    <div className="section">
      <Row className="section-body no-slick-cards grid-view">
        {latestAlbumsAllLoading ? (
          <SongCards />
        ) : !isEmpty(latestAlbumsAll) ? (
          latestAlbumsAll.map((album, index) => {
            return (
              <Col key={index}>
                <AlbumCard 
                  albumDetails={album}                                                          
                  setBulkSongsToPlay={setBulkSongsToPlay}                                    
                  currentPlayKey={currentPlayKey}
                  currentPlayReferrerId={currentPlayReferrerId}
                  currentPlayReferrer={currentPlayReferrer}
                  isPlayerPlaying={isPlayerPlaying} 
                  setIsPlayerPlaying={setIsPlayerPlaying}
                  
                />
              </Col>
            );
          })
        ) : (
          <ShowResult msg="No songs found!" home={true} />
        )}
      </Row>
      <ScrollPagination 
        current_page={current_page} 
        pagination={fetchLatestAlbumsAll} 
        HasMore={latestAlbumsAllHasMore} 
        loadingMore={latestAlbumsAllLoadingMore} 
        data={latestAlbumsAll}/>
    </div>
  );
};

export default Albums;
