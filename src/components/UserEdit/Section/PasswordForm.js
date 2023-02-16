import React from 'react';
import { Form, Input, Row, Col, message } from 'antd';
import SpinButton from '../../Common/SpinButton';

const PasswordForm = ({ updateUserPassword, userPasswordUpdateLoading }) => {

    const onFinish = values => {
        if (values.password === values.re) {

            const formdata = new FormData();
            formdata.append('password', values.password)
            updateUserPassword(formdata)
        }
        else {
            message.error('Passwords do not match. Please try again,')
        }
    };

    const layout = {
        labelCol: { span: 24 },
        wrapperCol: { span: 8 },
    };
    return (
        <Form
            name="profile"
            initialValues={{ remember: true }}
            onFinish={onFinish}
            className='custom-form'
        >
            <Row>
                <Col span={24}>
                    <Form.Item
                        {...layout}
                        label="New Password"
                        name="password"
                        rules={[{ required: true, message: 'Please input your new password!' }]}
                    >
                        <Input />
                    </Form.Item></Col >  <Col span={24}>
                    <Form.Item
                        {...layout}
                        label="Re-Type Password"
                        name="re"
                        rules={[{ required: true, message: 'Please re-enter your new password!' }]}
                    >
                        <Input />
                    </Form.Item></Col>
            </Row>
            <SpinButton loading={userPasswordUpdateLoading} text='Update Password' />
        </Form>
    );
};

export default PasswordForm;