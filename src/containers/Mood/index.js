import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Mood from '../../components/Mood';

import * as individualAction from '../../actions/individualAction';
import * as moodsService from '../../services/moodsService';
import * as currentPlayAction from '../../actions/currentPlayAction';

import * as favoriteButtonAction from '../../actions/favoriteButtonAction';
import * as favoriteService from '../../services/favoriteService';

import * as advertisementService from '../../services/advertisementService';
import * as advertisementAction from '../../actions/advertisementAction';
import * as individualMoodSongsAction from '../../actions/individualMoodSongsAction';

export class MoodContainer extends React.Component {

    /**
    * Fetch individual mood.
    *
    */
    /*  fetchIndividualMood = id => {
         this.props.actions.fetchIndividualMood(id);
     }; */

    /**
    * Fetch individual mood song.
    *
    */
    fetchIndividualMoodSongs = (id, page) => {
        this.props.actions.fetchIndividualMoodSongs(id, page);
    };

    /**
     * Set Song.
     *
     */
    setCurrentPlaySong = (songData) => {
        this.props.actions.currentPlaySong(songData);
    }

    /**
     * Set Favorite.
     *
     */
    fetchFavoriteButton = (formData, id) => {
        this.props.actions.fetchFavoriteButton(formData, id);
    }

    fetchAdvertisementByLocation = (formData) => {
        this.props.actions.fetchAdvertisementByLocation(formData)
    }


    render() {
        return (
            <Mood
                //fetchIndividualMood={this.fetchIndividualMood}
                fetchIndividualMoodSongs={this.fetchIndividualMoodSongs}
                setCurrentPlaySong={this.setCurrentPlaySong}
                fetchFavoriteButton={this.fetchFavoriteButton}
                fetchAdvertisementByLocation={this.fetchAdvertisementByLocation}
                {...this.props}
            />
        )
    }
}

/**
 * Map the state to props.
 */
const mapStateToProps = state => {

    return {
        currentPlayKey: state.currentPlay.songId,
        isPlayerPlaying: state.currentPlay.isPlayerPlaying,
        individual: state.individual.payload,
        individualErrors: state.individual.errors,
        individualLoading: state.individual.loading,
        favoriteButton: state.favoriteButton.payload,
        favoriteButtonErrors: state.favoriteButton.errors,
        favoriteButtonLoading: state.favoriteButton.loading,
        favoriteButtonLoadingId: state.favoriteButton.id,
        advertisements: state.advertisements.payload,
        advertisementErrors: state.advertisements.errors,
        advertisementLoading: state.advertisements.loading,

        individualMoodSongs: state.individualMoodSongs.payload,
        individualMoodSongsList: state.individualMoodSongs.songs,
        individualMoodSongsErrors: state.individualMoodSongs.errors,
        individualMoodSongsLoading: state.individualMoodSongs.loading,
        individualMoodSongsLoadingMore: state.individualMoodSongs.loadingMore,
        individualMoodSongsMetaInfo: state.individualMoodSongs.meta,
        individualMoodSongsHasMore: state.individualMoodSongs.hasMore,
    }
};

/**
 * Map the actions to props.
 */
const mapDispatchToProps = dispatch => {
    return {
        actions: bindActionCreators(
            Object.assign(
                {},
                individualAction,
                currentPlayAction,
                individualMoodSongsAction,
                moodsService,
                favoriteButtonAction,
                favoriteService,
                advertisementAction,
                advertisementService
            ),
            dispatch
        ),
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(MoodContainer)

