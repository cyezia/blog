import { Breadcrumb } from 'antd';
import React from 'react';
import { NavLink as Link, useLocation } from 'react-router-dom';
import './style.less';

const breadcrumbNameMap = {
  '/administer': '',
  '/administer/blog/article': '文章管理',
  '/administer/blog/tag' : '标签管理',
  '/administer/user' : '用户管理',
};

  const BreadcrumbCustom = () => {
    const location = useLocation(); 
    const pathSnippets = location.pathname.split('/').filter((i) => i);
    const extraBreadcrumbItems = pathSnippets.map((_, index) => {
      const url = `/${pathSnippets.slice(0, index + 1).join('/')}`;
      // console.log('------url------')
      // console.log(url)
      return (
        <Breadcrumb.Item key={url}>
          <Link to={url}>{breadcrumbNameMap[url]}</Link>
        </Breadcrumb.Item>
      );
    });

  const breadcrumbItems = [
    <Breadcrumb.Item key="breadcrumbCustom">
      <Link to=""></Link>
    </Breadcrumb.Item>,
  ].concat(extraBreadcrumbItems);

  return (
    <div className="demo">
      <Breadcrumb>{breadcrumbItems}</Breadcrumb>
    </div>
  );
};

export default BreadcrumbCustom;