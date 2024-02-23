"use strict";

{
  /*
    title: 代入演算 4
    practiceDate: 20240223
    url: https://paiza.jp/works/mondai/arithmetic_substitution_op/arithmetic_substitution_op__substitution_step1
    time: 13min
    thoughts: 
  */

  //  const lines = [];

  // step01();
  function step01(): void {
    let n: number = 0;
    n += 3286;
    n *= 4736;
    n %= 12312;
    console.log(n);
  }

  // step02();
  function step02(): void {
    const lines: string[] = ['149 825 262'];
    const [a, b, c]: number[] = lines[0].split(" ").map(Number);
    let n: number = 0;
    n += a;
    n *= b;
    n %= c;
    console.log(n);
  }

  // step03();
  function step03(): void {
    let n: number = 10000;
    n /= 361;
    n %= 28;
    console.log(Math.floor(n));
  }

  boss();
  function boss(): void {
    const lines: string[] = ['911 285'];
    const [a, b]: number[] = lines[0].split(" ").map(Number);
    let n: number = 10000;
    n /= a;
    n %= b;
    console.log(Math.floor(n));
  }
}