import React, { useState, useEffect } from 'react';
import { HeartFilled, HeartOutlined } from '@ant-design/icons';
import CustomSpin from './CustomSpin';
import { isEmpty } from '../../utils/commonUtils';


const FavouriteSongsButton = props => {
  const {
    favoriteButton,
    favoriteButtonLoading,
    favoriteButtonLoadingId,
    fetchFavoriteButton,
    song
  } = props

  const [isFavourite, setIsFavourite] = useState(undefined);//state which determines wheather current song is favourite or not


  useEffect(() => {
    if (!isEmpty(favoriteButton)) {
      if (favoriteButton.id === song.id) {
        setIsFavourite(favoriteButton.favourited)
        console.log("favoriteButton", favoriteButton);
      }
    }

  }, [favoriteButton]) //eslint-disable-line
  // sets songs to unfavourited with out removing the actual song from the table until new api/network call


  useEffect(() => {
    if (song) setIsFavourite(song.loved)
  }, []) //eslint-disable-line
  // sets value to state which shows wheather the current song is favourite or not on page reload or network calls


  const FavouriteSongToggle = () => {
    const formData = new FormData();
    formData.append('song[song_id]', song.id);
    fetchFavoriteButton(formData, song.id)
  }// for setting song favourite or unfavourite


  return (
    <>
      {
        favoriteButtonLoading && favoriteButtonLoadingId === song.id ?
          <CustomSpin size="small" customStyle={{ fontSize: '1.5rem' }} /> :
          isFavourite ?
            <HeartFilled className='favourite' onClick={FavouriteSongToggle} /> :
            <HeartOutlined className='favorite-filled' onClick={FavouriteSongToggle} />
      }
    </>
  )


}

export default FavouriteSongsButton;