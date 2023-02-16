import React,{useEffect,useState} from 'react';
import {connect} from 'react-redux';
import { Row, Col } from "antd";
import {bindActionCreators} from 'redux';
import * as adsServices from '../../services/advertisementService';
// import CustomSpin from '../Common/CustomSpin';
import {isEmpty} from '../../utils/commonUtils';



const Advertisements = (props) =>{
 
 const [advertisements,setAdvertisements] = useState([]);

  const loadAds = () =>{
    if(!isEmpty(props.ads)) 
      if(props.ads[props.name]) setAdvertisements(props.ads[props.name].advertisements)
  }


  useEffect(()=>{
     loadAds()
  },[props.ads])//eslint-disable-line

  return(
    <div>
      {
        advertisements.length? 
          props.type==='short'?(
          (<Row gutter={[9, 9]}>
            <Col  span={6}>
                  <div className="ad-banner2">
            {advertisements.map((ad,index)=>{
              return(
                
                    <a key={index} href={ad?.url? ad?.url : '#' }  target="_blank" rel="noopener noreferrer">
                      <img src={ad.image?.url? ad.image?.url :'no img'} alt=""/>
                    </a>
                  
              )
            })}
             </div>
            </Col>
          </Row>
          )
        ):
        props.type==='no-layout'? (
          <>
            {advertisements.map((ad,index)=>{
              return(
               
                    <a href={ad?.url? ad?.url : '#' }  key={index} target="_blank" rel="noopener noreferrer">
                      <img src={ad.image?.url? ad.image?.url :'no img'} alt=""/>
                    </a>
                  
              )
            })}
          </>
        ):
        
        (
          <>
          <Row  className='justify-content-center'>
                  <div className="ad-banner2">
            {advertisements.map((ad,index)=>{
              return(
                
                    <a key={index} href={ad?.url? ad?.url : '#' } target="_blank" rel="noopener noreferrer">
                      <img src={ad.image?.url? ad.image?.url :'no img'} alt=""/>
                    </a>
              )
            })}
             </div>
          </Row>
          </>
        ):
        // (
        //   <Row className='Justify-content-center'>
        //     <div className="ad-banner2 text-align-center">
        //       Your Ads
        //     </div>
        //   </Row>
        // )
        ""
      }
    </div>
  
  )

}

const mapStateToProps = state =>{
  return {
    ads:state.advertisements.payload,
    adsLoading:state.advertisements.loading
  }
}

const mapDispatchToProps = dispatch=>{
  return{
    actions:bindActionCreators(
      Object.assign(
        {},
        adsServices,
      ),dispatch
    )
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Advertisements);