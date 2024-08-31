# 更新日志

## 1.1.0 - 2024-08-31

### 新增：中国 法人和组织统一社会信用代码校验

* 中国法人和组织统一社会信用代码校验，同时支持旧版 15 位和新版 18 位。

### 修复：Rollup 打包时报错：RollupError: Could not resolve "../utils" from "src/validators/id-card.js"

* 修复 id-card.js，使用简写的方式导入 utils/index.js，Rollup 打包时报错的问题。