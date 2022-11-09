import React from 'react';
import { useSelector } from 'react-redux';
import { Table, Divider } from 'antd';

  const PostsList = () => {
  const post = useSelector(state => state.props)
  const columns = [
    {
      title: '名称',
      dataIndex: 'name',
      render: t => t,
    },
    {
      title: '操作',
      render: (_, record) => (
        <span>
          <a onClick={() => handleEdit(record, 'edit')}>修改</a>
          <Divider type="vertical" />
          <a onClick={() => {updateData(record, 'delete')}} style={{color: '#ff4d4f'}} >删除</a>
        </span>
      ),
    },
  ];

  const renderedPosts = post.map(post => {
    
  })
  return (
    <div>
      { renderedPosts }
      <Table columns={columns} dataSource={data} />
    </div>
    
  )
}

export default PostsList;