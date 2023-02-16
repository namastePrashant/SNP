import React from 'react';
import { Link } from 'react-router-dom'
import { Layout, Input, Button, Row, Col, Form } from 'antd';
import history from '../../../utils/history';
import {FiSearch} from 'react-icons/fi'
import Logo from '../../../assets/Logo/logo.png'

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
        xxl: { span: 14, offset: 2 },
        xl: { span: 12, offset: 2 },
        lg: { span: 12, offset: 2 },
        md: { span: 10, offset: 2 },
        sm: { span: 10, offset: 2 },
        xs: { span: 0 },
    },
    itemLayout: {
        xxl: { span: 4 },
        xl: { span: 6, offset:2 },
        lg: { span: 6, offset:2 },
        md: { span: 4, offset:2 },
        sm: { span: 4, offset:2 },
        xs: { span: 4,offset: 14 },
    },
  /*   respLayout: {
        xxl: { span: 0 },
        xl: { span: 0 },
        lg: { span: 0 },
        md: { span: 1, offset: 0 },
        sm: { span: 1, offset: 1 },
        xs: { span: 1, offset: 17 },

    } */
};

const index = () => {
    return (
        <Header className="app-layout-header">
            <Row>
                <Col {...layout.logoLayout}><Link to='/' className='logo'><img src={Logo} alt="Songs Nepal" className='logo' /><span>BETA</span></Link></Col>
                <Col {...layout.searchLayout} className='search-main'>
                    <Form >
                        <Form.Item
                            // label="Username"
                            name="search"
                        >
                            <Input className='search' placeholder="Search for artists, bands , tracks , podcasts..." prefix={<FiSearch  style={{fontSize:"18px"}}/>} />
                        </Form.Item>
                    </Form>
                </Col>
                <Col {...layout.itemLayout}>
                    <div className='header-items-public'>
                        {/* <Button shape="round" size='large' className='btn-gradient'>
                            UPGRADE
                        </Button> */}

                        <Button shape="round" size='large' className='btn-outline'>
                            {
                                history.location.pathname === '/login' ? <Link to='/signup'>SIGN UP</Link> : <Link to='/login'>LOGIN</Link>
                            }
                        </Button>
                    </div>
                </Col>
                {/* <Col {...layout.respLayout}><MenuOutlined /></Col> */}
            </Row>
        </Header >
    );
};

export default index;