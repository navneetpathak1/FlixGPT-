import appStore from "./utils/appStore"
import './App.css'
import Streamify from './main/Streamify'
import { Provider } from 'react-redux'


function App() {

  return (
    <>
      <Provider store = {appStore}>
        <Streamify/>
      </Provider>
    </>
  )
}

export default App
