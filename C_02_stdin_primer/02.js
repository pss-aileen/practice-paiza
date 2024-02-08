"use strict";

{
  /*
    title: 【半角スペース区切りでの文字列の分割】5 つの文字列の半角スペース区切りでの分割
    practiceDate: 20240208
    url: https://paiza.jp/works/mondai/stdin_primer/stdin_primer__split_string_step1
    time: 16min
    thoughts: 
      step01でspliceやspliecdなどを試したが、splicedはなぜかうまくいかなかった。
      原因として、split("")で文字列を全て区切れていたと勝手に思っていたがそうなっておらず、たぶんspliceする以前の問題があった。
      また試せる時に試す。
  */

 //  const lines = [];

  // step01();
  function step01() {
    const inputString = "Hello paiza";
    const strings = inputString.split(" ");
    console.log(strings.join("\n"));
  }

  // step01_type2();
  function step01_type2() {
    const inputString = "Hello paiza";
    const outputString = inputString.replace(" ", "\n");
    console.log(outputString);
  }
  /*
    - 正規表現（Regular Expression、通常はRegexと略される）
  */
  
  // step02();
  function step02() {
    const inputString = "He likes paiza";
    const strings = inputString.split(" ");
    console.log(strings.join("\n"));
  }

  boss();
  function boss() {
    const inputString = "one two three four five";
    const strings = inputString.split(" ");
    for (const string of strings) {
      console.log(string);
    }
  }
}