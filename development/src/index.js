import _ from 'lodash'
import printMe from './print.js'

function component() {
  const element = document.createElement('div');

  const btn = document.createElement('button')

  btn.innerHTML = '点击这个按钮并且查看控制台'
  btn.onclick = printMe
  // lodash（目前通过一个 script 引入）对于执行这一行是必需的
  // lodash 在当前 script 中使用 import 引入
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  element.appendChild(btn);
  return element;
}

document.body.appendChild(component());