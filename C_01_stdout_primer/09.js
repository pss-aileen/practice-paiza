"use strict";

{
  /*
    title: 【出力幅を指定して出力】N 個の数値を M けた半角スペース埋めで出力
    practiceDate: 20240206
    url: https://paiza.jp/works/mondai/stdout_primer/stdout_primer__print_width_step1
    time: 30min
    thoughts: 
      全てを一つのスコープに入れ込むのではなく、関数でわけて整理して組み上げることも大切だと思った。lengthも文字列にしか適応されないと初めて知った。
      全て解き終えて気がついたが、普通にpadStartが使えた...padEndもあるらしい...悲しい。でも、自分でもロジックを考えて作れたことはよしとする...！

  */

 //  const lines = [];

  // step01();
  function step01() {
    const lines = ["1"];
    const digit = 3;
    const targetNumber = lines[0];
    
    for (let i = 1; i <= digit; i++) {
      if (targetNumber.length === i) {
        let spaces = "";
        for (let j = 1; j <= digit - i; j++) {
          spaces = spaces + " ";
        }
        console.log(spaces + targetNumber);
      } 
    }
  }
  /*
    - parseInt、Numberとすると、lengthは取得できない、unddefinedと出てしまう
    - ただ、結果的に parseIntなどは必要なかった
  */
  
  // step02();
  function step02() {
    const lines = ["1"];
    const digit = 3;
    const targetNumber = lines[0];
    
    for (let i = 1; i <= digit; i++) {
      if (targetNumber.length === i) {
        let spaces = "";
        for (let j = 1; j <= digit - i; j++) {
          spaces = spaces + "0";
        }
        console.log(spaces + targetNumber);
      } 
    }
  }

  // step03();
  function step03() {
    const lines = ['12', '0', '8', '81', '813', '0', '0', '0', '0', '0', '0', '0', '0'];
    
    for (let i = 1; i < lines.length; i++) {
      decorate(lines[i]);
    }

    function decorate(target) {
      const digit = 3;
      const targetNumber = target;
      const spaceDecorator = " ";
      
      for (let i = 1; i <= digit; i++) {
        if (targetNumber.length === i) {
          let spaces = "";
          for (let j = 1; j <= digit - i; j++) {
            spaces = spaces + spaceDecorator;
          }
          console.log(spaces + targetNumber);
        } 
      }
    }
  }

  // step04();
  function step04() {
    const lines = ['813 8'];
    const splitValues = lines[0].split(" ");
    const targetNumber = splitValues[0];
    const digit = parseInt(splitValues[1]);

    decorate(digit, targetNumber)

    function decorate(inputDigit, inputTarget) {
      const digit = inputDigit;
      const targetNumber = inputTarget;
      const spaceDecorator = " ";
      
      for (let i = 1; i <= digit; i++) {
        if (targetNumber.length === i) {
          let spaces = "";
          for (let j = 1; j <= digit - i; j++) {
            spaces = spaces + spaceDecorator;
          }
          console.log(spaces + targetNumber);
        } 
      }
    }
  }

  boss();
  function boss() {
    const lines = [ '4 3', '0', '8', '81', '813' ];
    const splitValues = lines[0].split(" ");
    const digit = parseInt(splitValues[1]);

    for (let i = 1; i < lines.length; i++) {
      decorate(digit, lines[i]);
    }

    function decorate(inputDigit, inputTarget) {
      const digit = inputDigit;
      const targetNumber = inputTarget;
      const spaceDecorator = " ";
      
      for (let i = 1; i <= digit; i++) {
        if (targetNumber.length === i) {
          let spaces = "";
          for (let j = 1; j <= digit - i; j++) {
            spaces = spaces + spaceDecorator;
          }
          console.log(spaces + targetNumber);
        } 
      }
    }
  }
}