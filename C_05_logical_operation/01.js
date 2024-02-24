"use strict";
{
    /*
      title: 論理演算を用いた計算のまとめ
      practiceDate: 20240224
      url: https://paiza.jp/works/mondai/logical_operation/logical_operation__basic_step1
      time:
      thoughts:
    */
    //  const lines = [];
    // step01();
    function step01() {
        const lines = ['1 1'];
        const [a, b] = lines[0].split(" ").map(Number);
        if (a && b) {
            console.log(1);
        }
        else {
            console.log(0);
        }
    }
    // step02();
    function step02() {
        const lines = ['0 0'];
        const [a, b] = lines[0].split(" ").map(Number);
        if (a || b) {
            console.log(1);
        }
        else {
            console.log(0);
        }
    }
    // step03();
    function step03() {
        const lines = ["1"];
        const a = Number(lines[0]);
        const result = a ? 0 : 1;
        console.log(result);
    }
    // step04();
    function step04() {
        const lines = ['1 1'];
        const [a, b] = lines[0].split(" ").map(Number);
        const result = a !== b ? 1 : 0;
        console.log(result);
    }
    // step05();
    function step05() {
        const lines = ['0 0'];
        const [a, b] = lines[0].split(" ").map(Number);
        const result = a && b ? 0 : 1;
        console.log(result);
    }
    // step06();
    function step06() {
        const lines = ['1 1'];
        const [a, b] = lines[0].split(" ").map(Number);
        const result = !a && !b ? 1 : 0;
        console.log(result);
    }
    step07();
    function step07() {
        const lines = ['0 0'];
        const [a, b] = lines[0].split(" ").map(Number);
        const result = a === b ? 1 : 0;
        console.log(result);
    }
    step08();
    function step08() {
    }
    step09();
    function step09() {
    }
    boss();
    function boss() {
    }
}
