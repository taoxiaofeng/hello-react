/**
 * https://zh-hans.reactjs.org/tutorial/tutorial.html#setup-for-the-tutorial
 */
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

/**
 * 如果你想写的组件只包含一个 render 方法，
 * 并且不包含 state，那么使用函数组件就会更简单。
 * 我们不需要定义一个继承于 React.Component 的类，
 * 我们可以定义一个函数，这个函数接收 props 作为参数，
 * 然后返回需要渲染的元素。函数组件写起来并不像 class 组件那么繁琐，
 * 很多组件都可以使用函数组件来写。
 */
// 函数组件
function Square(props) {
    return (
        <button className="square"
            onClick={props.onClick}>
            {props.value}
        </button>
    )
}


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

class Game extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            history: [{
                squares: Array(9).fill(null)
            }],
            stepNumber: 0, // 代表我们当前正在查看哪一项历史记录。
            xIsNext: true,
        }
    }

    handleClick(i) {
        const history = this.state.history.slice(0, this.state.stepNumber + 1);
        const current = history[history.length - 1];
        const squares = current.squares.slice();
        if (calculateWinner(squares) || squares[i]) {
            return;
        }
        squares[i] = this.state.xIsNext ? 'X' : 'O';
        this.setState({
            history: history.concat([{
                squares: squares,
            }]),
            stepNumber: history.length,
            xIsNext: !this.state.xIsNext,
        });
    }

    jumpTo(step) {
        this.setState({
            stepNumber: step,
            xIsNext: (step % 2) === 0,
        });
    }

    render() {
        const history = this.state.history;
        const current = history[this.state.stepNumber];
        const winner = calculateWinner(current.squares);

        const moves = history.map((step, move) => {
            const desc = move ? 'Go to move #' + move : 'Go to game start';
            return (
                <li key="move">
                    <button onClick={() => this.jumpTo(move)}>{desc}</button>
                </li>
            );
        });

        let status;
        if (winner) {
            status = 'Winner: ' + winner;
        } else {
            status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
        }
        return (
            <div className="game">
                <div className="game-board">
                    <Board squares={current.squares}
                        onClick={(i) => this.handleClick(i)} />
                </div>
                <div className="game-info">
                    <div>{status}</div>
                    <ol>{moves}</ol>
                </div>
            </div>
        );
    }
}

// ========================================

ReactDOM.render(
    <Game />,
    document.getElementById('root')
);

function calculateWinner(squares) {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a];
        }
    }
    return null;
}
