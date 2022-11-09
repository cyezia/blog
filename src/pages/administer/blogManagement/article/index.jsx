import React, { useState } from 'react';
import { Link, useNavigate, Route, Routes, useParams } from 'react-router-dom';
import { Table, Divider } from 'antd';
import { connect } from 'react-redux';
import Editor from '../editor/index';
import { actionCreators } from '../../../../store/tables';
import './style.less';

const state = {
  messageArr: [
    {
      id: '1',
      type: 'create'
    },
    // {
    //   id: '2',
    //   type: 'edit'
    // }
  ]
}

const Article = (props) => {
  console.log('props', props.dataSource.toJS());
  const { messageArr } = state;
  const navigate = useNavigate();
  // let dataSource = props.dataSource;
  let dataSource = props.dataSource.toJS();
  // console.log('dataSource', dataSource);

  // const [data, setData] = useState([
  //   {
  //     key: '1',
  //     name: 'test1',
  //   },
  //   {
  //     key: '2',
  //     name: 'test2',
  //   },
  //   {
  //     key: '3',
  //     name: 'test3',
  //   },
  // ]);
  // Table数据
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
          {/* <a onClick={() => handleEdit(record, 'edit')}>修改</a>
          <Divider type="vertical" />
          <a onClick={() => {updateData(record, 'delete')}} style={{color: '#ff4d4f'}} >删除</a> */}
          <a onClick={props.handleEdit(record)}>修改</a>
          <Divider type="vertical" />
          <a onClick={props.handleDelete(record)} style={{color: '#ff4d4f'}} >删除</a>
        </span>
      ),
    },
  ];

  // 删除
  const updateData = (param, type) => {
    console.log('param', param);
    const dataTemp = [...data];
    console.log('dataTemp', dataTemp);
    if(type === 'delete') {
      console.log('filter处理后的数据', dataTemp.filter(item => {
        // filter会返回符合条件的元素
        return item.key !== param.key
      }))
      setData(dataTemp.filter(item => {
        return item.key !== param.key
      }))
      return
    }
  }

  // push跳转 以params参数为例 navigate默认开始push跳转
  // const handleView = (id, type) => {
  //   navigate(`/editor/${type}`);
  // }

  const handleEdit = () => {
    navigate(`/editor/edit`);
  }

  return (
    <div className="articleHeader">
      <div className="write">
        <ul>
          {
            messageArr.map((msgObj) => {
              return (
                <li key={msgObj.id}>
                  {/* 向路由组件传递params参数 */}
                  <Link to={`/editor/${msgObj.type}`} target = "_blank" style={{color: '#fff'}}>写文章</Link>
                </li>
              )
            })
          }
        </ul>
        <Routes>
          {/* 声明接收param参数 */}
          <Route path="`/editor/:type`" element={<Editor />} />
        </Routes>
      </div>
      <Table columns={columns} dataSource={dataSource} />
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    dataSource: state.get('tables').get('dataSource')
  }
}
const mapDispatchToProps = (dispatch) => ({
  handleEdit(record) {
    // console.log('编辑', record);
    dispatch(actionCreators.editItme(record))
  },
  handleDelete(record) {
    let key = record.key;
    dispatch(actionCreators.deleteItem(key))
  }
})
export default connect(mapStateToProps, mapDispatchToProps)(Article);
// export default Article;
