import { lazy, Suspense, useEffect } from 'react';
import { Routes_ } from 'routes/routes';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { Route, Routes } from 'react-router-dom';
import _ from 'lodash/core';

import { autoLogin } from 'redux/auth-reducer';
// ---------Main Components
import { Root } from 'containers/Root';
// --------Logged in user
import { Header } from 'containers/Header';
import { Body } from 'containers/Body';
import { Sidebar } from 'containers/Sidebar';
import { Feed } from 'containers/Feed';
import { Widgets } from 'containers/Widgets';
import { Welcome } from 'containers/Welcome';
import { About } from 'containers/About';
import { Profile } from 'containers/Profile';
import { MusicPlayerPanel } from 'containers/MusicPlayerPanel';
import { ErrorRoute } from 'containers/ErrorRoute';
import { Preloader } from 'pres-components/Preloader';
import { ToastContainer } from 'containers/ToastContainer';
// ---------Not logged in user
import { Login } from 'containers/Login';
import { Users } from 'containers/Users';
// -----Lazy components
const Weather = lazy(() => import('containers/Weather'));
const Terminal = lazy(() => import('containers/Terminal'));
const Music = lazy(() => import('containers/Music'));
const MusicList = lazy(() => import('containers/Music/components/MusicList'));
const ArtistsList = lazy(() => import('containers/Music/components/Artists'));
const ArtistItemRouter = lazy(() => import('containers/Music/components/ArtistItemRouter'));
const AlbumsList = lazy(() => import('containers/Music/components/Albums'));
const PlayLists = lazy(() => import('containers/Music/components/PlayLists'));
const CreateAlbum = lazy(() => import('containers/Music/components/CreateAlbum'));
const OwnPlayListsRouter = lazy(() => import('containers/Music/components/OwnPlayListsRouter'));
const MusicPlayer = lazy(() => import('containers/Music/components/MusicPlayer'));
const RegistrationRoute = lazy(() => import('containers/RegistrationRoute'));
const ConfirmEmailRoute = lazy(() => import('containers/ConfirmEmailRoute'));
const ConfirmedEmailRoute = lazy(() => import('containers/ConfirmedEmailRoute'));

