import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import { Router } from "react-router-dom";
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import configureStore from './store/configureStore';
import history from './utils/history';

// css
import '../node_modules/slick-carousel/slick/slick.css'
import '../node_modules/slick-carousel/slick/slick-theme.css'
import '../node_modules/react-jinke-music-player/assets/index.css'
import './styles/global.scss';
import 'antd/dist/antd.css';

import * as serviceWorker from './serviceWorker';
import App from './containers/App';
import CustomSpin from './components/Common/CustomSpin';
import SN from './assets/Logo/logo@2x.png'


const store = configureStore({}, history);

ReactDOM.render(
  <Suspense
    fallback={
      <div className="fallback-container">
          <img src={SN} alt='Songs Nepal' />
          <CustomSpin />
      </div>
    }
  >
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <Router basename={'/'} history={history}>
          <App />
        </Router>
      </ConnectedRouter>
    </Provider>
  </Suspense>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
