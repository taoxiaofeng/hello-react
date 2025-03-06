import React, { Component } from 'react'

export default class ClassCmp extends Component {

  // eslint-disable-next-line @typescript-eslint/no-useless-constructor
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    // console.log('this: ', this);
    // console.log('typeof: ', typeof this);
    // console.log(`typeof - number`, typeof number);
    // console.log(`typeof - Number`, typeof Number);
    // console.log(`object - Number`, Object.prototype.toString.call(Number));
    // console.log(`instanceof - Array`, [] instanceof Array);
    // console.log(`typeof Symbol`, typeof Symbol);
    // console.log(`new Symbol`, new Symbol());
    for (let i = 0; i < 10; i++) {
      (function(i){
        setTimeout(() => {
          console.log(i)
        }, 1000)
      })(i)
    }
  }

  render() {
    return (
      // <div onClick={this.handleClick.bind(this)}>
      // <div onClick={() => this.handleClick()}>
      <div onClick={this.handleClick}>
        这是一个类测试组件
      </div>
    )
  }
}

// import React, { Component } from 'react'

// class BindEvent extends Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//       name: 'jacky',
//     }
//   }
//   handleClick() {
//     console.log(`this: `, this)
//   }
//   render() {
//     return (
//       <div>
//         <button onClick={this.handleClick}>Click</button>
//       </div>
//     )
//   }
// }

// export default BindEvent
