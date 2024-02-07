"use strict";

{
  /*
    title: 【実数をフォーマット指定して出力】複数の実数を出力
    practiceDate: 20240205
    url: https://paiza.jp/works/mondai/stdout_primer/stdout_primer__format_real_number_step1
    time: 27min
    thoughts: boss問題がスッキリかけたのではないかと思った。paizaは段階踏んでいけるのが楽しい。
  */

 //  const lines = [];

  step01();
  function step01() {
    const lines = ['0.813'];
    console.log(parseFloat(lines[0]));
  }
  
  step02();
  function step02() {
    const lines = ['0.813'];
    console.log(parseFloat(lines[0]));
  }

  step03();
  function step03() {
    const lines = ['0.8'];
    console.log(parseFloat(lines[0]).toFixed(3));
  }

  step04();
  function step04() {
    const lines = ["0.813 4"];
    const splitValues = lines[0].split(" ");
    console.log(parseFloat(splitValues[0]).toFixed(parseInt(splitValues[1])));
  }

  boss();
  function boss() {
    const lines = ['4', '0.813 1', '0.813 2', '0.813 3', '0.813 4'];
    for (let i = 1; i < lines.length; i++) {
      const numbers = lines[i].split(" ");
      console.log(parseFloat(numbers[0]).toFixed(parseInt(numbers[1])));
    }
  }
}