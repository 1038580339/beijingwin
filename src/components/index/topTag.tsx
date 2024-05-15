import React, { useState, useEffect } from 'react'
import { View } from '@tarojs/components'
import { AtTag } from 'taro-ui'

interface Props {
    list: ListContent[]
    onSelect: Function
}

interface ListContent {
    createDate: string
    fatherId: string
    id: string
    informationTypeName: string
    isNewRecord: boolean
    updateDate: string
}

const TopTag = (props: Props) => {
    const [current, setCurrent] = useState('')

    useEffect(() => {
        if (!props.list.length) {
            setCurrent('')
        } else if (!current) {
            setCurrent(props.list[0].id)
        } else {
            let hasCurrent = false;
            for (let i in props.list) {
                if (props.list[i].id === current) {
                    hasCurrent = true
                }
            }
            if (!hasCurrent) {
                setCurrent(props.list[0].id)
            }
        }
    }, [props.list])

    useEffect(() => {
        props.onSelect(current)
    }, [current])


    const onClick = (value) => {
        if (!value.active)
            setCurrent(value.name)
    }
    return <View className='topTag'>
        {props.list.map(item => {
            return <AtTag name={item.id} onClick={onClick} key={item.id} active={current === item.id} size='small' className='topTagContent'>
                {item.informationTypeName}
            </AtTag>
        })}
    </View>
}

export default TopTag
