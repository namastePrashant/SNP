import {
    genresFetchRequest,
    genresFetchRequestSuccess,
    genresFetchRequestFailure
} from '../actions/genresAction';

import {
    individualFetchRequest,
    individualFetchRequestFailure,
    individualFetchRequestSuccess
} from '../actions/individualAction';

import {
    individualGenreSongsFetchRequest,
    individualGenreSongsFetchRequestFailure,
    individualGenreSongsFetchRequestSuccess,
    individualGenreSongsFetchMoreRequest,
    individualGenreSongsFetchMoreRequestFailure,
    individualGenreSongsFetchMoreRequestSuccess,
    individualGenreSongsFetchMetaInfo,
} from '../actions/individualGenreSongsAction';

import {
    individualGenreAlbumsFetchRequest,
    individualGenreAlbumsFetchRequestFailure,
    individualGenreAlbumsFetchRequestSuccess,
    individualGenreAlbumsFetchMoreRequest,
    individualGenreAlbumsFetchMoreRequestFailure,
    individualGenreAlbumsFetchMoreRequestSuccess,
    individualGenreAlbumsFetchMetaInfo,
} from '../actions/individualGenreAlbumsAction';

import {
    individualGenreArtistsFetchRequest,
    individualGenreArtistsFetchRequestFailure,
    individualGenreArtistsFetchRequestSuccess,
    individualGenreArtistsFetchMoreRequest,
    individualGenreArtistsFetchMoreRequestFailure,
    individualGenreArtistsFetchMoreRequestSuccess,
    individualGenreArtistsFetchMetaInfo,
} from '../actions/individualGenreArtistsAction';

import {
    individualGenrePlaylistsFetchRequest,
    individualGenrePlaylistsFetchRequestFailure,
    individualGenrePlaylistsFetchRequestSuccess,
    individualGenrePlaylistsFetchMoreRequest,
    individualGenrePlaylistsFetchMoreRequestFailure,
    individualGenrePlaylistsFetchMoreRequestSuccess,
    individualGenrePlaylistsFetchMeta,
} from '../actions/individualGenrePlaylistsAction';

import { fetch } from '../utils/httpUtil'


export const fetchGenres = () => {
    return async dispatch => {
        dispatch(genresFetchRequest());

        try {
            const response = await fetch('api/v1/genres?pagination=0');

            if (response.data.success === true) {
                dispatch(genresFetchRequestSuccess(response.data.data.genres));
            } else {
                // TODO
            }
        } catch (error) {

            return dispatch(genresFetchRequestFailure(error));
            // return dispatch(genresFetchRequestFailure(error.response.data));
        }
    };
};

export const searchGenre = (keyword) =>{
  return async dispatch => {
    dispatch(genresFetchRequest());

    try {
        const response = await fetch('api/v1/genres?keyword='+keyword);

        if (response.data.success === true) {
            dispatch(genresFetchRequestSuccess(response.data.data.genres));
        } else {
            // TODO
        }
    } catch (error) {

        return dispatch(genresFetchRequestFailure(error));
        // return dispatch(genresFetchRequestFailure(error.response.data));
    }
  };
}

export const fetchIndividualGenre = identifier => {
    return async dispatch => {
        dispatch(individualFetchRequest());

        try {
            const response = await fetch(`api/v1/genres/${identifier}?inner_per_page=20&inner_page=1`);

            if (response.data.success === true) {
                dispatch(individualFetchRequestSuccess(response.data.data.genre));
            } else {
                // TODO
            }
        } catch (error) {

            return dispatch(individualFetchRequestFailure(error));
        }
    };
};

