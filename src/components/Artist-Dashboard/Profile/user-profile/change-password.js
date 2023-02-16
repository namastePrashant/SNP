import React from 'react'
import {Form,Row,Checkbox,Input} from 'antd'


const ChangePassword = props  =>{

  const {showCP,toggleFuction} =  props

  return(
    <section className="section-break-0-2">
      <div className="col-md-10">
      <Row>
        <section className="section-break-0-1">
          <h4 className="text-16-black-medium">Change password 
            <span className="ml-1">
            <Checkbox
              checked={showCP}
              onChange={toggleFuction}
            >
            </Checkbox>
            </span>
          </h4>
        </section>
      </Row>
      {showCP?
          <Row className="section-break-1">
            <div className="col-md-7" >
              <Form.Item
                label="Old Password"
                name="old_password"
                rules={[
                  { required: true, message: "Please insert your current password !" },
                ]}
              >
                <Input type="password"/>
              </Form.Item>
            </div> {/**email */}

            <div className="col-md-7" >
              <Form.Item
                label="New Password"
                name="new_password"
                rules={[
                  { required: true, message: "Please insert a new password" },
                  { min: 6, message: 'Password must be atleast 6 characters long' },
                ]}
              >
                <Input type="password"/>
              </Form.Item>
            </div> {/**contact */}

            <div className="col-md-7" >
              <Form.Item
                label="Confirm Password"
                name="confirm_password"
                rules={[
                  { required: true, message: "Please re enter the new password" },
                  ({ getFieldValue }) => ({
                    validator(rule, value) {
                      if (!value || getFieldValue('new_password') === value) {
                        return Promise.resolve();
                      }
                      return Promise.reject('Password and confirm password fields don\'t match');
                    },
                  }),
                ]}
               
              >
                <Input type="password"/>
              </Form.Item>
            </div> {/**facebok*/}

          </Row>
        
        :""}
      </div>
    </section>
  )
}


export default ChangePassword