"use strict";

{
  /*
    【文字列の出力】入力された 10 個の文字列を出力
    practiceDate: 20240131
    setp01: https://paiza.jp/works/mondai/stdout_primer/stdout_primer__string_output_step1
    step02: https://paiza.jp/works/mondai/stdout_primer/stdout_primer__string_output_step2
    step03: https://paiza.jp/works/mondai/stdout_primer/stdout_primer__string_output_step3
    step04: https://paiza.jp/works/mondai/stdout_primer/stdout_primer__string_output_step4
    boss: https://paiza.jp/works/mondai/stdout_primer/stdout_primer__string_output_boss
  */

 //  const lines = [];

  step01();
  function step01() {
    console.log("paiza");
  }
  
  step02();
  function step02() {
    const input = "paiza learning";
    const lines = input.split(" ");
    console.log(lines.join(" "));
  }

  step03();
  function step03() {
    const lines = ['paiza', 'learning'];
    for (const line of lines) {
      console.log(line);
    }
  }

  step04();
  function step04() {
    const lines = [
      'q', 'bpdi', 'u',
      'ky', 'meqt', 'rrnc',
      'co', 'jjw', 'e',
      'fwio'
    ];
    console.log(lines.join(" "));
  }

  boss();
  function boss() {
    const lines = [ 'a a a a a a a a a a' ];
    const inputs = lines[0].split(" ");
    for (const input of inputs) {
      console.log(input);
    }
  }
}