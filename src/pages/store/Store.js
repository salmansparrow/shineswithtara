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
import manageOrder from "../features/manageOrder";

// Persist configuration
const persistConfig = {
  key: "root",
  storage,
  whitelist: ["cart"], // Specify slices of state you want to persist
};

// Combine reducers
const rootReducer = combineReducers({
  cart: cartReducer,
  order: manageOrder,
});

// Create a persisted reducer using persistConfig
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Configure the store
export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        // Ignore Redux Persist actions from serializability checks
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }), // No need to add thunk explicitly, it's already included in default middleware
});

// Persistor
export const persistor = persistStore(store);
