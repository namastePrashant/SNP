import React from 'react'
import {useParams} from 'react-router-dom'
import LatestRelease from './Latest-release'


const ArtistSeeAll = props =>{
  const {identifier} = useParams();
  
  return(
    <>
    {identifier === "latest-release-album"?
      <LatestRelease/>:""
    }
    </>
  )
}

export default ArtistSeeAll