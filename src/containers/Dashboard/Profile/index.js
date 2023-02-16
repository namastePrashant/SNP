import React from 'react'
import Profile from '../../../components/Artist-Dashboard/Profile'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import * as userProfileService from '../../../services/userProfileService';
import * as userProfileAction from '../../../actions/userProfileAction';
import * as GenreServices from '../../../services/genresService'
import * as BankServices from '../../../services/artist-dashboard/bankingServices'
import * as AdsService from '../../../services/advertisementService';
import * as artistDashboardServices from '../../../services/artist-dashboard';
class ArtistProfileContainer extends React.Component {


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
  * Update user Profile.
  *
  */
  updateUserProfile = (formdata) => {
    this.props.actions.updateUserProfile(formdata);
  };


  /**
     * update user Image
    */
  updateUserProfileImage = (formData) => {
    this.props.actions.updateUserImage(formData)
  }

  /**
* Update user Password.
*
*/
  updateUserPassword = (formdata) => {
    this.props.actions.updateUserPassword(formdata);
  };


  /**
   * getBankingDetail
   */
  fetchBankingDetails = () => {
    this.props.actions.fetchBankingDetails()
  }

  /**
   * update banking details
   */
  updateBankingDetails = (formData) => {
    this.props.actions.updateBankingDetails(formData)
  }


  componentDidMount() {
    const location = 'userprofileheade'
    const formData = {
      location: location,
      platform: 'web'
    }
    this.props.actions.fetchAdvertisementByLocation(formData)
  }

  /**
 *  fetch analytics count 
*/
  fetchAnalyticsCounts = () => {
    this.props.actions.fetchAnalyticsCounts() //artistDashboardServices
  }

  render() {

    const {
      // analytics
      totalAnalyticsCount,
      loadingAnalyticsCount,
    } = this.props // array destructring
    return (
      <>
        <Profile
          updateUserProfile={this.updateUserProfile}
          updateUserProfileImage={this.updateUserProfileImage}
          updateUserPassword={this.updateUserPassword}
          fetchGenres={this.fetchGenres}
          searchGenre={this.searchGenre}

          // analytics count related
          totalAnalyticsCount={totalAnalyticsCount}
          fetchAnalyticsCounts={this.fetchAnalyticsCounts}
          loadingAnalyticsCount={loadingAnalyticsCount}

          // bank related
          fetchBankingDetails={this.fetchBankingDetails}
          updateBankingDetails={this.updateBankingDetails}
        />
      </>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    // analytics count
    totalAnalyticsCount: state.artistDashboard.analyticsCounts,
    loadingAnalyticsCount: state.artistDashboard.loadingAnalyticsCounts,
    //end analytics count

  }
}

const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators(Object.assign(
      {},
      userProfileService,
      userProfileAction,
      GenreServices,
      BankServices,
      AdsService,
      artistDashboardServices,
    ), dispatch)
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(ArtistProfileContainer)