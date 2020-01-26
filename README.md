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
