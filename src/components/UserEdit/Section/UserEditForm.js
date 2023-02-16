import React, {  useState } from "react";

import { Form, Input, Row, Col, Button, Upload } from "antd";
// import WhiteSpin from "../../Common/SpinButton";
import SpinButton from "../../Common/SpinButton";
import CameraIcon from "../../../assets/Icons/camera.svg";
import { Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";
const { TextArea } = Input;

const UserEditForm = ({
  userProfile,
  updateUserProfile,
  userProfileUpdateLoading,
  updateUserProfileImage,
}) => {
  const [profileImage, setProfileImage] = useState("");
  const [profileImageFile,setProfileImageFile] = useState(null)

  const data = userProfile.profile;
  const currentProfilePicture = data?.profile_picture?.url


  

  const layout = {
    labelCol: { span: 24 },
    wrapperCol: { span: 20 },
  };

  const props = {
    beforeUpload: file => {
      setProfileImage(URL.createObjectURL(file))
      setProfileImageFile(file)
    }
  }

  const onFinish = (values) => {
    const formData = new FormData();
    // formData.append(
    //   "user[profile_attributes][profile_picture]",
    //   values.profile_picture.url
    // );
    formData.append("user[profile_attributes][name]", values.name);
    formData.append("user[email]", values.email);
    formData.append(
      "user[profile_attributes][phoneNumber]",
      values.phoneNumber
    );
    formData.append("user[profile_attributes][id]", values.id);
    formData.append("user[profile_attributes][city]", values.city);
    formData.append("user[profile_attributes][country]", values.country);
    formData.append("user[profile_attributes][facebook]", values.facebook);
    formData.append("user[profile_attributes][instagram]", values.instagram);
    formData.append("user[profile_attributes][twitter]", values.twitter);
    formData.append("user[profile_attributes][youtube]", values.youtube);
    formData.append(
      "user[profile_attributes][description]",
      values.description
    );
    updateUserProfile(formData);
    if(profileImageFile){
      const profilePicData = new FormData();
      profilePicData.append("profile_picture",profileImageFile)
      updateUserProfileImage(profilePicData)
    }
  };
  return (
    <Form
      name="profile"
      initialValues={{ remember: true }}
      onFinish={onFinish}
      className="custom-form"
    >
      <Row>
        <Form.Item
          {...layout}
          label="Id"
          name="id"
          initialValue={data && data.id}
          hidden={true}
        >
          <Input />
        </Form.Item>
        <Col span={20} className="profileImg-col">
          <div>
            <Form.Item>
              {!profileImage ? currentProfilePicture? ( 
                  <Avatar size={128} src={currentProfilePicture}/>
                ):(
                <Avatar size={128} icon={<UserOutlined />} />
              ) : (
                  <Avatar size={128} src={profileImage} />
                )}
            </Form.Item>
          </div>
          <div className="button-div">
            <Form.Item
              {...layout}
              name="profile_picture"
              initialValue={data && data.profile_picture.url}
            >
              <Upload {...props}
              >
                <Button className="button-style" >
                  <img className="icon-style" src={CameraIcon} alt="icon"/>
                CHANGE PHOTO
              </Button>
              </Upload>

            </Form.Item>
          </div>
        </Col>
        <div className="col-md-6" >
          <Form.Item
            {...layout}
            label="Full Name"
            name="name"
            initialValue={data && data.name}
            rules={[
              { required: true, message: "Please input your first name!" },
            ]}
          >
            <Input />
          </Form.Item>
        </div>
        <div className="col-md-6">
          <Form.Item
            {...layout}
            label="Email"
            name="email"
            initialValue={userProfile && userProfile.email}
            rules={[{ required: true, message: "Please input your email!" }]}
          >
            <Input />
          </Form.Item>
        </div>{" "}
        <div className="col-md-6">
          <Form.Item {...layout} label="Phone Number" name="phoneNumber">
            <Input />
          </Form.Item>
        </div>{" "}
        <div className="col-md-6">
          <Form.Item
            {...layout}
            label="City"
            name="city"
            initialValue={data && data.address}
          >
            <Input />
          </Form.Item>
        </div>{" "}
        <div className="col-md-6">
          <Form.Item
            {...layout}
            label="Country"
            name="country"
            initialValue={data && data.country}
          >
            <Input />
          </Form.Item>
        </div>{" "}
        <div className="col-md-6">
          <Form.Item
            {...layout}
            label="Facebook"
            name="facebook"
            initialValue={data && data.facebook}
          >
            <Input />
          </Form.Item>
        </div>{" "}
        <div className="col-md-6">
          <Form.Item
            {...layout}
            label="Instagram"
            name="instagram"
            initialValue={data && data.instagram}
          >
            <Input />
          </Form.Item>
        </div>{" "}
        <div className="col-md-6">
          <Form.Item
            {...layout}
            label="Twitter"
            name="twitter"
            initialValue={data && data.twitter}
          >
            <Input />
          </Form.Item>
        </div>{" "}
        <div className="col-md-6">
          <Form.Item
            {...layout}
            label="Youtube"
            name="youtube"
            initialValue={data && data.youtube}
          >
            <Input />
          </Form.Item>
        </div>
        <div className="col-md-6" >
          <Form.Item
            {...layout}
            label="Description"
            name="description"
            initialValue={data && data.bio}
          >
            <TextArea rows={2} />
          </Form.Item>
        </div>
      </Row>
      <div className="col-md-12">
      <SpinButton loading={userProfileUpdateLoading} text="Update Profile" />
      </div>
    </Form>
  );
};

export default UserEditForm;
