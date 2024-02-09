"use strict";

{
  /*
    title: 【半角スペース区切りの入力】半角スペース区切りの 1,000 個の入力
    practiceDate: 20240209
    url: https://paiza.jp/works/mondai/stdin_primer/stdin_primer__split_input_step1
    time: 7min
    thoughts: 簡単な内容だったので問題なく取り組めた。ただ、せっかくなので色々試せばよかったなと思った、whileなど
  */

 //  const lines = [];

  // step01();
  function step01() {
    const lines = ['hello'];
    console.log(lines[0])
  }
  
  // step02();
  function step02() {
    const lines = ['hello paiza'];
    const firstLineValues = lines[0].split(" ");
    for (const value of firstLineValues) {
      console.log(value);
    }
  }

  // step03();
  function step03() {
    const lines = ['good morning paiza'];
    const firstLineValues = lines[0].split(" ");
    for (const value of firstLineValues) {
      console.log(value);
    }
  }

  step04();
  function step04() {
    const lines = ['VypymzW25l 3xsXWAK NYwbs2MRC kh4 mr38o8W9 94 fEJ 6THlW fJFTy n'];
    const firstLineValues = lines[0].split(" ");
    for (const value of firstLineValues) {
      console.log(value);
    }
  }

  boss();
  function boss() {
    // lines[0]の文字列を改行で区切り、出力する
    // 上tお同じなので省略
  }
}