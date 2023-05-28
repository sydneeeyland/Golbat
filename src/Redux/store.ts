import { configureStore } from '@reduxjs/toolkit';

// Slice
import authReducer from './Slice/auth-slice';
import applicationReducer, { applicationApi } from './Slice/application-slice';
import transactionReducer from './Slice/transaction-slice';
import permissionReducer from './Slice/permission-slice';

const store = configureStore({
  reducer: {
    auth: authReducer,
    application: applicationReducer,
    transaction: transactionReducer,
    permission: permissionReducer,
    [applicationApi.reducerPath]: applicationApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(applicationApi.middleware),
});

export default store;
