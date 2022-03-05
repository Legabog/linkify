import './Post.css';

import { Avatar } from '@mui/material';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import NearMeIcon from '@mui/icons-material/NearMe';
import { ExpandMoreOutlined } from '@mui/icons-material';
import { useTranslation } from 'react-i18next';

export const Post = ({ profilePic, image, username, timestamp, message }) => {
  const { t } = useTranslation();
  return (
    <div className='post'>
      <div className='post__top'>
        <Avatar src={profilePic} className='post__avatar' alt={'description'} />
        <div className='post__top-info'>
          <h3>{username}</h3>
          <p>{new Date(timestamp?.toDate()).toUTCString()}</p>
        </div>
      </div>
      <div className='post__bottom'>
        <p>{message}</p>
      </div>

      {image ? (
        <div className='post__image'>
          <img src={image} alt='description' />
        </div>
      ) : null}

      <div className='post__options'>
        <div className='post__option'>
          <ThumbUpIcon />
          <p>{t('authorized.feed.post.options.p-1')}</p>
        </div>
        <div className='post__option'>
          <ChatBubbleOutlineIcon />
          <p>{t('authorized.feed.post.options.p-2')}</p>
        </div>
        <div className='post__option'>
          <NearMeIcon />
          <p>{t('authorized.feed.post.options.p-3')}</p>
        </div>
        <div className='post__option'>
          <AccountCircleIcon />
          <ExpandMoreOutlined />
        </div>
      </div>
    </div>
  );
};
