import React from 'react'
import {Col,Skeleton} from 'antd'

const DIskeleton = (props) =>{
  const {item} = props
  return(
    <>
    {
      Array.from(
        Array(item),(e,i)=>(
          <Col xs={24} md={12} lg={6} key={i} >
            <div className="info-summary-card">
              <div className="info-summary-card__details">
                <Col span={18} >
                  <Skeleton  active paragraph={false}/>
                </Col>
                <Col span={12} >
                  <Skeleton  active paragraph={false}/>
                </Col>
              </div>
            </div>
          </Col>
        )
      )
    }
    </>
  )
}


export default DIskeleton