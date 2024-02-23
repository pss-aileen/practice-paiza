"use strict";
{
    /*
      title: 代入演算 4
      practiceDate: 20240223
      url: https://paiza.jp/works/mondai/arithmetic_substitution_op/arithmetic_substitution_op__substitution_step1
      time:
      thoughts:
    */
    //  const lines = [];
    // step01();
    function step01() {
        let n = 0;
        n += 3286;
        n *= 4736;
        n %= 12312;
        console.log(n);
    }
    // step02();
    function step02() {
        const lines = ['149 825 262'];
        const [a, b, c] = lines[0].split(" ").map(Number);
        let n = 0;
        n += a;
        n *= b;
        n %= c;
        console.log(n);
    }
    // step03();
    function step03() {
        let n = 10000;
        n /= 361;
        n %= 28;
        console.log(Math.floor(n));
    }
    boss();
    function boss() {
        const lines = ['911 285'];
        const [a, b] = lines[0].split(" ").map(Number);
        let n = 10000;
        n /= a;
        n %= b;
        console.log(Math.floor(n));
    }
}
