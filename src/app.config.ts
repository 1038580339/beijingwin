export default {
  pages: [
    'pages/home/index',
    'pages/market/index',
    'pages/active/index',
    'pages/mine/index',
    'pages/userPic/index',
    'pages/rankList/index',
    'pages/richText/index',
    'pages/test/index',
    'pages/testList/index'
  ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  },
  tabBar: {
    // custom: true,
    color: "#000000",
    selectedColor: "#000000",
    backgroundColor: "#fff",
    list: [
      {
        pagePath: "pages/home/index",
        text: "首页",
        iconPath: 'assets/home.png',
        selectedIconPath: 'assets/homeSelect.png'
      },
      {
        pagePath: "pages/market/index",
        text: "市场",
        iconPath: 'assets/market.png',
        selectedIconPath: 'assets/marketSelect.png'
      },
      {
        pagePath: "pages/active/index",
        text: "活动",
        iconPath: 'assets/active.png',
        selectedIconPath: 'assets/activeSelect.png'
      },
      {
        pagePath: "pages/mine/index",
        text: "我的",
        iconPath: 'assets/my.png',
        selectedIconPath: 'assets/mySelect.png'
      },
    ]
  }
}
