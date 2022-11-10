import React, { useState, useEffect } from "react";
import MDEditor from '@uiw/react-md-editor';
import { connect } from 'react-redux';
import { actionCreators } from '../../../../store/tables';
import './style.less';
// import { useLocalStorage } from '../../../../utils/useLocalStorage';

let index = 1;
function Editor(props) {
  console.log('props.dataSource', props.dataSource.toJS());
  // debugger;

  // 获取输入框的文章名
  const [inputValue, setInputValue] = useState(() => {
    // 从本地存储检索数据 以做到从存储中获取到更新的状态
    const saved = localStorage.getItem("inputValue");
    // JSON.parse() 将数据转换为 JavaScript 对象
    const initialValue = JSON.parse(saved);
    return initialValue || "";
  });

  // 获取标签
  const [selectValue, setSelectValue] = useState(() => {
    // 从本地存储检索数据 以做到从存储中获取到更新的状态
    const saved = localStorage.getItem("selectValue");
    // JSON.parse() 将数据转换为 JavaScript 对象
    const initialValue = JSON.parse(saved);
    return initialValue || "";
  });

  // 输入文本
  const [value, setValue] = React.useState(() => {
      // 从本地存储检索数据 以做到从存储中获取到更新的状态
    const saved = localStorage.getItem("value");
    // JSON.parse() 将数据转换为 JavaScript 对象
    const initialValue = JSON.parse(saved);
    return initialValue || "";
  });

  // console.log('inputValue', inputValue);
  // const typeMap = {
  //   create: '发布',
  //   edit: '保存'
  // }

  useEffect(() => {
    // localStorage.setItem("name",inputValue) 
    localStorage.setItem("name", JSON.stringify(inputValue)) 
    localStorage.setItem("tag", JSON.stringify(selectValue))
    localStorage.setItem("content", JSON.stringify(value))
  })

  const handleSumbit = () => {
    let obj = {
      key: index,
      name: inputValue
    }
    index++
    props.add(obj);
  }


  return (
    <div className="editorBox">
      <div className="header">
        <input 
          className="input" 
          placeholder="输入文章标题..." 
          value={inputValue} 
          onChange={e => {setInputValue(e.target.value)}}
        ></input>
        <div className="tag">
          标签：
          <select placeholder="请选择文章所属标签" value={selectValue} onChange={e => {setSelectValue(e.target.value)}}>
            <option style={{display: 'none'}}></option>
            <option value="red">red</option>
            <option value="orange">orange</option>
            <option value="yellow">yellow</option>
          </select>
        </div>
        <button onClick={() => handleSumbit()} className="btn">发布</button>
      </div>
      <MDEditor
        value={value}
        onChange={setValue}
        height={'100%'}
      />
    </div>
  );
}


const mapStateToProps = (state) => {
  return {
    dataSource: state.get('tables').get('dataSource'),
    editObj: state.get('tables').get('editObj')
  }

}
const mapDispatchToProps = (dispatch) => ({
  add(inputValue) {
    console.log('inputValue', inputValue);
    dispatch(actionCreators.addArticles(inputValue))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Editor);

// export default Editor;