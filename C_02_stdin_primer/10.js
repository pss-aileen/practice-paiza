"use strict";

{
  /*
    title: 【N 行 M 列のデータの入力】行ごとに要素数の異なる整数列の入力
    practiceDate: 20240213
    url: https://paiza.jp/works/mondai/stdin_primer/stdin_primer__matrix_data_step1
    time: 15min
    thoughts: ちょっと簡単だな、と思ったら他に書き方はないのか探ってみるようにしたいと思った。
  */

 //  const lines = [];

  // step01();
  function step01() {
    const lines = ['8 1 3', '1 2 3', '3 1 8'];
    for (const line of lines) {
      console.log(line);
    }
  }
  
  // step02();
  function step02() {
    const lines = ['2', '1 2 3', '8 1 3'];
    for (let i = 1; i < lines.length; i++) {
      console.log(lines[i]);
    }
  }

  // step03();
  function step03() {
    // lines 略
    for (let i = 1; i < lines.length; i++) {
      console.log(lines[i]);
    }
  }

  // step04();
  function step04() {
    // lines 略
    for (let i = 1; i < lines.length; i++) {
      console.log(lines[i]);
    }
  }

  boss();
  function boss() {
    const lines = ['3', '1 8', '2 8 1', '3 8 1 3'];
    for (let i = 1; i < lines.length; i++) {
      const numbers = lines[i].split(" ");
      const outputNumbers = [];
      for (let j = 1; j < numbers.length; j++) {
        outputNumbers.push(numbers[j]);
      }
      console.log(outputNumbers.join(" "));
    }
  }

  // 上をシンプルにしたら以下になった
  boss_bychatgpt();
  function boss_bychatgpt() {
    const lines = ['3', '1 8', '2 8 1', '3 8 1 3'];
    lines.slice(1)
      .forEach(line =>
        console.log(line.split(" ").slice(1).join(" "))
      );
  }
}