# nuxt-sample

> My spectacular Nuxt.js project

## How to create

``` zsh
% npx create-nuxt-app nuxt-sample

create-nuxt-app v2.12.0
✨  Generating Nuxt.js project in nuxt-sample
? Project name nuxt-sample
? Project description My spectacular Nuxt.js project
? Author name take8
? Choose the package manager Yarn
? Choose UI framework None
? Choose custom server framework None (Recommended)
? Choose Nuxt.js modules Axios
? Choose linting tools ESLint, Prettier
? Choose test framework None
? Choose rendering mode Universal (SSR)
? Choose development tools jsconfig.json (Recommended for VS Code)
```

## Build Setup

### Development

``` zsh
# install dependencies
% yarn install

# serve with hot reload at localhost:3000
% yarn dev
```

Access to http://localhost:3000/

### Production

``` zsh
# build for production and launch server
% yarn build
% yarn start

# generate static project
% yarn generate
```

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).

## ディレクトリ構成

https://ja.nuxtjs.org/guide/directory-structure/

## ルーティング

`pages` ディレクトリに `.vue` ファイルを配置するとvue-routerのファイルが自動生成される。  
自動生成されるファイルは以下。

``` bash
.nuxt/router.js
```

階層を彫りたい場合は、ディレクトリを作ってその中に `.vue` を置く。

### 動的なルーティング

`vue` ファイル名またはディレクトリ名にプレフィックス `_` をつける。

### URLパラメータ参照

https://ja.nuxtjs.org/guide/routing#%E3%83%AB%E3%83%BC%E3%83%88%E3%83%91%E3%83%A9%E3%83%A1%E3%83%BC%E3%82%BF%E3%81%B8%E3%81%AE%E3%83%AD%E3%83%BC%E3%82%AB%E3%83%AB%E3%82%A2%E3%82%AF%E3%82%BB%E3%82%B9

## ビュー

https://ja.nuxtjs.org/guide/views

### アプリテンプレート

おおもとのテンプレートファイル。
デフォルトは `.nuxt/views/app.template.html` に生成される。
変更したい場合は、プロジェクトルートに `app.html` を作成する。

### デフォルトレイアウト

`layouts/default.vue`

関係性: `app.html` の`{{ APP }}` <- `layouts/default.vue` の `<nuxt />` <- `pages/index.vue` など

### エラーページ

`layouts/error.vue`

### HTML head

`nuxt.config.js`

## 非同期なデータ

https://ja.nuxtjs.org/guide/async-data

## アセット

https://ja.nuxtjs.org/guide/assets/

## Vuexストア

https://ja.nuxtjs.org/guide/vuex-store

### Vuexのポイント

State: アプリケーションの状態を保持。信頼できる唯一の情報源。

- アプリケーションの状態を1つの場所に置いてしまうイメージ。
- Storeはアプリケーションごとに1つにする。

- Actions ... 外部APIとの通信、ミューテーションの呼び出し。非同期処理を書くところ。
- Mutations ... ストアの状態を唯一変更できる存在。

Mutationsは`commit()`で呼び出す。

Actionsは`dispatch()`で呼び出す。
