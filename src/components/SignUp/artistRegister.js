import React from 'react'
import {Form,Row,Input,Col,Select} from 'antd'
import {Link} from 'react-router-dom'
import SpinButton from '../Common/SpinButton';
import {UserOutlined,InboxOutlined} from '@ant-design/icons'
import Mail from '../../assets/Icons/mail.png'
import Password from '../../assets/Icons/password.png'
import {FiPhoneCall} from 'react-icons/fi'

const { Option } = Select
const ArtistSignup = props =>{
  const {
    genresLoading,
    genres,
    searchGenre, 
    authLoading,
    artistSignUp}=props

  const layout = {
      full: {
          xxl: { span: 16, offset: 4 },
          xl: { span: 20, offset: 2 },
          lg: { span: 20, offset: 2 },
          md: { span: 22, offset: 1 },
          sm: { span: 24, offset: 0 },
          xs: { span: 24, offset: 0 },
      },

      inner1: {
          xxl: { span: 10 },
          xl: { span: 10 },
          lg: { span: 10 },
          md: { span: 8 },
          sm: { span: 0 },
          xs: { span: 0 },
      },
      inner2: {
          xxl: { span: 14 },
          xl: { span: 14 },
          lg: { span: 14 },
          md: { span: 16 },
          sm: { span: 24 },
          xs: { span: 24 },
      },
  };


  const getSelectOptions = (List,errorMessage="Sorry no data found",tags=false) => {
    if(List.length){
      return(
        <>
        {List.map(item =>(
          <Option value={!tags?item.id:item.name} key={item.id}>
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

  const onFormSubmit=(values)=>{
    artistSignUp(values)
  }
  return(
    <Col {...layout.full}>
    <div className='login-card-main'>
      <Row className="justify-content-center">
        <Col {...layout.inner1}>
            <div className="login-img" >
                <div className="login-img-content">
                    <div className='login'>Sign Up</div>
                    <div className='login-sec'>Get Started In A Few Clicks And Enjoy Latest Nepali Songs From All Around The World</div>
                    <div className='overlay'>
                        <div>Already have an account?</div>
                        <div><Link to='login'>Login</Link></div>
                    </div>
                </div>
            </div>
        </Col>
        <Col {...layout.inner2} className='login-form-main'>
          <div className='welcome'>
           Register as an Artist
          </div>
          <div className='form'>
            <Form
              name="artist_register"
              initialValues={{ remember: true }}
              layout="vertical"
              onFinish={onFormSubmit}
            >
                <div className='form-input'>
                  <Form.Item 
                    name="name"
                    rules={[
                      {required:true,message:"Please enter your name"}
                    ]}
                    >
                    <Input 
                      className='custom-input'
                      size="large"
                      placeholder="Full name"
                       prefix={<UserOutlined />}/>
                  </Form.Item>
               
                  <Form.Item 
                    name="phone_number"
                    rules={[
                      {required:true,message:"Please enter your contact number"}
                    ]}
                    >
                    <Input 
                      className='custom-input'
                      size="large"
                      prefix={<div className='anticon'><FiPhoneCall /></div>}
                      placeholder="Your Contact"/>
                  </Form.Item>
              
                 
                  
                  <Form.Item
                    name="email"
                    rules={[{ required: true, message: 'Please enter your mail address!' }]}
                   >
                    <Input className='custom-input' type="email"
                        size="large"
                        placeholder="Your Email Address"
                        prefix={<img alt='Mail' src={Mail} />} />
                  </Form.Item>

                  <Form.Item
                    name="password"
                    rules={[{ required: true, message: 'Please enter your password!' },
                    { min: 6, message: 'Password must be atleast 6 characters long' },]}
                  >
                    <Input.Password placeholder="Password" size="large"
                      prefix={<img alt='Password' src={Password} />} className='custom-input' />
                 </Form.Item>

                 <Form.Item 
                    name="genre"
                    rules={[
                      {required:true,message:"Please Select a genre"}
                    ]}
                    >
                    <Select
                      showSearch
                      placeholder="Select your Genre"
                      className='custom-input genre-search-artist-login' 
                      size="large"
                      prefix={<InboxOutlined />}
                      
                      filterOption={false}
                      onSearch={(value)=>{
                        searchGenre(value)
                    }}>
                        {
                    genresLoading?
                    <Option disabled>Loading Genres</Option>
                    :getSelectOptions(genres,"Sorry no genres Found")
                  }   
                      </Select>
                  </Form.Item>
                </div>
                <SpinButton loading={authLoading} text='Sign Up' />
            </Form>
          </div>
        </Col>
      </Row>
    </div>
  </Col>
  )
}

export default ArtistSignup