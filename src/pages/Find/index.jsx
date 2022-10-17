import PropTypes from 'prop-types'
import React, { memo, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { FindWrapper } from './style'
import Lazyload, { forceCheck } from 'react-lazyload'
import loading from '@/assets/img/loading/1.gif'
import { fetchFindData } from '@/store/modules/find'
import { useNavigate } from 'react-router-dom'

const Find = memo((props) => {
  const [pageIndex, setPageIndex] = useState(1)

  const findData = useSelector((state) => state.find.findData)
  const dispatch = useDispatch()

  console.log('finddata', findData)

  useEffect(() => {
    dispatch(fetchFindData(pageIndex))
  }, [dispatch])

  const navigate = useNavigate()
  const gotoNews = (item) => {
    navigate(`/find/findInfo/${item.id}`, { state: item })
    console.log('goto', item)
  }

  return (
    <FindWrapper>
      <div className="find-main">
        <div className="mainTitle">推荐</div>
        <div className="container">
          <div className="teslaFind">
            <img src="https://china-community-app.tesla.cn/community-media/de6f422a-4c62-4a90-a5b0-c7460783bf4b.png" />
          </div>
          <div className="teslaNews">
            {findData.length > 0 &&
              findData.map((item, index) => {
                return (
                  <div className="news" key={index} onClick={() => gotoNews(item)}>
                    <div className="newsLeft">
                      <h1>{item.title}</h1>
                      <p>{item.date}</p>
                    </div>
                    <div className="newsRight">
                      <Lazyload height={100} placeholder={<img width="100%" height="100%" src={loading} />}>
                        <img src={item.picUrl} />
                      </Lazyload>
                    </div>
                  </div>
                )
              })}
          </div>
        </div>
      </div>
    </FindWrapper>
  )
})

Find.propTypes = {}

export default Find
