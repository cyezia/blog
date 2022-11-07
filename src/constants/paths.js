export const pathsMap = {
  index: '/', // 首页
  login: '/login', // 登录
  // 后台管理
  administer: '/administer',
  userManagement: '/administer/user', // 用户管理

  article: '/administer/blog/article', // 文章管理
  tagManagement: '/administer/blog/tag', // 标签管理
  editor: '/editor' // 写作页面
}

export const administerRouterList = [
  {
    title: '博客管理',
    icon: 'BookOutlined',
    children: [
      {
        title: '文章管理',
        path: pathsMap.article,
        icon: 'EditOutlined'
      },
      {
        title: '标签管理',
        path: pathsMap.tagManagement,
        icon: 'TagOutlined'
      }
    ]
  },
  {
    title: '用户管理',
    path: pathsMap.userManagement,
    icon: 'UserOutlined'
  }
]
