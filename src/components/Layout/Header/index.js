import React from 'react';
import { Link, withRouter } from 'react-router-dom'
import { Layout, Input, Button, Row, Col, Badge, Menu, Dropdown, Form } from 'antd';
import { SearchOutlined, BellOutlined, ProfileOutlined, LoginOutlined, CaretDownOutlined, MenuOutlined } from '@ant-design/icons';
import {FiBell} from 'react-icons/fi'
import Logo from '../../../assets/Logo/logo.png'
import Profile from '../../../assets/Images/profile.png'

import { logout } from '../../../services/authService'

const { Header } = Layout;

const layout = {
    logoLayout: {
        xxl: { span: 2 },
        xl: { span: 2 },
        lg: { span: 2 },
        md: { span: 6 },
        sm: { span: 6 },
        xs: { span: 6 },
    },
    searchLayout: {
        xxl: { span: 18 },
        xl: { span: 16 },
        lg: { span: 14 },
        md: { span: 17 },
        sm: { span: 17 },
        xs: { span: 17 },
    },
    itemLayout: {
        xxl: { span: 4 },
        xl: { span: 6 },
        lg: { span: 8 },
        md: { span: 0 },
        sm: { span: 0 },
        xs: { span: 0 },
    },
    respLayout: {
        xxl: { span: 0 },
        xl: { span: 0 },
        lg: { span: 0 },
        md: { span: 1 },
        sm: { span: 1 },
        xs: { span: 1 },
    }
};

const handleLogout = () => {
    logout();
}

const menu = (
    <Menu>
        <Menu.Item>
            <Link to="/user" >
                <ProfileOutlined /> <span className='header-menu-item'>Profile</span>
            </Link>
        </Menu.Item>
        <Menu.Item>
            <Link to="/" onClick={handleLogout}>
                <LoginOutlined /> <span className='header-menu-item'>Logout</span>
            </Link>
        </Menu.Item>
    </Menu>
)

const index = () => {

    return (
        <Header className="app-layout-header">
            <Row>
                <Col {...layout.logoLayout}><img src={Logo} alt="Songs Nepal" className='logo' /></Col>
                <Col {...layout.searchLayout} className='search-main'>
                    <Form >
                        <Form.Item
                            label="Username"
                            name="username"
                            rules={[{ required: true, message: 'Please input your username!' }]}
                        >
                            <Input className='search' placeholder="Search for artists, bands , tracks , podcasts..." prefix={<SearchOutlined />} />
                        </Form.Item>
                    </Form>
                </Col>
                <Col {...layout.itemLayout}>
                    <div className='header-items'>
                        <Button shape="round" size='large' className='btn-gradient'>
                            UPGRADE
                        </Button>

                        <Badge count={5} className='badge'>
                            <a type='button' href="#"><FiBell /></a>
                        </Badge>

                        <Dropdown overlay={menu} trigger={[`click`]} className='header-dropdown'>
                            <a className="ant-dropdown-link" href='#'>
                                <img src={Profile} alt="John Doe" className='profile-img' />
                                <span className='profile-name'>John Doe</span>
                                <CaretDownOutlined />
                            </a>
                        </Dropdown>

                    </div>
                </Col>
                <Col {...layout.respLayout}><MenuOutlined /></Col>
            </Row>
        </Header >
    );
};

export default index;