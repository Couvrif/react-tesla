import { Route, Switch, useNavigate, useLocation } from 'react-router-dom'

import { tabs } from '@/assets/data/tabbarData'
import PropTypes from 'prop-types'
import React, { memo, useEffect, useState } from 'react'
import { TabbarWrapper } from './style'
import TabbarIem from './cpn/Tabbar-item'
import classNames from 'classnames'
import routes from '@/router'

const Tabbar = memo((props) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const navigate = useNavigate()
  const location = useLocation()
  const { pathname } = location

  const setRouteActive = (key, index) => {
    if (index === currentIndex) return
    navigate(key)
    setCurrentIndex(index)
  }

  useEffect(() => {
    // const index = routes.findIndex((v) => v.path === pathname)
    const index = tabs.findIndex((v) => v.key === pathname)
    setCurrentIndex(index)
    console.log('路径名称2', index, location, routes)
  }, [pathname])

  return (
    <TabbarWrapper>
      <div className={classNames('tabbar_content', { tabActive: currentIndex === -1 })}>
        {tabs.map((item, index) => {
          return (
            <div className={classNames('tabbar', { active: currentIndex === index })} onClick={(e) => setRouteActive(item.key, index)} key={index}>
              {currentIndex === index ? (
                <TabbarIem itemImg={item.activeIcon} itemTitle={item.title}></TabbarIem>
              ) : (
                <TabbarIem itemImg={item.icon} itemTitle={item.title}></TabbarIem>
              )}
            </div>
          )
        })}
      </div>
    </TabbarWrapper>
  )
})

Tabbar.propTypes = {}

export default Tabbar
