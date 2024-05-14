import React from 'react'
import { View, Text, Image } from "@tarojs/components";
import { AtList, AtListItem } from "taro-ui"
import Taro from '@tarojs/taro';

import "./index.scss";

const Index = () => {
  const changeTab = val => {
    Taro.navigateTo({
      url: val,
    })
  }
  return (
    <View className='mine'>
      <Image src='https://p.qqan.com/up/2024-4/17144466518620909.jpg' mode='aspectFit' className='myBg' />

      <AtList className='list'>
        <AtListItem
          title='患者画像'
          arrow='right'
          iconInfo={{ size: 25, color: '#000000', value: 'tubiao_nenglihuaxiang_nenglihuaxiang', prefixClass: 'iconfont' }}
          className='listItem'
          onClick={() => { changeTab('/pages/userPic/index') }}
        />
      </AtList>

      <AtList className='list'>
        <AtListItem
          title='我的考试'
          arrow='right'
          iconInfo={{ size: 25, color: '#000000', value: 'kaoshi', prefixClass: 'iconfont' }}
          className='listItem'
          onClick={() => { changeTab('/pages/testList/index') }}
        />
      </AtList>

      <AtList className='list'>
        <AtListItem
          title='排行榜'
          arrow='right'
          iconInfo={{ size: 25, color: '#000000', value: 'paihangbang_paiming', prefixClass: 'iconfont' }}
          className='listItem'
          onClick={() => { changeTab('/pages/rankList/index') }}
        />
      </AtList>
    </View>
  );
};

export default Index;
