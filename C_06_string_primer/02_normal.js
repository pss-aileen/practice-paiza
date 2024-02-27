"use strict";
{
    /*
      practiceDate: 20240226
      url: https://paiza.jp/works/mondai/string_primer/normal_step1
      time: step03までで44min
      thoughts:
        - JSDocというものを知った、これから練習で使ってみる
        - あと操作系は関数にまとめる練習をしてみる
        - 変数、定数名をもっときちんとつけられるようにChatGPTなどを使いながらやる
    */
    //  const lines: string[] =
    // 部分文字列
    // step01();
    function step01() {
        const lines = ['paiza', '1 3'];
        const targetStrings = lines[0].split("");
        let [start, end] = lines[1].split(" ").map(Number);
        start = start - 1;
        const slicedStrings = targetStrings.slice(start, end);
        console.log(slicedStrings.join(""));
    }
    // 文字列の挿入
    // step02();
    function step02() {
        const lines = ['ABCDEFGHIJKLMNOPQRSTUVW&XYZ', '!!!!!', '20'];
        const targetStrings = lines[0].split("");
        const insertString = lines[1];
        const start = Number(lines[2]);
        targetStrings.splice(start, 0, insertString);
        console.log(targetStrings.join(""));
    }
    // 文字列の書き換え
    // step03();
    function step03() {
        const lines = ['paiza', '1 P'];
        /**
         * 指定された位置の文字列を入れ替える関数
         * @param originalString 元の文字列
         * @param stringToInsert 挿入する文字列
         * @param position 入れ替える位置
         * @returns 挿入後の文字列
         */
        function insertStringAtPosition(originalString, stringToInsert, startPosition) {
            const stringArray = originalString.split("");
            stringArray.splice(startPosition, 1, stringToInsert);
            return stringArray.join("");
        }
        const originalString = lines[0];
        const [startPositionString, stringToInsert] = lines[1].split(" ");
        const startPosition = Number(startPositionString) - 1;
        const resultString = insertStringAtPosition(originalString, stringToInsert, startPosition);
        console.log(resultString);
    }
    // 文字列から数値への変換
    // step04();
    function step04() {
        const lines = ['813'];
        const value = Number(lines[0]);
        function calculateValue(value) {
            let result = value - 813;
            return result;
        }
        const result = calculateValue(value);
        console.log(result);
    }
    // 数値から文字列への変換 (paizaランク D 相当)
    // step05();
    function step05() {
        const lines = ['1', '1', '1'];
        const linesNumber = lines.map(Number);
        const x = linesNumber[0];
        const y = linesNumber[1];
        const n = linesNumber[2] - 1;
        const sum = String(x + y).split("");
        console.log(sum[n]);
    }
    // 大文字から小文字への変換 (paizaランク D 相当)
    // step06();
    function step06() {
        const lines = ["PAIZA"];
        const string = lines[0];
        const lowerCaseString = string.toLowerCase();
        console.log(lowerCaseString);
    }
    // 小文字から大文字への変換 (paizaランク D 相当)
    step07();
    function step07() {
        const lines = ["paiza"];
        const string = lines[0];
        const upperCaseString = string.toUpperCase();
        console.log(upperCaseString);
    }
}
