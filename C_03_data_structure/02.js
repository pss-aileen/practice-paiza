"use strict";
{
    /*
      title: 文字列の配列
      practiceDate: 2024XXXX
      url: https://paiza.jp/works/mondai/data_structure/data_structure__string_step1
      time: 20min
      thoughts:
       - 小数点以下100桁レベルを数値として表そうとするとJavaScriptだけではできないので、Decimal.jsなどのライブラリが必要になるらしい。そんな世界があったんだと知った。
       - sliceとmapの使い方をそろそろ使いこなせるようになりたいと思った。
    */
    //  const lines = [];
    // とても大きな数値の入力
    // step01();
    function step01() {
        const lines = ['813'];
        console.log(lines[0]);
    }
    // とても小さな数値の入力
    // step02();
    function step02() {
        const lines = ['1.234567890123456789'];
        console.log(lines[0]);
    }
    //文字列の配列 
    // boss();
    function boss() {
        // const lines: string[] = ['1 1 1 1', '#'];
        const lines = ['3 4 1 2', '..#.', '#.##', '....'];
        const firstLineValues = lines[0].split(" ");
        const h = parseInt(firstLineValues[0]);
        const w = parseInt(firstLineValues[1]);
        const r = parseInt(firstLineValues[2]);
        const c = parseInt(firstLineValues[3]);
        const mazeArray = [];
        for (let i = 1; i < lines.length; i++) {
            mazeArray.push(lines[i].split(""));
        }
        if (mazeArray[r - 1][c - 1] === "#") {
            console.log("Yes");
        }
        else {
            console.log("No");
        }
    }
    boss_gpt();
    function boss_gpt() {
        const lines = ['3 4 1 2', '..#.', '#.##', '....'];
        const [height, width, row, column] = lines[0].split(" ").map(Number);
        // ↑を型づけしなくてよい理由
        // TypeScriptでは、変数や定数に型を指定することが推奨されますが、この場合は必要ありません。なぜなら、TypeScriptのコンパイラが自動的にその型を推論してくれるからです。そのため、明示的に型を書く必要はありません。(gpt)
        const maze = lines.slice(1).map(line => line.split(""));
        function isWall(r, c) {
            return maze[r - 1][c - 1] === "#";
        }
        if (isWall(row, column)) {
            console.log("Yes");
        }
        else {
            console.log("No");
        }
    }
}
