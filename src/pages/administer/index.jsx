import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  FileOutlined,
  UserOutlined,
  EditOutlined,
  TagOutlined,
} from '@ant-design/icons';
import { Breadcrumb, Layout, Menu } from 'antd';
import React, { useState, useEffect } from 'react';
import { NavLink as Link, Outlet, useLocation } from 'react-router-dom';
import BreadcrumbCustom from './BreadcrumbCustom/index';
import './style.less'
// import './index.css';
const { Header, Content, Sider } = Layout;
function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}
const items = [
  getItem(<Link to="/administer">博客管理</Link>, '/administer', <FileOutlined />, [
    getItem(<Link to="/administer/blog/article">文章管理</Link>, '/administer/blog/article', <EditOutlined />), 
    getItem(<Link to="/administer/blog/tag">标签管理</Link>, '/administer/blog/tag', <TagOutlined />),
  ]),
  getItem(<Link to="/administer/user">用户管理</Link>, '/administer/user', <UserOutlined />),
];

const Administer = (props) => {
  const [collapsed, setCollapsed] = useState(false);
  const [openKeys, setOpenKeys] = useState([]);
  const [selectedKeys, setSelectedKeys] = useState(['/']);

  let pathname = useLocation().pathname;//获取当前的地址，用于菜单栏当前选择项高亮

  useEffect(() => {//当路径发生改变时，设置选中的key
    setSelectedKeys([pathname])
  }, [pathname])

  const subMenuOpenChange = (openItems) => {
    //这个回调函数在你点多级菜单时会把当前点击的父key放到openItems数组中
    const curOpenKey = openItems[openItems.length - 1];
    //如果当前点击的菜单key包含其父级菜单 就打开该菜单
    //如果是另外的多级菜单 那么curOpenKey是不包含之前的菜单key的，则把openKeys更新为当前的父级菜单
    //如果是合上二级菜单curOpenKey为undefined，不加上这个条件就合不上
    if (!curOpenKey || curOpenKey.includes(openItems[0])) {
      setOpenKeys(openItems) 
    } else {
      setOpenKeys([curOpenKey]) 
    }
    //if和else里操作可能是异步的，因为我打印set后的OpenKeys没有变化
  }

  const menuItemClick = ({ key, keyPath }) => {
    setSelectedKeys([pathname])
    if (keyPath.length === 1) setOpenKeys([]);
  }
  
  let location = useLocation();//获取当前的地址，用于菜单栏当前选择项高亮

  return (
    <Layout
      style={{
        minHeight: '100vh',
      }}
    >
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="logo" />
        <Menu 
          theme="dark" 
          defaultSelectedKeys={['1']} 
          mode="inline" 
          items={items} 
          onClick={menuItemClick}
          openKeys={openKeys}
          onOpenChange={subMenuOpenChange}
        />
      </Sider>
      <Layout className="site-layout">
        <Header
          className="site-layout-background"
          style={{
            padding: 0,
            height: 50,
          }}
        >
          {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
            className: 'trigger',
            onClick: () => setCollapsed(!collapsed),
          })}
        </Header>
        <Content
          style={{
            margin: '24px 16px',
            padding: '24px',
            background: '#fff',
          }}
        >
          <Breadcrumb
            style={{
              margin: '16px 0',
            }}
          >
            <BreadcrumbCustom />
          </Breadcrumb>
          {/* 子路由出口 */}
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};
export default Administer;