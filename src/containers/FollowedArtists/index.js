import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import FollowedArtists from '../../components/FollowedArtists';

import * as favoriteArtistsService from '../../services/favoriteArtistsService';
import * as favoriteArtistsAction from '../../actions/favoriteArtistsAction';
import * as adsService from '../../services/advertisementService';

export class FollowedArtistsContainer extends React.Component {

    /**
     * Fetch followed/favorite artists .
     *
    */
    fetchFavoriteArtists = (page) => {
        this.props.actions.fetchFavoriteArtists(page);
    };

    fetchAdvertisementByLocation = (formData) =>{
        this.props.actions.fetchAdvertisementByLocation(formData)
    }


    /**
     * follow artist .
     *
    */
   setFavouriteArtist = (formData,id) =>{
    this.props.actions.setFavouriteArtist(formData,id);
    }
    
    render() {
        return (
            <FollowedArtists
                fetchFavoriteArtists ={this.fetchFavoriteArtists}
                fetchAdvertisementByLocation={this.fetchAdvertisementByLocation}
                setFavouriteArtist={this.setFavouriteArtist}
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
        favoriteArtists: state.favoriteArtists.payload,
        favoriteArtistsList: state.favoriteArtists.artist,
        favoriteArtistsErrors: state.favoriteArtists.errors,
        favoriteArtistsLoading: state.favoriteArtists.loading, 
        favouriteArtistFollowLoading:state.favoriteArtists.followLoading,
        RecentlyFavouriteArtist:state.favoriteArtists.recentlyFollowed,     
        favouriteArtistLoadingId:state.favoriteArtists.id,
        favoriteArtistsMeta: state.favoriteArtists.meta,
        favoriteArtistsHasMore: state.favoriteArtists.hasMore,
        favoriteArtistsLoadingMore: state.favoriteArtists.loadingMore,
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
                favoriteArtistsAction,
                favoriteArtistsService,
                adsService              
            ),
            dispatch
        ),
    };
};

export default  connect(mapStateToProps, mapDispatchToProps)(FollowedArtistsContainer);