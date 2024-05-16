import Taro from '@tarojs/taro'

const url = 'https://39.106.249.4:8443/obu'

const login = () => {
    Taro.login({
        success: res => {
            if (res.code) {
                Taro.request({
                    url: `${url}/a/login?__ajax=true&wechatLogin=true&code=${res.code}`,
                    method: 'POST',
                    header: {
                        'content-type': 'application/json' // 默认值
                    },
                    success: resp => {
                        Taro.setStorage({
                            key: "sessionId",
                            data: resp.data.sessionid
                        })
                    }
                })
                console.log(res.code)

            } else {
                console.log('登录失败！' + res.errMsg)
            }
        }
    })

    // wx.qy.login({
    //     success(res) {
    //         console.log(res)
    //     }
    // })
}

const findList = async (props) => {
    let sessionId = Taro.getStorageSync('sessionId')
    const { data } = await Taro.request({
        url: `${url}/a//information/obuInformation/findList?jeesite.session.id=${sessionId}&informationTypeId=${props.informationTypeId}`,
        method: 'GET',
        header: {
            'content-type': 'application/json' // 默认值
        },
    })

    return data
}

const findListType = async (props) => {
    let sessionId = Taro.getStorageSync('sessionId')
    const { data } = await Taro.request({
        url: `${url}/a//information/obuInformationType/findList?jeesite.session.id=${sessionId}&fatherId=${props.fatherId}`,
        method: 'GET',
        header: {
            'content-type': 'application/json' // 默认值
        },
    })
    return data

}

const findIntegralPage = async props => {
    var sessionId = Taro.getStorageSync('sessionId')
    const res = await Taro.request({
        url: `${url}/a/integral/obuIntegral/findIntegralPage`,
        data: {
            'jeesite.session.id': sessionId,
            ...props
        },
        method: 'GET',
        header: {
            'content-type': 'application/json' // 默认值
        }
    })

    return res.data
}

const getMyIntegral = async () => {
    var sessionId = Taro.getStorageSync('sessionId')
    const res = await Taro.request({
        url: `${url}/a/integral/obuIntegral/getMyIntegral`,
        data: {
            'jeesite.session.id': sessionId,
        },
        method: 'GET',
        header: {
            'content-type': 'application/json' // 默认值
        }
    })

    return res.data
}


const findObuTestPage = async (props) => {
    let sessionId = Taro.getStorageSync('sessionId')
    const { data } = await Taro.request({
        url: `${url}/a/exams/obuTest/findObuTestPage?jeesite.session.id=${sessionId}&start=${props.start}&length=${props.length}`,
        method: 'GET',
        header: {
            'content-type': 'application/json' // 默认值
        },
    })
    return data

}




export { login, findListType, findIntegralPage, getMyIntegral, findList, findObuTestPage }