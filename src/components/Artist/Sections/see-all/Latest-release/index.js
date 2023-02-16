import React, { useCallback, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import { fetchArtistLatestReleases } from '../../../../../services/artistsService';
import * as currentPlayAction from '../../../../../actions/currentPlayAction';
import * as addToQueueAction from '../../../../../actions/addToQueueAction';
// import * as individualAlbumAction from '../../../../../actions/individualAlbumAction';
import { fetchIndividualAlbum } from '../../../../../services/albumsService';



import AlbumCard from '../../../../Common/AlbumCard'
import { Row, Typography, Col } from 'antd'
import { isEmpty } from '../../../../../utils/commonUtils'
import { setFavouriteAlbum } from '../../../../../services/favoriteAlbumsService'
import ShowMessage from '../../../../Common/Result';
import ScrollPagination from '../../../../Common/ScrollPagination';


const { Title } = Typography
const ArtistLatestRelease =
  props => {


    const { id } = useParams()

    const layout = {
      full: {
        xxl: { span: 24 },
        xl: { span: 24 },
        lg: { span: 24 },
        md: { span: 24 },
        sm: { span: 24 },
        xs: { span: 24 },
      },
    };

    /**
     * REDUX FUNCTIONS
    */
    const isPlayerPlaying = useSelector(state => state.currentPlay.isPlayerPlaying)
    const currentPlayReferrerId = useSelector(state => state.currentPlay.payload.referrerId)
    const currentPlayReferrer = useSelector(state =>state.currentPlay.payload.referrer)
    const currentPlayKey = useSelector(state => state.currentPlay.songId)

    const latestRelease = useSelector(state => state.artistLatestReleases.payload)
    const latestReleaseAlbums = useSelector(state => state.artistLatestReleases.albums)

    const latestReleaseLoading = useSelector(state => state.artistLatestReleases.loading)
    const latestReleaseLoadingMore = useSelector(state => state.artistLatestReleases.loadingMore)
    const latestReleaseHasMore = useSelector(state => state.artistLatestReleases.hasMore)
    const latestReleaseMeta = useSelector(state => state.artistLatestReleases.meta)
    const favouriteAlbumLoading = useSelector(state => state.favoriteAlbums.favLoading)
    const favouriteAlbumLoadingId = useSelector(state => state.favoriteAlbums.id)
    const recentlyFavouriteAlbum = useSelector(state => state.favoriteAlbums.recentlyFav)

    const individualAlbum = useSelector(state => state.individualAlbum.payload)
    // const individualAlbumErrors = useSelector(state => state.individualAlbum.errors)
    // const individualAlbumLoading = useSelector(state => state.individualAlbum.loading)

    const dispatch = useDispatch();





    /**
* Fetch individual album.
*
*/
    
    const getIndividualAlbum = useCallback((id, callBack) => {
      
      dispatch(fetchIndividualAlbum(id, callBack))
    }, [dispatch])




    const setBulkSongsToPlay = useCallback((songData) => {
      dispatch(currentPlayAction.currentPlaySong(songData))
    }, [dispatch])

    const addSongToCurrentAudioQueue = useCallback((songData) => {
      dispatch(addToQueueAction.addSongToCurrentAudioQueue(songData))
    }, [dispatch])


    const setIsPlayerPlaying = useCallback((isPlayerPlaying) => {
      
      dispatch(currentPlayAction.isPlayerPlaying(isPlayerPlaying))
    }, [dispatch])

    const { current_page } = latestReleaseMeta;

    const fetchLRA = useCallback((id, page) => { // fetch latest release
      dispatch(fetchArtistLatestReleases(id, page))
    }, [dispatch])

    const setAlbumToFavourite = useCallback((formData, id) => {
      dispatch(setFavouriteAlbum(formData, id))
    }, [dispatch])
    /**
     * END REDUX FUNCTIONS
     */

    useEffect(() => {
      fetchLRA(id)
    }, [id])// eslint-disable-line


    return (
      <>
        <Row className='row-main'>
          <Col {...layout.full} className='page-header overlay'>
            <div className='explore-main'>
              <Title>Latest Albums from {latestRelease?.profile?.name} </Title>
              <Row className="section-body followedAlbums" gutter={[16,16]}>
                {!isEmpty(latestRelease) ?
                  latestReleaseAlbums.length ?
                    latestReleaseAlbums.map((album, index) => (
                      <Col key={album.id}>
                        <AlbumCard
                          albumDetails={album}
                          setAlbumToFavourite={setAlbumToFavourite}
                          favouriteAlbumLoading={favouriteAlbumLoading}
                          favouriteAlbumLoadingId={favouriteAlbumLoadingId}
                          recentlyFavouriteAlbum={recentlyFavouriteAlbum}
                          isPlayerPlaying={isPlayerPlaying}
                          setIsPlayerPlaying={setIsPlayerPlaying}
                          setBulkSongsToPlay={setBulkSongsToPlay}
                          currentPlayKey={currentPlayKey}
                          currentPlayReferrerId={currentPlayReferrerId}
                          currentPlayReferrer={currentPlayReferrer}
                          addSongToCurrentAudioQueue={addSongToCurrentAudioQueue}
                          individualAlbum={individualAlbum}
                          fetchIndividualAlbum={getIndividualAlbum}
                        />
                      </Col>
                    )) : <ShowMessage msg={"No albums available"} />
                  : ""
                }

                {
                  latestRelease.albums && !latestReleaseLoading &&
                  <ScrollPagination
                    current_page={current_page}
                    pagination={fetchLRA}
                    HasMore={latestReleaseHasMore}
                    loadingMore={latestReleaseLoadingMore}
                    id={id}
                    data={latestRelease.albums.data}
                  />
                }
              </Row>
            </div>
          </Col>
        </Row>

      </>
    )
  }

export default ArtistLatestRelease
