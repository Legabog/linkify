import { memo, useState } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import './Sidebar.css';

import map_svg from 'assets/images/map.svg';
import game_logo from 'assets/images/game_logo.jpg';
import vkr_logo from 'assets/images/vkr_logo.jpg';
import terminal_logo from 'assets/images/terminal.png';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import EmojiPeopleIcon from '@mui/icons-material/EmojiPeople';
import ChatIcon from '@mui/icons-material/Chat';
import GitHubIcon from '@mui/icons-material/GitHub';
import PeopleIcon from '@mui/icons-material/People';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import EventIcon from '@mui/icons-material/Event';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import GamesIcon from '@mui/icons-material/Games';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import WorkIcon from '@mui/icons-material/Work';
import FlagIcon from '@mui/icons-material/Flag';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import { ExpandMoreOutlined } from '@mui/icons-material';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';

import { SidebarRow } from './components/SidebarRow';
import { useTranslation } from 'react-i18next';

const Sidebar_ = memo((props) => {
  const { t } = useTranslation();
  const [additionalSections, setAdditionalSections] = useState(false);

  const toggleAdditionalSections = () => {
    additionalSections ? setAdditionalSections(false) : setAdditionalSections(true);
  };

  return (
    <div className='sidebar'>
      <SidebarRow
        Icon={
          props.user === null || props.user.Avatars.activeAvatarUrl === ''
            ? AccountCircleIcon
            : null
        }
        src={
          props.user === null || props.user.Avatars.activeAvatarUrl === ''
            ? null
            : props.user.Avatars.activeAvatarUrl
        }
        title={props.user === null ? null : `${props.user.Name} ${props.user.Sername}`}
        navLink={'/profile'}
        fetchAvatar={props.fetchAvatar}
      />

      <SidebarRow
        Icon={GitHubIcon}
        title={t('authorized.sidebar.rows.row-1')}
        navLink={'/welcome'}
      />
      <SidebarRow
        Icon={LibraryMusicIcon}
        title={t('authorized.sidebar.rows.row-2')}
        navLink={'/music'}
      />
      <SidebarRow
        Icon={WbSunnyIcon}
        title={t('authorized.sidebar.rows.row-18')}
        navLink={'/weather'}
      />
      <SidebarRow
        Icon={PeopleIcon}
        title={t('authorized.sidebar.rows.row-10')}
        navLink={'/users'}
      />
      <SidebarRow
        Img={terminal_logo}
        title={t('authorized.sidebar.rows.row-21')}
        navLink={'/terminal'}
      />

      <hr />

      <div className={'sidebar__title-section'}>
        <span>{t('authorized.sidebar.title-section')}</span>
      </div>

      <SidebarRow
        IconFromSprite={
          <svg>
            <use href={map_svg + '#vk'} />
          </svg>
        }
        title={t('authorized.sidebar.rows.row-3')}
        Link={'https://covers-storage.firebaseapp.com/'}
      />

      <SidebarRow
        IconFromSprite={
          <svg>
            <use href={map_svg + '#vue_logo'} />
          </svg>
        }
        title={t('authorized.sidebar.rows.row-4')}
        Link={'https://murmuring-tor-87484.herokuapp.com/'}
      />
      <SidebarRow
        Img={game_logo}
        title={t('authorized.sidebar.rows.row-5')}
        Link={'https://myfirstbot-sphara.web.app/'}
      />
      <SidebarRow
        Img={vkr_logo}
        title={t('authorized.sidebar.rows.row-6')}
        Link={'https://vkr-project-legabog.web.app/'}
      />
      {additionalSections ? (
        <>
          <hr />
          <SidebarRow Icon={LocalHospitalIcon} title={t('authorized.sidebar.rows.row-7')} />
          <SidebarRow Icon={EmojiPeopleIcon} title={t('authorized.sidebar.rows.row-8')} />
          <SidebarRow Icon={ChatIcon} title={t('authorized.sidebar.rows.row-9')} />

          <SidebarRow Icon={EventIcon} title={t('authorized.sidebar.rows.row-11')} />
          <SidebarRow Icon={BookmarkIcon} title={t('authorized.sidebar.rows.row-12')} />

          <SidebarRow Icon={VideoLibraryIcon} title={t('authorized.sidebar.rows.row-13')} />
          <SidebarRow Icon={GamesIcon} title={t('authorized.sidebar.rows.row-14')} />
          <SidebarRow Icon={SportsEsportsIcon} title={t('authorized.sidebar.rows.row-15')} />
          <SidebarRow Icon={WorkIcon} title={t('authorized.sidebar.rows.row-16')} />
          <SidebarRow Icon={FlagIcon} title={t('authorized.sidebar.rows.row-17')} />
          <SidebarRow
            Icon={ExpandLessIcon}
            title={t('authorized.sidebar.rows.row-19')}
            toggleAdditionalSections={toggleAdditionalSections}
          />
        </>
      ) : (
        <SidebarRow
          Icon={ExpandMoreOutlined}
          title={t('authorized.sidebar.rows.row-20')}
          toggleAdditionalSections={toggleAdditionalSections}
        />
      )}
    </div>
  );
});

const mapStateToProps = (state) => ({
  user: state.userReducer.user,
  fetchAvatar: state.userReducer.fetchAvatar,
});

export const Sidebar = compose(connect(mapStateToProps, {}))(Sidebar_);
