import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import UserEdit from '../../components/UserEdit';

import * as userProfileService from '../../services/userProfileService';
import * as userProfileAction from '../../actions/userProfileAction';

import * as advertisementService from '../../services/advertisementService';
import * as advertisementAction from '../../actions/advertisementAction';

export class UserEditContainer extends React.Component {

    /**
    * Fetch user Profile.
    *
    */
    fetchUserProfile = (id) => {
        this.props.actions.fetchUserProfile(id);
    };

    /**
     * Fetch advertisements.
     *
     */
    fetchAdvertisements = () => {
        this.props.actions.fetchAdvertisements();
    };

    /**
    * Update user Profile.
    *
    */
    updateUserProfile = (formdata) => {
        this.props.actions.updateUserProfile(formdata);
    };

    /**
    * Update user Password.
    *
    */
    updateUserPassword = (formdata) => {
        this.props.actions.updateUserPassword(formdata);
    };

    /**
     * update user Image
    */
   updateUserProfileImage = (formData) =>{
     this.props.actions.updateUserImage(formData)
   }

    render() {
        return (
            <UserEdit
                fetchUserProfile={this.fetchUserProfile}
                updateUserProfile={this.updateUserProfile}
                updateUserPassword={this.updateUserPassword}
                fetchAdvertisements={this.fetchAdvertisements}
                updateUserProfileImage={this.updateUserProfileImage}
                {...this.props}
            />
        )
    }
}

/**
 * Map the state to props.
 */
const mapStateToProps = state => {
    return {
        userProfile: state.userProfile.payload,
        userProfileErrors: state.userProfile.errors,
        userProfileLoading: state.userProfile.loading,
        userProfileUpdateLoading: state.userProfileUpdate.loading,
        userPasswordUpdateLoading: state.userPasswordUpdate.loading,
        advertisements: state.advertisements.payload,
        advertisementErrors: state.advertisements.errors,
        advertisementLoading: state.advertisements.loading,
    }
};

/**
 * Map the actions to props.
 */
const mapDispatchToProps = dispatch => {
    return {
        actions: bindActionCreators(
            Object.assign(
                {},
                userProfileAction,
                userProfileService,
                advertisementAction,
                advertisementService
            ),
            dispatch
        ),
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(UserEditContainer)