# 验证器

## 简介

针对中国大陆规则的验证方法

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

- validateNumber(num [, flag]) 是否是数字 nun: 需要验证的值，flag: 是否返回错误信息
- validateEmail(mail [, flag]) 是否是邮箱 mail: 需要验证的值，flag: 是否返回错误信息
- validateMobile(mobile [, flag, [, vno]]) 是否是中国大陆手机号 mobile: 需要验证的值，flag: 是否返回错误信息，vno: 是否支持验证虚拟运营商手机号码
- validateIdCard(id [, flag]) 是否是中国大陆身份证 id: 需要验证的值，flag: 是否返回错误信息


## 开发

```
git clone https://github.com/Annunx/validator.git
npm install
```

## 构建

```
npm run build
```
