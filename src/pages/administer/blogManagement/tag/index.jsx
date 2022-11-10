import React, { useState, useEffect } from 'react';
import { Button, Modal, Space, Form, Input, Table, Divider } from 'antd';
import './style.less';

let index = 1;
function Tag() {
  // Form.useForm()对表单数据进行交互
  const [form] = Form.useForm();

  // 修改的数据 具体的数据是对象类型的
  const [editData, setEditData] = useState({});

 // type用于标识操作的类型
  const [type, setType] = useState('');

  // 模拟Table表格数据
  const [data, setData] = useState([
    {
      key: 1,
      name: '1',
      color: '1'
    },
    {
      key: 2,
      name: '2',
      color: '2'
    },
    {
      key: 3,
      name: '3',
      color: '3'
    }
  ])
  // Modal弹窗
  const [modalOpen, setModalOpen] = useState(false);

  // 监听data数据变化
  useEffect(() => {
    console.log('data', data);
  }, [data])

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
          <a onClick={() => handleEdit(record)}>修改</a>
          <Divider type="vertical" />
          <a onClick={() => updateData(record, 'delete')} style={{color: '#ff4d4f'}}>删除</a>
        </span>
      )
    },
  ];

  // 添加按钮事件
  const handleSumbit = () => {
    // getFieldsValue获取表单的值
    const { name, color } = form.getFieldsValue();
    console.log("form表单的数据", form);

    // 添加
    if(type === 'add') {
      setData([...data, {
        key: index,
        name: name,
        color: color
      }])
      index++
    }
    console.log("data", data);
    console.log("添加的Data", setData([...data, {
      key: index,
      name: name,
      color: color
    }]))

    // 修改
    if(type === 'edit') {
      const dataTemp = [...data];
      console.log("dataTemp", dataTemp);
      console.log("editData", editData);
      dataTemp.map(item => {
        if(item.key === editData.key) {
          item.name = name,
          item.color = color
        }
      })
      // console.log("新dataTemp", dataTemp);
      setData(dataTemp);
    }
    // 关闭弹窗
    setModalOpen(false);
  };


  // 添加
  const handleAdd = () => {
    // 点击添加按钮 打开Modal弹框
    setModalOpen(true);
    setType('add')
  }

  // 修改 通过record拿到修改的数据
  const handleEdit = (record) => {
    console.log("record", record);
    // 点击修改按钮 打开Modal弹框
    setModalOpen(true);
    setType('edit')
    // 通过record拿到修改的数据
    setEditData(record);
    // 展示当前表单的值
    form.getFieldsValue({
      name: record.name,
      color: record.color
    })
  }

  // 删除
  const updateData = (param, type) => {
    console.log('param', param);
    const dataTemp = [...data];
    if(type === 'delete') {
      console.log("delete data", setData(dataTemp.filter(item => {
        return item.key !== param.key
      })))
      // filter会返回符合条件的元素
      setData(dataTemp.filter(item => {
        return item.key !== param.key
      }))
      return
    }
  }

  return (
    <div className="header">
      <Button onClick={() => handleAdd()}>添加</Button>
      {/* Modal弹窗 */}
      <Modal
        title={ (type === 'edit' ? '修改' : '添加') + '标签'}
        style={{ top: 20 }}
        open={modalOpen}
        onOk={() => handleSumbit()}
        onCancel={() => setModalOpen(false)}
        okText="确认"
        cancelText="取消"
        destroyOnClose={true}  // 关闭时销毁Modal里的子元素
      >
        {/* Form表单输入内容 */}
        <Form form={form} name='form' preserve={false}>
          <Form.Item
            label="标签名称"
            name="name"
            rules={[
              {
                required: true,
                message: '请输入标签名称!',
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="标签颜色"
            name="color"
            rules={[
              {
                required: true,
                message: '请输入标签颜色!',
              },
            ]}
          >
            <Input />
          </Form.Item>
        </Form>
      </Modal>
      <Table columns={columns} dataSource={data} rowKey='key' />      
    </div>
  )
}

export default Tag;