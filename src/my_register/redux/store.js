import { createStore, compose, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';

import config from '../../conifg'
import rootReducer from './reducers'

export default () => {
    let store = null;

    if (config.DEVELOPMENT_MODE) {
        store = createStore(
            rootReducer,
            applyMiddleware (
                thunkMiddleware,
                createLogger()
            )
        );
    } else {
        store = createStore(
            rootReducer,
            applyMiddleware (
                thunkMiddleware
            )
        );
    }

    return store;
}