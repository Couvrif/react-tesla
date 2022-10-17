import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { reqfind } from '@/services'

export const fetchFindData = createAsyncThunk('findData', async (payload, { dispatch }) => {
  const res = await reqfind(payload)
  dispatch(changeFindDataAction(res.data.newsList))
  console.log('respage', res)
})

const findSlice = createSlice({
  name: 'find',
  initialState: {
    findData: []
  },
  reducers: {
    changeFindDataAction(state, action) {
      state.findData = action.payload
    }
  }
})

export const { changeFindDataAction } = findSlice.actions

export default findSlice.reducer
