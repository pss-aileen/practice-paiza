"use strict";

{
  /*
    practiceDate: 20240226
    url: https://paiza.jp/works/mondai/string_primer/normal_step1
    time: step03までで44min,step07まで17min,最後まで24min = 合計85min
    thoughts: 
      - JSDocというものを知った、これから練習で使ってみる
      - あと操作系は関数にまとめる練習をしてみる
      - 変数、定数名をもっときちんとつけられるようにChatGPTなどを使いながらやる
      - return char === char.toUpperCase() ? char.toLowerCase() : char.toUpperCase() が面白かった
      - ChatGPTで答えを見なければ、わざわざ大文字と小文字が合うかどうかを調べて難しいアルゴリズムを組むところだった
  */

  //  const lines: string[] =

  // 部分文字列
  // step01();
  function step01(): void {
    const lines: string[] = ['paiza', '1 3'];
    const targetStrings: string[] = lines[0].split("");
    let [start, end]: number[] = lines[1].split(" ").map(Number);
    start = start - 1;
    const slicedStrings: string[] = targetStrings.slice(start, end);
    console.log(slicedStrings.join(""));
  }

  // 文字列の挿入
  // step02();
  function step02(): void {
    const lines: string[] = ['ABCDEFGHIJKLMNOPQRSTUVW&XYZ', '!!!!!', '20'];
    const targetStrings: string[] = lines[0].split("");
    const insertString: string = lines[1];
    const start: number = Number(lines[2]);
    targetStrings.splice(start, 0, insertString);
    console.log(targetStrings.join(""));
  }

  // 文字列の書き換え
  // step03();
  function step03(): void {
    const lines: string[] = ['paiza', '1 P'];

    /**
     * 指定された位置の文字列を入れ替える関数
     * @param originalString 元の文字列
     * @param stringToInsert 挿入する文字列
     * @param position 入れ替える位置
     * @returns 挿入後の文字列
     */
    function insertStringAtPosition(originalString: string, stringToInsert: string, startPosition: number): string {
      const stringArray = originalString.split("");
      stringArray.splice(startPosition, 1, stringToInsert);
      return stringArray.join("");
    }

    const originalString: string = lines[0];
    const [startPositionString, stringToInsert]: string[] = lines[1].split(" ");
    const startPosition: number = Number(startPositionString) - 1;

    const resultString = insertStringAtPosition(originalString, stringToInsert, startPosition);
    console.log(resultString);
  }

  // 文字列から数値への変換
  // step04();
  function step04(): void {
    const lines: string[] = ['813'];
    const value: number = Number(lines[0]);

    function calculateValue(value: number): number {
      let result = value - 813;
      return result;
    }

    const result = calculateValue(value);
    console.log(result)
  }

  // 数値から文字列への変換 (paizaランク D 相当)
  // step05();
  function step05(): void {
    const lines: string[] = ['1', '1', '1'];
    const linesNumber: number[] = lines.map(Number);
    const x: number = linesNumber[0];
    const y: number = linesNumber[1];
    const n: number = linesNumber[2] - 1;
    const sum: string[] = String(x + y).split("");
    console.log(sum[n]);
  }

  // 大文字から小文字への変換 (paizaランク D 相当)
  // step06();
  function step06(): void {
    const lines: string[] = ["PAIZA"];
    const string: string = lines[0];
    const lowerCaseString: string = string.toLowerCase();
    console.log(lowerCaseString);
  }

  // 小文字から大文字への変換 (paizaランク D 相当)
  // step07();
  function step07(): void {
    const lines: string[] = ["paiza"];
    const string: string = lines[0];
    const upperCaseString: string = string.toUpperCase();
    console.log(upperCaseString);
  }

  // 大文字小文字の反転 (paizaランク D 相当)
  // step08();
  function step08(): void {
    // ChatGPTの力を拝借
    // Aという文字をupperCaseにして、比較してtrueだとlowerCaseに変更、falseであればtoUpperCaseにするという関数...
    // 発想が思いつかなかったので面白いなと感じた
    const lines: string[] = ['Paiza'];

    function swapCase(str: string) {
      return str.split("").map(char => {
        return char === char.toUpperCase() ? char.toLowerCase() : char.toUpperCase();
      }).join("");
    }

    console.log(swapCase(lines[0]));
  }

  // 文字列の検索 (paizaランク D 相当)
  // new RegExpをするとき、しないときの違い
  // step09();
  function step09(): void {
    const lines: string[] = ['paiza', 'iza'];
    const str = lines[0];
    const regex = new RegExp(lines[1]);
    const result = regex.test(str) ? "YES" : "NO";
    console.log(result);
  }

  // 文字列の反転 (paizaランク D 相当)
  // step10();
  function step10(): void {
    const lines: string[] = ["jiargajagrpdasncoqefhioagrhoahioghaiohrwiwiwiwiwikfkkfkk"];
    const strings: string[] = lines[0].split("");
    const reversedStrings: string[] = strings.reverse();
    console.log(reversedStrings.join(""));
  }

  // 回文判定 (paizaランク D 相当)
  step11();
  function step11(): void {
    const lines: string[] = ["qpwoeirutyyturieowpq"];
    const strings: string[] = lines[0].split("");
    const reversedStrings: string[] = strings.reverse();
    console.log(reversedStrings.join("") === lines[0] ? "YES" : "NO");
  }

}