import React, { useEffect } from 'react'
import { View } from '@tarojs/components'
import TopTabBar from './topTabBar'
import SearchInput from './topSearchInput'
import TopTag from './topTag'
import NoTitleList from './noTitleList'
import HasTitleList from './hasTitleList'
import { findListType } from '../../api/api'

import './index.scss'

const Index = () => {

  useEffect(() => {
    findListType()
  }, [])
  return (
    <View className='index'>
      <SearchInput />
      <TopTabBar />
      <TopTag />
      <NoTitleList />
      <HasTitleList />
    </View>
  )
}

export default Index
