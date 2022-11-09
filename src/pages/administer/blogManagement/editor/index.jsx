import React, { useState } from "react";
import MDEditor from '@uiw/react-md-editor';
import { connect } from 'react-redux';
import { actionCreators } from '../../../../store/tables';
import './style.less';

let index = 1;
function Editor(props) {
  console.log('props下的dataSource', props.dataSource.toJS());
  // debugger;
  const [value, setValue] = React.useState();
  // 获取输入框的文章名
  const [inputValue, setInputValue] = useState('');
  // console.log('inputValue', inputValue);
  // const typeMap = {
  //   create: '发布',
  //   edit: '保存'
  // }
  // let dataSource = props.dataSource.toJS();

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
          <select placeholder="请选择文章所属标签">
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
