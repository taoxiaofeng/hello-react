/**
 * reducer 专门负责初始化状态和加工状态
 */

import { ADD_PERSON } from '../constant';

// 初始化人员列表
const initState = [{ id: '001', name: 'tom', age: 18 }];
export default function personReducer (preState=initState, action) {
  // console.log(`personReducer -- `);
  const { type, data } = action;
  switch (type) {
    case ADD_PERSON: // 若是添加
      // 添加的内容放到数组中
      return [data, ...preState]
    default:
      return preState;
  }
}