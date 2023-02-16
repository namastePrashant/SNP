import React from 'react';
import { IoHeartOutline, IoHeart } from 'react-icons/io5';

const FavoriteBtn = props => {
    const { favorite, id, fetchFavorite, className } = props    
    const formData = new FormData();
    formData.append('song[song_id]', id);

    const handleFavorite = () => {
        fetchFavorite(formData, id);      
    }

    return (
        <>
            {!favorite ?
                <IoHeartOutline className={className? className:'favorite'} onClick={handleFavorite} />
                :
                <IoHeart className={className? className:'favorite-filled'} onClick={handleFavorite} />
            }
        </>
    );
};

export default FavoriteBtn;

