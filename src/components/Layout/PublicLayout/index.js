import React from 'react';
import { Layout } from 'antd';

import AppHeader from '../Header/public';

const { Content } = Layout;

const index = props => {
    return (
        <Layout
            id="app-layout"
        >
            <AppHeader />
            <Layout>
                <Layout>
                    <Content
                        className="site-layout-background"
                        style={{
                            padding: 24,
                            margin: 0,
                            minHeight: 280,
                        }}
                    >
                        {props.children}
                    </Content>
                </Layout>
            </Layout>
        </Layout>
    );
};

export default index;