function App(props) {
  useEffect(() => {
    props.autoLogin(props.history);
    // eslint-disable-next-line
  }, [props.activeAccountEmail, props.token]);

  if (!!localStorage.getItem('_token-id')) {
    return (
      <Root
        rightBottomComponent={<MusicPlayerPanel />}
        leftBottomComponent={<ToastContainer position={'bottom-left'} />}
      >
        <Routes>
          <Route
            path={Routes_.MAIN}
            exact
            element={
              <>
                <Header />
                <Body>
                  <Sidebar />
                  <Feed />
                  <Widgets />
                </Body>
              </>
            }
          />

          <Route
            path={Routes_.MUSIC}
            exact
            element={
              <>
                <Suspense fallback={<Preloader />}>
                  <Header />
                  <Body>
                    <Music />
                  </Body>
                </Suspense>
              </>
            }
          />
          <Route
            path={Routes_.MUSIC_LIST}
            exact
            element={
              <>
                <Suspense fallback={<Preloader />}>
                  <Header />
                  <Body>
                    <MusicList />
                  </Body>
                </Suspense>
              </>
            }
          />
          <Route
            path={Routes_.MUSIC_LIST_ARTISTS}
            exact
            element={
              <>
                <Suspense fallback={<Preloader />}>
                  <Header />
                  <Body>
                    <ArtistsList />
                  </Body>
                </Suspense>
              </>
            }
          />
          <Route
            path={Routes_.MUSIC_LIST_ALBUMS}
            exact
            element={
              <>
                <Suspense fallback={<Preloader />}>
                  <Header />
                  <Body>
                    <AlbumsList />
                  </Body>
                </Suspense>
              </>
            }
          />
          <Route
            path={Routes_.MUSIC_LIST_PLAYLISTS}
            exact
            element={
              <>
                <Suspense fallback={<Preloader />}>
                  <Header />
                  <Body>
                    <PlayLists />
                  </Body>
                </Suspense>
              </>
            }
          />
          <Route
            exact
            path={Routes_.MUSIC_LIST_CREATE_PLAYLIST}
            element={
              <>
                <Suspense fallback={<Preloader />}>
                  <Header />
                  <Body>
                    <CreateAlbum />
                  </Body>
                </Suspense>
              </>
            }
          />
          {props.musicAlbums.map((e) => (
            <Route
              key={_.uniqueId(`d-r1_${e}`)}
              path={`${Routes_.MUSIC_LIST_ARTISTS}/${e.author}`}
              exact
              element={
                <>
                  <Suspense fallback={<Preloader />}>
                    <Header />
                    <Body>
                      <ArtistItemRouter nameArtist={e.author} />
                    </Body>
                  </Suspense>
                </>
              }
            />
          ))}
          {props.musicAlbums.map((e) => (
            <Route
              key={_.uniqueId(`d-r2_${e}`)}
              path={`${Routes_.MUSIC_PLAYER}/${e.author}/${e.title}`}
              exact
              element={
                <>
                  <Suspense fallback={<Preloader />}>
                    <Header />
                    <Body>
                      <MusicPlayer
                        nameArtist={e.author}
                        albumTitle={e.title}
                        img={e.albumcoverUrl}
                      />
                    </Body>
                  </Suspense>
                </>
              }
            />
          ))}
          {props.ownPlayLists.map((e) => (
            <Route
              key={_.uniqueId(`d-r3_${e}`)}
              path={`/music-playlists/${e.title}/`}
              exact
              element={
                <>
                  <Suspense fallback={<Preloader />}>
                    <Header />
                    <Body>
                      <OwnPlayListsRouter
                        id={e._id}
                        img={e.playlistcoverUrl}
                        title={e.title}
                        description={e.description}
                        tracks={e.tracks}
                      />
                    </Body>
                  </Suspense>
                </>
              }
            />
          ))}
          <Route
            path={Routes_.WELCOME}
            exact
            element={
              <>
                <Header />
                <Body>
                  <Sidebar />
                  <Welcome />
                  <Widgets />
                </Body>
              </>
            }
          />
          <Route
            path={Routes_.WEATHER}
            exact
            element={
              <>
                <Suspense fallback={<Preloader />}>
                  <Header />
                  <Body>
                    <Weather />
                  </Body>
                </Suspense>
              </>
            }
          />
          <Route
            path={Routes_.TERMINAL}
            exact
            element={
              <>
                <Suspense fallback={<Preloader />}>
                  <Terminal />
                </Suspense>
              </>
            }
          />
          <Route
            path={Routes_.USERS}
            exact
            element={
              <>
                <Suspense fallback={<Preloader />}>
                  <Header />

                  <Body>
                    <Sidebar />
                    <Users />
                    <Widgets />
                  </Body>
                </Suspense>
              </>
            }
          />
          <Route
            path={Routes_.FRIENDS}
            exact
            element={
              <>
                <Header />
                <Preloader />
              </>
            }
          />
          <Route
            path={Routes_.GROUPS}
            exact
            element={
              <>
                <Header />
                <Preloader />
              </>
            }
          />
          <Route
            path={Routes_.MESSAGES}
            exact
            element={
              <>
                <Header />
                <Preloader />
              </>
            }
          />
          <Route
            path={Routes_.PROFILE}
            exact
            element={
              <>
                <Header />
                <Profile />
              </>
            }
          />
          {Routes_.PROFILE_ABOUT.map((e) => (
            <Route
              key={_.uniqueId(`d-r4_${e}`)}
              path={e}
              exact
              element={
                <>
                  <Header />
                  <Profile />
                  <About />
                </>
              }
            />
          ))}
          <Route
            path={Routes_.PROFILE_FRIENDS}
            exact
            element={
              <>
                <Header />
                <Profile />
                <h1>Friends</h1>
              </>
            }
          />
          <Route
            path={Routes_.PROFILE_PHOTOS}
            exact
            element={
              <>
                <Header />
                <Profile />
                <h1>Photos</h1>
              </>
            }
          />
          <Route
            path={Routes_.PROFILE_ARCHIVE}
            exact
            element={
              <>
                <Header />
                <Profile />
                <h1>Archive</h1>
              </>
            }
          />
          <Route
            path={Routes_.PROFILE_VIDEOS}
            exact
            element={
              <>
                <Header />
                <Profile />
                <h1>Videos</h1>
              </>
            }
          />
          <Route path='*' element={<ErrorRoute />} />
        </Routes>
      </Root>
    );
  } else {
    return (
      <Root>
        {props.authFetching ? (
          <Preloader />
        ) : (
          <>
            <Routes>
              <Route path={Routes_.MAIN} exact element={<Login />} />
              <Route
                path={Routes_.SIGNUP}
                exact
                element={
                  <>
                    <Suspense fallback={<Preloader />}>
                      <RegistrationRoute />
                    </Suspense>
                  </>
                }
              />
              <Route
                path={Routes_.CONFIRM_EMAIL}
                exact
                element={
                  <>
                    <Suspense fallback={<Preloader />}>
                      <ConfirmEmailRoute />
                    </Suspense>
                  </>
                }
              />
              <Route
                path={Routes_.CONFIRMED_EMAIL}
                exact
                element={
                  <>
                    <Suspense fallback={<Preloader />}>
                      <ConfirmedEmailRoute />
                    </Suspense>
                  </>
                }
              />
              <Route path='*' element={<ErrorRoute />} />
            </Routes>
          </>
        )}
      </Root>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    token: state.authReducer.token,
    activeAccountEmail: state.authReducer.activeAccountEmail,
    authFetching: state.authReducer.authFetching,
    musicAlbumsFetching: state.musicAlbumsReducer.musicAlbumsFetching,
    musicAlbums: state.musicAlbumsReducer.musicAlbums,
    ownPlayLists: state.musicPlayListReducer.ownPlayLists,
  };
};

export default compose(
  connect(mapStateToProps, {
    autoLogin,
  })
)(App);
