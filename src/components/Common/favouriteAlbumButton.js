import React,{useEffect,useState} from 'react';
import CustomSpin from './CustomSpin';
import {isEmpty} from '../../utils/commonUtils';
import {Button} from 'antd'
import {IoHeartOutline, IoHeart } from 'react-icons/io5';

 

const FavouriteAlbumButton = (props) =>{
  const [isFavouriteAlbum,setIsFavouriteAlbum] = useState(undefined);

  const {
    albumDetails,
    setAlbumToFavourite,
    favouriteAlbumLoading,
    favouriteAlbumLoadingId,
    recentlyFavouriteAlbum,
    title
  } = props;
  //favourite unfavourite album


  useEffect(() => {
    if(!isEmpty(recentlyFavouriteAlbum)){
        if(recentlyFavouriteAlbum.id===albumDetails.id){
        setIsFavouriteAlbum(recentlyFavouriteAlbum.favourited);
        }
    }
    },[recentlyFavouriteAlbum])// eslint-disable-line
    // to show the album in favourite album page(when unfavourited)  untilpage is reloaded


    useEffect(() => {
        if(albumDetails){
            setIsFavouriteAlbum(albumDetails.favourited);
        }
    }, []) // eslint-disable-line
    //to know user's favourite album on page reload

      
    const favouriteUnfavouriteAlbum = () =>{
        const formData={
            album:{
                album_id:albumDetails.id
            }
        }
         setAlbumToFavourite(formData,albumDetails.id)
    }// function to toggle between favourite and unfavourite an album


    // end favourite un favourite album

    return (
      <>
      {title?
        (
          <Button shape="round" size='large' className='btn-outline btn-favourite' onClick={favouriteUnfavouriteAlbum} disabled={favouriteAlbumLoading}>
            {
             
              favouriteAlbumLoading && favouriteAlbumLoadingId === albumDetails.id?
              <CustomSpin size="small" customStyle={{ fontSize: '1.5rem',color:"black",marginRight:'5px' }} />:
              isFavouriteAlbum?
              (<div><IoHeart className="card__options-favorite" /></div>) : (<div><IoHeartOutline className="card__options-favorite" /></div>)
              
             }
            {title}
          </Button>
        ):
        favouriteAlbumLoading && favouriteAlbumLoadingId === albumDetails.id?
        <CustomSpin size="small" customStyle={{ fontSize: '1.5rem' }} />
        :
        isFavouriteAlbum?
        <IoHeart className="card__options-favorite" onClick={favouriteUnfavouriteAlbum}/>
        :<IoHeartOutline className="card__options-favorite" 
        onClick={favouriteUnfavouriteAlbum}
        />
      }   
      
      </>
    )
  
}

export default FavouriteAlbumButton;