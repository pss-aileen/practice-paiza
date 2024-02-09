"use strict";

{
  /*
    title: 【N 個の整数の入力】1 行目で与えられる N 個の整数の入力 (large)
    practiceDate: 20240210
    url: https://paiza.jp/works/mondai/stdin_primer/stdin_primer__integer_number_step1
    time: 5min
    thoughts: 問題なく解けた。
  */

 //  const lines = [];

  // step01();
  function step01() {
    const lines = [
      '20', '1', '2', '3', '4',
      '5', '6', '7', '8', '9',
      '10', '11', '12', '13', '14',
      '15', '16', '17', '18', '19',
      '20'
    ];
    for (let i = 1; i < lines.length; i++) {
      console.log(lines[i]);
    }
  }
  
  // step02();
  function step02() {
    const lines = ['6', '6561 3785 6338 9568 4956 557', ''];
    const secondLineValues = lines[1].split(" ");
    for (const value of secondLineValues) {
      console.log(value);
    }
  }

  step03();
  function step03() {
    const lines = ['13 5085 2923 8669 3231 7032 73 2683 8317 5545 9774 7179 2646 2470'];
    const firstLineValues = lines[0].split(" ");
    for (let i = 1; i < firstLineValues.length; i++) {
      console.log(firstLineValues[i]);
    }
  }

  step04();
  function step04() {
    const lines = ['5', '8 1 3 10 100'];
    const secondLineValues = lines[1].split(" ");
    for (const value of secondLineValues) {
      console.log(value);
    }
  }

  boss();
  function boss() {
    // setp03と同じ...？
    const firstLineValues = lines[0].split(" ");
    for (let i = 1; i < firstLineValues.length; i++) {
      console.log(firstLineValues[i]);
    }
  }
}