// 引入Count的UI组件
import CountUI from '../../components/Count';
// 引入action
import { createIncrementAction, createDecrementAction, createIncrementAsyncAction } from '../../redux/count_action';

// 引入connect用于连接UI组件与redux
import { connect } from 'react-redux';

/**
 * 1、mapStateToProps函数返回的是一个对象：
 * 2、返回的对象中的key就作为传递给UI组件的props的key,value就作为传递给UI组件props的value
 * 3、mapStateToProps 用户传递状态
 * @param state 
 * @returns 
 */
function mapStateToProps(state) {
  return { count: state };
}

/**
 * mapDispatchToProps函数返回的是一个对象：
 * 返回的对象中的key就作为传递给UI组件props的key, value就作为传递给UI组件props的value
 * mapDispatchToProps 用户传递操作状态的方法 
 * @param dispatch 
 * @returns 
 */
function mapDispatchToProps(dispatch) {
  return {
    // 通知redux执行加法
    jia: value => dispatch(createIncrementAction(value)),
    jian: value => dispatch(createDecrementAction(value)),
    jiaAsync: (value, time) => dispatch(createIncrementAsyncAction(value, time)),
  }
}

// 使用connect()()创建并暴露一个Count的容器组件
/**
 * 容器组件会传给UI组件
 * (1):redux中所保存的状态
 * (2):用于操作状态的方法
 */
export default connect(mapStateToProps, mapDispatchToProps)(CountUI);  // UI组件和容器组件建立联系  