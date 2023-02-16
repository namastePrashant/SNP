import React from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Form, Input } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import GoogleLogin from 'react-google-login';
import FacebookLogin from 'react-facebook-login';

// import Fb from '../../assets/Icons/fb.png'
// import Google from '../../assets/Icons/google.png'
import Mail from '../../assets/Icons/mail.png'
import Password from '../../assets/Icons/password.png'

import { FB_APP_ID, GOOGLE_CLIENT_ID } from '../../constants/appConfig';

import SpinButton from '../Common/SpinButton';


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

const form = {
    wrapperCol: { span: 24 },
};
const SignUp = props => {

    const { signUp, authLoading, loginWithFacebook, loginWithGoogle } = props
    const onFinish = values => {
        signUp(values)
        // console.log(values)
    };

    const handleFbResponse = (response) => {
        loginWithFacebook(response.accessToken)
    }

    const handleGoogleResponse = (response) => {        
        loginWithGoogle(response.accessToken)
    }

    return (
        <Col {...layout.full}>
            <div className='login-card-main'>
                <Row>
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
                            Create Account
                        </div>
                        <div className='form'>
                            <Form
                                {...form}
                                name="user"
                                onFinish={onFinish}
                            // initialValues={{ remember: true }}
                            >
                                <div className='form-input'>
                                    <Form.Item
                                        name="fullName"
                                        rules={[{ required: true, message: 'Please input your full name!' }]}
                                    >
                                        <Input className='custom-input'
                                            size="large"
                                            placeholder="Full Name"
                                            prefix={<UserOutlined />} />
                                    </Form.Item>
                                    <Form.Item
                                        name="email"
                                        rules={[{ required: true, message: 'Please input your mail address!' }]}
                                    >
                                        <Input className='custom-input'
                                            size="large"
                                            placeholder="Your Email Address" type="email"
                                            prefix={<img alt='Mail' src={Mail} />} />
                                    </Form.Item>

                                    <Form.Item
                                        name="password"
                                        rules={[{ required: true, message: 'Please input your password!' },
                                        { min: 6, message: 'Password must be atleast 6 characters long' },]}
                                    >
                                        <Input.Password placeholder="Password" size="large"
                                            prefix={<img alt='Password' src={Password} />} className='custom-input' />
                                    </Form.Item>



                                </div>
                                <SpinButton loading={authLoading} text='Sign Up' />
                            </Form>
                            <div className='social'>
                                <div className='social-help'>
                                    You Can Also Use Social Sign Up If You Haven't Registered Your Account
                                </div>
                                <div className='social-btn'>
                                    <GoogleLogin
                                        clientId={GOOGLE_CLIENT_ID}
                                        autoLoad={false}
                                        onSuccess={handleGoogleResponse}
                                        onFailure={handleGoogleResponse}
                                        type='button'
                                        buttonText='Login With Google'
                                        className='google-login-btn' icon={true} />

                                    <FacebookLogin
                                        appId={FB_APP_ID}
                                        autoLoad={false}
                                        fields="name,email,picture"
                                        callback={handleFbResponse}
                                        size='small'
                                        textButton='Login With Facebook'
                                        className='fb-login-btn'
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

export default SignUp;