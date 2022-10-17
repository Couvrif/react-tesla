import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { reqshop } from '@/services'

export const fetchShopList = createAsyncThunk('fetchShop', async (payload, { dispatch }) => {
  const res = await reqshop()
  dispatch(changeShopListAction(res.data))
  console.log('resshop', res)
})

const shopSlice = createSlice({
  name: 'shop',
  initialState: {
    shopData: {}
  },
  reducers: {
    changeShopListAction(state, action) {
      state.shopData = action.payload
    }
  }
})

export const { changeShopListAction } = shopSlice.actions
export default shopSlice.reducer
