import React from "react"
import { View, Image, Text } from '@tarojs/components'
import { AtIcon } from 'taro-ui'

const list = [{}, {}, {}, {}, {}]
const HasTitleList = () => {
    return (
        <>
            {list.map((item, index) => {
                return <View className='at-row hasTitleList' key={index}>
                    <View className='at-col at-col-4 hasTitleListView'>
                        <Image src='https://p.qqan.com/up/2024-4/17144466518620909.jpg' mode='scaleToFill' className='hasTitleListViewImg' />
                    </View>
                    <View className='at-col at-col-8 hasTitleListContent'>
                        <View className='hasTitleListContentTitle'>听我说谢谢你因为有你温暖了四季,你真的是哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈</View>
                        <View className='hasTitleListContentTime'>上传时间: 2024-01-23</View>
                        <View className='hasTitleListContentButtonGroup'>
                            <Text className='button'>
                                <AtIcon prefixClass='iconfont' value='xiazai1' size='11' color='#ffffff'></AtIcon>
                                &nbsp;&nbsp;下载
                            </Text>
                            <Text className='button button2'>
                                <AtIcon prefixClass='iconfont' value='youjian' size='11' color='#ffffff'></AtIcon>
                                &nbsp;&nbsp;邮件
                            </Text>
                        </View>
                    </View>
                </View>
            })
            }
        </>
    )
}

export default HasTitleList