import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { reqmain } from '@/services'

export const fetchTeslaData = createAsyncThunk('teslaData', async (payload, { dispatch }) => {
  const res = await reqmain()
  console.log('reshome', res.data)
  dispatch(changeTeslaDataAction(res.data.rotationImg))
})

const homeSlice = createSlice({
  name: 'home',
  initialState: {
    teslaData: [],
    colorIndex: 0,
    wheelIndex: 0
  },
  reducers: {
    changeTeslaDataAction(state, action) {
      console.log(action)
      state.teslaData = action.payload
    },
    changeColorAction(state, action) {
      state.colorIndex = action.payload
    },
    changeWheelIndexAction(state, action) {
      state.wheelIndex = action.payload
    }
  }
})

export const { changeColorAction, changeTeslaDataAction, changeWheelIndexAction } = homeSlice.actions

export default homeSlice.reducer
