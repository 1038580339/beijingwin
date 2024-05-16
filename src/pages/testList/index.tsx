import React, { useState, useEffect } from 'react'
import Taro from '@tarojs/taro'
import { View, Text, ScrollView } from "@tarojs/components";
import { AtIcon, AtButton } from 'taro-ui'
import { findObuTestPage } from '../../api/api'
import "./index.scss";

interface List {
  id: string
}

const Index = () => {
  const [page, setPage] = useState(0)
  const [list, setList] = useState([] as List[])
  const [ifGetList, setIfGetList] = useState(true)


  const getList = async () => {
    Taro.showLoading({
      title: '加载中',
    })
    const res = await findObuTestPage({
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
    getList()
  }, [])

  const onScrollLower = () => {
    if (ifGetList) {
      getList()
    }

  }

  return (
    <ScrollView style={{ height: '100%' }} scrollY onScrollToLower={onScrollLower}>
      {
        list.map(item => {
          return (
            <View className='at-row testListItem at-row__justify--between' key={item.id}>
              <View className='at-col at-col-8'>
                <View className='testListItemTitle'>考试事例名称考试事例名称考试事例名称考试事例名称</View>
                <View className='testListItemTitleScore'>
                  <Text>当前最高分 80分</Text>
                  <Text className='testListItemTitleScoreText'>考试次数 4次</Text>
                </View>
              </View>
              <View className='at-col at-col-4'>
                {/* <AtButton type='primary' size='small' className='button'>
                  <AtIcon prefixClass='iconfont' value='arrow-up' size='16' color='#fff'></AtIcon>
                  考试
                </AtButton> */}

                <View className='passView'>
                  <View className='pass'>通过</View>
                  <View className='passScore'>80分</View>
                </View>
              </View>
            </View>
          )
        })
      }
    </ScrollView>
  );
};

export default Index;
