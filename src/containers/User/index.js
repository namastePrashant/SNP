import React, { Fragment } from 'react';
import { Switch, Route } from 'react-router-dom';

// Import custom components
import User from './UserContainer';
// import UserEdit from './UserEditContainer';

import NotFound from '../Exception/NotFoundContainer';

const UserProfile = ({ match }) => (
    <Fragment>
        <Switch>
            <Route exact path={`${match.url}`} render={(props)=><User slug={match.params.slug} {...props}/>}  />
            <Route component={NotFound} />
        </Switch>
    </Fragment>
);

export default UserProfile;
