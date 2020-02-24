# define-plugin-and-dotenv-webpack

.env から環境変数を埋めたいので define-plugin と dotenv-webpack の関係を調べる

DefinePlugin: The DefinePlugin allows you to create global constants which can be configured at compile time. -> global 変数に値を埋め込める

dotenv-webpack: supports dotenv and other environment variables and only exposes what you choose and use. -> .env から値を拾ってくる

### dotenv-webpack

.env に

```
MESSAGE="hello"
```

を用意し、

```js
console.log(process.env.MESSAGE);
```

をビルドすると

```js
function(e, t) {
    console.log("hello");
  }
```

にさし変わっていた。

なので dotenv-webpack だけで環境変数を埋め込める

### define-plugin

```js
const definePlugin = new webpack.DefinePlugin({
  WORLD: JSON.stringify("WORLD")
});
```

を定義し、これを plugins の中に差し込むと

```js
plugins: [definePlugin];
```

これをビルドした時に

```js
console.log(WORLD);
```

ビルド後ファイルに見えた

```js
function(e, t) {
    console.log("WORLD");
}
```

なので define-plugin だけでも変数を埋め込める

## 結局？

`dotenv-webpack` は process.env に .env ファイルから好きに値を埋め込めて、define-plugin は好きな global 変数に好きな値を埋め込める。なので、 define-plugin で `process.env.HOGEHGOE` という global 変数に値を埋め込めば実質`dotenv-webpack`と同じことができる。
