import { configureStore } from '@reduxjs/toolkit';

// Slice
import authReducer from './Slice/auth-slice';
import applicationReducer from './Slice/application-slice';
import transactionReducer from './Slice/transaction-slice';
import permissionReducer from './Slice/permission-slice';

const store = configureStore({
  reducer: {
    auth: authReducer,
    application: applicationReducer,
    transaction: transactionReducer,
    permission: permissionReducer,
  },
});

export default store;
