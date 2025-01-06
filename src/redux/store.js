import { configureStore } from '@reduxjs/toolkit'
import { persistStore } from 'redux-persist';
import persistReducer from './reducers/RootReducer';

export const store = configureStore({
  reducer: persistReducer
});

export const persistor = persistStore(store);
