// 创建切片

import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  token: sessionStorage.getItem("token") ? sessionStorage.getItem("token") : "",
  token: sessionStorage.getItem("user") ? JSON.parse(sessionStorage.getItem("user")) : {},
}

const userSlice = createSlice({
  name: 'userSlice',
  initialState
})
