import React from 'react';

const MultiImageCard = props => {
    return (
        <div className="multiStackedImgCard">
            <div className='multiStackedImgCard__img-wrapper'>
                <img 
                        src={props.song.cover} alt={props.song.artist} 
                        className="multiStackedImgCard__img-bottom" 
                />
                <img 
                        src={props.song.cover} alt={props.song.artist} 
                        className="multiStackedImgCard__img-middle" 
                />
                <img 
                        src={props.song.cover} alt={props.song.artist} 
                        className="multiStackedImgCard__img-top" 
                />
            </div>
            <div className='section-card-info'>
                <div className='section-song'>
                    {props.song.name}
                </div>
                <div className='section-artist'>
                    25,000 Followers
                </div>
            </div>
        </div>
    );
};

export default MultiImageCard;