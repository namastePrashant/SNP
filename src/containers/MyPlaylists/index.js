import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import MyPlaylist from '../../components/MyPlaylist';

import * as userRecentPlaylistsAction from '../../actions/userRecentPlaylistsAction';
import * as userRecentPlaylistsService from '../../services/userRecentPlaylistsService';

import * as userAllPlaylistsAction from '../../actions/userAllPlaylistsAction';
import * as userAllPlaylistsService from '../../services/userAllPlaylistsService';

import * as advertisementService from '../../services/advertisementService';
import * as advertisementAction from '../../actions/advertisementAction';

export class MyPlaylistContainer extends React.Component {

    /**
     * Fetch user recent playlist.
     *
     */
    fetchUserRecentPlaylists = () => {
        this.props.actions.fetchUserRecentPlaylists();
    };

    /**
     * Fetch advertisements.
     *
     */
    fetchAdvertisements = () => {
        this.props.actions.fetchAdvertisements();
    };

    /**
     * Fetch User All playlist.
     *
     */
    fetchUserAllPlaylists = () => {
        this.props.actions.fetchUserAllPlaylists();
    }

    fetchAdvertisementByLocation = (formData) =>{
        this.props.actions.fetchAdvertisementByLocation(formData)
    }



    render() {
        return (
            <MyPlaylist
                fetchUserAllPlaylists={this.fetchUserAllPlaylists}
                fetchUserRecentPlaylists={this.fetchUserRecentPlaylists}
                fetchAdvertisements={this.fetchAdvertisements}
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
        userRecentPlaylists: state.userRecentPlaylists.payload,
        userRecentPlaylistsErrors: state.userRecentPlaylists.errors,
        userRecentPlaylistsLoading: state.userRecentPlaylists.loading,
        userAllPlaylists: state.userAllPlaylists.payload,
        userAllPlaylistsErrors: state.userAllPlaylists.errors,
        userAllPlaylistsLoading: state.userAllPlaylists.loading,
        advertisements: state.advertisements.payload,
        advertisementErrors: state.advertisements.errors,
        advertisementLoading: state.advertisements.loading,
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
                userRecentPlaylistsAction,
                userRecentPlaylistsService,
                userAllPlaylistsAction,
                userAllPlaylistsService,
                advertisementAction,
                advertisementService
            ),
            dispatch
        ),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(MyPlaylistContainer);