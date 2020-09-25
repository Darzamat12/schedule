import { createStore, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './reducers';
import { watchFetchScheduleData } from './sagas';
import thunk from 'redux-thunk';
import { watchFetchCalendarData } from '../components/Calendar/sagas';
import { composeWithDevTools } from 'redux-devtools-extension/index';

const persistConfig = {
  key: 'userPreferences',
  storage,
  whitelist: ['userPreferences'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const sagaMiddleware = createSagaMiddleware();
const store = createStore(persistedReducer, composeWithDevTools(applyMiddleware(sagaMiddleware)));
const persistor = persistStore(store);

sagaMiddleware.run(watchFetchScheduleData);

export { persistor, store };


