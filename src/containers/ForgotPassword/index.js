import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as authService from '../../services/authService';
import * as authAction from '../../actions/authAction';
import {Col, Form, Input, Row} from "antd";
import {Link} from "react-router-dom";
import Mail from "../../assets/Icons/mail.png";
import SpinButton from "../../components/Common/SpinButton";
import {SetFormData} from "../../utils/commonUtils";

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
  wrapperCol: {span: 24},
};

class ForgotPassword extends React.Component {

  forgotPassword = (value)=>{
    const formData = SetFormData({
      email:value.email
    })
    this.props.actions.forgotPassword(formData);
  }

  render() {
    return (
      <Col {...layout.full}>
        <div className='login-card-main'>
          <Row>
            <Col {...layout.inner1}>
              <div className="login-img">
                <div className="login-img-content">
                  <div className='login'>Forgot Password?</div>
                  <div className='login-sec'>
                    Enter your registered email and we will guide you through your mail.
                  </div>
                  <div className='overlay'>
                    <div>Don't have an account?</div>
                    <div><Link to='/signup'>Sign Up</Link></div>
                  </div>
                </div>
              </div>
            </Col>
            <Col {...layout.inner2} className='login-form-main'
              style={{
                display:'flex',
                flexDirection:'column',
                justifyContent:'center'
              }}
            >
              <div className='welcome'>
                Forgot Password!
              </div>
              <div className='form'>
                <Form
                  {...form}
                  name="login"
                  onFinish={this.forgotPassword}
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

                    <SpinButton loading={this.props.authLoading} text='Submit'/>
                  </div>
                </Form>

              </div>
            </Col>
          </Row>
        </div>
      </Col>
    )
  }
}

/**
 * Map the state to props.
 */
const mapStateToProps = state => ({
  authLoading: state.auth.isLoading,
});

/**
 * Map the actions to props.
 */
const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators(
      Object.assign({}, authAction, authService),
      dispatch
    ),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ForgotPassword)