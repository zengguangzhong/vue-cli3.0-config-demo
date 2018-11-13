module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    // 设置"script"（默认）或"module"如果你的代码是在ECMAScript中的模块。
    sourceType: 'module'
    // ecmaVersion: 6, // 启用es6语法
  },
  env: {
    browser: true,
    es6: true // 支持新的es6全局变量，同时自动启用 ES6 语法支持。设置这个可以不用设置 ecmaVersion: 6
  },
  // https://github.com/feross/standard/blob/master/RULES.md#javascript-standard-style
  extends: 'standard', //  {eslint:recommended},  // 继承推荐的规则  extends 属性值可以省略包名的前缀 eslint-config-

  // 配置一些可以直接使用的全局变量
  globals: {
    FJ: false // true 将允许变量被重写，或 false 将不允许被重写
  },
  // 使用第三方插件，插件名称可以省略 eslint-plugin- 前缀，  需要先安装
  // required to lint *.vue files
  plugins: ['html'],
  // add your custom rules here
  rules: {
    // allow paren-less arrow functions
    'arrow-parens': 0,
    // allow async-await
    'generator-star-spacing': 0,
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    'no-tabs': 0,
    'space-before-function-paren': 0
  }
}
