import { configureStore } from '@reduxjs/toolkit';
import postsReducer from './slices/postSlice';
import userProfileReducer from './slices/userProflieSlice';

const store = configureStore({
  reducer: {
    posts: postsReducer,
    userProfile: userProfileReducer,
  },
});

export default store;
