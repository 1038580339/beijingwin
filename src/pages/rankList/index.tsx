import React, { useState, useEffect } from 'react'
import Taro from '@tarojs/taro'
import { View, Text, ScrollView } from "@tarojs/components";
import { AtIcon } from 'taro-ui'
import { findIntegralPage, getMyIntegral } from '../../api/api'
import "./index.scss";

interface User {
  name: String
}

interface List {
  integral: Number
  user: User
}


const Index = () => {
  const [integral, setIntegral] = useState(0)
  const [num, setNum] = useState(0)
  const [page, setPage] = useState(0)
  const [list, setList] = useState([] as List[])
  const [ifGetList, setIfGetList] = useState(true)

  const getIntegral = async () => {
    const res = await getMyIntegral();
    setIntegral(res?.data?.integral || 0)
    setNum(res?.data?.num || 0)
  }

  const getList = async () => {
    Taro.showLoading({
      title: '加载中',
    })
    const res = await findIntegralPage({
      start: page,
      length: 10
    });

    Taro.hideLoading()
    if (res.data.list.length) {
      setList([...list, ...res.data.list])
      setPage(page + 1)
    } else {
      setIfGetList(false)
    }
  }

  useEffect(() => {
    getIntegral();
    getList()
  }, [])

  const onScrollLower = () => {
    if (ifGetList) {
      getList()
    }

  }

  return (
    <ScrollView style={{ height: '100%' }} scrollY onScrollToLower={onScrollLower}>
      <View className='rankTop'>
        <View className='rankTopContent'>
          <Text className='text1'>我的积分</Text>
          <Text className='text2'>{integral}</Text>
        </View>
      </View>
      <View className='rankMe'>
        您当前的排名为:
        <Text className='rankMeNum'>{num}</Text>
      </View>
      <View className='rankList'>
        {
          list.map((item, index) => {
            return <View className='at-row at-row__justify--between rankListItem' key={index}>
              <View className='at-col at-col-5'>
                <View className={`prefixIcon ${index < 3 ? 'prefixIcon' + index : ''}`}></View>
                {item.user.name}
              </View>
              <View className='at-col at-col-5 rankListRight'>
                {item.integral}
                <View className='endfixIcon'>
                  {/* <AtIcon prefixClass='iconfont' value='arrow-up' size='16' color='#dd559d'></AtIcon> */}
                  {/* <AtIcon prefixClass='iconfont' value='line' size='16' color='#959595'></AtIcon> */}
                  {/* <AtIcon prefixClass='iconfont' value='arrow-up-copy' size='16' color='#00a6d0'></AtIcon> */}
                </View>
              </View>
            </View>
          })
        }
      </View>
    </ScrollView >
  );
};

export default Index;
