import React, { useEffect } from 'react'
import ChangeDetails from './change-details'
import ChangePassword from './change-password'
import { Form } from 'antd'
import SpinButton from '../../../Common/SpinButton'
import { useSelector } from 'react-redux'
import { SetFormData, isArtist } from '../../../../utils/commonUtils'

const UserProfile = props => {

  const {
    updateUserProfileImage,
    updateUserProfile,
    updateUserPassword,

    // genre
    fetchGenres,
    searchGenre
  } = props


  useEffect(() => {
    fetchGenres()
  }, []) //eslint-disable-line

  const [showChangePassword, setshowChangePassword] = React.useState(false) // toggle change password fields
  const ToggleShowPassword = () => {
    setshowChangePassword(!showChangePassword)
  }

  // image upload handler
  const [profileImage, setProfileImage] = React.useState(null)

  const onProfileImageSelected = {
    beforeUpload: (file) => {
      setProfileImage({ image: URL.createObjectURL(file), file: file })
    }
  }

  const removeProfileImage = () => {
    setProfileImage(null)
  }

  // image upload handler


  /**
   * 
   * Redux states
   */
  const profile = useSelector(state => state.userProfile.payload)
  const profileLoading = useSelector(state => state.userProfile.loading)
  const updating = useSelector(state => state.userProfileUpdate.loading)
  const genres = useSelector(state => state.genres.payload) //changes 
  const genresLoading = useSelector(state => state.genres.loading)
  /**
   * 
   * end redux state 
   */

  // console.log("genres", genres)

  const onFormSubmit = (values) => {

    const role = isArtist()
    const formData = {
      'user[profile_attributes][name]': values.name,
      // 'user[email]':values.email,
      'user[profile_attributes][facebook]': values.facebook,
      'user[profile_attributes][twitter]': values.twitter,
      'user[profile_attributes][youtube]': values.youtube,
      'user[profile_attributes][instagram]': values.instagram,
      'user[profile_attributes][bio]': values.description,
      'user[profile_attributes][address]': values.city,
      'user[profile_attributes][country]': values.country,
      'user[phone_number]':values.phone_number
    }

    // if (role) formData['user[profile_attributes][genre_id]'] = values.genre
    if (role) formData['user[artist_attributes][genre_id]'] = values.genre

    const userProfileFormdata = SetFormData(formData)

    updateUserProfile(userProfileFormdata)

    if (profileImage && profileImage?.file) {
      if(profileImage?.file){
        const userImageFD = SetFormData({
          'profile_picture': profileImage.image ? profileImage.file : null,
        })
        updateUserProfileImage(userImageFD)
      }
    }

    if (showChangePassword) {
      const userPasswordFormdata = SetFormData({
        'old_password': values.old_password,
        'password': values.new_password,
        'password_confirmation': values.confirm_password,
      })
      updateUserPassword(userPasswordFormdata)
    }

  }

  return (
    <>
      <Form name="profile"
        initialValues={{ remember: true }}
        layout="vertical"
        onFinish={onFormSubmit}
        className="custom-form ">

        <ChangeDetails
          profile={profile}
          onProfileImageSelected={onProfileImageSelected}
          removeProfileImage={removeProfileImage}
          profileImage={profileImage}
          setProfileImage={setProfileImage}
          genres={genres}
          searchGenre={searchGenre}
          genresLoading={genresLoading}
          profileLoading={profileLoading}
        /> {/** Change user profile form */}

        <ChangePassword showCP={showChangePassword} toggleFuction={ToggleShowPassword} /> {/**change user passowrd form */}


        <section className="section-break-2">
          <div className="col-md-12">
            <SpinButton loading={updating} text="Update Profile" />
          </div>
        </section> {/**submit functions */}

      </Form>
    </>
  )
}



export default UserProfile