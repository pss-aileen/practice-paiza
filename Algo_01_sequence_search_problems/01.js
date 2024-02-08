"use strict";

{
  /*
    title: 【指定された値の探索】指定された値の位置 3
    practiceDate: 20240207
    url: https://paiza.jp/works/mondai/sequence_search_problems/sequence_search_problems_search_value_step0
    time: 20min
    thoughts: え、チケット3枚も消費だと...！有料会員になるかチケットたまるまで先に進めないので一旦途中で終了。
  */

 //  const lines = [];

  step01();
  function step01() {
    const lines = ['5', '-3 2 0 -1 2', '2'];
    const numbers = lines[1].split(" ");
    const k = lines[2];

    let count = 0;
    for (const num of numbers) {
      if (num === k) {
        count++;
      }
    }
    console.log(count);
  }
  
  step02();
  function step02() {
    const lines = ['5', '-3 2 0 -1 2', '2'];
    const numbers = lines[1].split(" ");
    const k = lines[2];

    const index = numbers.indexOf(k);
    console.log(index + 1);
  }

  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf
  // whileを使うと良いかも
  step03();
  function step03() {
  }

  step04();
  function step04() {
  }

  boss();
  function boss() {
  }
}