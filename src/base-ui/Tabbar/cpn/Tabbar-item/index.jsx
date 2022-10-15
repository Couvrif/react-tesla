import PropTypes from 'prop-types'
import React, { memo } from 'react'
import { TabbarItemWrapper } from './style'

const TabbarIem = memo((props) => {
  const { itemImg, itemTitle } = props
  return (
    <TabbarItemWrapper>
      <div className="tabbar-item">
        <img src={itemImg} alt="" />
        <div className="tabbar-item-title">{itemTitle}</div>
      </div>
    </TabbarItemWrapper>
  )
})

TabbarIem.propTypes = {
  itemImg: PropTypes.string,
  itemTitle: PropTypes.string
}

export default TabbarIem
