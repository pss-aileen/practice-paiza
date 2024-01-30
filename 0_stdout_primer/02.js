"use strict";

{
  /*
    【半角スペース区切りの出力】1,000 個の数値を出力
    practiceDate: 20240130
    setp01: https://paiza.jp/works/mondai/stdout_primer/stdout_primer__space_oneline_step1
    step02: https://paiza.jp/works/mondai/stdout_primer/stdout_primer__space_oneline_step2
    step03: https://paiza.jp/works/mondai/stdout_primer/stdout_primer__space_oneline_step3
    step04: https://paiza.jp/works/mondai/stdout_primer/stdout_primer__space_oneline_step4
    boss: https://paiza.jp/works/mondai/stdout_primer/stdout_primer__space_oneline_boss
  */

 //  const lines = [];

  step01();
  function step01() {
    console.log(1, 1);
  }
  
  step02();
  function step02() {
    console.log(8, 1, 3);
    
  }

  step03();
  function step03() {
    let numbers = [];
    for (let i = 1; i <= 10; i++) {
      numbers.push(i + " ");
    }
  
    console.log(numbers.join(""));
  }

  step04();
  function step04() {
    let numbers = [];
    for (let i = 1; i <= 10; i++) {
      numbers.push(i);
    }
    console.log(numbers.join(" "));
  }

  boss();
  function boss() {
    let numbers = [];
    for (let i = 1; i <= 1000; i++) {
      numbers.push(i);
    }
    console.log(numbers.join(" "));
  }
}