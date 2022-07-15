import { combineReducers, configureStore } from "@reduxjs/toolkit";
import bookingReducer from "./bookingSlide";
import authReducer from "./authSlide";
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import historyReducer from "./historyBooking";

const persistConfig = {
  key: 'root',
  version: 1,
  storage,
}
const rootReducer = combineReducers({
  booking: bookingReducer,
  auth: authReducer,
  history: historyReducer
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = configureStore({
  reducer: persistedReducer
})


export let persistor = persistStore(store)
export default store;