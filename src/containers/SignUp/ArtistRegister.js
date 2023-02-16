import React from 'react'
import { bindActionCreators } from 'redux'
import {connect} from 'react-redux'
import ArtistRegister from '../../components/SignUp/artistRegister'
import * as GenreServices from '../../services/genresService'
import * as authService from '../../services/authService'
import * as authAction from '../../actions/authAction'

class ArtistRegisterContiner extends React.Component {


  artistSignUp = (values) => {
    this.props.actions.artistSignUp(values);
}; 

  fetchGenres=()=>{
    this.props.actions.fetchGenres() //GenreServices
  }

  searchGenre = (keyword) =>{
    this.props.actions.searchGenre(keyword) //GenreServices
  }

  componentDidMount(){
    this.fetchGenres()
  }

  render(){
    return(
      <>
      <ArtistRegister
      artistSignUp={this.artistSignUp} 
      genres={this.props.genres}
      genresLoading={this.props.genresLoading}
      searchGenre={this.searchGenre}
      authLoading={this.props.authLoading}
      />
      
      </>
    )
  }
}

const mapStateToProps=state=>{
  return{
  genres:state.genres.payload,
  genresLoading:state.genres.loading,
  authLoading: state.auth.isLoading,
}
}

const mapDispatchToprops=dispatch=>{
  return{
    actions:bindActionCreators(
      Object.assign(
        {},
        GenreServices,
        authAction,
        authService
      )
      ,dispatch
    )
  }
}

export default connect(mapStateToProps,mapDispatchToprops)(ArtistRegisterContiner)