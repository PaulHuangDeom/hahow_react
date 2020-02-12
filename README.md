# HaHow 前端測試題目

## 如何執行
-----
### Installation
```sh
yarn
```
### Start
```sh
yarn start
```

## 架構邏輯
主要的頁面架構在 App.js ， 透過 react-router 進行分頁，將 hero card 及 hero profile 製成 component ，Hero List Page 僅引用 hero card，在 App.js render 時 get List 的資料並帶入 Hero List Page，Hero Profile Page 在 router path 後面帶入 heroId 的參數，並將參數帶入 hero profile ，在 hero profile 實現資料顯示與更新。

## 註解的原則
以自己能在一段時間後回來能理解為原則