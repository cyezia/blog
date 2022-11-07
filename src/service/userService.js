import axios from '../utils/axios'; /*  发送axios请求  */
import api from '../api';  /* 接口 */
export function User_Login({userName, usePwd}) {
  return new Promise((resolve, reject) => {
    axios.post(api.userApi.USER_LOGIN, {
      userName, usePwd
      }).then((res) => {
          resolve(res.data);
      }).catch((err) => {
        reject(err);
    })
  })
}