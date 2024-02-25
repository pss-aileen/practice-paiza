"use strict";

{
  /*
    practiceDate: 20240225
    url: https://paiza.jp/works/mondai/string_primer/basic_step1
    time: 23min
    thoughts: 
      - 基礎の復習ができた
  */

  //  const lines: string[] = [];

  // 文字列の出力 (paizaランク D 相当)
  // step01();
  function step01(): void {
    const string: string = "paiza";
    console.log(string);
  }

  // 文字列の受け取り (paizaランク D 相当)
  // step02();
  function step02(): void {
    const lines: string[] = ['paiza'];
    const string: string = lines[0];
    console.log(string);
  }

  // i 文字目の出力 (paizaランク D 相当)
  // step03();
  function step03(): void {
    const lines: string[] = ['paiza', '2'];
    const strings: string[] = lines[0].split("");
    const index: number = Number(lines[1]) - 1;
    const targetCharacter: string = strings[index];
    console.log(targetCharacter);
  }

  // 文字列の条件判定 (paizaランク D 相当)
  // step04();
  function step04(): void {
    const lines: string[] = ["paIza"];
    const targetString: string = lines[0];
    const correctString: string = "paiza"
    const result = targetString === correctString ? "YES" : "No";
    console.log(result);
  }

  // 文字列の文字数 (paizaランク D 相当)
  // step05();
  function step05(): void {
    const lines: string[] = ["rhaogioaghioagiofvkkkdkkwkwwkwkeiuh38198"];
    const string: string = lines[0];
    const stringLength: number = string.length;
    console.log(stringLength);
  }

  // 文字の検索 (paizaランク D 相当)
  // step06();
  function step06(): void {
    const lines: string[] = ['paiza', 'p'];
    const strings: string[] = lines[0].split("");
    const targetCharacter: string = lines[1];
    const index: number = strings.indexOf(targetCharacter) + 1;
    console.log(index);
  }

  // 文字列の連結 (paizaランク D 相当)
  step07();
  function step07(): void {
    const lines: string[] = ['2', 'pa', 'iza'];
    const strings: string[] = lines.slice(1);
    const string: string = strings.join("");
    console.log(string);
  }

}