import React, { useState, useEffect, useLayoutEffect } from "react";

const UseLayoutEffect = () => {
  const [state, setState] = useState("hello world");

  // useEffect(() => {
  //  let i = 0;
  //   while(i < 1000000000) i++;
  //   setState("hello hooks");
  // }
  // , []);
  
  // useLayoutEffect(() => {
  //   let i = 0;
  //   while(i < 1000000000) i++;
  //   setState("hello hooks");
  // }
  // , []);

  async function async1() {
    await async2();
    console.log("async1 end");
  }
  async function async2() {
    console.log("async2 end");
  }
  async1();
  console.log("script start");

  return <div>{state}</div>;
};

export default UseLayoutEffect;
