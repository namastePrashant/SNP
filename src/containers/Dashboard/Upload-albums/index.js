import React from 'react'
import UploadAlbum from '../../../components/Artist-Dashboard/Upload-Albums'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import * as GenreServices from '../../../services/genresService'
import * as ADServices from '../../../services/artist-dashboard'
import * as AdsService from '../../../services/advertisementService'
class UploadAlbumContainer extends React.Component{


  /**
   * @tutorial fetch_genre
   * @params void
   * @return updates redux with genres
   */
  fetchGenres=()=>{
    this.props.actions.fetchGenres() //GenreServices
  }


  /**
   * @tutorial pass-keyword-to-search-a-genre
   * @params keyword 
   * @return updates redux with searched languages
  */
  searchGenre = (keyword) =>{
    this.props.actions.searchGenre(keyword) //GenreServices
  }

  /**
   * @param formData
   * @tutorial  upload-album
   */
  uploadAlbum = (formData) => {
    this.props.actions.uploadAlbum(formData)
  }

  updateAlbum = (formData,id) =>{
    this.props.actions.updateAlbum(formData,id)
  }

  fetchAds(){
    const location = 'userprofileheade'
    const formData = {
      location: location,
      platform: 'web'
    }
    this.props.actions.fetchAdvertisementByLocation(formData)
  }


  componentDidMount(){
    this.fetchGenres()
    this.fetchAds()
  }

  

  render(){
    const {uploading} = this.props
    return(
      <>
      <UploadAlbum
       //genres
       genres={this.props.genres}
       genresLoading={this.props.genresLoading}
       searchGenre={this.searchGenre} //GenreServices
       uploadAlbum={this.uploadAlbum}
       uploading={uploading}
       updateAlbum={this.updateAlbum}
      />
      </>
    )
  }
}


const mapStateToProps = state =>{
  return{
    // genres for songs
    genres:state.genres.payload,
    genresLoading:state.genres.loading,

    uploading:state.artistDashboard.loadingUploadAlbum
  }
}


const mapDispatchToprops = dispatch =>{
  return{
    actions:bindActionCreators(
      Object.assign(
        {},
        GenreServices, 
        ADServices,
        AdsService
      )
      ,dispatch)
  }
}


export default connect(mapStateToProps,mapDispatchToprops)(UploadAlbumContainer)