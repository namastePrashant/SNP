import React from 'react'
import MyAlbums from '../../../components/Artist-Dashboard/MyAlbums'
import {connect} from 'react-redux'
import { bindActionCreators } from 'redux'
import * as ADService from '../../../services/artist-dashboard'
class MyAlbumContainer extends React.Component{

  /**
   * fetch my album
   */
  fetchMyAlbums = (dateRange:{start:"",end:""},search="") =>{
    this.props.actions.fetchMyAlbums(dateRange,search)
  }

  fetchMoreAlbums = (dateRange:{start:"",end:""},page,search) =>{
    this.props.actions.fetchMoreAlbums(dateRange,page,search)
  }



  render(){

    const {
      myAlbumsLoading,
      myAlbums,
      hasMoreAlbums,
      loadingMoreAlbums,
      currentAlbumPage,
    } = this.props

    return(
      <>
        <MyAlbums 
        fetchMyalbums={this.fetchMyAlbums}
        myAlbumsLoading={myAlbumsLoading}
        myAlbums={myAlbums}
        hasMoreAlbums={hasMoreAlbums}
        loadingMoreAlbums={loadingMoreAlbums}
        currentAlbumPage={currentAlbumPage}
        fetchMoreAlbums={this.fetchMoreAlbums}
        />
      </>
    )
  }
}

const mapStateToprops = state =>{
  return{
    myAlbums:state.artistDashboard.myAlbums,
    myAlbumsLoading:state.artistDashboard.loadingMyAlbums,
    hasMoreAlbums:state.artistDashboard.hasMoreAlbums,
    loadingMoreAlbums:state.artistDashboard.loadingMoreAlbums,
    currentAlbumPage:state.artistDashboard.currentAlbumPage,
  }
}


const mapDispatchToProps = dispatch=>{
return{
  actions:bindActionCreators(
    Object.assign(
      {},
      ADService,
    ),
    dispatch
  )
}
}

export default connect(mapStateToprops,mapDispatchToProps)(MyAlbumContainer)