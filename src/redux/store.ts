import { createStore, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './reducers';
import { watchFetchScheduleData } from './sagas';
import thunk from 'redux-thunk';
import { watchLoadData } from '../components/Calendar/sagas';
import { composeWithDevTools } from 'redux-devtools-extension/index';

const persistConfig = {
  key: 'userPreferences',
  storage,
  whitelist: ['userPreferences'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const createAppStore = (): any => {
  const sagaMiddleware = createSagaMiddleware();
  const store = createStore(rootReducer, compose(applyMiddleware(sagaMiddleware), composeEnhancers()));
  sagaMiddleware.run(watchFetchScheduleData);
  sagaMiddleware.run(watchLoadData);

  return store;
};

export default createAppStore();
