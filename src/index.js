import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import 'normalize.css'
import './assets/css/index.less'
import { ThemeProvider } from 'styled-components'
import theme from './assets/theme'
import { BrowserRouter } from 'react-router-dom'
import Loading from './base-ui/loading'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <Suspense fallback={<Loading></Loading>}>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <App></App>
      </BrowserRouter>
    </ThemeProvider>
  </Suspense>
)
