import React from "react";
import MDEditor from '@uiw/react-md-editor';
import { Outlet } from 'react-router-dom';
import './style.less';

export default function Editor() {
  const [value, setValue] = React.useState();
  // const typeMap = {
  //   create: '发布',
  //   edit: '保存'
  // }
  return (
    <div className="editorBox">
      <div className="header">
        <input className="input" placeholder="输入文章标题..."></input>
        <div className="tag">
          标签：
          <select placeholder="请选择文章所属标签">
            <option style={{display: 'none'}}></option>
            <option value="red">red</option>
            <option value="orange">orange</option>
            <option value="yellow">yellow</option>
          </select>
        </div>
        <button className="btn">发布</button>
      </div>
      <MDEditor
        value={value}
        onChange={setValue}
        height={'100%'}
      />
      <Outlet />
    </div>
  );
}
