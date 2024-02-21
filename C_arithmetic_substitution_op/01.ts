"use strict";

{
  /*
    title: 累乗 2
    practiceDate: 20240222
    url: https://paiza.jp/works/mondai/arithmetic_substitution_op/arithmetic_substitution_op__arithmetic_step1
    time: 20min
    thoughts: 
      - 小数点を丸める方法が思い出せなかった Math.floor
  */

  //  const lines = [];

  // step01();
  function step01(): void {
    console.log(1231 + 5178);
  }

  // step02();
  function step02(): void {
    const lines: string[] = ['397 646'];
    const [a, b]: number[] = lines[0].split(" ").map(Number);
    const difference: number = a - b;
    const product: number = a * b;
    console.log(difference, product);
  }

  // step03();
  function step03(): void {
    const a: number = 437326;
    const b: number = 9085;
    const x: number = Math.floor(a / b);
    const y: number = a % b;
    console.log(x, y);
  }

  step04();
  function step04(): void {
    const lines: string[] = ['202 400 37'];
    const [a, b, c]: number[] = lines[0].split(" ").map(Number);
    console.log(a * a, b * b + c * c);
  }

  boss();
  function boss(): void {
    const [a, b, c]: number[] = [202, 134, 107];
    console.log(((a + b) * c) ** 2);
  }
}