import {
    individualFetchRequest,
    individualFetchRequestFailure,
    individualFetchRequestSuccess
} from '../actions/individualAction';
import {
    moodsFetchRequest,
    moodsFetchRequestSuccess,
    moodsFetchRequestFailure
} from '../actions/moodsAction';
import {
    individualMoodSongsFetchRequest,
    individualMoodSongsFetchRequestFailure,
    individualMoodSongsFetchRequestSuccess,
    individualMoodSongsFetchMoreRequest,
    individualMoodSongsFetchMoreRequestFailure,
    individualMoodSongsFetchMoreRequestSuccess,
    individualMoodSongsFetchMetaInfo,
} from '../actions/individualMoodSongsAction';

import { fetch } from '../utils/httpUtil'


export const fetchMoods = () => {
    return async dispatch => {
        dispatch(moodsFetchRequest());

        try {
            const response = await fetch('api/v1/moods?pagination=0');

            if (response.data.success === true) {
                dispatch(moodsFetchRequestSuccess(response.data.data.moods));
            } else {
                // TODO
            }
        } catch (error) {

            return dispatch(moodsFetchRequestFailure(error));
            // return dispatch(moodsFetchRequestFailure(error.response.data));
        }
    };
};

export const fetchIndividualMood = identifier => {
    return async dispatch => {
        dispatch(individualFetchRequest());

        try {
            const response = await fetch(`api/v1/moods/${identifier}?inner_per_page=20&inner_page=1`);

            if (response.data.success === true) {
                dispatch(individualFetchRequestSuccess(response.data.data.mood));
            } else {
                // TODO
            }
        } catch (error) {

            return dispatch(individualFetchRequestFailure(error));
        }
    };
};

export const fetchIndividualMoodSongs = (identifier, page) => {

    let pageNumber = page ? page : 1;

    return async dispatch => {

        if (page) {
            dispatch(individualMoodSongsFetchMoreRequest());
        } else {
            dispatch(individualMoodSongsFetchRequest());
        }

        try {
            const response = await fetch(`api/v1/moods/${identifier}?per_page=15&page=${pageNumber}`);


            if (response.data.success === true) {

                if (page) {
                    dispatch(individualMoodSongsFetchMoreRequestSuccess(response.data.data.mood));
                } else {
                    dispatch(individualMoodSongsFetchRequestSuccess(response.data.data.mood));
                }
                dispatch(individualMoodSongsFetchMetaInfo(response.data.data.mood.songs.page_meta));

            } else {
                // TODO
            }
        } catch (error) {
            if (page) {
                return dispatch(individualMoodSongsFetchMoreRequestFailure(error));
            } else {
                return dispatch(individualMoodSongsFetchRequestFailure(error));
            }
        }
    };
};


export const searchMoods = (keyword) => {
    return async dispatch => {
        dispatch(moodsFetchRequest());

        try {
            const response = await fetch('api/v1/moods?keyword=' + keyword + '&sort=asc&pagination=0');

            if (response.data.success === true) {
                dispatch(moodsFetchRequestSuccess(response.data.data.moods));
            } else {
                // TODO
            }
        } catch (error) {

            return dispatch(moodsFetchRequestFailure(error));
            // return dispatch(moodsFetchRequestFailure(error.response.data));
        }
    };
};
