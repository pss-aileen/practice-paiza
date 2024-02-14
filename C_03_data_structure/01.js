"use strict";
{
    /*
      title: 動的配列
      practiceDate: 20240214
      url: https://paiza.jp/works/mondai/data_structure/data_structure__array_step1
      time: 2h05m
      thoughts: TypeScriptを導入したこともあり、かなり時間がかかった。少しだけですがTypeScriptがどんな感じがつかめたのでよかった。
    */
    //  const lines = [];
    // step01();
    function step01() {
        const lines = ['5 2', '1 2 3 4 5'];
        const firstLineValues = lines[0].split(" ");
        const targetIndex = parseInt(firstLineValues[1]) - 1;
        const numbers = lines[1].split(" ").map((number) => {
            return parseInt(number);
        });
        console.log(numbers[targetIndex]);
    }
    // step02();
    function step02() {
        const lines = ['5', '10 20 30 40 50', '3', '2 4 1'];
        const targetNumbers = lines[1].split(" ").map((number) => parseInt(number));
        const targetindexes = lines[3].split(" ").map((number) => parseInt(number) - 1);
        for (let i = 0; i < targetindexes.length; i++) {
            console.log(targetNumbers[targetindexes[i]]);
        }
    }
    // step03();
    function step03() {
        const lines = ['30 50 10'];
        const numbers = lines[0].split(" ").map((n) => parseInt(n));
        const max = Math.max(...numbers);
        const min = Math.min(...numbers);
        const answer = max - min;
        console.log(answer);
    }
    boss();
    function boss() {
        const lines = ['3 5', '1 2 3', '0 10', '0 12', '2', '1', '2'];
        const firstLineValues = lines[0].split(" ").map((n) => parseInt(n));
        const n = firstLineValues[0];
        const operationCount = firstLineValues[1];
        const numbers = lines[1].split(" ").map((n) => parseInt(n));
        const operations = lines.slice(2);
        for (let i = 0; i < operations.length; i++) {
            const queryInfo = analyzeQuery(operations[i]);
            checkOperationAndExecute(queryInfo);
        }
        function analyzeQuery(numberLine) {
            const queryInfo = numberLine.split(" ").map((n) => parseInt(n));
            return queryInfo;
        }
        function checkOperationAndExecute(queryInfo) {
            const queryType = queryInfo[0];
            const queryNumber = queryInfo[1] ? queryInfo[1] : 0;
            if (queryType === 0) {
                numbers.push(queryNumber);
            }
            if (queryType === 1) {
                numbers.pop();
            }
            if (queryType === 2) {
                console.log(numbers.join(" "));
            }
        }
    }
}
