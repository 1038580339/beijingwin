
import Taro from '@tarojs/taro'
import './app.scss'
import { login } from './api/api'
import React, { useEffect, useState } from 'react'

const App = props => {
  const [ifLogin, setIfLogin] = useState(false)

  const myLogin = async () => {
    Taro.showLoading({
      title: '加载中',
    })
    await login()
    setIfLogin(true)
    Taro.hideLoading()

  }

  useEffect(() => {
    myLogin()
  }, [])

  return ifLogin ? props.children : null
}

export default App