export const fetchIndividualGenreSongs = (identifier, page) => {
    
    let pageNumber=page?page:1;
    
    return async dispatch => {

        if(page){            
            dispatch(individualGenreSongsFetchMoreRequest());
        }else{
            dispatch(individualGenreSongsFetchRequest());
        }

        try {
            const response = await fetch(`api/v1/genres/${identifier}?show_specific_type=show_songs_from_genre&per_page=15&&inner_page=${pageNumber}`);

            if (response.data.success === true) {
                if(page){
                    dispatch(individualGenreSongsFetchMoreRequestSuccess(response.data.data.genre.songs.data));
                    
                }else{
                    dispatch(individualGenreSongsFetchRequestSuccess(response.data.data.genre.songs.data));                                        
                }  
                dispatch(individualGenreSongsFetchMetaInfo(response.data.data.genre.songs.page_meta));             
            } else {
                // TODO
            }
        } catch (error) {
            if(page){
                return dispatch(individualGenreSongsFetchMoreRequestFailure(error));
            }else{
                return dispatch(individualGenreSongsFetchRequestFailure(error));
            }
        }
    };
};

export const fetchIndividualGenreAlbums = (identifier, page) => {

    let pageNumber=page?page:1;

    return async dispatch => {

        if(page){            
            dispatch(individualGenreAlbumsFetchMoreRequest());
        }else{
            dispatch(individualGenreAlbumsFetchRequest());
        }

        try {
            const response = await fetch(`api/v1/genres/${identifier}?show_specific_type=show_albums_from_genre&per_page=15&&inner_page=${pageNumber}`);

            if (response.data.success === true) {
                if(page){
                    dispatch(individualGenreAlbumsFetchMoreRequestSuccess(response.data.data.genre.albums.data));
                    
                }else{
                    dispatch(individualGenreAlbumsFetchRequestSuccess(response.data.data.genre.albums.data));                                     
                }       
                dispatch(individualGenreAlbumsFetchMetaInfo(response.data.data.genre.albums.page_meta));  
            } else {
                // TODO
            }
        } catch (error) {
            
            if(page){
                return dispatch(individualGenreAlbumsFetchMoreRequestFailure(error));
            }else{
                return dispatch(individualGenreAlbumsFetchRequestFailure(error));
            }
        }
    };
};

export const fetchIndividualGenreArtists = (identifier, page) => {

    let pageNumber=page?page:1;

    return async dispatch => {
        
        if(page){            
            dispatch(individualGenreArtistsFetchMoreRequest());
        }else{
            dispatch(individualGenreArtistsFetchRequest());
        }

        try {
            const response = await fetch(`api/v1/genres/${identifier}?show_specific_type=show_artists_from_genre&per_page=15&&inner_page=${pageNumber}`);

            if (response.data.success === true) {                
                
                if(page){            
                    dispatch(individualGenreArtistsFetchMoreRequestSuccess(response.data.data.genre.artists.data));                    
                }else{
                    dispatch(individualGenreArtistsFetchRequestSuccess(response.data.data.genre.artists.data));                    
                }

                dispatch(individualGenreArtistsFetchMetaInfo(response.data.data.genre.artists.page_meta));

            } else {
                // TODO
            }
        } catch (error) {
            
            if(page){            
                return dispatch(individualGenreArtistsFetchMoreRequestFailure(error));
            }else{
                return dispatch(individualGenreArtistsFetchRequestFailure(error));
            }
        }
    };
};

export const fetchIndividualGenrePlaylists = (identifier, page) => {

    let pageNumber=page?page:1;
    
    return async dispatch => {        

        if(page){            
            dispatch(individualGenrePlaylistsFetchMoreRequest());           
        }else{
            dispatch(individualGenrePlaylistsFetchRequest());
        }

        try {
            const response = await fetch(`api/v1/genres/${identifier}?show_specific_type=show_playlists_from_genre&per_page=15&&inner_page=${pageNumber}`);

            if (response.data.success === true) {                
                if(page){                                
                    dispatch(individualGenrePlaylistsFetchMoreRequestSuccess(response.data.data.genre.playlists.data));
                }else{                    
                    dispatch(individualGenrePlaylistsFetchRequestSuccess(response.data.data.genre.playlists.data));
                }

                dispatch(individualGenrePlaylistsFetchMeta(response.data.data.genre.playlists.page_meta));

            } else {
                // TODO
            }
        } catch (error) {
            
            if(page){            
                return dispatch(individualGenrePlaylistsFetchMoreRequestFailure(error));
            }else{
                return dispatch(individualGenrePlaylistsFetchRequestFailure(error));
            }
        }
    };
};