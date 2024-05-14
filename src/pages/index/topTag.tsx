import React, { useState } from 'react'
import { View } from '@tarojs/components'
import { AtTag } from 'taro-ui'

const TopTag = () => {
    const list = [{ name: '指南共享' }, { name: '医学沙龙卡' }]
    const [current, setCurrent] = useState(list[0]?.name)
    const onClick = (value) => {
        if (!value.active)
            setCurrent(value.name)
    }
    return <View className='topTag'>
        {list.map(item => {
            return <AtTag name={item.name} onClick={onClick} key={item.name} active={current === item.name} size='small' className='topTagContent'>
                {item.name}
            </AtTag>
        })}
    </View>
}

export default TopTag
