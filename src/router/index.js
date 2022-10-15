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
    path: '/tesla',
    element: <Tesla></Tesla>,
    children: [
      {
        path: 'model/:id',
        element: <TeslaModel></TeslaModel>
      },
      {
        path: 'order',
        element: <TeslaOrder></TeslaOrder>
      }
    ]
  },
  {
    path: '/shop',
    element: <Shop></Shop>,
    children: [
      {
        path: 'zone/:id',
        element: <ShopZone></ShopZone>
      },
      {
        path: 'mall',
        element: <ShopMall></ShopMall>
      }
    ]
  },
  {
    path: '/map',
    element: <TesMap></TesMap>
  },
  {
    path: '/find',
    element: <Find></Find>,
    children: [
      {
        path: 'findInfo/:id',
        element: <FindInfo></FindInfo>
      }
    ]
  }
]

export default routes
