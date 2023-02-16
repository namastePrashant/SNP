import React from 'react'
import UploadSong from '../../../components/Artist-Dashboard/Upload-Songs'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as MoodsServices from '../../../services/moodsService'
import * as LanguageServices from '../../../services/languageService'
import * as GenreServices from '../../../services/genresService'
import * as LatestArtistServices from '../../../services/latestArtistsService'
import * as ADService from '../../../services/artist-dashboard'
import * as TagServices from '../../../services/artist-dashboard/tagsServices'
import * as AdsService from '../../../services/advertisementService'

class UploadSongsContainer extends React.Component {

  /**
   * fetch moods 
   * @params void
   * @return fetch moods in redux
  */
  fetchMoods = () => {
    this.props.actions.fetchMoods() //MoodsServices
  }


  /**
   * @tutorial search-moods-by-keywords
   * @params keyword
   * @return update mood reducer by search results
   */
  searchMoods = (keyword) => {
    this.props.actions.searchMoods(keyword) //MoodsServices
  }


  /**
   * @tutorial fetch_languages
   * @params void
   * @return updates redux with languages
   */
  fetchLanguage = () => {
    this.props.actions.fetchLanguage() //LanguageServices
  }


  /**
   * @tutorial pass-keyword-to-search-a-language
   * @params keyword 
   * @return updates redux with searched languages
  */
  searchLanguages = (keyword) => {
    this.props.actions.searchLanguages(keyword) //LanguageServices
  }


  /**
   * @tutorial fetch_genre
   * @params void
   * @return updates redux with genres
   */
  fetchGenres = () => {
    this.props.actions.fetchGenres() //GenreServices
  }


  /**
   * @tutorial pass-keyword-to-search-a-genre
   * @params keyword 
   * @return updates redux with searched languages
  */
  searchGenre = (keyword) => {
    this.props.actions.searchGenre(keyword) //GenreServices
  }

  /**
   * @tutorial fetch-related-artists
   * @params void
   * @return updates redux with fetched artists
   */
  fetchArtists = () => {
    this.props.actions.fetchLatestArtists() //LatestArtistServices
  }

  /**
   * @tutorial pass-keyword-to-search-an-artist
   * @params keyword 
   * @return updates redux with searched artists
  */
  searchArtist = (keyword) => {
    this.props.actions.searchArtist(keyword)  //LatestArtistServices
  }


  /**
   * fetch tags
   */
  fetchTags = (keyword) => {
    this.props.actions.fetchTags(keyword)
  }

  fetchMyAlbums = () => { // fetch current logged in artist's album
    this.props.actions.fetchMyAlbums()
  }

  searchMyAlbums = (keyword) => { // search current logged in artist's album
    let dateRange = { start: "", end: "" }
    this.props.actions.fetchMyAlbums(dateRange, keyword)
  }


  /**
   * @param songs_details
   * @returns creates songs
   * 
   */
  uploadSong = (formData, options) => {
    this.props.actions.uploadSong(formData, options)
  }


  updateSong = (formData, id, options) => {
    this.props.actions.updateSong(formData, id, options)
  }

  fetchAds = () => {
    const location = 'userprofileheade'
    const formData = {
      location: location,
      platform: 'web'
    }
    this.props.actions.fetchAdvertisementByLocation(formData)
  }


  // componentDidMount() {
  //   // this.fetchMoods() // fetch songs mood on mounted
  //   // this.fetchLanguage() // fetch songs languages on mounted
  //   // this.fetchGenres() // fetch genre
  //   // this.fetchArtists() // fetch artists
  //   // this.fetchMyAlbums() // fetch albums
  //   // this.fetchTags() // fetch tags
  //   // this.fetchAds()
  // }

  render() {

    return (
      <>
        <UploadSong

          //upload song function
          uploadSong={this.uploadSong}
          uploading={this.props.uploading}
          updateSong={this.updateSong}

          // album related 
          myAlbums={this.props.myAlbums}
          loadingMyAlbums={this.props.loadingMyAlbums}
          fetchMyAlbums={this.fetchMyAlbums}
          searchMyAlbums={this.searchMyAlbums}

          // moods
          moods={this.props.moods}
          searchMoods={this.searchMoods} //MoodsServices
          fetchMoods={this.fetchMoods} //MoodsServices
          moodsLoading={this.props.moodsLoading}


          // languages
          languages={this.props.languages}
          languagesLoading={this.props.languagesLoading}
          searchLanguages={this.searchLanguages} // languageServices
          fetchLanguage={this.fetchLanguage}


          //genres
          genres={this.props.genres}
          genresLoading={this.props.genresLoading}
          searchGenre={this.searchGenre} //GenreServices
          fetchGenres={this.fetchGenres}


          //for related artists
          artists={this.props.artists} s
          artistsLoading={this.props.artistsLoading}
          searchArtist={this.searchArtist}//LatestArtistServices
          fetchArtists={this.fetchArtists}


          // tags
          tags={this.props.tags}
          tagsLoading={this.props.tagsLoading}
          searchTags={this.fetchTags}
          fetchTags={this.fetchTags}

          fetchAds={this.fetchAds}

        />
      </>
    )
  }
}

const mapStateToProps = state => {
  return {
    // moods related
    moods: state.moods.payload,
    moodsLoading: state.moods.loading,
    moodsError: state.moods.errors,

    // languages for songs
    languages: state.language.payload,
    languagesLoading: state.language.loading,
    languageError: state.language.errors,

    // genres for songs
    genres: state.genres.payload,
    genresLoading: state.genres.loading,

    // related artist
    artists: state.latestArtists.payload,
    artistsLoading: state.latestArtists.loading,

    // my albums
    myAlbums: state.artistDashboard.myAlbums,
    loadingMyAlbums: state.artistDashboard.loadingMyAlbums,


    //uploading
    uploading: state.artistDashboard.loadingUploadSongs,

    //tags
    tags: state.tag.Tags,
    tagsLoading: state.tag.loading
  }
}

const mapDispatchToprops = dispatch => {
  return {
    actions: bindActionCreators(
      Object.assign(
        {},
        MoodsServices,
        LanguageServices,
        GenreServices,
        LatestArtistServices,
        ADService,
        TagServices,
        AdsService
      )
      , dispatch)
  }
}



export default connect(mapStateToProps, mapDispatchToprops)(UploadSongsContainer)