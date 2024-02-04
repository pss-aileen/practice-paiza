"use strict";

{
  /*
    【行によって長さが違う二次元配列の表示】すべての行の長さと値が不定な 2 次元配列の出力
    practiceDate: 20240204
    url: https://paiza.jp/works/mondai/stdout_primer/stdout_primer__variable_array_step1
    time: 45min
    thoughts: 自分はよく、ダブっている動作がよくあるなぁと気がついた。それを最後に見直して消すことができればもっと良くなるのだろうなと思った。
  */

 //  const lines = [];

  // step01();
  function step01() {
    const lines = ['8'];
    const firstLineEnd = Number(lines[0]) / 2;
    const secondLineStart = (Number(lines[0]) / 2) + 1;
    let firstLine = [];
    let secondLine = [];
    for (let i = 1; i <= firstLineEnd; i++) {
      firstLine.push(i);
    }
    for (let i = secondLineStart; i <= Number(lines[0]); i++) {
      secondLine.push(i);
    }
    
    console.log(firstLine.join(" "));
    console.log(secondLine.join(" "));
  }
  
  // step02();
  function step02() {
    const lines = ['3 5'];
    const splitValue = lines[0].split(" ");
    const firstLine = [];
    const secondLine = [];
    for (let i = 1; i <= splitValue[0]; i++) {
      firstLine.push(i);
    }
    for (let i = 1; i <= splitValue[1]; i++) {
      secondLine.push(i);
    }
    console.log(firstLine.join(" "));
    console.log(secondLine.join(" "));
  }

  // step03();
  function step03() {
    const lines = ['10'];
    const numbers = [];
    for (let i = 1; i <= Number(lines[0]); i ++) {
      numbers.push(i);
    }
    for (let i = 1; i <= numbers.length; i++) {
      let line = [];
      for (let j = 1; j <= i; j++) {
        line.push(j);
      }
      console.log(line.join(" "));
    }
  }

  // step04();
  function step04() {
    const lines = ['4', '2 4 3 1'];
    const m = lines[1].split(" ");
    for (let i = 1; i <= Number(lines[0]); i++) {
      let line = [];
      for (let j = 1; j <= m[i-1]; j++) {
        line.push(j);
      }
      console.log(line.join(" "));
    }
  }

  boss();
  function boss() {
    const lines = ['10 4', '1 2 3 4 5 6 7 8 9 10', '2 6 1 1'];
    const firstLineSplitValue = lines[0].split(" ");
    const n = Number(firstLineSplitValue[0]);
    const m = Number(firstLineSplitValue[1]);
    const a = lines[1].split(" ");
    const b = lines[2].split(" ");

    for (let i = 1; i <= m; i++) {
      const oneline = a.splice(0, b[i-1]);
      console.log(oneline.join(" "));
    }
  }
}