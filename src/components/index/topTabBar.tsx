import React, { useEffect, useState } from 'react'
import { View, } from '@tarojs/components'
import { AtIcon } from 'taro-ui'

const IconForTitle = {
    '3': 'a-1-huanjiaoziliao-copy',
    '4': 'a-1-goutonghuashu-copy',
    '2': 'a-1-yixuehuandeng-copy',
    '1': 'a-2-tuiguangcelve-copy',
    '17': 'a-2-jingpinxinxi-copy',
    '16': 'a-2-tuiguangcelve-copy',
    '19': 'a-3-jingxuanhuodong-copy',
    '18': 'a-3-huiyigonggao-copy'
}


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

const TopTabBar = (props: Props) => {
    const [current, setCurrent] = useState('')
    const handleClick = value => {
        setCurrent(value)
    }

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

    return <View className='at-row topTabBar'>
        {props.list.map(item => {
            return <View className='at-col at-col-3' key={item.id} onClick={() => {
                handleClick(item.id)
            }}
            >
                <View style={{ textAlign: 'center' }}>
                    <AtIcon prefixClass='iconfont' value={IconForTitle[item.id]} size='59' color={item.id === current ? '#c7177e' : '#0490bf'}></AtIcon>
                </View>
                <View className={item.id === current ? 'selectedTopFontStyle' : 'topFontStyle'}>{item.informationTypeName}</View>
            </View>
        })}
    </View>
}

export default TopTabBar