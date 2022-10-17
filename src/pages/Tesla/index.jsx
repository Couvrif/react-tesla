import PropTypes from 'prop-types'
import React, { memo, useEffect } from 'react'
import { TeslaWrapper } from './style'
import { fetchTeslaData } from '@/store/modules/home'
import { useDispatch, useSelector, shallowEqual } from 'react-redux'
import SwiperList from '@/components/swiperList'

const Tesla = memo((props) => {
  const { teslaData } = useSelector((state) => {
    return { teslaData: state.home.teslaData }
  }, shallowEqual)

  const dispatch = useDispatch()
  console.log(teslaData, '0000000000000000')

  useEffect(() => {
    dispatch(fetchTeslaData())
  }, [fetchTeslaData])
  return (
    <TeslaWrapper>
      <div className="mainTitle">特斯拉</div>
      <SwiperList itemList={teslaData}></SwiperList>
    </TeslaWrapper>
  )
})

Tesla.propTypes = {}

export default Tesla
