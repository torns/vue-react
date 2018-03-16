# vue-react

> vue 和 react 一起使用

## 重点改造内容

1. `.babelrc` 将 `transform-vue-jsx` 改为 `transform-react-jsx`

2. `build/webpack.base.conf.js` 中 为 `jsx` 添加 `` 和 `babel-loader` 支持

3. 引入 `vuera` ，必要时（多为react 组件库所需）引入 `react` 、 `react-dom`

Happy Hacking!

> 可以基于 ICE antd.design  element-ui 一起搞事情了！