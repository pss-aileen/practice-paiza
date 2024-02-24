"use strict";

{
  /*
    title: 論理演算を用いた計算のまとめ
    practiceDate: 20240224
    url: https://paiza.jp/works/mondai/logical_operation/logical_operation__basic_step1
    time: step07まで40min
    thoughts: 
      - step08の二進数がわからない...
  */

  //  const lines = [];

  // step01();
  function step01(): void {
    const lines: string[] = ['1 1'];
    const [a, b]: number[] = lines[0].split(" ").map(Number);
    if (a && b) {
      console.log(1);
    } else {
      console.log(0);
    }
  }

  // step02();
  function step02(): void {
    const lines: string[] = ['0 0'];
    const [a, b]: number[] = lines[0].split(" ").map(Number);
    if (a || b) {
      console.log(1);
    } else {
      console.log(0);
    }
  }

  // step03();
  function step03(): void {
    const lines: string[] = ["1"];
    const a: number = Number(lines[0]);
    const result = a ? 0 : 1;
    console.log(result);
  }

  // step04();
  function step04(): void {
    const lines: string[] = ['1 1'];
    const [a, b]: number[] = lines[0].split(" ").map(Number);
    const result = a !== b ? 1 : 0;
    console.log(result);
  }

  // step05();
  function step05(): void {
    const lines: string[] = ['0 0'];
    const [a, b]: number[] = lines[0].split(" ").map(Number);
    const result = a && b ? 0 : 1;
    console.log(result);
  }

  // step06();
  function step06(): void {
    const lines: string[] = ['1 1'];
    const [a, b]: number[] = lines[0].split(" ").map(Number);
    const result = !a && !b ? 1 : 0;
    console.log(result);
  }

  step07();
  function step07(): void {
    const lines: string[] = ['0 0'];
    const [a, b]: number[] = lines[0].split(" ").map(Number);
    const result = a === b ? 1 : 0;
    console.log(result);
  }

  step08();
  function step08(): void {
    
  }

  step09();
  function step09(): void {
    
  }

  boss();
  function boss(): void {
  }
}