# 文字列の分割
```javascript
const string = "1 2 3 4 5";
// 半角空白で分割
const splitString = string.split(" ");
console.log(splitString); // [ '1', '2', '3', '4', '5' ]
```

# 分割した配列の型を数字に変更
```javascript
const string = "1 2 3 4 5";
const numbers = string.split(" ").map(Number);
console.log(numbers); // [ 1, 2, 3, 4, 5 ];
```

# 配列の中から最大値、最小値を返す
```javascript
const lines = ['30 50 10'];
const numbers = lines[0].split(" ").map((n) => Number(n));
const max = Math.max(...numbers);
const min = Math.min(...numbers);
console.log(max, min); // 50 10
```

# 分割代入
```javascript
const lines = ['10 20 30 40'];
const [height, width, row, column] = lines[0].split(" ").map(Number);
console.log(height, width, row, column); // 10 20 30 40
```