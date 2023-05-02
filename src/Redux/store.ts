import { configureStore } from '@reduxjs/toolkit';

// Slice
import authReducer from './auth-slice';
import applicationReducer from './application-slice';
import transactionReducer from './transaction-slice';
import permissionReducer from './permission-slice';

const store = configureStore({
  reducer: {
    auth: authReducer,
    application: applicationReducer,
    transaction: transactionReducer,
    permission: permissionReducer,
  },
});

export default store;
