"use strict";
{
    /*
      title: 累乗 2
      practiceDate: 20240222
      url: https://paiza.jp/works/mondai/arithmetic_substitution_op/arithmetic_substitution_op__arithmetic_step1
      time:
      thoughts:
    */
    //  const lines = [];
    // step01();
    function step01() {
        console.log(1231 + 5178);
    }
    // step02();
    function step02() {
        const lines = ['397 646'];
        const [a, b] = lines[0].split(" ").map(Number);
        const difference = a - b;
        const product = a * b;
        console.log(difference, product);
    }
    // step03();
    function step03() {
        const a = 437326;
        const b = 9085;
        const x = Math.floor(a / b);
        const y = a % b;
        console.log(x, y);
    }
    step04();
    function step04() {
        const lines = ['202 400 37'];
        const [a, b, c] = lines[0].split(" ").map(Number);
        console.log(a * a, b * b + c * c);
    }
    boss();
    function boss() {
        const [a, b, c] = [202, 134, 107];
        console.log(Math.pow(((a + b) * c), 2));
    }
}
