import React,{useState,useEffect, useCallback} from 'react';
// import CustomSpin from '../CustomSpin';
import {isEmpty} from '../../../utils/commonUtils'
import {IoIosHeartEmpty, IoIosHeart } from 'react-icons/io';
import { useDispatch, useSelector } from 'react-redux';
import {setFavouriteArtist as setFavArtist} from '../../../services/favoriteArtistsService'; 
import LoaderImg from '../../../assets/Images/loaderWhite.png';

const FavouriteButtonArtist = (props) => {
  // setFavouriteArtist,favouriteArtistFollowLoading,RecentlyFavouriteArtist,favouriteArtistLoadingId

  const {artist} = props;
  const[isFollowed,setIsFollowed] = useState(false) 


  // redux states
  const dispatch = useDispatch();

  const state = useSelector(state=>{
    const {favoriteArtists} = state;
    const {followLoading:favouriteArtistFollowLoading,id:favouriteArtistLoadingId,recentlyFollowed:RecentlyFavouriteArtist} = favoriteArtists;
    return {
      favouriteArtistFollowLoading,
      favouriteArtistLoadingId,
      RecentlyFavouriteArtist
    }
  })

  const {favouriteArtistFollowLoading,favouriteArtistLoadingId,RecentlyFavouriteArtist} = state;


  const setFavouriteArtist = useCallback((formData,id)=>{
    dispatch(setFavArtist(formData,id))
  },[dispatch]); // set favourite artist function


  // end redux states


  useEffect(()=>{
    if(!isEmpty(RecentlyFavouriteArtist)){
      if(RecentlyFavouriteArtist.id===artist.id) setIsFollowed(RecentlyFavouriteArtist.favourited)
    }
  },[RecentlyFavouriteArtist]) // eslint-disable-line
  // sets artist to unfavourited with out removing the actual artist from the list until new api/network call


  const FollowedArtistToggle = ()=>{
    const formData = new FormData();
    formData.append('artist[artist_id]', artist.id);
    setFavouriteArtist(formData,artist.id)
    console.log(favouriteArtistLoadingId)
    // for setting artist favourite or unfavourite
  }

  useEffect(()=>{
    if(artist) setIsFollowed(artist.favourited)
  },[]) // eslint-disable-line
  // sets value to state which shows wheather the current artist is favourite or not on page reload or network calls


  
  return (
    <>
    {
    favouriteArtistFollowLoading && favouriteArtistLoadingId === artist.id?
    <img src={LoaderImg} style={{width:"25px",height:"25px"}} alt="loader"/>:
    isFollowed?
     <IoIosHeart className='favourite' onClick={FollowedArtistToggle}/>:
     <IoIosHeartEmpty className='favorite-filled' onClick={FollowedArtistToggle}/>  
    }
    </>
  )
}

export default FavouriteButtonArtist;
