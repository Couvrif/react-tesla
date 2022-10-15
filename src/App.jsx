import routes from './router'
import { useRoutes } from 'react-router-dom'
import Tabbar from './base-ui/Tabbar'

function App() {
  return (
    <div className="App">
      {useRoutes(routes)}
      <Tabbar></Tabbar>
    </div>
  )
}

export default App
