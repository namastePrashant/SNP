import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Login from '../../components/Login';

import * as authService from '../../services/authService';
import * as authAction from '../../actions/authAction';

export class LoginContainer extends React.Component {
    /**
     * Login.
     *
     */
    login = (values) => {
        this.props.actions.login(values);
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
            <Login
                login={this.login}
                loginWithFacebook={this.loginWithFacebook}
                loginWithGoogle={this.loginWithGoogle}
                {...this.props}
            />
        )
    }
}

/**
 * Map the state to props.
 */
const mapStateToProps = state => ({

    auth: state.auth.token,
    authErrors: state.auth.errors,
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

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer)