import classNames from 'classnames'
import PropTypes from 'prop-types'
import React, { memo, useState } from 'react'
import { TeslaInfoOrderWrapper } from './style'

const TeslaInfoOrder = memo((props) => {
  const { teslaData } = props
  const [carIndex, setCarIndex] = useState(1)
  return (
    <TeslaInfoOrderWrapper>
      <div className="selectCar">选择车型</div>
      {teslaData.map((item, index) => {
        return (
          <div
            className={classNames('carList', { activeCar: carIndex === item.id })}
            key={item.id}
            onClick={(e) => {
              setCarIndex(item.id)
            }}
          >
            <div className="carName">{item.name}</div>
            <img src={item.configuration[0].carColor[item.id].configList[1].picUrl} />
          </div>
        )
      })}
    </TeslaInfoOrderWrapper>
  )
})

TeslaInfoOrder.propTypes = {}

export default TeslaInfoOrder
