import React from 'react';
import Index from '../pages/index';  // 首页
import Login from '../pages/Login/index';  // 登录
import Administer from '../pages/administer/index';  // 后台管理界面
import UserManagement from '../pages/administer/userManagement/index';
import Article from '../pages/administer/blogManagement/article/index'
import Tag from '../pages/administer/blogManagement/tag/index';
import Editor from '../pages/administer/blogManagement/editor';
import { pathsMap } from '../constants/paths'

// console.log('pathsMap :>> ', pathsMap);
const router = [
  {
    path: pathsMap.index,
    element: <Index />
  },
  {
    path: pathsMap.login,
    element: <Login />
  },
  {
    path: pathsMap.administer,
    element: <Administer />,
    children: [
      {
        path: pathsMap.userManagement,
        element: <UserManagement />
      },
      {
        path: pathsMap.article,
        element: <Article />
      },
      {
        path: pathsMap.tagManagement,
        element: <Tag />
      }
    ]
  },
  {
    name: 'editor',
    path: pathsMap.editor,
    element: <Editor />
  },
]

export default router;
