# define-plugin-and-dotenv-webpack

.env から環境変数を埋めたいので define-plugin と dotenv-webpack の関係を調べる

DefinePlugin: The DefinePlugin allows you to create global constants which can be configured at compile time. -> global 変数に値を埋め込める

dotenv-webpack: supports dotenv and other environment variables and only exposes what you choose and use. -> .env から値を拾ってくる

### dotenv

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
