import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import App from '../../components/Layout/Header/app';

import * as searchService from '../../services/searchService';
import * as searchAction from '../../actions/searchAction';
import * as notificationService from '../../services/notificationService';
import * as notificationAction from '../../actions/notificationAction';

export class AppHeaderContainer extends React.Component {

    /**
     * Search.
     *
     */
    searchService = (formData,key) => {
        this.props.actions.searchService(formData,key);
    };

    /**
     * Fetch notifications.
     *
     */
    fetchNotification = () => {
        this.props.actions.fetchNotification();
    };


    render() {
        return (
            <App
                searchService={this.searchService}
                fetchNotification={this.fetchNotification}
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
        searches: state.searches.payload,
        searcheErrors: state.searches.errors,
        searcheLoading: state.searches.loading,
        notifications: state.notifications.payload,
        notificationErrors: state.notifications.errors,
        notificationLoading: state.notifications.loading,
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
                searchAction,
                searchService,
                notificationAction, notificationService
            ),
            dispatch
        ),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(AppHeaderContainer);