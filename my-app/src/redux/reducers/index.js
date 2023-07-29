/**
 * 该文件用于汇总所有的reducer为一个总的reducer
 */
// 引入combineReducers, 用于汇总对个reducer
import { combineReducers } from 'redux';
// 引入为Count组件服务的reducer
import count from './count';
// 引入为Person组件服务的reducer
import persons from './person';


// 使用 combineReducers 合并引入的 reducer
export default combineReducers({
  count,
  persons
});