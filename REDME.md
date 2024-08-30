# 验证器

## 简介

一些验证方法

## 安装

```
npm i @annunx/validator
```

## 使用

```
import { isNumber } from '@annunx/validator';
```


## 示例

- 返回验证状态

```
isNumber(123); // true
```  

- 返回验证状态和错误信息

```
isNumber(123, ture); // {state: true, msg: '验证成功'}
```  

## 验证方法

- isNumber 是否是数字


## 开发

```
git clone https://github.com/Annunx/validator.git
npm install
```

## 构建

```
npm run build
```