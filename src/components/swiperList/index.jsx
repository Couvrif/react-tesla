import PropTypes from 'prop-types'
import React, { memo } from 'react'
import { SwiperListWrapper } from './style'
import { Swiper } from 'antd-mobile'
import CarInfo from '../carInfo'
import { useNavigate } from 'react-router-dom'

const SwiperList = memo((props) => {
  const { itemList = [] } = props

  const navigate = useNavigate()
  const goToDetail = (item) => {
    console.log('传参', item)
    navigate(`/tesla/model/${item.id}`, { state: item })
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
