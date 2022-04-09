import React from 'react';

function MyComponent() {
    console.log("this:", this)
    return <div>
        这是一个函数组件;
    </div>
}

export default MyComponent;