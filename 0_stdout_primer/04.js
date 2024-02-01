"use strict";

{
  /*
    【n 行の出力】1,000 行以内の出力
    practiceDate: 20240201
    setp01: https://paiza.jp/works/mondai/stdout_primer/stdout_primer__n_line_step1
    step02: https://paiza.jp/works/mondai/stdout_primer/stdout_primer__n_line_step2
    step03: https://paiza.jp/works/mondai/stdout_primer/stdout_primer__n_line_step3
    boss: https://paiza.jp/works/mondai/stdout_primer/stdout_primer__n_line_boss
  */

 //  const lines = [];

  // step01();
  function step01() {
    const lines = ['2'];
    for (let i = 1; i <= Number(lines[0]); i++) {
      console.log(i);
    }
  }
  
  // step02();
  function step02() {
    const lines = ['5'];
    for (let i = 1; i <= Number(lines[0]); i++) {
      console.log(i);
    }
  }

  // step03();
  function step03() {
    const lines = ['10'];
    for (let i = 1; i <= Number(lines[0]); i++) {
      console.log(i);
    }
  }

  boss();
  function boss() {
    const lines = ['1000'];
    for (let i = 1; i <= Number(lines[0]); i++) {
      console.log(i);
    }
  }
}