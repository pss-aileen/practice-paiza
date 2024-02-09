"use strict";

{
  /*
    title: 【整数の半角スペース区切りの入力】1,000個の整数の半角スペース区切りの入力
    practiceDate: 20240209
    url: https://paiza.jp/works/mondai/stdin_primer/stdin_primer__integer_space_step1
    time: 4min
    thoughts: 前回と同じような感じだった。
  */

 //  const lines = [];

  // step01();
  function step01() {
    console.log(lines[0]);
  }
  
  step02();
  function step02() {
    const lines = ["8 13"];
    const FirstLineValues = lines[0].split(" ");
    for (const value of FirstLineValues) {
      console.log(value);
    }
  }

  step03();
  function step03() {
    // 同上
  }

  step04();
  function step04() {
    // 同上
  }

  boss();
  function boss() {
    // 同上
  }
}