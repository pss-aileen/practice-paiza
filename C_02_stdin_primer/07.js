"use strict";

{
  /*
    title: 【N個の文字列の入力】1 行目で与えられる N 個の文字列の入力 (large)
    practiceDate: 20240210
    url: https://paiza.jp/works/mondai/stdin_primer/stdin_primer__string_number_step1
    time: 9min
    thoughts: 問題なく解けた。
  */

 //  const lines = [];

  // step01();
  function step01() {
    const lines = ['5', 'hello', 'paiza', '813', 'paiza2020', 'Nice'];
    for (let i = 1; i < lines.length; i++) {
      console.log(lines[i]);
    }
   }
  
  // step02();
  function step02() {
    const lines = ['5', 'paiza 813 paiza813 hello813 good'];
    const secondLineValues = lines[1].split(" ");
    for (const value of secondLineValues) {
      console.log(value);
    }
  }

  // step03();
  function step03() {
    const lines = ['5 paiza 813 paiza813 Hello World!'];
    const firstLineValues = lines[0].split(" ");
    for (let i = 1; i < firstLineValues.length; i++) {
      console.log(firstLineValues[i]);
    }
  }

  // step04();
  function step04() {
    const lines = ['5', '813 paiza pa13 Hello World!'];
    const secondLineValues = lines[1].split(" ");
    for (const value of secondLineValues) {
      console.log(value);
    }
  }

  boss();
  function boss() {
    const lines = [ '5 813 paiza 8iza Hello Paiza!' ];
    const firstLineValues = lines[0].split(" ");
    for (let i = 1; i < firstLineValues.length; i++) {
      console.log(firstLineValues[i]);
    }
  }
}