import React from 'react';
import { Modal } from 'antd';
import {
  FacebookShareButton,
  TwitterShareButton,
  TwitterIcon,
  FacebookIcon
} from 'react-share';


const ShareButton = (props) =>{

  const {url, title, hashTag, visible, closeModal,image} = props;

  return(
    <>
    <Modal title={"Share "+ title} visible={visible}  onCancel={closeModal} footer={null}>
      <FacebookShareButton 
        url={window.location.origin.toString()+url}
        quote={title}
        hashtag={hashTag}
        imageURL={image}
        className="mr-5px"
        >
        <FacebookIcon size={36} />
      </FacebookShareButton>

      <TwitterShareButton
        url={window.location.origin.toString()+url}
        quote={title}
        hashtag={hashTag}
        media={image}
        className="mr-5px"
      >
        <TwitterIcon size={36} />
      </TwitterShareButton>
    </Modal>
    </>
  );
}

export default ShareButton;