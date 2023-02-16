import React, { useEffect } from "react";
import { Typography, Button, Col } from "antd";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import PlaylistCard from "../../Common/PlaylistCard";

import {CarsouelSettings} from "../../../utils/carouselSettings";

import SongCards from "../../Common/Loading/SongCards";

import ShowResult from "../../Common/Result";

import { isEmpty } from "../../../utils/commonUtils";
import ScrollPagination from '../../Common/ScrollPagination'

const { Title } = Typography;

const ExploreSongs = (props) => {
  const {
    explorePlaylists,
    explorePlaylistsLoading,
    fetchExplorePlaylists,
    explorePlaylistsMeta,
    explorePlaylistsHasMore,
    explorePlaylistsLoadingMore,
  } = props;

  const { current_page } = explorePlaylistsMeta || {};

  useEffect(() => {
    if (explorePlaylists.length === 0) {
      fetchExplorePlaylists();
    }
  }, []);// eslint-disable-line

  const settings = CarsouelSettings(2,5) //carsouel settings


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
      {explorePlaylistsLoading ? (
        <SongCards />
      ) : !isEmpty(explorePlaylists) ? (
        explorePlaylists.map((playlistsByGenre, index) => {
          return (
            <Col {...layout.full} key={playlistsByGenre.id} >
              {!isEmpty(playlistsByGenre.playlists.data) ? (
                <>
                  <div className="section">
                    <div className="section-header">
                      <Title level={4}> {playlistsByGenre.title} </Title>
                      <span className="section-link">
                        <Link to={`/genre/${playlistsByGenre.id}/playlists`}>
                          <Button type="text">See All</Button>
                        </Link>
                      </span>
                    </div>

                    <div className="section-body custom-slick">
                      {!isEmpty(playlistsByGenre.playlists.data) ? (
                        <Slider {...settings}>
                          {playlistsByGenre.playlists.data.map(
                            (playlist, index) => {
                              return (
                                <div key={playlist.id}>
                                  <PlaylistCard playlistDetails={playlist} />
                                </div>
                              );
                            }
                          )}
                        </Slider>
                      ) : (
                          <ShowResult msg="Playlist Not Found!" home={true} />
                        )}
                    </div>
                  </div>
                </>
              ) : (
                  ""
                )}
            </Col>
          );
        })
      ) : (
            <ShowResult msg="Playlists by Genre Not Found!" home={true} />
          )}

      <ScrollPagination 
        current_page={current_page} 
        pagination={fetchExplorePlaylists} 
        HasMore={explorePlaylistsHasMore} 
        loadingMore={explorePlaylistsLoadingMore} 
        data={explorePlaylists}/>

    </>
  );
};

export default ExploreSongs;
