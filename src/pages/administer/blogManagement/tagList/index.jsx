import { Table, Divider } from 'antd';
import React from 'react';


const TagList = (props) => {
  // console.log("props", props);
  const columns = [
    {
      title: '名称',
      dataIndex: 'name',
      render: t => t
    },
    {
      title: '颜色',
      dataIndex: 'color',
      render: (t, r) => (
        <div>
          <div style={{backgroundColor: r.color, width: 10, height: 10, display: 'inline-block'}}></div>
          <span>{ t }</span>
        </div>
      )
    },
    {
      title: '操作',
      render: (_, record) => (
        <span>
          <a onClick={() => props.handleEdit(record)}>修改</a>
          <Divider type="vertical" />
          <a onClick={() => props.updateData(record, 'delete')} style={{color: '#ff4d4f'}}>删除</a>
        </span>
      )
    },
  ];
  return (
    <Table columns={columns} dataSource={props.data} rowKey='key' />
  )
}

export default TagList;