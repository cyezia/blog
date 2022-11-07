import React from 'react'
import Index from '../pages/index';  // 首页
import Login from '../pages/Login/index';  // 登录
import Administer from '../pages/administer/index';  // 后台管理界面
import UserManagement from '../pages/administer/userManagement/index';
import Article from '../pages/administer/blogManagement/article/index'
import Tag from '../pages/administer/blogManagement/tag/index';

const menuRoute = [
  {
    title: "博客管理",
    key: "menu1",
    path: "/administer",
    subMenu: [
      {
        name: "文章管理",
        path:"/administer/blog/article",
        element: <Article />
      },
      {
        name: "标签管理",
        path: "/administer/blog/tag",
        element: <Tag />
      }
    ],
  },
  {
    title: "用户管理",
    key: "menu2",
    path: '/administer/user',
    element: <UserManagement />
  },
  {
    path: '/administer/user',
    element: <UserManagement />
  },
  {
    path: '/administer/blog/article',
    element: <Article />
  },
  {
    path: '/administer/blog/tab',
    element: <Tag />
  }
]

export default menuRoute