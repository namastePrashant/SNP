import React, { useEffect, useState } from 'react'
import { Form, Upload, Button, Row, Avatar, Input, Select } from 'antd'
import CameraIcon from "../../../../assets/Icons/camera.svg"
import { UserOutlined } from "@ant-design/icons";
import { FiTrash2 } from 'react-icons/fi'
import CircularLoader from '../../../Common/skeletons/circularLoader';
import { countriesList } from '../../../../constants/staticDatas';

const { TextArea } = Input
const { Option } = Select

const ChangeDetails = props => {

  const {
    profile,
    onProfileImageSelected,
    removeProfileImage,
    profileImage,
    setProfileImage,
    profileLoading,
    genres,
    searchGenre,
    genresLoading
  } = props


  const [showAF, setShowAF] = React.useState(false);
  // const [profileGenres, setProfileGenres] = useState(undefined);

  useEffect(() => {
    if (localStorage.getItem('role') === "artist") setShowAF(true)
    else setShowAF(false)
  }, [localStorage.getItem('role')])//eslint-disable-line

  // concatenate genres list and artist genre in genre select option 
  // !!! EXECUTE WHEN profile object has genre property as object from API
  useEffect(() => {
    // console.log("genres changes", genres);
    if (genres.length) {

      // let nonDuplicateProfileGenre = genres.filter((genre)=>{
      //   return genre.id !==profile.genre.id
      // }) 

      // setProfileGenres(genres.concat([profile.genre]))
    }
  }, [genres])

  // for loading user's current profile picture
  useEffect(() => {
    if (profile && profile?.profile?.profile_picture?.url) setProfileImage({ image: profile?.profile?.profile_picture?.url })
  }, [profile])//eslint-disable-line
  // for loading user's current profile picture


  // for handling ant design upload 
  const dummyRequest = ({ file, onSuccess }) => {
    setTimeout(() => {
      onSuccess("ok");
    }, 0);
  };


  const getSelectOptions = (List, errorMessage = "Sorry no data found") => {
    if (List.length) {
      return (
        <>
          {List.map(item => (
            <Option value={item.id || item.name || item.code} key={item.id || item.code}>
              {item.name || item.title || item?.profile?.name}
            </Option>
          ))}
        </>
      )

    } else {
      return (
        <Option disabled>
          {errorMessage}
        </Option>
      )
    }
  }

  // description count
  const [countText,setCountText] = useState(0)
  const desChange = (e) =>{
    let text = e.target.value.toString();
    setCountText(text.length)
  }


  // set
  return (
    <section className="section-break-2">
      {profileLoading ?
        <Row className="justify-content-center">
          <CircularLoader size={'35px'} />
        </Row> :
        <>
          <Row className="section-break-2">
            {
              profileImage ?
                <div className='up-img-wrapper'>
                  <Avatar shape="circle" size={130} src={profileImage.image} />
                  <Button className="mt-1 delete-button remove-img " shape={"circle"} onClick={removeProfileImage} >
                    <FiTrash2 className="m-0" />
                  </Button>
                </div>
                :
                <Avatar shape="circle" size={130} icon={<UserOutlined />} />
            }
            <div className="upload-song-wrapper image-upload">
              {/* <Form.Item name="publish">
            <div className="d-flex-ac"> 
              <span className="text-20-black-medium mr-1">Publish</span> <Switch defaultChecked />
            </div>
          </Form.Item> */}
              <Upload {...onProfileImageSelected}
                customRequest={dummyRequest}
                multiple={false}
              >
                <Button className="button-style " >
                  <img className="icon-style" src={CameraIcon} alt="icon" />
                  {!profileImage ? "Add" : "Change"}  profile image
              </Button>
              </Upload>
            </div>

          </Row>

          <div className="section-break-2-0">

            <div className="col-md-10">
              <Row gutter={[16, 16]}>

                <div className="col-md-6" >
                  <Form.Item
                    label="Name"
                    name="name"
                    rules={[
                      { required: true, message: "Please input your  name!" },
                    ]}
                    initialValue={profile && profile?.profile?.name}

                  >
                    <Input />
                  </Form.Item>
                </div> {/**first name */}


                <div className="col-md-6" >
                  <Form.Item
                    label="Email"
                    name="email"
                    rules={[
                      { required: true, message: "Please input your email name!" },
                    ]}
                    initialValue={profile && profile?.email}
                  >
                    <Input disabled />
                  </Form.Item>
                </div> {/**email */}


                {
                  showAF ?
                    <div className="col-md-6" >
                      <Form.Item
                        label="Genre"
                        name="genre"
                        rules={[
                          { required: true, message: "Please enter Genre !" },
                        ]}
                        initialValue={profile && profile?.artist && profile?.artist.genre_id}
                      // initialValue={profile && profile?.artist && profile?.artist.genre.id} //!!!When genre object is available, at the moment genre_id only available in profile  object
                      >
                        <Select
                          showSearch
                          placeholder="Select Genres"
                          // filterOption={(input, option) =>
                          //   option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                          // }
                          filterOption={false}
                          onSearch={(value) => {
                            searchGenre(value)
                          }} // network call search
                          // onSelect = {()=>fetchMoods()}
                          size={'large'}
                        >
                          {
                            genresLoading ?
                              <Option disabled>Loading Genres</Option>
                              :
                              getSelectOptions(genres, "Sorry no genres Found")
                            // getSelectOptions(profileGenres, "Sorry no genres Found")
                          }
                        </Select>
                      </Form.Item>
                    </div> : ""
                }



                <div className="col-md-6" >
                  <Form.Item
                    label="Contact"
                    name="phone_number"
                    initialValue={profile && profile?.phone_number}
                  >
                    <Input
                      placeholder="Enter your contact number"
                    />
                  </Form.Item>
                </div> {/**contact */}

                <div className="col-md-6" >
                  <Form.Item
                    label="Country"
                    name="country"
                    rules={[
                      { required: true, message: "Please input your country number!" },
                    ]}
                    initialValue={profile && profile?.profile?.country}
                  >
                    {/* <Input /> */}
                    <Select
                      showSearch
                      placeholder="Select Country"
                      filterOption={(input, option) =>
                        option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                      }
                      // onSearch={(value) => {
                      //   searchGenre(value)
                      // }} // network call search
                      // onSelect = {()=>fetchMoods()}
                      size={'large'}
                    >
                      {/* {
                        genresLoading ?
                          <Option disabled>Loading countries</Option>
                          :
                          getSelectOptions(countriesList, "Sorry no country Found")
                        // getSelectOptions(profileGenres, "Sorry no genres Found")
                      } */}
                      {
                        getSelectOptions(countriesList, "Sorry no country Found")
                      }

                    </Select>
                  </Form.Item>
                </div> {/**country */}


                <div className="col-md-6" >
                  <Form.Item
                    label="City"
                    name="city"
                    rules={[
                      { required: true, message: "Please input your city name!" },
                    ]}
                    initialValue={profile && profile?.profile?.address}
                  >
                    <Input />
                  </Form.Item>
                </div> {/**email */}


                <div className="col-md-6" >
                  <Form.Item
                    label="Facebook"
                    name="facebook"
                    initialValue={profile && (profile?.profile?.facebook && profile?.profile?.facebook !== "null") ? profile?.profile?.facebook : ""}
                  >
                    <Input
                      placeholder="https://facebook.com/username (facebook link)"
                    />
                  </Form.Item>
                </div> {/**facebok*/}

                <div className="col-md-6" >
                  <Form.Item
                    label="Instagram"
                    name="instagram"
                    initialValue={profile && (profile?.profile?.instagram && profile?.profile?.instagram !== "null") ? profile?.profile?.instagram : ""}

                  >
                    <Input
                      placeholder="https://instagram.com/username (instagram link)"
                    />
                  </Form.Item>
                </div> {/**Instagram */}


                <div className="col-md-6" >
                  <Form.Item
                    label="Twitter"
                    name="twitter"
                    initialValue={profile && (profile?.profile?.twitter && profile?.profile?.twitter !== "null") ? profile?.profile?.twitter : ""}

                  >
                    <Input
                      placeholder="https://twitter.com/username (twitter link)"
                    />
                  </Form.Item>
                </div> {/**twitter*/}

                <div className="col-md-6" >
                  <Form.Item
                    label="Youtube"
                    name="youtube"
                    initialValue={profile && (profile?.profile?.youtube && profile?.profile?.youtube !== "null") ? profile?.profile?.youtube : ""}

                  >
                    <Input
                      placeholder="https://youtube.com/username (youtube link)"
                    />
                  </Form.Item>
                </div> {/**Instagram */}

                <div className="col-md-12">
                  <Form.Item
                    label="Description"
                    name="description"
                    initialValue={profile && profile?.profile?.bio}
                  >
                    <TextArea allowClear rows={5} maxLength={1000} className="custom-form__textarea--medium" onChange={desChange}/>
                    <p className='text-right text-14-grey' style={{marginRight:'0.5em'}}>{countText}/1000</p>
                  </Form.Item>
                </div>

              </Row>
            </div>

          </div>
        </>
      }
    </section>
  )
}

export default ChangeDetails