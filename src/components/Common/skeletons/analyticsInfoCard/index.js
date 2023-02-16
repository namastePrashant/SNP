import React from 'react'
import {Row,Skeleton,Col} from 'antd'

const AICskeleton = props => {
  const {items} = props
  return(
    <>
      {
        Array.from(Array(items),(e,i)=>{
          return(
          <Col lg={12} xl={6} md={12} sm={12} xs={24} key={i}>
            <div className="info-summary-card">
              <div className="info-summary-card__details">
                <Row gutter={[8,8]}>
                  <Col span={18}>
                    <Skeleton active paragraph={false}/>
                    <Skeleton active paragraph={false}/>
                  </Col>
                  <Col span={6}>
                  <Skeleton active paragraph={false}/>
                  <Skeleton active paragraph={false}/>
                  </Col>
                </Row>
                <Skeleton active paragraph={false}/>
              </div>
            </div>
          </Col>
          )
        })
      }
    </>
  )
}


export default AICskeleton
