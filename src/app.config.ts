export default {
  pages: [
    'pages/index/index',
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
        pagePath: "pages/index/index",
        text: "首页",
        iconPath: 'assets/home.png',
        selectedIconPath: 'assets/homeSelect.png'
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
