import React,{useState, useEffect} from 'react';
import { PauseOutlined} from '@ant-design/icons';
import {Row,Col} from 'antd';
import FavoriteBtn from "../Common/Favorite";
import CustomSpin from "../Common/CustomSpin";
import { isEmpty } from "../../utils/commonUtils";
import {IoPlay} from 'react-icons/io5'

const PlayFeatured = (props) => {            
    const {item, currentPlayKey, isPlayerPlaying, setIsPlayerPlaying, fetchFavoriteButton, favoriteButton, favoriteButtonLoading, favoriteButtonLoadingId}=props
    const [isPlaying, setIsPlaying]= useState(false);
    
    const [isFavorite, setIsFavorite] = useState(false);

    // let id = props.allData && props.allData.artists.length !== 0 ?
    //     props.allData.artists[0].id
    //     :
    //     undefined;

    useEffect(()=>{
        if(props.currentPlayKey!==props.allData.id){
            setIsPlaying(false);
        }
    },[props.currentPlayKey])// eslint-disable-line

    useEffect(()=>{

        if(!isEmpty(favoriteButton)){
            if(favoriteButton.id===item.id){
                setIsFavorite(favoriteButton.favourited);
            }
        }else if(item){
            setIsFavorite(item.favourited);
        }
    },[item, favoriteButton])// eslint-disable-line

    useEffect(() => {                
        if (currentPlayKey !== props.allData.id || !isPlayerPlaying) {
            setIsPlaying(false);
        }else{
            setIsPlaying(isPlayerPlaying);    
        }
    }, [currentPlayKey, isPlayerPlaying])// eslint-disable-line

    return (
        <Row className="playfeatured__wrapper">
          
                   
                    <Col>
                        {
                            isPlaying ?
                                <PauseOutlined 
                             
                                  className='playfeatured-pauseBtn'
                                    onClick={
                                      
                                            () => {
                                                setIsPlayerPlaying(!isPlaying);
                                                props.setSongToPlay({   
                                                    songData:props.allData,
                                                    referrer:'single',
                                                    
                                                });
                                                
                                            }
                                            
                                    }
                                />
                                :
                                <IoPlay 
                            
                                    className='playfeatured-playBtn'
                                    onClick={
                                        props.setSongToPlay?
                                        (
                                            () => {
                                                setIsPlayerPlaying(!isPlaying);
                                                props.setSongToPlay({   songData:props.allData,
                                                                        referrer:'single',
                                                                        
                                                                    });
                                                
                                            }
                                        )
                                        :
                                        (   
                                            ()=>{
                                            return false  
                                            }
                                        )         
                                    }
                                />
                        }
                    </Col >
                    <Col  className='playfeatured-text'>
                        <div className='release'>NEW RELEASE</div>
                        <div className='title' title={item.title}>{item.title}</div>
                    </Col>           
                    <Col >                        
                        
                        {
                                favoriteButtonLoading 
                                && (favoriteButtonLoadingId === props.allData.id) 
                                ? <CustomSpin size="small" customStyle={{fontSize: '1.5rem',color:"#fff"}} /> 
                                :
                                <FavoriteBtn
                                    favorite={isFavorite}
                                    id={props.allData.id}
                                    index={props.allData.id}
                                    fetchFavorite={fetchFavoriteButton}
                                    // className={"card__options-favorite"}
                                    className={"playfeatured-favorite"}
                                />
                        }
       
                    </Col>
            
        </Row>
    );
};

export default PlayFeatured;