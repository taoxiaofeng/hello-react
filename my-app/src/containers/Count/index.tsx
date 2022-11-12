// 引入Count的UI组件
import CountUI from '../../components/Count';

// 引入connect用于连接UI组件与redux
import { connect } from 'react-redux';

// a函数返回的对象汇总的key就作为传递给UI组件的props的key,value就作为传递给UI组件props的value -- 状态
function a() {
  return { count: 900 };
}

// b函数返回的对象中的key就作为传递给UI组件props的key, value就作为传递给UI组件props的value -- 操作状态的方法
function b() {
  return { jia: () => { console.log(1); } }
}


// 使用connect()()创建并暴露一个Count的容器组件
/**
 * 容器组件会传给UI组件
 * (1):redux中所保存的状态
 * (2):用于操作状态的方法
 */
export default connect(a, b)(CountUI);