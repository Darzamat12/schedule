import { createStore, compose, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from "./reducers";
import {watchFetchScheduleData} from './sagas';


declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


const createAppStore = (): any => {
    const sagaMiddleware = createSagaMiddleware();
    const store = createStore(
        rootReducer,
        compose(applyMiddleware(sagaMiddleware), composeEnhancers())
        );
    sagaMiddleware.run(watchFetchScheduleData);
    return store;
}


export default createAppStore();

