import PropTypes from 'prop-types'
import React, { memo } from 'react'
import { LoadingWrapper } from './style'

const Loading = memo((props) => {
  return (
    <LoadingWrapper>
      <div className="bg">
        <img src={require('@/assets/img/loading/full-screen-loading.gif')} alt="" />
      </div>
    </LoadingWrapper>
  )
})

Loading.propTypes = {}

export default Loading
