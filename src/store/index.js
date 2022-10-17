import { configureStore } from '@reduxjs/toolkit'

import findReducer from './modules/find'
import homeReducer from './modules/home'
import shopReducer from './modules/shop'

export const store = configureStore({
  reducer: {
    find: findReducer,
    home: homeReducer,
    shop: shopReducer
  }
})
