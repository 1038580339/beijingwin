import React from "react";
import { View, Image } from '@tarojs/components'
import { AtIcon } from 'taro-ui'

const list = [{}, {}, {}, {}, {}]

const NoTitleList = () => {
    return <View className='at-row at-row--wrap noTitleList'>
        {list.map((item, index) => {
            return <View className='at-col at-col-5 noTitleListView' key={index}>
                <Image src='https://p.qqan.com/up/2024-4/17144466518620909.jpg' mode='aspectFit' className='noTitleListViewImg' />
                <View className='noTitleListViewButtonView'>
                    <AtIcon prefixClass='iconfont' value='xiazai1' size='15' color='#c7177e' className='noTitleListViewButton'></AtIcon>
                </View>
            </View>
        })}
    </View>
}

export default NoTitleList