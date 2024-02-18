# paiza ラーニング レベルアップ問題集ログ

- プログラミングスキル向上のために取り組み中
- 学習ログとしてこちらにコードをためています



# TypeScript

**実行テスト**

```shell
npm test xx.ts
```

**トランスパイル**

```shell
tsc -p ./tsconfig.json
```



# My Tips

## ChatGPTにリファクタリングしてもらう
```
あなたはベテランエンジニアです。以下の新人エンジニアが書いたコードを条件にしたがってリファクタリングしてください。
＜条件＞
・TypeScript
・既存のコードの良い点を教えて
・誰がみても、新人が見てもわかるようなコードにする
＜コード＞

```

## 文字列の分割
```javascript
const string = "1 2 3 4 5";
// 半角空白で分割
const splitString = string.split(" ");
console.log(splitString); // [ '1', '2', '3', '4', '5' ]
```

## 分割した配列の型を数字に変更
```javascript
const string = "1 2 3 4 5";
const numbers = string.split(" ").map(Number);
console.log(numbers); // [ 1, 2, 3, 4, 5 ];
```

## 配列の中から最大値、最小値を返す
```javascript
const lines = ['30 50 10'];
const numbers = lines[0].split(" ").map((n) => Number(n));
const max = Math.max(...numbers);
const min = Math.min(...numbers);
console.log(max, min); // 50 10
```

## 分割代入
```javascript
const lines = ['10 20 30 40'];
const [height, width, row, column] = lines[0].split(" ").map(Number);
console.log(height, width, row, column); // 10 20 30 40
```

```javascript
const lines = ["3 4", "sample sample", "sample sample"];
const [shopProductsNumber, customerShoppingListNumber]: number[] = lines[0].split(" ").map(Number);
```
- 最初の入力を `split` で分けて、分割代入すると楽

## 連想配列
```javascript
// 商品名をキー、価格を値として持つマップを作成
const shopProductsPrices = new Map<string, number>();
shopProductsPrices.set("pencil", 50);
shopProductsPrices.set("book", 100);
shopProductsPrices.set("eraser", 30);

// 商品の価格を取得
console.log(shopProductsPrices.get("pencil")); // Output: 50
console.log(shopProductsPrices.get("pen")); // Output: undefined
```
- `new Map`: [MDN](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Map)