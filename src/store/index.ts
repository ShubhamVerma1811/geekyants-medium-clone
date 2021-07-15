import createSagaMiddleware from '@redux-saga/core';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import {
  FLUSH,
  PAUSE,
  PERSIST,
  persistReducer,
  persistStore,
  PURGE,
  REGISTER,
  REHYDRATE,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import counter from './counter';
import { incrementAsync } from './sagas/saga';

const rootReducer = combineReducers({
  counter,
});

const persistConfig = { key: 'root', version: 1, storage };
const persistedReducer = persistReducer(persistConfig, rootReducer);

const sageMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(sageMiddleware),
});

export const persistor = persistStore(store);

sageMiddleware.run(incrementAsync);
