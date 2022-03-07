import _ from 'lodash'
import printMe from './print.js'
import './styles.css'

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

// document.body.appendChild(component());
let element = component(); // 存储 element，以在 print.js 修改时重新渲染
document.body.appendChild(element);

if (module.hot) {
  module.hot.accept('./print.js', function () {
    console.log('Accepting the update printMe module!')
    // printMe();
    document.body.removeChild(element);
    element = component(); // 重新渲染 "component"，以便更新 click 事件处理函数
    document.body.appendChild(element);
  })
}