import PropTypes from 'prop-types'
import React, { memo, useEffect, useState } from 'react'
import { TeslaWrapper } from './style'
import { Popup } from 'antd-mobile'
import { fetchTeslaData } from '@/store/modules/home'
import { useDispatch, useSelector, shallowEqual } from 'react-redux'
import SwiperList from '@/components/swiperList'
import { useNavigate } from 'react-router-dom'
import TeslaInfoOrder from './TeslaInfo/TeslaInfo-order'

const Tesla = memo((props) => {
  const { teslaData } = useSelector((state) => {
    return { teslaData: state.home.teslaData }
  }, shallowEqual)

  const dispatch = useDispatch()
  console.log(teslaData, '0000000000000000')

  useEffect(() => {
    dispatch(fetchTeslaData())
  }, [fetchTeslaData])

  const navigate = useNavigate()
  const goToOrder = (teslaData) => {
    console.log('跳转', teslaData)
    // navigate('/tesla/order', { state: teslaData })
    setIsOrder(true)
  }

  const [isOrder, setIsOrder] = useState(false)
  return (
    <TeslaWrapper>
      <div className="mainTitle">Tesla</div>
      <SwiperList itemList={teslaData}></SwiperList>
      <div className="teslaDrive">
        <h1>未来驾驶体验</h1>
        <h2>车辆自动召唤，跑车级百公里加速，在车里打游戏，免费到店体验特斯拉驾驶方式</h2>
        <img src="https://china-community-app.tesla.cn/wechatmini/img01.png" />
        <button onClick={() => goToOrder(teslaData)} className="testDrive">
          预约试驾
        </button>
      </div>
      <div className="teslaGuideBook">
        <h1>新手使用指南</h1>
        <img src="https://china-community-app.tesla.cn/wechatmini/card_bg.png" />
      </div>
      <Popup
        visible={isOrder}
        showCloseButton={true}
        onMaskClick={() => {
          setIsOrder(false)
        }}
        onClose={() => {
          setIsOrder(false)
        }}
        bodyStyle={{ height: '88vh', borderRadius: '20px 20px 0 0', overflow: 'scroll' }}
      >
        <TeslaInfoOrder teslaData={teslaData}></TeslaInfoOrder>
      </Popup>
    </TeslaWrapper>
  )
})

Tesla.propTypes = {}

export default Tesla
