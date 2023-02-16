import React from 'react';

import SignUp from '../../components/SignUp';

import * as authService from '../../services/authService';
import * as authAction from '../../actions/authAction';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'

export class SignUpContainer extends React.Component {

    /**
     * Sign Up.
     *
     */
    signUp = (values) => {
        this.props.actions.signUp(values);
    };

    /**
    * Login with facebook.
    *
    */
    loginWithFacebook = (values) => {
        this.props.actions.loginWithFacebook(values);
    };

    /**
     * Login with google.
     *
     */
    loginWithGoogle = (values) => {
        this.props.actions.loginWithGoogle(values);
    };

    render() {
        return (
            <SignUp
            signUp={this.signUp}
            loginWithFacebook={this.loginWithFacebook}
            loginWithGoogle={this.loginWithGoogle}

                {...this.props}
            />
        )
    }
}


const mapStateToProps=state=>{
  return{
    authLoading: state.auth.isLoading,
  }
}

const mapDispatchToProps =  dispatch =>{
  return{
    actions:bindActionCreators(
      Object.assign({},
        authService,
        authAction
      ),
      dispatch
    ) 
  }
}


export default connect(mapStateToProps,mapDispatchToProps)(SignUpContainer)