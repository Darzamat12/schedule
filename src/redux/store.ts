import { createStore, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './reducers';
import { watchFetchScheduleData, watchPostEvent, watchEditEvent, watchDeleteEvent, watchFetchEventData } from './sagas';

import { composeWithDevTools } from 'redux-devtools-extension/index';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['userPreferences', 'importantColData', 'hideColumnData'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const sagaMiddleware = createSagaMiddleware();
const store = createStore(persistedReducer, composeWithDevTools(applyMiddleware(sagaMiddleware)));
const persistor = persistStore(store);

sagaMiddleware.run(watchFetchScheduleData);
sagaMiddleware.run(watchPostEvent);
sagaMiddleware.run(watchEditEvent);
sagaMiddleware.run(watchDeleteEvent);
sagaMiddleware.run(watchFetchEventData);

export { persistor, store };
