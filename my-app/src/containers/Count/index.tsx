/**
 * Count 容器组件  
 */

// 引入Count的UI组件
import CountUI from '../../components/Count';
// 引入action
import { createIncrementAction, createDecrementAction, createIncrementAsyncAction } from '../../redux/count_action';

// 引入connect用于连接UI组件与redux
import { connect } from 'react-redux';

// 使用connect()()创建并暴露一个Count的容器组件
/**
 * 容器组件会传给UI组件
 * (1):redux中所保存的状态
 * (2):用于操作状态的方法
 */
export default connect(
  state => ({ count: state }),  // 映射状态
  // (dispatch:any) => ({
  //   jia: value => dispatch(createIncrementAction(value)),
  //   jian: value => dispatch(createDecrementAction(value)),
  //   jiaAsync: (value, time) => dispatch(createIncrementAsyncAction(value, time)),
  // })

  // mapDispatchToProps的简写
  {
    jia: createIncrementAction,
    jian: createDecrementAction,
    jiaAsync: createIncrementAsyncAction
  }
)(CountUI);  // UI组件和容器组件建立联系  