import React from 'react';
import { useSelector } from 'react-redux';
import { Table, Divider } from 'antd';

export const PostsList = () => {
  const post = useSelector(state => state.props)

  const renderedPosts = post.map(post => {
    
  })
  return (
    <div>
      { renderedPosts }
      <Table columns={columns} dataSource={data} />
    </div>
    
  )
}