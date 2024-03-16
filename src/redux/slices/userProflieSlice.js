import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  loading: false,
  profile: null,
  error: null,
};

const userProfileSlice = createSlice({
  name: 'userProfile',
  initialState,
  reducers: {
    fetchUserProfileRequest(state) {
      state.loading = true;
      state.error = null;
    },
    fetchUserProfileSuccess(state, action) {
      state.loading = false;
      state.profile = action.payload;
    },
    fetchUserProfileFailure(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const {
  fetchUserProfileRequest,
  fetchUserProfileSuccess,
  fetchUserProfileFailure,
} = userProfileSlice.actions;

export default userProfileSlice.reducer;
