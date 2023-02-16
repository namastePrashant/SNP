import React from 'react';
import { Link } from "react-router-dom";
import { EyeFilled } from '@ant-design/icons';
import {IoMdMore} from 'react-icons/io';
import { Dropdown, Menu } from 'antd';
import DummyImage from '../../assets/Images/dummySN.png';
import FavButton from './Artist/ArtistFavButton';
import ArtistSongPlay from './Artist/ArtistSongPausePlay';
import ShareButton from './ShareButton/ShareButtonSubMenu';


// const { SubMenu } = Menu;

const ArtistCard = (props, ref) => {

    const { artistDetails } = props;

    const handleMenuClick = (e) => {
        console.log('click', e);
    }


    const menu = (
        <Menu onClick={handleMenuClick}>
            <Menu.Item key="2" icon={<EyeFilled />}>
                <Link to={`/artist/${artistDetails?.id}`} >Profile</Link>
            </Menu.Item>
            
                <ShareButton
                    url={`/artist/${artistDetails?.id}`}
                    title={artistDetails?.profile?.name}
                    image={artistDetails?.profile?.profile_picture}
                />

            

        </Menu >
    );

    return (<>
        <div key={artistDetails.id} className='artist-circle section-item' ref={ref}>

            <figure className='artist-profile-img '>
                <img src={artistDetails?.profile?.profile_picture || DummyImage} alt="section-img" className='section-img' />
                <figcaption className="image__overlay">
                    <FavButton artist={artistDetails} />
                    <ArtistSongPlay artistId={artistDetails.id} />
                    <Dropdown overlay={menu} placement="bottomCenter">
                        <IoMdMore className="card__options-more" />
                    </Dropdown>
                </figcaption>
            </figure>

            <div className='artist-card-info'>
                <div className='section-song'>
                    <Link to={`/artist/${artistDetails?.id}`} >
                        {artistDetails?.profile?.name}
                    </Link>
                </div>
                <div className='section-artist'>
                    <span>
                        {artistDetails?.followers_count > 0 ? artistDetails.followers_count : '0'} Followers
                    </span>
                </div>
            </div>
        </div>
    </>
    );
};

const forwardedArtistCard = React.forwardRef(ArtistCard);

export default forwardedArtistCard;

