// 定义初始post数组 将其传递给createSlice 
import { createSlice } from '@reduxjs/toolkit';

const initialState = [
  {
    key: '1',
    name: 'test1'
  },
  {
    key: '2',
    name: 'test2'
  },
  {
    key: '3',
    name: 'test3'
  },
]

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {}
})
// console.log('post', post);

export default postsSlice.reducer;