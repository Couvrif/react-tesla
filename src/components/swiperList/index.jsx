import PropTypes from 'prop-types'
import React, { memo } from 'react'
import { SwiperListWrapper } from './style'
import { Swiper } from 'antd-mobile'
import CarInfo from '../carInfo'

const SwiperList = memo((props) => {
  const { itemList = [] } = props

  const goToDetail = (item) => {
    console.log('1111')
  }

  return (
    <SwiperListWrapper>
      <Swiper loop>
        {itemList.map((item, index) => {
          return (
            <Swiper.Item key={index}>
              <div className="swiper-slide" key={index}>
                <a className="carName">{item.name}</a>
                <CarInfo res={item} />
                <div>
                  <img className="rotationChart-img" src={item.picUrl} alt="" />
                </div>
                <button onClick={() => goToDetail(item)} className="carBuy">
                  立即订购
                </button>
              </div>
            </Swiper.Item>
          )
        })}
      </Swiper>
    </SwiperListWrapper>
  )
})

SwiperList.propTypes = {
  itemList: PropTypes.array
}

export default SwiperList
