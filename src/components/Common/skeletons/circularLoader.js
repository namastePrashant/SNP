import React from 'react';
import LoaderPrimary from '../../../assets/Images/loadMore.png'
import LoaderWhite from '../../../assets/Images/loaderWhite.png'

const CircularLoader = props =>{

  const {color,size} = props

  return(
    <span>
    <img src={color==='white'?LoaderWhite : LoaderPrimary} style={{width:size,height:size}} alt="loader"/>
    </span>
  )
}

export default CircularLoader