import React from 'react';
import {Link, withRouter} from 'react-router-dom'
import {Col, Form, Input, Row} from 'antd';
import GoogleLogin from 'react-google-login';
import FacebookLogin from 'react-facebook-login';

import Mail from '../../assets/Icons/mail.png'
import Password from '../../assets/Icons/password.png'

import SpinButton from '../Common/SpinButton';
import {FB_APP_ID, GOOGLE_CLIENT_ID} from '../../constants/appConfig';
import {FaFacebookF} from 'react-icons/fa'

const layout = {
  full: {
    xxl: {span: 16, offset: 4},
    xl: {span: 20, offset: 2},
    lg: {span: 20, offset: 2},
    md: {span: 22, offset: 1},
    sm: {span: 24, offset: 0},
    xs: {span: 24, offset: 0},
  },

  inner1: {
    xxl: {span: 10},
    xl: {span: 10},
    lg: {span: 10},
    md: {span: 8},
    sm: {span: 0},
    xs: {span: 0},
  },
  inner2: {
    xxl: {span: 14},
    xl: {span: 14},
    lg: {span: 14},
    md: {span: 16},
    sm: {span: 24},
    xs: {span: 24},
  },
};

const form = {
  wrapperCol: {span: 24},
};
const Login = props => {

  const {login, authLoading, loginWithFacebook, loginWithGoogle} = props

  const onFinish = values => {
    login(values);
  };

  const handleGoogleReponse = response => {
    loginWithGoogle(response.accessToken)
  }

  const handleFbReponse = response => {
    loginWithFacebook(response.accessToken)
  }

  return (
    <Col {...layout.full}>
      <div className='login-card-main'>
        <Row>
          <Col {...layout.inner1}>
            <div className="login-img">
              <div className="login-img-content">
                <div className='login'>Login</div>
                <div className='login-sec'>Get Started In A Few Clicks And Enjoy Latest Nepali News From All Around The
                  World
                </div>
                <div className='overlay'>
                  <div>Don't have an account?</div>
                  <div><Link to='/signup'>Sign Up</Link></div>
                </div>
              </div>
            </div>
          </Col>
          <Col {...layout.inner2} className='login-form-main'>
            <div className='welcome'>
              Welcome Back!
            </div>
            <div className='form'>
              <Form
                {...form}
                name="login"
                onFinish={onFinish}
                // initialValues={{ remember: true }}
              >
                <div className='form-input'>
                  <Form.Item
                    name="email"
                    rules={[{required: true, message: 'Please enter your mail address!'}]}
                  >
                    <Input className='custom-input'
                           size="large"
                           placeholder="Your Email Address"
                           prefix={<img alt='Mail' src={Mail}/>}/>
                  </Form.Item>

                  <Form.Item
                    name="password"
                    rules={[{required: true, message: 'Please enter your password!'}]}
                  >
                    <Input.Password placeholder="Password" size="large" className='custom-input'
                                    prefix={<img alt='Password' src={Password}/>}/>
                  </Form.Item>

                  <SpinButton loading={authLoading} text='LOGIN'/>

                  <div className={"section-break-1 mb-0"}>
                    <Link to={"/forgot-password"}>
                      <p className={"text-14-primary text-center"}> Forgot password?</p>
                    </Link>
                  </div>

                </div>
              </Form>

              <div className='social'>
                <div className='social-help'>
                  You Can Also Use Social Login If You Haven't Registered Your Account
                </div>
                <div className='social-btn'>
                  <GoogleLogin
                    clientId={GOOGLE_CLIENT_ID}
                    autoLoad={false}
                    onSuccess={handleGoogleReponse}
                    onFailure={handleGoogleReponse}
                    type='button'
                    buttonText='Login With Google'
                    className='google-login-btn' icon={true}/>

                  <FacebookLogin
                    appId={FB_APP_ID}
                    autoLoad={false}
                    fields="name,email,picture"
                    callback={handleFbReponse}
                    size='small'
                    textButton='Login With Facebook'
                    className='fb-login-btn'
                    icon={<FaFacebookF/>}
                  />
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </Col>
  );
};

export default withRouter(Login);