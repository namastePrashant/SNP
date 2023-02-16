import React,{Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as artistsService from '../../../services/artistsService';
import BulkSongPlay from '../song/BulkSongPlay'

class ArtistSongs extends Component{

 
 /**
     * Fetch related artist by artist
     *
     */
    fetchPopularSongsByArtist = async(id) => {
      await this.props.actions.fetchPopularSongsByArtist(id);
      return true
    };
    

  render(){
    return(
      <BulkSongPlay 
      fetchPopularSongsByArtist={this.fetchPopularSongsByArtist}
      {...this.props}
      />  
    )
  }
  

  
}


const mapStateToProps = state =>{
  return{
    artistLatestReleasedAlbum: state.artistLatestReleasedAlbum.payload,
    artistLatestReleasedAlbumErrors: state.artistLatestReleasedAlbum.errors,
    artistLatestReleasedAlbumLoading: state.artistLatestReleasedAlbum.loading,
  }
}
const mapDispatchToProps = dispatch => {
  return {
      actions: bindActionCreators(
          Object.assign(
              {},
              artistsService,
          
          ),
          dispatch
      ),
  };
};

export default connect(mapStateToProps,mapDispatchToProps)(ArtistSongs);

