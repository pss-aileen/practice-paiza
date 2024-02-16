"use strict";
{
    /*
      title: 商品の検索
      practiceDate: 20240216
      url: https://paiza.jp/works/mondai/data_structure/data_structure__dict_step1
      time: 47min（step02まで）
      thoughts:
        - 急に難易度があがって難しいので、一旦step02で終了
    */
    //  const lines = [];
    // step01();
    function step01() {
        // const lines: string[] = ['5', '1 2 3 3 6'];
        const lines = ['10', '0 1 2 3 4 5 6 7 8 9'];
        const numbers = lines[1].split(" ").map(Number);
        const numberCounts = [];
        for (let i = 0; i <= 9; i++) {
            let count = 0;
            for (let j = 0; j < numbers.length; j++) {
                // numbers[j] === i ? count++ : null;
                if (numbers[j] === i) {
                    count++;
                }
            }
            numberCounts.push(count);
        }
        console.log(numberCounts.join(" "));
    }
    // step02();
    function step02() {
        // const lines: string[] = ['13', 'aaabbbccdddde'];
        const lines = ['26', 'ahgektndrmypqlfsjiouwzxcbv'];
        const alphabet = Array.from({ length: 26 }, (_, i) => String.fromCharCode(97 + i));
        const targetStrings = lines[1].split("");
        const numberCounts = [];
        for (let i = 0; i < alphabet.length; i++) {
            let count = 0;
            for (let j = 0; j < targetStrings.length; j++) {
                if (targetStrings[j] === alphabet[i]) {
                    count++;
                }
            }
            numberCounts.push(count);
        }
        console.log(numberCounts.join(" "));
    }
    /*
    Array.from(arrayLike, mapFn(element, index))
    arrayLikes: アレイはどんなやつか？
    mapFn: マップ関数と同じで、要素とインデックスを記述して、それをアロー関数で実行して配列にする
    */
    step03();
    function step03() {
        const lines = ['5', 'bcd', 'abc', 'bcd', 'bcd', 'bcd'];
        const targetStrings = lines.slice(1).sort();
        // console.log(targetStrings);
        // 先にソートする
        // 1つ目の値を次のものと比べていって、違う文字列が出てきたらpushで押し出して、ループを続ける
        const outputInfo = [];
        let count = 1;
        for (let i = 0; i < targetStrings.length; i++) {
            if (targetStrings[i] === targetStrings[i + 1]) {
                count++;
            }
            else if (targetStrings[i] !== targetStrings[i + 1]) {
                outputInfo.push(`${targetStrings[i]} ${count}`);
                count = 1;
            }
        }
        console.log(outputInfo.join("\n"));
    }
    step04();
    function step04() {
    }
    boss();
    function boss() {
    }
}
