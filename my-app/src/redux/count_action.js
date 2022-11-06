/**
 * 该文件专门为 Count 组件生成action 对象
 */
 import { INCREMENT, DECREMENT } from './constant';

export const createIncrementAction = data => ({
  type: INCREMENT,
  data
})

// 同步action, 就是指action的值为Object类型的一般对象
export const createDecrementAction = data => ({
  type: DECREMENT,
  data
})

//  异步action，就是指action的值为函数
export const createIncrementAsyncAction = (data, time) => {
  return (dispatch) => {
    console.log(`dispatch -- `, dispatch);
    setTimeout(() => {
      dispatch(createIncrementAction(data));
    }, time);
  }
} 