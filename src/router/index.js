import React from 'react'
import { Navigate } from 'react-router-dom'

// 一级路由菜单
const Tesla = React.lazy(() => import('@/pages/Tesla'))
const Shop = React.lazy(() => import('@/pages/Shop'))
const Find = React.lazy(() => import('@/pages/Find'))
const TesMap = React.lazy(() => import('@/pages/TesMap'))

// 二级路由菜单
const TeslaModel = React.lazy(() => import('@/pages/Tesla/TeslaInfo/TeslaInfo-model'))
const TeslaOrder = React.lazy(() => import('@/pages/Tesla/TeslaInfo/TeslaInfo-order'))
const ShopZone = React.lazy(() => import('@/pages/Shop/ShopInfo/ShopInfo-zone'))
const ShopMall = React.lazy(() => import('@/pages/Shop/ShopInfo/ShopInfo-mall'))
const FindInfo = React.lazy(() => import('@/pages/Find/FindInfo'))

const routes = [
  {
    path: '/',
    element: <Navigate to="/tesla"></Navigate>
  },
  {
    path: '/find',
    element: <Find></Find>
  },
  {
    path: '/find/findInfo/:id',
    disTab: true,
    element: <FindInfo></FindInfo>
  },
  {
    path: '/tesla',
    element: <Tesla></Tesla>
  },
  {
    path: '/tesla/model/:id',
    element: <TeslaModel></TeslaModel>,
    disTab: true
  },
  {
    path: '/tesla/order',
    element: <TeslaOrder></TeslaOrder>
  },
  {
    path: '/shop',
    element: <Shop></Shop>
  },
  {
    path: '/shop/zone/:id',
    element: <ShopZone></ShopZone>
  },
  {
    path: '/shop/mall',
    element: <ShopMall></ShopMall>
  },
  {
    path: '/map',
    element: <TesMap></TesMap>
  }
]

export default routes
