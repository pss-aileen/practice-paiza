"use strict";

{
  /*
    title: 【行入力】1,000 行の入力
    practiceDate: 20240208
    url: https://paiza.jp/works/mondai/stdin_primer/stdin_primer__read_line_step1
    time: 7min
    thoughts: 初歩的な問題だったのでスムーズに解くことができた。
  */

 //  const lines = [];

  // step01();
  function step01() {
    const lines = ['paiza'];
    console.log(lines[0]);
  }
  
  // step02();
  function step02() {
    const lines = ['paiza', 'gino'];
    for (const line of lines) {
      console.log(line);
    }
  }

  // step03();
  function step03() {
    const lines = ['abc', 'def', 'ghi'];
    for (const line of lines) {
      console.log(line);
    }
  }

  // step04();
  function step04() {
    const lines = [
      'one', 'two',
      'three', 'four',
      'five', 'six',
      'seven', 'eight',
      'nine', 'ten'
    ];
    for (const line of lines) {
      console.log(line);
    }
  }

  boss();
  function boss() {
    const lines = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    for (const line of lines) {
      console.log(line);
    }
  }
}