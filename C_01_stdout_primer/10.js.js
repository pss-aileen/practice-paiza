"use strict";

{
  /*
    title: 【出力形式を指定して出力】ペアの数値の入った表を罫線入りで出力 2
    practiceDate: 20240207
    url: https://paiza.jp/works/mondai/stdout_primer/stdout_primer__specific_format_step1
    time: 55min
    thoughts:
      わ...難しい...と思ったが段階を踏んで解くことができた。わりと時間がかかった。
      とりあえず標準出力メニューが終わって大満足。
  */

 //  const lines = [];

  // step01();
  function step01() {
    const lines = ['kirishima', 'kyoko'];
    let outputString = "";

    for (let i = 0; i < lines.length; i++) {
      if (i !== 0) {
        outputString = `${outputString} + ${lines[i]}`;
      } else {
        outputString = outputString + lines[i];
      }
    }

    outputString = outputString + " = " + lines.join("");
    console.log(outputString);
  }

  // setp01_type2();
  function setp01_type2() {
    const lines = ['kirishima', 'kyoko'];
    let outputString = lines[0];
    for (let i = 1; i < lines.length; i++) {
      outputString = `${outputString} + ${lines[i]}`;
    }
    outputString = outputString + " = " + lines.join("");
    console.log(outputString);
  }
  
  // step02();
  function step02() {
    const lines = ['3 10 99'];
    const firstLineValues = lines[0].split(" ");

    const repeatTimes = firstLineValues[0];
    const repeatValue = `(${firstLineValues[1]}, ${firstLineValues[2]})`;

    const outputStrings = [];
    for (let i = 0; i < repeatTimes; i++) {
      outputStrings.push(repeatValue);
    }

    console.log(outputStrings.join(", "));
  }

  // step03();
  function step03() {
    const line = "=========================================="; 
    const separator = " | ";

    for (let i = 1; i <= 9; i++) {
      const onelineValues = [];
      for (let j = 1; j <= 9; j++) {
        onelineValues.push(String((i * j)).padStart(2, " "));
      }
      if (i !== 9) {
        console.log(onelineValues.join(separator));
        console.log(line);
      } else {
        console.log(onelineValues.join(separator));
      }
    }
  }

  // step04();
  function step04() {
    const lines = [ '2 3 7 8' ];
    const firstLineValues = lines[0].split(" ");
    const height = parseInt(firstLineValues[0]);
    const width = parseInt(firstLineValues[1]);
    const a = parseInt(firstLineValues[2]);
    const b = parseInt(firstLineValues[3]);

    createTable(height, width, a, b);

    function createTable(height, width, a, b) {
      const separator = " | ";

      for (let i = 0; i < height; i++) {

        const onelineValues = [];
        for (let j = 0; j < width; j++) {
          onelineValues.push(`(${a}, ${b})`);
        }

        const widthStringsLength = onelineValues.join("").length + separator.length * (width - 1);

        if (i !== height - 1) {
          console.log(onelineValues.join(separator));
          console.log("=".repeat(widthStringsLength));
        } else {
          console.log(onelineValues.join(separator));
        }
      }
    }
  }

  boss();
  function boss() {
    // const lines = [ '2 3 7 8' ];
    const lines = [ '3 2 999999999 0' ];
    const firstLineValues = lines[0].split(" ");
    const height = parseInt(firstLineValues[0]);
    const width = parseInt(firstLineValues[1]);
    const a = firstLineValues[2];
    const b = firstLineValues[3];

    createTable(height, width, a, b);

    function createTable(height, width, a, b) {
      const separator = " | ";

      for (let i = 0; i < height; i++) {

        const onelineValues = [];
        for (let j = 0; j < width; j++) {
          onelineValues.push(`(${a.padStart(9, " ")}, ${b.padStart(9, " ")})`);
        }

        const widthStringsLength = onelineValues.join("").length + separator.length * (width - 1);

        if (i !== height - 1) {
          console.log(onelineValues.join(separator));
          console.log("=".repeat(widthStringsLength));
        } else {
          console.log(onelineValues.join(separator));
        }
      }
    }
  }
}