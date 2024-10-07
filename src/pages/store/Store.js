import { combineReducers, configureStore } from "@reduxjs/toolkit";
import cartReducer from "../features/Slice";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
import {
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";

// Configure persist settings
const persistConfig = {
  key: "root",
  storage,
  whitelist: ["cart"], // Add slices of state you want to persist
};

// Combine reducers
const rootReducer = combineReducers({
  cart: cartReducer,
});

// Create a persisted reducer using persistConfig
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Configure the store with middleware adjustments
export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        // Ignore Redux Persist actions from serializability checks
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
