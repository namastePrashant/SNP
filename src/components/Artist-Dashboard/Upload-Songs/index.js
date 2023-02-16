import React, { useEffect, useState } from 'react'
import { Form, Row, Col, Avatar, Button, Upload, Select, Input, DatePicker, message, Progress } from 'antd'
import { FileTextOutlined, ContainerOutlined, AudioOutlined, CopyOutlined } from '@ant-design/icons'
import CameraIcon from '../../../assets/Icons/camera.svg'
import SpinButton from '../../Common/SpinButton'
import { FiTrash2 } from 'react-icons/fi'
// import { fetch } from '../../../utils/httpUtil'
import { getIdsFromArray, isEmpty } from '../../../utils/commonUtils'
import moment from 'moment'
import CircularLoader from '../../Common/skeletons/circularLoader'
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { Link, useLocation } from 'react-router-dom'
import Advertisement from '../../Advertisments'
import { useSelector } from 'react-redux'
import history from '../../../utils/history'

const { Option } = Select
const { Dragger } = Upload

const UploadSong = props => {

  const {
    uploadSong,  // upload song dunction
    uploading,
    updateSong,

    // album related 
    myAlbums,
    loadingMyAlbums,
    fetchMyAlbums,
    searchMyAlbums,

    // moods
    moods,
    searchMoods,
    fetchMoods,
    moodsLoading,
    // fetchMoods,

    // languages
    languagesLoading,
    languages,
    searchLanguages,
    fetchLanguage,

    //genres
    genresLoading,
    genres,
    searchGenre,
    fetchGenres,

    // related artists
    artistsLoading,
    artists,
    searchArtist,
    fetchArtists,

    // tags
    tags,
    searchTags,
    fetchTags,

    // edit song,

  } = props

  


  const [songImage, setSongImage] = useState(null) // for song image prview
  const [songImageFile, setSongImageFile] = useState(null) // song image file
  const [songFile, setSongFile] = useState(null) // song file
  const [lyrics, setLyricFile] = useState(null) // lyrics file
  const [releasedDate, setReleasedDate] = useState(null) // lyrics file
  const [progress, setProgress] = useState(null) // uploading song progress

  // fields array
  const [songFields, setsongFields] = useState({
    artists: [],
    genres: [],
    languages: [],
    moods: [],
    tags: [],
    myAlbums: []
  })


  const fetchSongMoods = () => {
    if (!moods.length) {
      fetchMoods();
    }
  }

  const fetchSongMyAlbum = (open) => {
    // if (!myAlbums.length) {
      fetchMyAlbums();
    // }
  }

  const fetchSongArtists = (open) => {
    if (!artists.length) {
      fetchArtists();
    }
  }

  const fetchSongGenre = (open) => {
    if (!genres.length) {
      fetchGenres();
    }
  }

  const fetchSongLanguage = (open) => {
    if (!languages.length) {
      fetchLanguage();
    }
  }

  const fetchSongTags = (open) => {
    if (!tags.length) {
      fetchTags();
    }
  }



  //load field
  useEffect(() => {
    if (songFields.myAlbums.length) {
      let nonDuplicateSongFieldsAlbum = myAlbums.filter((album) => {
        return album.id !== songFields.myAlbums[0].id;
      });
      setsongFields({ artists: artists, genres: genres, languages: languages, moods: moods, tags: tags, myAlbums: nonDuplicateSongFieldsAlbum.concat(songFields.myAlbums) })
    } else {
      setsongFields({ artists: artists, genres: genres, languages: languages, moods: moods, tags: tags, myAlbums: myAlbums })
    }
  }, [artists, genres, languages, moods, tags, myAlbums])//eslint-disable-line
  // important for editing song (ant select)



  /**
    * incase the song is being edited by the user the following hook runs --- ignore this on new song upload
    * */
  const location = useLocation();
  const state = useSelector(state=>{
    const {artistDashboard} =state;
    return artistDashboard;
  })
  const {currentEditSong} = state;


  const [editMode, setEditMode] = useState(false)
  const [loadingSong, setLoadingSong] = useState(false)


  useEffect(() => {
    // console.log(currentEditSong)
    if (currentEditSong) {
      setEditMode(true)
      setEditSong();
    } else {
      setEditMode(false)
      if(location.pathname==="/edit-song"){
        history.push('/my-songs')
      }
    }
  }, [currentEditSong])//eslint-disable-line

  const setEditSong = () => {  // fetch song to edit
    setsongFields({
      artists: songFields.artists.concat(currentEditSong.artists),
      genres: songFields.genres.concat([currentEditSong.genre]),
      languages: songFields.languages.concat(currentEditSong.languages),
      moods: songFields.moods.concat(currentEditSong.moods),
      tags: songFields.tags.concat(currentEditSong.tags),
      myAlbums: isEmpty(currentEditSong.album) ? songFields.myAlbums:songFields.myAlbums.concat([currentEditSong.album]),
    })
    setSongImage(currentEditSong?.cover_image || null)
    // setSongImageFile(currentEditSong?.cover_image || null)
    setLoadingSong(false)
    setReleasedDate(currentEditSong.released_date)
    setSongFile({ fileName: currentEditSong?.title, url: currentEditSong?.url })
  }
  /**
   * incase the song is being edited by the user the above hook runs ---  ignore this on new song upload
   * */


  /**
   * 
   * @param {*} List (data array)
   * @param {*} errorMessage (message if array is empty)
   */
  const getSelectOptions = (List, errorMessage = "Sorry no data found", tags = false) => {
    if (List.length) {

      return (
        <>
          
          {
            List.map((item, index) => (
              <Option value={!tags ? item.id : item.name} key={item.id || index}>
                {item?.profile?.name || item.name || item.title}
              </Option>
            ))
          }
        </>
      )

    } else {
      if (!tags) {
        return (
          <>
            {/* <Option disabled>
            </Option> */}
            <Option disabled>
              {errorMessage}
            </Option>
          </>
        )
      }
    }
  }

  const dummyRequest = ({ file, onSuccess }) => {
    setTimeout(() => {
      onSuccess("ok");
    }, 0);
  }; // for ant design upload :(

  // song image selected 
  const onSongImageSelected = {
    beforeUpload: file => {
      setSongImage(URL.createObjectURL(file))
      setSongImageFile(file)
    }
  }
  const removeSongImage = () => {
    setSongImage(null)
    setSongImageFile(null)
  }
  // end song images


  // lyrics file
  const onLyricsSelected = {
    beforeUpload: file => {
      setLyricFile({ file: file, fileName: file.name })
    }
  }
  const removeLyrics = () => {
    setLyricFile(null)
  }
  // end lyrics file
  const onSongSelected = {
    beforeUpload: file => {
      const url = URL.createObjectURL(file)
      setSongFile({ file: file, fileName: file.name, url: url })
    }
  }

  // released date
  const onReleseadDateSelected = (date, dateString) => {
    setReleasedDate(dateString)
  }

  const removeSongFile = () => {
    setSongFile(null)
  }
  // song file

  // end songs file


  //submit action
  const onFormSubmit = (value) => {



    let songPublishStatus = !currentEditSong ? "draft" : (currentEditSong.status === "published") ? currentEditSong.status : "draft";

    let fd = new FormData();
    if (lyrics) fd.append('song[lyric_file]', lyrics.file)
    if(songImageFile){
      fd.append('song[cover_image]', songImageFile)
    }
    fd.append('song[album_id]', value.album)
    fd.append('song[released_date]', releasedDate)
    fd.append('song[lyricist_name]', value.lyricist)
    fd.append('song[title]', value.song_title)
    fd.append('song[genre_id]', value.genre)
    fd.append('song[status]', songPublishStatus)
    // fd.append('song[status]', 'published')

    value.mood.forEach((mood, index) => {
      fd.append('song[moods][' + index + "]", mood)
    })

    value.tags.forEach((tag, index) => {
      fd.append('song[tags][' + index + "]", tag)
    })

    value.tags.forEach((tag, index) => {
      fd.append('song[tags][' + index + "]", tag)
    })

    value.language.forEach((lang, index) => {
      fd.append('song[languages][' + index + "]", lang)
    })

    if (value.featuring_artist) {
      value.featuring_artist.forEach((artist, index) => {
        fd.append('song[artists][' + index + "]", artist)
      })
    }

    const options = {
      onUploadProgress: (event) => {
        const { loaded, total } = event
        setProgress(Math.floor((loaded * 100) / total))
      }
    }

    if (songFile) {
      if (!editMode) {
        fd.append('song[song_file]', songFile.file)
        uploadSong(fd, options)
      } else {
        updateSong(fd, currentEditSong.id, options)
      }
    } else {
      message.error("Please upload a Song file")
    }

  }


  return (
    <section className="row-main home-layout">
      {!loadingSong ?
        <Form name="profile"
          initialValues={{ remember: true }}
          layout="vertical"
          onFinish={onFormSubmit}
          className="custom-form ">
          <div className="col-md-12">
            <Row gutter={[8, 8]} className="align-items-center">
              <Col xl={16} md={24} xs={24}>
                <p className="text-14-grey">Account</p>
                <h4 className="text-36-black-medium">{editMode ? "Update" : "Add"} Song</h4>
                <div className="section-break-2">
                  <Row>
                    {
                      songImage ?
                        <div className='up-img-wrapper'>
                          <Avatar shape="square" size={130} src={songImage} />
                          <Button className="mt-1 delete-button remove-img " shape={"circle"} onClick={removeSongImage} >
                            <FiTrash2 className="m-0" />
                          </Button>
                        </div>
                        :
                        <Avatar shape="square" size={130} icon={<FileTextOutlined />} />
                    }
                    <div className="upload-song-wrapper">
                      <div className="image-upload display-flex-ac">
                        <Upload {...onSongImageSelected}
                          customRequest={dummyRequest}
                          accept="image/png, image/jpeg, image/jpg"
                        >
                          <Button className="button-style" >
                            <img className="icon-style" src={CameraIcon} alt="btn-img" />
                            {songImageFile || songImage ? "Change" : "Add"} Song cover image
                      </Button>
                        </Upload>

                      </div>


                      <Form.Item name="album" className="song-upload-album-selector mt-1"
                        initialValue={ currentEditSong && !isEmpty(currentEditSong?.album)?
                          currentEditSong && !isEmpty(currentEditSong?.album) && currentEditSong?.album?.id: "Singles"}
                      >
                        <Select
                          showSearch
                          style={{ width: 200 }}
                          placeholder="Select album"
                          // optionFilterProp="children"
                          // filterOption={false}
                          // filterOption={(input, option) =>
                          //   option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                          // }
                          onDropdownVisibleChange={fetchSongMyAlbum}
                          onSearch={(value) => {
                            searchMyAlbums(value)
                          }} // search myalbum  of artist

                        >
                          {
                            loadingMyAlbums ?
                              <Option disabled>Loading albums</Option>
                              :
                              <>
                                <Option value="">Singles</Option>
                                {getSelectOptions(songFields.myAlbums, "Sorry no albums Found")}
                              </>
                          }

                        </Select>
                      </Form.Item><br />

                    </div>

                  </Row>
                  {
                    editMode ?
                      <div>
                        <Link to={'/song/' + currentEditSong.id} target="_blank"
                          className="text-14-black mr-1"
                        >Copy song link</Link>
                        <CopyToClipboard text={window.location.origin.toString() + '/song/' + currentEditSong.id}
                          onCopy={() => {
                            message.success('Link copied')
                          }}>
                          <CopyOutlined className="copyIcon"
                            title="Copy Link"
                          />
                        </CopyToClipboard>
                      </div> : ""
                  }
                </div>

              </Col>
              <Col xl={8} md={24} xs={24}>
                <Advertisement name="userprofileheade" type='no-layout' />
              </Col>
            </Row>
          </div>

          <section className="section-break-2">
            <div className="col-md-11">

              <Row gutter={[16, 16]}>

                <div className="col-md-6" >
                  <Form.Item
                    label="Song title"
                    name="song_title"
                    rules={[
                      { required: true, message: "Please enter a title !" },
                    ]}
                    initialValue={currentEditSong && currentEditSong?.title}
                  >
                    <Input />
                  </Form.Item>
                </div> {/**album name */}


                <div className="col-md-6" >
                  <Form.Item
                    label="Featuring Artists"
                    name="featuring_artist"
                    initialValue={
                      currentEditSong ?
                        currentEditSong && !isEmpty(currentEditSong?.artists) && getIdsFromArray(currentEditSong?.artists) : []
                    }// required during song edit
                  >
                    <Select
                      mode="multiple"
                      placeholder="Select artists"
                      filterOption={false}
                      onSearch={(value) => {
                        searchArtist(value)
                      }}
                      size={'large'}
                      className="custom-form__expand-selector"
                      onDropdownVisibleChange={fetchSongArtists}

                    >
                      {
                        artistsLoading ?
                          <Option disabled>Loading artists</Option>
                          : getSelectOptions(songFields.artists, "Sorry no artists Found")
                      }
                    </Select>
                  </Form.Item>
                </div> {/**release date name */}



                <div className="col-md-6" >
                  <Form.Item
                    label="Lyricist"
                    name="lyricist"
                    initialValue={currentEditSong && currentEditSong?.lyricist_name}
                  >
                    <Input
                    />
                  </Form.Item>
                </div> {/**release date name */}



                <div className="col-md-6 display-flex-ac" >
                  {
                    !lyrics ?
                      <Upload {...onLyricsSelected}
                        showUploadList={false}
                        accept='.lrc'>
                        <Button className="button-style" icon={<ContainerOutlined />}>
                          Upload Lyrics
                  </Button>
                      </Upload> :
                      <div className='display-flex-ac'>
                        <div>
                          {lyrics.fileName}
                        </div>:''
                <Button className="delete-button  ml-1" shape={'circle'} size={'middle'} onClick={removeLyrics} >
                          <FiTrash2 className="icon-style m-0 " />
                        </Button>
                      </div>
                  }

                </div> {/**release date name */}


                <div className="col-md-6" >
                  <Form.Item
                    label="Genre"
                    name="genre"
                    rules={[
                      { required: true, message: "Please enter Genre !" },
                    ]}
                    initialValue={
                      // currentEditSong && currentEditSong?.genre.id : []
                      currentEditSong ?
                      currentEditSong && currentEditSong?.genre.id : []
                    }

                  >
                    <Select
                      showSearch
                      placeholder="Select Genres"
                      filterOption={false}
                      onSearch={(value) => {
                        searchGenre(value)
                      }}
                      size={'large'}
                      onDropdownVisibleChange={fetchSongGenre}

                    >
                      {
                        genresLoading ?
                          <Option disabled>Loading Genres</Option>
                          : getSelectOptions(songFields.genres, "Sorry no genres Found")
                      }
                    </Select>
                  </Form.Item>
                </div> {/**Genre*/}

                <div className="col-md-6" >
                  <Form.Item
                    label="Language"
                    name="language"
                    rules={[
                      { required: true, message: "Please enter a language !" },
                    ]}
                    initialValue={
                      currentEditSong ?
                      currentEditSong && !isEmpty(currentEditSong?.languages) && getIdsFromArray(currentEditSong?.languages) : []
                    }
                  >
                    <Select mode="multiple"
                      placeholder="Select languages"
                      size={'large'}
                      filterOption={false}
                      onSearch={(value) => {
                        searchLanguages(value)
                      }}
                      // defaultValue={currentEditSong && getIdsFromArray(currentEditSong?.languages)}
                      onDropdownVisibleChange={fetchSongLanguage}
                      className="custom-form__expand-selector"
                    >
                      {
                        languagesLoading ?
                          <Option disabled>Loading Languages</Option>
                          : getSelectOptions(songFields.languages, "Sorry no languages Found")
                      }
                    </Select>
                  </Form.Item>
                </div> {/**language*/}


                <div className="col-md-6">
                  <Form.Item
                    label="Mood"
                    name="mood"
                    rules={[
                      { required: true, message: "Please select a Mood !" },
                    ]}
                    initialValue={
                      currentEditSong ?
                      currentEditSong && !isEmpty(currentEditSong?.moods) && getIdsFromArray(currentEditSong?.moods) : []}
                  >
                    <Select mode="multiple"
                      placeholder="Select moods"
                      filterOption={false}
                      size={'large'}
                      onSearch={(value) => {
                        searchMoods(value)
                      }} // network call search
                      onDropdownVisibleChange={fetchSongMoods}
                      className="custom-form__expand-selector"
                    >
                      {
                        moodsLoading ?
                          <Option disabled>Loading Moods</Option>
                          : getSelectOptions(songFields.moods, "Sorry no moods found")
                      }
                    </Select>
                  </Form.Item>
                </div> {/**Mood*/}


                <div className="col-md-6" >
                  <Form.Item
                    label="Tags"
                    name="tags"
                    initialValue={
                      currentEditSong ?
                        currentEditSong && currentEditSong?.tags && getIdsFromArray(currentEditSong?.tags, 'name') : []
                    }

                  >
                    <Select
                      showSearch
                      mode="tags"
                      placeholder="Select tags"
                      // value={
                      //   editMode ?
                      //   currentEditSong && currentEditSong?.tags && getIdsFromArray(currentEditSong?.tags, 'name') : []
                      // }
                      filterOption={true}
                      onSearch={(value) => {
                        searchTags(value)
                      }} // network call search
                      size={'large'}
                      onDropdownVisibleChange={fetchSongTags}
                      className="custom-form__expand-selector"
                    >
                      {
                        artistsLoading ? ''
                          : getSelectOptions(songFields.tags, "Sorry no tags Found", true)
                      }s
                    </Select>
                  </Form.Item>
                </div> {/**Mood*/}

                <div className="col-md-6">
                  {songFile ?
                    <>
                      <div>
                        {songFile.fileName}  {/**uploaded filename**/}
                      </div><br />
                    </>
                    : ""}
                  {!songFile && !editMode ?
                    <Dragger {...onSongSelected}
                      showUploadList={false}
                      accept='.mp3,.aac ,.mp4,.wav,.flac,.mqa,.ogg,.aiff,.dsd'
                    >
                      <p className="ant-upload-drag-icon">
                        <AudioOutlined />
                      </p>
                      <p className="ant-upload-text">Click or drag songs file to this area to upload</p>
                    </Dragger> :
                    ""
                  }
                  {songFile ?
                    <div className="display-flex-ac">
                      <audio controls style={{ borderRadius: "20px" }}>
                        <source src={songFile.url} />
                      </audio>
                      {
                        !editMode ?
                          <Button className="ml-1 delete-button" shape={'circle'} size={'middle'} onClick={removeSongFile} >
                            <FiTrash2 className="icon-style m-0 " />
                          </Button> : ""
                      }

                    </div>
                    : ""
                  }  {/**audio preview**/}

                </div>

                <div className="col-md-6" >
                  <Form.Item
                    label="Released Date"
                    name="released_date"
                    rules={[
                      { required: true, message: "Please enter a released date !" },
                    ]}
                    initialValue={currentEditSong && currentEditSong.released_date && moment(currentEditSong.released_date, 'YYYY-MM-DD')}
                  >
                    <DatePicker onChange={onReleseadDateSelected} />
                  </Form.Item>
                </div>

              </Row>
              {
                progress ?
                  <section className="section-break-2">
                    <Row className="justify-content-center">
                      <Col xs={24} xl={12}>
                        <p className="text-center">Uploading, please wait... {progress}%</p>
                      </Col>
                    </Row>
                    <Row className="justify-content-center">

                      <Col xs={24} xl={12}>
                        <Progress percent={progress} showInfo={false} />
                      </Col>
                    </Row>
                  </section> : ""
              }

              <section className="section-break-2">
                <div className="col-md-12 text-center">
                  <SpinButton loading={uploading} text={editMode ? "Update Song" : "Add Song"} />
                </div>
              </section> {/**submit functions */}

            </div>


          </section>

        </Form>
        :
        <Row className="justify-content-center">
          <CircularLoader size={"50px"} />
        </Row>
      }

    </section>
  )
}

export default UploadSong