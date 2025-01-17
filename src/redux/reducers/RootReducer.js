import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { combineReducers } from '@reduxjs/toolkit';
import userReducer from './userReducer';

const persistConfig = {
    key: 'root',
    storage,
};

const reducers = combineReducers({
    user: userReducer,
});

export default persistReducer(persistConfig, reducers);
