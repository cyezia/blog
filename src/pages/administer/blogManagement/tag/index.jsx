import { ExclamationCircleOutlined } from '@ant-design/icons';
import { Button, Modal, Space, Form, Input } from 'antd';
import React, { useState } from 'react';
import TagList from '../tagList';
import './style.less';

let index = 1;
function Tag(props) {
  // Form.useForm()对表单数据进行交互
  const [form] = Form.useForm();

  // 修改的数据 具体的数据是对象类型的
  const [editData, setEditData] = useState({});

 // type用于标识操作的类型
  const [type, setType] = useState('');

  // 模拟Table表格数据
  const [data, setData] = useState([])
  // Modal弹窗
  const [modalOpen, setModalOpen] = useState(false);
  const hideModal = () => {
    setModalOpen(false);
  }

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
        title={ (type === 'add' ? '添加' : '修改') + '标签'}
        style={{ top: 20 }}
        open={modalOpen}
        onOk={() => handleSumbit()}
        onCancel={() => setModalOpen(false)}
        okText="确认"
        cancelText="取消"
      >
        {/* Form表单输入内容 */}
        <Form form={form} name='form'>
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
      <TagList data={data} handleEdit={handleEdit} updateData={updateData} />       
    </div>
  )
}

export default Tag;