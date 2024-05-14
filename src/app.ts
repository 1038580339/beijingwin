
import Taro from '@tarojs/taro'
import './app.scss'
import { login } from './api/api'

const App = props => {

  login()

  return props.children
}

export default App
