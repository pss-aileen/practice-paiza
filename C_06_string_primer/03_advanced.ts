"use strict";

{
  /*
    practiceDate: 202400310
    url: https://paiza.jp/works/mondai/string_primer/advance_step1
    time: step03まで18min、step04まで3min
    thoughts: 
  */

  //  const lines: string[] = [];

  // 
  // step01();
  function step01(): void {
    const lines: string[] = ["C,Cpp,Java,JavaScript,Ruby,HTML,CSS,SQL"];
    const splitedStrings: string[] = lines[0].split(",");
    console.log(splitedStrings.join("\n"));
  }

  // 
  // step02();
  function step02(): void {
    const lines: string[] = ["0645/06/14/00:00"];
    const splitedStrings: string[] = lines[0].split("/");
    const splitedTime: string[] = splitedStrings[3].split(":");
    splitedStrings.pop();
    const strings: string[] = [...splitedStrings, ...splitedTime];
    console.log(strings.join("\n"));
  }

  // 
  // step03();
  function step03(): void {
    const lines: string[] = ["1212/12/12 12:12"];
    const splitedStrings: string[] = lines[0].split(" ");
    const dateInfo: string[] = splitedStrings[0].split("/");
    const timeInfo: string[] = splitedStrings[1].split(":");
    const answer = [...dateInfo, ...timeInfo];
    console.log(answer.join("\n"));
  }

  // 
  step04();
  function step04(): void {
    const lines: string[] = ['813a'];
    const target: string = lines[0];
    const result:any = Number(target) ? "YES" : "NO";
    console.log(result);
  }

  // 
  step05();
  function step05(): void {
  }

  // 
  step06();
  function step06(): void {
  }

  // 
  step07();
  function step07(): void {
  }

}