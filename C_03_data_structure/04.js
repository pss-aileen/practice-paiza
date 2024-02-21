"use strict";
{
    /*
      title: 集合の結合
      practiceDate: 20240218, 20240219
      url: https://paiza.jp/works/mondai/data_structure/data_structure__set_step1
      time: 26min, 42min, 18min = 1h26min
      thoughts:
        - step03の問題文の意味がわからない...一旦中断
        - boss途中ですが一旦中断
        - 難しかった...
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
    // step02();
    function step02() {
        const lines = ['6', '1 2 3 3 4 5 5 5 5 6 6 6'];
        const numbers = lines[1].split(" ").map(Number);
        const numbersRemovedDuplicates = numbers.filter((item, index, array) => {
            return item !== array[index + 1];
        });
        console.log(numbersRemovedDuplicates.join(" "));
        // filteredSequentialNumbers 連続をフィルターしたナンバー...もっとわかりやすくしたいが...
    }
    // step03();
    function step03() {
        // chatgptの力を借りた
        const lines = ['9', '1 2 3 2 5 3 3 10 2'];
        const a = lines[1].split(" ").map(Number);
        checkDuplicates(a);
        function checkDuplicates(array) {
            let seen = new Set();
            for (let i = 0; i < array.length; i++) {
                if (seen.has(array[i])) {
                    console.log("Yes");
                }
                else {
                    if (i > 0)
                        console.log("No");
                    seen.add(array[i]);
                }
            }
        }
    }
    // step04();
    function step04() {
        const lines = ["2", "1000000002 1000000002"];
        const a = lines[1].split(" ").map(BigInt);
        checkDuplicates(a);
        function checkDuplicates(array) {
            let seen = new Set();
            for (let i = 0; i < array.length; i++) {
                if (seen.has(array[i])) {
                    console.log("Yes");
                }
                else {
                    if (i > 0)
                        console.log("No");
                    seen.add(array[i]);
                }
            }
        }
    }
    boss();
    function boss() {
        const lines = ['3', '1 2 3', '3 4 5'];
        const a = lines[1].split(" ");
        const b = lines[2].split(" ");
        const combinedArray = [...a, ...b];
        checkDuplicates(combinedArray);
        function checkDuplicates(array) {
            let seen = new Set();
            for (let i = 0; i < array.length; i++) {
                if (seen.has(array[i])) {
                }
                else {
                    seen.add(array[i]);
                }
            }
            const sortedArray = Array.from(seen).map(BigInt).sort((a, b) => {
                if (a > b)
                    return 1;
                if (a < b)
                    return -1;
                return 0;
            });
            console.log(sortedArray.join(" "));
        }
    }
}
