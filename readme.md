# JS-CP-TEMPLATE

競技プログラミングをNode.jsでやるためのテンプレートです。  
コンパイルのバージョンは5.12（AtCoder）です。

## npm scripts

npm run setup ... src/index.js に、入力処理まで書かれたテンプレートが配置されます。

npm run build ... コンパイル処理。出力先は dist/main.js です。

npm run test ... dist/main.js を起動します。

npm run clip ... dist/main.js の中身をクリップボードにコピーします。（pbcopyを使うのでおそらくMac専用）

## その他
BigIntegerの対応として、[BigInteger.js](https://www.npmjs.com/package/big-integer) を利用しています。
