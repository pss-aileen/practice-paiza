"use strict";
{
    /*
      practiceDate: 20240225
      url: https://paiza.jp/works/mondai/string_primer/basic_step1
      time: 10minから
      thoughts:
    */
    //  const lines: string[] = [];
    // 文字列の出力 (paizaランク D 相当)
    // step01();
    function step01() {
        const string = "paiza";
        console.log(string);
    }
    // 文字列の受け取り (paizaランク D 相当)
    // step02();
    function step02() {
        const lines = ['paiza'];
        const string = lines[0];
        console.log(string);
    }
    // i 文字目の出力 (paizaランク D 相当)
    // step03();
    function step03() {
        const lines = ['paiza', '2'];
        const strings = lines[0].split("");
        const index = Number(lines[1]) - 1;
        const targetCharacter = strings[index];
        console.log(targetCharacter);
    }
    // 文字列の条件判定 (paizaランク D 相当)
    // step04();
    function step04() {
        const lines = ["paIza"];
        const targetString = lines[0];
        const correctString = "paiza";
        const result = targetString === correctString ? "YES" : "No";
        console.log(result);
    }
    // 文字列の文字数 (paizaランク D 相当)
    // step05();
    function step05() {
        const lines = ["rhaogioaghioagiofvkkkdkkwkwwkwkeiuh38198"];
        const string = lines[0];
        const stringLength = string.length;
        console.log(stringLength);
    }
    // 文字の検索 (paizaランク D 相当)
    // step06();
    function step06() {
        const lines = ['paiza', 'p'];
        const strings = lines[0].split("");
        const targetCharacter = lines[1];
        const index = strings.indexOf(targetCharacter) + 1;
        console.log(index);
    }
    // 文字列の連結 (paizaランク D 相当)
    step07();
    function step07() {
        const lines = ['2', 'pa', 'iza'];
        const strings = lines.slice(1);
        const string = strings.join("");
        console.log(string);
    }
}
