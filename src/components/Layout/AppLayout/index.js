import React from 'react';
import { Layout } from 'antd';

import AppHeader from '../../../containers/AppNav';
// import AppFooter from '../Footer';
import AppSidenav from '../Sidenav';
import AppPlayer from '../Music';
import Scrollrestoration from  './ScrollRestoration'

const { Content } = Layout;

const index = props => {

    return (
        <Layout
            id="app-layout"
        >
            <AppHeader />
            <Layout>
                <AppSidenav />
                <Scrollrestoration>
                <Layout id="song-nepal-main-section">
                  <Content
                      className="site-layout-background"
                      style={{
                          padding: 24,
                          margin: 0,
                          minHeight: 280,
                      }}>
                      {props.children}
                  </Content>
                  {/* <AppFooter /> */}
                </Layout>
                </Scrollrestoration>
            </Layout>
            <AppPlayer />
        </Layout>
    );
};


export default index;
