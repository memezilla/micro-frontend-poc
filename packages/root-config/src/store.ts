import { configureStore, createSlice } from '@reduxjs/toolkit';

export const planSlice = createSlice({
    name: 'plan',
    initialState: 12,
    reducers: {
      setPlan: (_, action) => action.payload,
    }
  })
  
export const store = configureStore({
  reducer: {
      plan: planSlice.reducer
  }
})
