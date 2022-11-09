import { Breadcrumb } from 'antd';
import React from 'react';
import { NavLink as Link, useLocation } from 'react-router-dom';
import './style.less';

const breadcrumbNameMap = {
  '/administer': '博客管理',
  '/administer/blog/article': '文章管理',
  '/administer/blog/tag' : '标签管理',
  '/administer/user' : '用户管理',
};

  const BreadcrumbCustom = () => {
    const location = useLocation(); 
    const url = location.pathname
    let isIndex = false;
    if(url === '/') {
      isIndex = true;
    }

    const breadcrumbItems = [
      // <Breadcrumb.Item key="article"></Breadcrumb.Item>,
      <Breadcrumb.Item key={url}><Link to={url}>{breadcrumbNameMap[url]}</Link></Breadcrumb.Item>
    ]
    // console.log('breadcrumbItems', breadcrumbItems);

  return (
    <div className="demo">
      <Breadcrumb>{breadcrumbItems}</Breadcrumb>
    </div>
  );
};

export default BreadcrumbCustom;