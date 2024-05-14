import React, { useState } from 'react'
import { View, } from '@tarojs/components'
import { AtIcon } from 'taro-ui'

const IconForTitle = {
    0: {
        value: 'a-1-yixuehuandeng-copy',
        name: '医学幻灯'
    },
    1: {
        value: 'a-1-tuiguangziliao-copy',
        name: '推广资料'
    },
    2: {
        value: 'a-1-huanjiaoziliao-copy',
        name: '患教资料'
    },
    3: {
        value: 'a-3-huiyigonggao-copy',
        name: '会议公告'
    }
}

const TopTabBar = () => {
    const list = [{ type: 0 }, { type: 1 }, { type: 2 },{ type: 3 }]
    const [current, setCurrent] = useState(0)
    const handleClick = value => {
        setCurrent(value)
    }
    return <View className='at-row topTabBar'>
        {list.map(item => {
            return <View className='at-col at-col-3' key={item.type} onClick={() => {
                handleClick(item.type)
            }}
            >
                <View style={{ textAlign: 'center' }}>
                    <AtIcon prefixClass='iconfont' value={IconForTitle[item.type]['value']} size='59' color={item.type === current ? '#c7177e' : '#0490bf'}></AtIcon>
                </View>
                <View className={item.type === current ? 'selectedTopFontStyle' : 'topFontStyle'}>{IconForTitle[item.type]['name']}</View>
            </View>
        })}
    </View>
}

export default TopTabBar