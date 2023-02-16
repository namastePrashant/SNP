import { applyMiddleware, createStore, compose } from 'redux';
import thunk from 'redux-thunk';
import { routerMiddleware } from 'connected-react-router';
import createRootReducer from '../reducers';


const configureStore = (initialState = {}, history) => {
    const middlewares = [thunk, routerMiddleware(history)];

    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

    const store = createStore(
        createRootReducer,
        initialState,
        composeEnhancers(applyMiddleware(...middlewares))
    );
    return store;
};


export default configureStore