import { createSlice } from '@reduxjs/toolkit'

export const authUserSlice = createSlice({
  name: 'authUser',
  initialState: {},
  reducers: {
    getAuthUser: (state) => state,
    setAuthUser: (state, action) => (state = action.payload),
    deleteAuthUser: () => ({}),
  },
})

export const { getAuthUser, setAuthUser, deleteAuthUser } =
  authUserSlice.actions

export default authUserSlice.reducer
