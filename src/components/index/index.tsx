import React, { useEffect, useState } from 'react'
import { View } from '@tarojs/components'
import TopTabBar from './topTabBar'
import SearchInput from './topSearchInput'
import TopTag from './topTag'
import NoTitleList from './noTitleList'
import HasTitleList from './hasTitleList'
import { findListType, findList } from '../../api/api'

import './index.scss'

interface Props {
  type: 1 | 2 | 3
  id: string
}

const Index = (props: Props) => {
  const [firstTitleList, setFirstTitleList] = useState([])
  const [firstTitleSelected, setFirstTitleSelected] = useState('')
  const [secondTitleList, setSecondTitleList] = useState([])
  const [secondTitleSelected, setSecondTitleSelected] = useState('')
  const [nowSecondFatherId, setNowSecondFatherId] = useState('')

  const findListTypeFunc = async () => {
    const res = await findListType({ fatherId: props.id })
    setFirstTitleList(res?.data?.list || [])
  }
  const findListTypeFunc2 = async id => {
    const res = await findListType({ fatherId: id })
    setSecondTitleList(res?.data?.list || [])
    setNowSecondFatherId(id)
  }
  const onSelect = id => {
    if (id) {
      setFirstTitleSelected(id)
    }
  }

  const onSelect2 = id => {
    if (id) {
      setSecondTitleSelected(id)
    }
  }

  useEffect(() => {
    findListTypeFunc()
  }, [])

  useEffect(() => {
    if (firstTitleSelected) {
      findListTypeFunc2(firstTitleSelected)
    }
  }, [firstTitleSelected])

  const findListFunc = async id => {
    const res = await findList({ informationTypeId: id })
    console.log(res)
  }

  useEffect(() => {
    console.log(firstTitleSelected, nowSecondFatherId)
    if (firstTitleSelected === nowSecondFatherId) {
      const id = secondTitleList.length ? secondTitleSelected : firstTitleSelected
      if (id) {
        findListFunc(id)
      }
    }
  }, [firstTitleSelected, nowSecondFatherId, secondTitleSelected, secondTitleList])
  if (props.type === 1) {
    return (
      <View className='index'>
        <SearchInput />
        <TopTabBar list={firstTitleList} onSelect={onSelect} />
        {secondTitleList.length ? <TopTag list={secondTitleList} onSelect={onSelect2} /> : null}
        <NoTitleList />
      </View>
    )

  } else if (props.type === 2) {
    return (
      <View className='index'>
        <SearchInput />
        <TopTabBar list={firstTitleList} onSelect={onSelect} />
        {secondTitleList.length ? <TopTag list={secondTitleList} onSelect={onSelect2} /> : null}
        <HasTitleList />
      </View>
    )

  } else if (props.type === 3) {
    return (
      <View className='index'>
        <SearchInput />
        <TopTabBar list={firstTitleList} onSelect={onSelect} />
        {secondTitleList.length ? <TopTag list={secondTitleList} onSelect={onSelect2} /> : null}
        <HasTitleList />
      </View>
    )
  }
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
