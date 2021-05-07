import React from 'react';
import Square from '../Square/Square';
import '../../index.css';

/**
 * 因为 DOM 元素 <button> 是一个内置组件，
 * 因此其 onClick 属性在 React 中有特殊的含义。
 * 而对于用户自定义的组件来说，命名就可以由用户自己来定义了。
 * 我们给 Square 的 onClick 和 Board 的 handleClick 赋予任意的名称，
 * 代码依旧有效。在 React 中，有一个命名规范，
 * 通常会将代表事件的监听 prop 命名为 on[Event]，
 * 将处理事件的监听方法命名为 handle[Event] 这样的格式。
 */
class Board extends React.Component {

    renderSquare(i) {
        return <Square value={this.props.squares[i]}
            onClick={() => this.props.onClick(i)} />;
    }

    render() {
        return (
            <div>
                <div className="board-row">
                    {this.renderSquare(0)}
                    {this.renderSquare(1)}
                    {this.renderSquare(2)}
                </div>
                <div className="board-row">
                    {this.renderSquare(3)}
                    {this.renderSquare(4)}
                    {this.renderSquare(5)}
                </div>
                <div className="board-row">
                    {this.renderSquare(6)}
                    {this.renderSquare(7)}
                    {this.renderSquare(8)}
                </div>
            </div>
        );
    }
}

export default Board;