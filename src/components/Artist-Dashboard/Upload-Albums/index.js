import React,{ useEffect,useState } from 'react'
import {Form,Row,Col,Avatar,Button,Upload,Input,DatePicker,Select,message} from 'antd'
import {FileTextOutlined,CopyOutlined} from '@ant-design/icons'
import CameraIcon from '../../../assets/Icons/camera.svg'
import SpinButton from '../../Common/SpinButton'
import {SetFormData} from '../../../utils/commonUtils'
import {FiTrash2} from 'react-icons/fi'
import {useLocation} from 'react-router-dom'
import moment from 'moment'
// import CircularLoader from '../../Common/skeletons/circularLoader'
import {CopyToClipboard} from 'react-copy-to-clipboard';
import {Link} from 'react-router-dom'
import Advertisement from '../../Advertisments'
import { useSelector } from 'react-redux'
import history from '../../../utils/history'


const {TextArea}  = Input
const { Option } = Select

const UploadAlbum = props =>{


  const {
    genres,
    genresLoading,
    searchGenre, // search genre function

    uploadAlbum, //creates new album for the artist
    uploading,
    updateAlbum
  } = props

  // for cover image
  const [coverImage,setCoverImage] = useState(null)
  const [coverImageFile,setCoverImageFile]= useState(null)
  const [releasedDate,setReleasedDate] = useState(null)
  const [albumFields,setAlbumFields] = useState({
    genres:[]
  })

  useEffect(()=>{
    setAlbumFields({genres:genres})
  },[genres]) //eslint-disable-line
  // important for editing song (ant select)

  // on cover image selected
  const onCoverImageSelected = {
    beforeUpload: file => {
      setCoverImage(URL.createObjectURL(file))
      setCoverImageFile(file)
    }
  } 

  //set released date
  const getReleaseddate = (date,dateString) => {
    setReleasedDate(dateString)
  }

  // const remove album image
  const removeAlbumImage = () =>{
    setCoverImage(null)
    setCoverImageFile(null)
  }

  const dummyRequest = ({ file, onSuccess }) => {
    setTimeout(() => {
      onSuccess("ok");
    }, 0);
  };



  /**
   * incase of editing album
   * 
   */

   const location = useLocation();
   const state = useSelector(state=>{
     const {artistDashboard} =state;
     return artistDashboard;
   })
   const {currentEditAlbum} = state;
  const [editMode, setEditMode] = useState(false)

  useEffect(()=>{
    if(currentEditAlbum){
      fetchAlbumEdit();
      setEditMode(true)
    }else{
      setEditMode(false)
      if(location.pathname === '/edit-album'){
        history.push('/my-albums');
      }
    }
  },[currentEditAlbum])//eslint-disable-line

  const fetchAlbumEdit = async() =>{
    setAlbumFields({
      genres:albumFields.genres.concat([currentEditAlbum.genre])
    })
    setReleasedDate(currentEditAlbum.released_date)
    setCoverImage(currentEditAlbum.cover_image || null)
    // setCoverImageFile(currentEditAlbum.cover_image || null)
  }
  /**
   * 
   */


  // form submission function
  const onFormSubmit  =  (values) =>{

    let albumPublishStatus = !currentEditAlbum ? "inactive" : (currentEditAlbum.status==="active") ? currentEditAlbum.status: "inactive"

    const FormData =SetFormData(
      {
        'album[title]':values.album_title,
        'album[description]':values.description,
        'album[released_date]':releasedDate,
        // 'album[status]':'active',
        'album[status]':albumPublishStatus,
        'album[genre_id]':values.genre,
        'album[cover_image]':coverImageFile
      },['album[cover_image]']
    ) 
    console.log(releasedDate)
    if(!editMode){
      uploadAlbum(FormData)
    }else{
      updateAlbum(FormData,currentEditAlbum.id)
    }
  } 


  const getSelectOptions = (List,errorMessage="Sorry no data found") => {
    if(List && List.length){
      return(
        <>
        {List.map(item =>(
          <Option value={item.id} key={item.id}>
            {item.name || item.title  || item?.profile?.name}
          </Option>
        ))}
        </>
      )
      
    }else{
      return(
        <Option disabled>
          {errorMessage}
        </Option>
      )
    }
  }

  return(
    <section className="row-main home-layout">
        <Form name="profile"
        initialValues={{ remember: true }}
        layout="vertical"
          onFinish={onFormSubmit}
          className="custom-form ">
        <div className="col-md-12">
          <Row gutter={[8,8]} className="align-items-center">
            <Col xl={12} md={24} xs={24}>
              <p className="text-14-grey">Account</p>
              <h4 className="text-36-black-medium">{editMode?"Edit":"Create"} Album</h4>
              <Row className="section-break-2">
                {
                  coverImage?
                  <div className='up-img-wrapper'>
                  <Avatar shape="square" size={130}  src={coverImage} />
                    <Button className="mt-1 delete-button remove-img " shape={"circle"} onClick={removeAlbumImage} >
                      <FiTrash2  className="m-0" />
                    </Button>
                  </div>
                  :
                  <Avatar shape="square" size={130} icon={<FileTextOutlined />}/>
                }
                <div className="upload-song-wrapper image-upload">
                  {/* <Form.Item name="publish">
                    <div className="d-flex-ac"> 
                      <span className="text-20-black-medium mr-1">Publish</span> <Switch defaultChecked />
                    </div>
                  </Form.Item> */}
                    <Upload {...onCoverImageSelected}
                      customRequest={dummyRequest}
                      multiple={false}
                    >
                      <Button className="button-style " >
                        <img className="icon-style" src={CameraIcon} alt="icon"/>
                        {!coverImage?"Add":"Change"}  Album image
                      </Button>
                    </Upload>
                    {
                      editMode?
                      <div className="mt-1 text-center">
                        <Link to={'/album/'+currentEditAlbum.id} target="_blank"
                          className="text-14-primary mr-1"
                        >View Album</Link>
                        <CopyToClipboard text={window.location.origin.toString()+'/album/'+currentEditAlbum.id}
                          onCopy={()=>{
                            message.success('Link copied')  
                          }}>
                            <CopyOutlined className="copyIcon"
                              title="Copy Link"
                            />
                        </CopyToClipboard>
                      </div>:""
                    }
                    
                </div>
              
              </Row>
            </Col>
            <Col xl={12} md={24} xs={24}>
              <Advertisement name="userprofileheade" type='no-layout' />
            </Col>
          </Row>
        </div>

        <section className="section-break-2">
        <div className="col-md-11">

          <Row gutter={[16,16]}>

            <div className="col-md-4" >
              <Form.Item
                label="Album title"
                name="album_title"
                rules={[
                  { required: true, message: "Please enter a title !" },
                ]}
                initialValue={currentEditAlbum && currentEditAlbum?.title}
              >
                <Input />
              </Form.Item>
            </div> {/**album name */}

            <div className="col-md-4" >
              <Form.Item
                label="Genre"
                name="genre"
                rules={[
                  { required: true, message: "Please select Genre !" },
                ]}
                initialValue={currentEditAlbum && currentEditAlbum?.genre  && currentEditAlbum?.genre.id}
              >
                <Select 
                 showSearch
                  placeholder="Select Genres"
                  // filterOption={(input, option) =>
                  //   option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                  // }
                  filterOption={false}
                  onSearch={(value)=>{
                    searchGenre(value)
                  }} // network call search
                  // onSelect = {()=>fetchMoods()}
                  size={'large'}
                  > 
                  {
                    genresLoading?
                    <Option disabled>Loading Genres</Option>
                    :getSelectOptions(albumFields.genres,"Sorry no genres Found")
                  }            
                </Select> 
              </Form.Item>
            </div> {/**Genre*/}


            <div className="col-md-4" >
              <Form.Item
                label="Released Date"
                name="release_date"
                rules={[
                  { required: true, message: "Please select a release date!" },
                ]}
                initialValue={currentEditAlbum && currentEditAlbum.released_date && moment(currentEditAlbum.released_date, 'YYYY-MM-DD')}
              >
                <DatePicker onChange={getReleaseddate}/>
              </Form.Item>
            </div> {/**release date name */}



            <div className="col-md-12">
              <Form.Item
                  label="Description"
                  name="description"
                  initialValue={currentEditAlbum && currentEditAlbum.description ? currentEditAlbum.description : ""}
                >
                <TextArea allowClear rows={10} className="custom-form__textarea--medium"/>
              </Form.Item>
            </div>

          </Row>
          <section className="section-break-2">
            <div className="col-md-12 text-center">
              <SpinButton loading={uploading} text={editMode?"Update Album":"Create Album"} />
            </div>
          </section> {/**submit functions */}

        </div>

        
      </section>

      </Form>
     
    </section>
  )
}

export default UploadAlbum