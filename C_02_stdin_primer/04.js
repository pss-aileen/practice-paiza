"use strict";

{
  /*
    title: 【整数の行入力】1,000行の整数の入力
    practiceDate: 20240209
    url: https://paiza.jp/works/mondai/stdin_primer/stdin_primer__integer_row_step1
    time: 5min
    thoughts: 問題なくこなせた。
  */

 //  const lines = [];

  // step01();
  function step01() {
    console.log(lines[0]);
  }
  
  // step02();
  function step02() {
    const lines = ['81', '3'];
    for (const value of lines) {
      console.log(value);
    }
  }

  step03();
  function step03() {
    // 前の問題と同じなので省略
  }

  step04();
  function step04() {
    // 前の問題と同じなので省略
  }

  boss();
  function boss() {
    const lines = ['81', '3'];
    let n = 0;
    while (n < lines.length) {
      console.log(lines[n]);
      n++;
    }
  }
}