"use strict";

{
  /*
    【n * n の 2 次元配列の表示】N * N の九九表の出力
    practiceDate: 20240203
    url: https://paiza.jp/works/mondai/stdout_primer/stdout_primer__2dim_array_step1
    time: 35min
    thoughts: すこし難しかったけど思いの外できた。ループで i++ 以外（i = i + 3）を使ったのははじめてでした...
  */

 //  const lines = [];

  step01();
  function step01() {
    const input = [0, 8, 1, 3];
    let formattedText = "";
    for (let i = 0; i < input.length; i++) {
      if ((i + 1) % 2 === 0 && i + 1 !== input.length) {
        formattedText = formattedText + input[i] + "\n";
      } else if (i + 1 === input.length) {
        formattedText = formattedText + input[i];
      } else {
        formattedText = formattedText + input[i] + " ";
      }
    }
    console.log(formattedText);
  }
  
  step02();
  function step02() {
    // const lines = ['0 1 2 3 4 5 6 7 8'];
    const lines = ['11 12 13 14 15 16 17 18 19'];
    const splitValues = lines[0].split(" ");
    const formattedText = [];
    
    for(let i = 0; i < splitValues.length; i = i + 3) {
      const oneLine = `${splitValues[i]} ${splitValues[i + 1]} ${splitValues[i + 2]}`;
      formattedText.push(oneLine);
    }

    console.log(formattedText.join("\n"));
  }

  step03();
  function step03() {
    for (let i = 1; i <= 9; i++) {
      const oneline = [];
      for (let j = 1; j <= 9; j++) {
        const num = i * j;
        oneline.push(num);
      }
      console.log(oneline.join(" "));
    }
  }

  boss();
  function boss() {
    const lines = [10];
    const inputNumber = lines[0];
    for (let i = 1; i <= inputNumber; i++) {
      const oneline = [];
      for (let j = 1; j <= inputNumber; j++) {
        const num = i * j;
        oneline.push(num);
      }
      console.log(oneline.join(" "));
    }
  }
}