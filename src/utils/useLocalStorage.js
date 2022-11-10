// import { useState, useEffect } from 'react';

// function getStorageValue(key, defaultValue) {
//   if (typeof window !== "undefined") {
//     // 从本地存储检索数据 以做到从存储中获取到更新的状态
//     const saved = localStorage.getItem(key);
//     // JSON.parse() 将数据转换为 JavaScript 对象
//     const initial = saved !== null ? JSON.parse(saved) : defaultValue;
//     return initial;
//   }
// }

// export const useLocalStorage = (key, defaultValue) => {
//   const [value, setValue] = useState(() => {
//     return getStorageValue(key, defaultValue);
//   });

//   useEffect(() => {
//     localStorage.setItem(key, JSON.stringify(value));
//   }, [key, value]);

//   return [value, setValue];
// }

export const useLocalStorage = (defaultValue, localStorageKey) => {
  const [value, setValue] = useState(() => {
      const itemValue = localStorage.getItem(localStorageKey);
      if(itemValue === null) return defaultValue;
      try{
          return JSON.parse(itemValue);
      }catch{
          return defaultValue;
      }
  }); 
  // 监听状态变化并更新localStorage中的值
  useEffect(() => {
      localStorage.setItem(localStorageKey, JSON.stringify(value));
  }, [value]);
  
  return [value, setValue]; 
}
