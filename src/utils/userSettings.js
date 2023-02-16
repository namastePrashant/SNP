import React from 'react';
import DummyUserImage from '../assets/Images/dummySN.png';
import * as dateUtils from './dateFormats';


export const userImage = (userProfile, imgClass = "") => {

  if (userProfile.profile) {
    const profile = userProfile.profile;
    const userImage = profile.profile_picture;
    return (
      <img src={(userImage && userImage.url !== "") ? userImage.url : DummyUserImage} alt="" className={imgClass} />
    )
  }
  return (
    <img src={DummyUserImage} alt="" className={imgClass} />
  )
}//extracts user image 



// cleans user joined date
export const userJoinedDate = (userProfile) => {
  if (userProfile.profile) {
    const profile = userProfile.profile;
    const joinedDate = profile.created_at;
    return dateUtils.formatDate(joinedDate, 'MM/DD/YYYY');
  }
  return null;
}



