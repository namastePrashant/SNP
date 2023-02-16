import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Browse from '../../components/Browse';


import * as genresService from '../../services/genresService';
import * as genresAction from '../../actions/genresAction';

import * as moodsService from '../../services/moodsService';
import * as moodsAction from '../../actions/moodsAction';
import * as adsService from '../../services/advertisementService';


export class HomeContainer extends React.Component {

    /**
     * Fetch genres.
     *
     */
    fetchGenres = () => {
        this.props.actions.fetchGenres();
    };

    /**
     * Fetch moods.
     *
     */
    fetchMoods = () => {
        this.props.actions.fetchMoods();
    };

     /**
     * Fetch advertisement.
     *
     */
    fetchAdvertisementByLocation = (formData) => {
        this.props.actions.fetchAdvertisementByLocation(formData);
    };



    render() {
        return (
            <Browse
                fetchGenres={this.fetchGenres}
                fetchMoods={this.fetchMoods}
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
        genres: state.genres.payload,
        genreErrors: state.genres.errors,
        genreLoading: state.genres.loading,
        moods: state.moods.payload,
        moodErrors: state.moods.errors,
        moodLoading: state.moods.loading,
        advertisements:state.advertisements.payload,
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
                genresAction,
                genresService,
                moodsService,
                moodsAction,
                adsService,
            ),
            dispatch
        ),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer)