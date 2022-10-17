import PropTypes from 'prop-types'
import React, { memo } from 'react'
import { ShopWrapper } from './style'
import { fetchShopList } from '@/store/modules/shop'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'

const Shop = memo((props) => {
  const shopData = useSelector((state) => state.shop.shopData)
  const dispatch = useDispatch()

  console.log('shopData', shopData)

  useEffect(() => {
    dispatch(fetchShopList())
  }, [dispatch])

  return (
    <ShopWrapper>
      {Object.keys(shopData).length > 0 &&
        shopData.goods.map((item, index) => {
          return <div key={index}>{item.title}</div>
        })}
    </ShopWrapper>
  )
})

Shop.propTypes = {}

export default Shop
