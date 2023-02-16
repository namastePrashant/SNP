import React from 'react'
import Slider from 'react-slick'
import {CarsouelSettings} from '../../../../utils/carouselSettings'
// import songCard from '../../../Common/Card'

const UploadedSongs  =  props =>{



  const setting = CarsouelSettings(1,5) // slider setting for slick slider

  return(
    <section className="section-break-1">
      <h4 className="text-18-black">Uploaded Songs</h4>

      <div className="section-body custom-slick">
        <Slider {...setting} >
          
        </Slider>
      </div>

    </section>
  )
}
export default UploadedSongs 


