"use strict";
{
    /*
      title: 集合の結合
      practiceDate: 20240218
      url: https://paiza.jp/works/mondai/data_structure/data_structure__set_step1
      time:
      thoughts:
    */
    //  const lines = [];
    // step01();
    function step01() {
        // const lines: string[] = ['5 4', '1 2 3 4 5'];
        const lines = ['5 6', '1 2 3 4 5'];
        const [_, targetNumber] = lines[0].split(" ").map(Number);
        const numbers = lines[1].split(" ").map(Number);
        const result = numbers.includes(targetNumber) ? "Yes" : "No";
        console.log(result);
    }
    step02();
    function step02() {
        const lines = ['6', '1 2 3 3 4 5 5 5 5 6 6 6'];
        const numbers = lines[1].split(" ").map(Number);
        const numbersRemovedDuplicates = numbers.filter((item, index, array) => {
            return item !== array[index + 1];
        });
        console.log(numbersRemovedDuplicates.join(" "));
        // filteredSequentialNumbers 連続をフィルターしたナンバー...もっとわかりやすくしたいが...
    }
    step03();
    function step03() {
    }
    step04();
    function step04() {
    }
    boss();
    function boss() {
    }
}
