"use strict";

{
  /*
    title: 1 行目で与えられる N 個の実数の入力 (large)
    practiceDate: 20240211
    url: https://paiza.jp/works/mondai/stdin_primer/stdin_primer__real_number_step1
    time: 13min
    thoughts: 簡単だったが、文字列、数値、浮動小数点など使う必要がある時は。Number()、parseInt()、parseFloat()、String()などを忘れないようにしないといけないと思った。
  */

 //  const lines = [];

  // step01();
  function step01() {
    const lines = ['4', '0.813', '8.13', '81.3', '813'];
    for (let i = 1; i < lines.length; i++) {
      console.log(lines[i]);
    }
  }
  
  // step02();
  function step02() {
    const lines = ['5', '0.813 8.13 8 1.83 3.81'];
    const secondLineValues = lines[1].split(" ");
    for (const value of secondLineValues) {
      console.log(value);
    }
  }

  // step03();
  function step03() {
    // const 省略
    const firstLineValues = lines[0].split(" ");
    for (let i = 1; i < firstLineValues.length; i++) {
      console.log(firstLineValues[i]);
    }
  }

  // step04();
  function step04() {
    //
    const secondLineValues = lines[1].split(" ");
    for (const value of secondLineValues) {
      console.log(value);
    }
  }

  boss();
  function boss() {
    const lines = [ '5 8.13 81.3 813 0.813 1.381' ];
    const firstLineValues = lines[0].split(" ");
    for (let i = 1; i < firstLineValues.length; i++) {
      console.log(firstLineValues[i]);
    }
  }
}