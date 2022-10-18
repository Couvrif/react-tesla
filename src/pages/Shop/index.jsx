import PropTypes from 'prop-types'
import React, { memo } from 'react'
import { ShopWrapper } from './style'
import { fetchShopList } from '@/store/modules/shop'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const Shop = memo((props) => {
  const shopData = useSelector((state) => state.shop.shopData)
  const { TZONE = [] } = shopData
  const dispatch = useDispatch()

  console.log('shopData', shopData)

  useEffect(() => {
    dispatch(fetchShopList())
  }, [dispatch])

  const navigate = useNavigate()
  const goShop = () => {
    navigate('/shop/mall', { state: shopData })
  }

  const goDetail = (item) => {
    navigate(`/shop/zone/${item.id}`, { state: item })
  }

  return (
    <ShopWrapper>
      <div className="mainTitle">Telsa</div>
      <div className="teslaShop" onClick={() => goShop()}>
        <img src="https://china-community-app.tesla.cn/wechatmini/shop.png" />
      </div>
      <div className="swiper-container">
        <p>T - ZONE</p>
        <div className="swiper-wrapper">
          {TZONE.map((item, _) => {
            return (
              <div key={item.id} className="swiper-slide">
                <img src={item.picUrl} onClick={() => goDetail(item)} />
              </div>
            )
          })}
        </div>
      </div>
    </ShopWrapper>
  )
})

Shop.propTypes = {}

export default Shop
