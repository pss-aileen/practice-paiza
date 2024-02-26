"use strict";
{
    /*
      practiceDate: 20240226
      url: https://paiza.jp/works/mondai/string_primer/normal_step1
      time:
      thoughts:
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
    step03();
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
    // 
    step04();
    function step04() {
    }
    // 
    step05();
    function step05() {
    }
    // 
    step06();
    function step06() {
    }
    // 
    step07();
    function step07() {
    }
}
