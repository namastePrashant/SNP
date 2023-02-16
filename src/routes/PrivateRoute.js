import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect, Route } from "react-router-dom";
import { isAuthenticated as tokenIsAuthenticated } from '../utils/jwtUtil';


class PrivateRoute extends Component {


  isRoleArtist = ()=>{
    const userRole = localStorage.getItem('role')
    if(userRole==="artist") return true
    else return false
  }

  render() {
    const {
      component: RouteComponent,
      isAuthenticated,
      dispatch,
      layout: Layout,
      isArtistRoute,
      ...rest
    } = this.props
    return (
      <Route {...rest} render={(props) => (
        isAuthenticated || tokenIsAuthenticated()?
        isArtistRoute ?
        this.isRoleArtist()?
        <Layout>
            <RouteComponent {...props} />
        </Layout>
        :<Redirect to={{
          pathname: '/',
          state: { from: props.location }
        }} />

        :<Layout>
            <RouteComponent {...props} />
        </Layout>
          : <Redirect to={{
            pathname: '/login',
            state: { from: props.location }
          }} />
      )} />
    )
  }
}

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated
})

export default connect(mapStateToProps)(PrivateRoute)

