import React from 'react';

const propTypes = {};

const defaultProps = {};

class Count extends React.Component {

  state = {
    num: 0
  }

  static getDerivedStateFromProps(props,state) {
    console.log(state, props)
    console.log("getDerivedStateFormPropsect")
    // let { num } = this.state;
    return {
      num:state.num
    };
    // return null;
  }

  add = () => {
    let { num } = this.state;
    num++;
    this.setState({
      num
    })
  }
  render() {
    let { num } = this.state;
    return (
      <React.Fragment>
        <span>{num}</span>
        <button onClick={() => this.add()}>计数</button>
      </React.Fragment>
    );
  }
}

export default Count;
