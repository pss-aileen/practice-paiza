"use strict";

{
  /*
    title: 【組になったデータの入力】文字列と整数の組からの選択
    practiceDate: 20240212
    url: https://paiza.jp/works/mondai/stdin_primer/stdin_primer__pair_data_step1
    time: 10min
    thoughts: ずっとシンプルな問題が続いているため、このような感じで良いのか不安になった。
  */

 //  const lines = [];

  // step01();
  function step01() {
    console.log(lines[0]);
  }
  
  // step02();
  function step02() {
    const lines = ['5', '813 813', '8 13', '81 1', '81 3', '8 813'];
    for (let i = 1; i < lines.length; i++) {
      console.log(lines[i]);
    }
  }

  // step03();
  function step03() {
    const lines = [
      '10', '813 813',
      '8 13', '81 1',
      '81 3', '8 813',
      '8 138', '813 8',
      '83 18', '8 13',
      '88 88'
    ];
    console.log(lines[8]);
  }

  // step04();
  function step04() {
    const lines = ['5', 'paiza 813', 'pa 81', '8pa 13', 'iza 8', 'pa 13'];
    for (let i = 1; i < lines.length; i++) {
      console.log(lines[i]);
    }
  }

  // boss();
  function boss() {
    // step03と同じ
    console.log(lines[8]);
  }
}