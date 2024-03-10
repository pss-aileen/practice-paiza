"use strict";
{
    /*
      practiceDate: 202400310
      url: https://paiza.jp/works/mondai/string_primer/advance_step1
      time:
      thoughts:
    */
    //  const lines: string[] = [];
    // 
    // step01();
    function step01() {
        const lines = ["C,Cpp,Java,JavaScript,Ruby,HTML,CSS,SQL"];
        const splitedStrings = lines[0].split(",");
        console.log(splitedStrings.join("\n"));
    }
    // 
    // step02();
    function step02() {
        const lines = ["0645/06/14/00:00"];
        const splitedStrings = lines[0].split("/");
        const splitedTime = splitedStrings[3].split(":");
        splitedStrings.pop();
        const strings = [...splitedStrings, ...splitedTime];
        console.log(strings.join("\n"));
    }
    // 
    step03();
    function step03() {
        const lines = ["1212/12/12 12:12"];
        const splitedStrings = lines[0].split(" ");
        const dateInfo = splitedStrings[0].split("/");
        const timeInfo = splitedStrings[1].split(":");
        const answer = [...dateInfo, ...timeInfo];
        console.log(answer.join("\n"));
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
