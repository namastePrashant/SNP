import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Row, Col, Spin } from "antd";
import ScrollPagination from '../../Common/ScrollPagination'
import PlaylistCard from "../../Common/PlaylistCard";
import ShowResult from "../../Common/Result";
import SongCards from "../../Common/Loading/SongCards";
import { isEmpty } from "../../../utils/commonUtils";

const Playlists = (props) => {
  const {
    individualGenrePlaylists,
    fetchIndividualGenrePlaylists,
    individualGenrePlaylistsLoading,
    individualGenrePlaylistsLoadingMore,
    individualGenrePlaylistsMetaInfo,
    individualGenrePlaylistsHasMore,
  } = props;
  const { id } = useParams();
  const {current_page}= individualGenrePlaylistsMetaInfo || {};

  useEffect(() => {
    fetchIndividualGenrePlaylists(id);
  }, []);// eslint-disable-line


  return (
    <div className="section">
      {/* <Row className={individualGenrePlaylists.length>=3?"section-body grid-view":"section-body no-slick-cards"}> */}
      <Row className="section-body grid-view">
        {individualGenrePlaylistsLoading ? (
          <SongCards />
        ) : !isEmpty(individualGenrePlaylists) ? (
          individualGenrePlaylists.map((playlist, index) => {
            return (
              <Col key={playlist.id}>
                <PlaylistCard 
                  playlistDetails={playlist}
                    
                />
              </Col>
            );
          })
        ) : (
          <ShowResult msg="Playlists Not Found!" home={true} />
        )}
      </Row>
      <ScrollPagination 
        current_page={current_page} 
        pagination={fetchIndividualGenrePlaylists} 
        HasMore={individualGenrePlaylistsHasMore} 
        loadingMore={individualGenrePlaylistsLoadingMore} 
        data={individualGenrePlaylists}
        id={id}/>
      <Row style={{ marginTop: '50px' }}>
        <Col span={24} className="display-flex justify-content-center">

          {
            individualGenrePlaylistsLoadingMore ?
              <Spin tip="Loading...">
              </Spin>
              :
              null
          }

        </Col>
      </Row>
    </div>
  );
};

export default Playlists;
