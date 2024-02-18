"use strict";
{
    /*
      title: 商品の検索
      practiceDate: 20240216
      url: https://paiza.jp/works/mondai/data_structure/data_structure__dict_step1
      time: 47min（step02まで）step04の途中まで55min,最後まで55min = 2h37min
      thoughts:
        - 急に難易度があがって難しいので、一旦step02で終了
        - むずしくてstep04も途中で断念、また時間がある時にといてみる
        - 最後までとりあえず解いたが、ChatGPTがないと解けなかった、みんなどうやってロジックを考えているのかが気になった
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
    // step03();
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
    // step04();
    function step04() {
        // わからなかったのでChatGPTに教えてもらった
        // 最初はとにかくループでやろうと思っていたけど、ループだと難しかった。
        // mapでキーを指定できたことにより、該当するものを呼び出して、それに対する値を返すことができた
        const lines = [
            '3 4',
            'eraser 50', 'pencil 30', 'book 100',
            'book', 'eraser', 'pencil', 'margaret'
        ];
        const [shopProductsNumber, customerShoppingListNumber] = lines[0].split(" ").map(Number);
        const shopProductsPrices = new Map();
        lines.slice(1, shopProductsNumber + 1).forEach((line, index) => {
            const [product, price] = line.split(" ");
            shopProductsPrices.set(product, Number(price));
        });
        const customerShoppingList = lines.slice(shopProductsNumber + 1);
        const result = customerShoppingList.map(item => {
            const price = shopProductsPrices.get(item);
            return price !== undefined ? price : -1;
        });
        console.log(result.join("\n"));
    }
    boss();
    function boss() {
        const lines = ['3 2', 'a', 'b', 'c', 'b', 'd'];
        // const lines: string[] = ["6 2", "pai", "za", "p", "pa", "pai", "za", "za", "pai"];
        const [n, q] = lines[0].split(" ").map(Number);
        const nStrings = lines.slice(1, n + 1);
        const qStrings = lines.slice(n + 1);
        console.log(nStrings, qStrings);
        const result = qStrings.map(string => {
            let order = 0;
            for (let i = 0; i < nStrings.length; i++) {
                if (string === nStrings[i]) {
                    order = i + 1;
                    return order;
                }
            }
            return -1;
        });
        console.log(result.join("\n"));
    }
    boss_gpt();
    function boss_gpt() {
        const lines = ['3 2', 'a', 'b', 'c', 'b', 'd'];
        const [N, Q] = lines[0].split(' ').map(Number);
        const S = lines.slice(1, N + 1);
        const T = lines.slice(N + 1);
        const result = [];
        for (let i = 0; i < Q; i++) {
            const index = S.indexOf(T[i]);
            result.push(index !== -1 ? index + 1 : -1);
        }
        console.log(result.join('\n'));
    }
    // indexOfでもよかったのか、と思った
}
