import React from 'react'
import { NepaliNS } from '../../../utils/commonUtils'

const InfoCard = props => {
  const { title, icon, count, secondaryTitle } = props
  return (
    <>
      <div className="info-summary-card">
        <div className="info-summary-card__details">
          <h4 className="text-32-black-medium">{count ? NepaliNS(count) : '0'}</h4>
          <p className="text-14-grey">
            {title}

            {secondaryTitle &&
              (
                <span className="info-summary-card__details__secondary-title" >
                  ({secondaryTitle})
                </span>
              )
            }

          </p>
          <img src={icon} alt="" />
        </div>
      </div>
    </>
  )
}

export default InfoCard