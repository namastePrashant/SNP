import React from 'react';
import {CopyToClipboard} from 'react-copy-to-clipboard';
import {FiCopy} from 'react-icons/fi';
import {
  FacebookShareButton,
  TwitterShareButton,
  TwitterIcon,
  FacebookIcon,
  FacebookMessengerShareButton,
  WhatsappShareButton,
  FacebookMessengerIcon,
  WhatsappIcon,
  ViberShareButton,
  ViberIcon,
  RedditShareButton,
  RedditIcon,
  LinkedinShareButton,
  LinkedinIcon,
  EmailShareButton,
  EmailIcon

} from 'react-share';

import {ShareAltOutlined} from '@ant-design/icons';

import {Menu} from 'antd'


const { SubMenu } = Menu;

const SubmenuShare = props =>{

  const {url, title, hashTag, image} = props;
  const [copied, setCopied]=React.useState(false)
  const copyUrl=window.location.origin.toString()+url;
 

  return (
    <Menu className="pt-0">
      <SubMenu
        title="Share"
        key={0}
        icon={<ShareAltOutlined />}
        >
      {/* facebook */}
      <Menu.Item className='share-menu' key={1}>
        <CopyToClipboard text={copyUrl} onCopy={()=>setCopied(true)} >
        {copied?( <span><FiCopy size={20} className="mr-5px"/>Copied!</span> ):(<span><FiCopy size={20} className="mr-5px"/>Copy Link</span>)}
        </CopyToClipboard>
      
      </Menu.Item>
      <Menu.Item className="share-menu" key={2}>
        <FacebookShareButton 
            url={window.location.origin.toString()+url}
            quote={title}
            hashtag={hashTag}
            
            >
          <FacebookIcon size={20} className="mr-5px"/> Facebook
        </FacebookShareButton>
      </Menu.Item>

      {/* // Twitter */}
      <Menu.Item className="share-menu" key={3}>
        <TwitterShareButton
          url={window.location.origin.toString()+url}
          quote={title}
          media={image}
          hashtag={hashTag}
        >
          <TwitterIcon size={20} className="mr-5px"/> Twitter
        </TwitterShareButton>
      </Menu.Item>

      <Menu.Item className="share-menu" key={4}>
        <FacebookMessengerShareButton 
            url={window.location.origin.toString()+url}
            quote={title}
            hashtag={hashTag}
            
            >
          <FacebookMessengerIcon size={20} className="mr-5px" key={5}/> Messenger
        </FacebookMessengerShareButton>
      </Menu.Item>

      <Menu.Item className="share-menu" key={6}>
        <WhatsappShareButton 
            url={window.location.origin.toString()+url}
            quote={title}
            hashtag={hashTag}
            
            >
          <WhatsappIcon size={20} className="mr-5px" key={7}/> Whatsapp
        </WhatsappShareButton>
      </Menu.Item>

      <Menu.Item className="share-menu" key={8}>
        <ViberShareButton 
            url={window.location.origin.toString()+url}
            quote={title}
            hashtag={hashTag}
            
            >
          <ViberIcon size={20} className="mr-5px"/> Viber
        </ViberShareButton>
      </Menu.Item>

      <Menu.Item className="share-menu" key={9}>
        <RedditShareButton 
            url={window.location.origin.toString()+url}
            quote={title}
            hashtag={hashTag}
            
            >
          <RedditIcon size={20} className="mr-5px"/> Reddit
        </RedditShareButton>
      </Menu.Item>

      <Menu.Item className="share-menu" key={10}>
        <LinkedinShareButton 
            url={window.location.origin.toString()+url}
            quote={title}
            hashtag={hashTag}
            
            >
          <LinkedinIcon size={20} className="mr-5px" key={11}/> LinkedIn
        </LinkedinShareButton>
      </Menu.Item>

      <Menu.Item className="share-menu" key={12}>
        <EmailShareButton 
            url={window.location.origin.toString()+url}
            quote={title}
            hashtag={hashTag}
            
            >
          <EmailIcon size={20} className="mr-5px"/> Email
        </EmailShareButton>
      </Menu.Item>

      </SubMenu>
    </Menu>
  )
}

export default SubmenuShare;