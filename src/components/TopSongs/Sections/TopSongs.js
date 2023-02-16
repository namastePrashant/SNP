import React, { useEffect } from "react";
import { Row, Col } from "antd";
import ScrollPagination from '../../Common/ScrollPagination'
import Card from "../../Common/Card";
import SongCards from "../../Common/Loading/SongCards";
import ShowResult from "../../Common/Result";
import { isEmpty } from "../../../utils/commonUtils";

const TopSongs = (props) => {

    // TODO: could create a common component as List, since all recently played, Albums and artists see all page has same format

    const {
        fetchAllTopSongs,
        topSongsHasMoreData,
        topSongs,
        topSongsMeta,
        topSongsLoading,
        topSongsMoreLoading,
        setCurrentPlaySong,
        currentPlayKey,
        isPlayerPlaying,
        setIsPlayerPlaying,
        fetchFavoriteButton,
        favoriteButton,
        favoriteButtonLoading,
        favoriteButtonLoadingId,
        fetchUserAllPlaylists,
        userAllPlaylists,
        userAllPlaylistsLoading,
        userAllPlaylistsErrors,
        createdUserPlaylist,
        createUserPlaylistLoading,
        createUserPlaylistErrors,
        addSongToPlaylist,
        createAndAddToPlaylist,
        addSongToCurrentAudioQueue,
    } = props;

    const { current_page } = topSongsMeta || {};

    useEffect(() => {
        if (topSongs.length === 0) {
            fetchAllTopSongs();
        }
    }, []);//eslint-disable-line

    const setSongToPlay = (songData) => {
        setCurrentPlaySong(songData);
    };

    return (
        <div className="section">
            <Row className="section-body col__centered__items grid-view">
                {topSongsLoading ? (
                    <SongCards />
                ) : !isEmpty(topSongs) ? (
                    topSongs.map((song, index) => {
                        return (
                            <Col key={song.id}>
                                <Card
                                    // key={song.id}
                                    className="recent-card"
                                    songDetails={song}
                                    setSongToPlay={setSongToPlay}
                                    currentPlayKey={currentPlayKey}
                                    isPlayerPlaying={isPlayerPlaying}
                                    setIsPlayerPlaying={setIsPlayerPlaying}
                                    fetchFavoriteButton={fetchFavoriteButton}
                                    favoriteButton={favoriteButton}
                                    favoriteButtonLoading={favoriteButtonLoading}
                                    favoriteButtonLoadingId={favoriteButtonLoadingId}
                                    fetchUserAllPlaylists={fetchUserAllPlaylists}
                                    userAllPlaylists={userAllPlaylists}
                                    userAllPlaylistsLoading={userAllPlaylistsLoading}
                                    userAllPlaylistsErrors={userAllPlaylistsErrors}
                                    addSongToPlaylist={addSongToPlaylist}
                                    createAndAddToPlaylist={createAndAddToPlaylist}
                                    createdUserPlaylist={createdUserPlaylist}
                                    createUserPlaylistLoading={createUserPlaylistLoading}
                                    createUserPlaylistErrors={createUserPlaylistErrors}
                                    addSongToCurrentAudioQueue={addSongToCurrentAudioQueue}

                                />
                            </Col>
                        );
                    })
                ) : (
                            <ShowResult msg="Songs Not Found!" home={true} />
                        )}
            </Row>
            { !topSongsLoading &&
                <ScrollPagination
                    current_page={current_page}
                    pagination={fetchAllTopSongs}
                    HasMore={topSongsHasMoreData}
                    loadingMore={topSongsMoreLoading}
                    data={topSongs}
                />
            }


        </div>
    );
};

export default TopSongs;
