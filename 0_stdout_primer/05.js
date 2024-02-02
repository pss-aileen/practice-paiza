"use strict";

{
  /*
    【特定の文字で区切り 1 行で出力】大きな数値を 3 けたごとにカンマ区切りで出力
    practiceDate: 20240202
    url: https://paiza.jp/works/mondai/stdout_primer/stdout_primer__specific_split_step1
    time: 45min
    thoughts: すごく難しかった。BigInt()知らなかった...正規表現でも3桁ごとに , を入れれるらしいが、ごちゃごちゃしてしまう... number.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
    コミットメッセージを間違えたのでどうにかしたかったが、わからなかった。
  */

 //  const lines = [];

  step01();
  function step01() {
    const lines = ['5 1'];
    const splited = lines[0].split(" ");
    console.log(splited.join(","));
  }
  
  step02();
  function step02() {
    const lines = [ 'paiza', 'kirishima', 'kyoko' ];
    console.log(lines.join("|"));
  }

  step03();
  function step03() {
    const lines = ['0 1 2 3 4 5 6 7 8 9'];
    const splited = lines[0].split(" ");
    let numbers = "";
    for (const num of splited) {
      numbers = numbers + num + ",";
    }
    console.log(numbers);
  }

  step04();
  function step04() {
    const lines = ['0 1 2 3 4 5 6 7 8 9'];
    const splitValues = lines[0].split(" ");
    console.log(splitValues.join(","))
  }

  step05();
  function step05() {
    const lines = [
      '0', '1', '2', '3',
      '4', '5', '6', '7',
      '8', '9'
    ];
    console.log(lines.join(" | "));
  }

  step06();
  function step06() {
    // const lines = ['123456789'];
    const lines = ['123456789123456789'];
    const splitValues = lines[0].split("");
    let formattedNumber = "";
    for (let i = 1; i <= splitValues.length; i++) {
      if (i === splitValues.length){
        formattedNumber = formattedNumber + splitValues[i - 1];
      } else if (i % 3 === 0) {
        formattedNumber = formattedNumber + splitValues[i - 1] + ",";
      } else {
        formattedNumber = formattedNumber + splitValues[i - 1];
      }
    }
    console.log(formattedNumber);
  }

  step06_again();
  function step06_again() {
    const lines = ['123456789123456789'];
    const splitValues = lines[0].split("");
    let formattedNumber = "";
    for (let i = 1; i <= splitValues.length; i++) {
      if (i % 3 === 0 && i !== splitValues.length) {
        formattedNumber = formattedNumber + splitValues[i - 1] + ",";
      } else {
        formattedNumber = formattedNumber + splitValues[i - 1];
      }
    }
    console.log(formattedNumber);
  }

  boss();
  function boss() {
    const lines = ['123456789123456789'];
    // ↓123,456,789,123,456,780 行末の数字が切り捨てられてしまう
    // console.log(Number(lines[0]).toLocaleString());
    console.log(BigInt(lines[0]).toLocaleString());
  }
}