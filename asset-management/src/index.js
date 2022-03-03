import _ from 'lodash'
import './style.css';
import Icon from './icon.png'
import Data from './data.xml';
import Notes from './data.csv';
import toml from './data.toml';
import yaml from './data.yaml';
import json from './data.json5';

console.log(toml.title); // output `TOML Example`
console.log(toml.owner.name); // output `Tom Preston-Werner`

console.log(yaml.title); // output `YAML Example`
console.log(yaml.owner.name); // output `Tom Preston-Werner`

console.log(json.title); // output `JSON5 Example`
console.log(json.owner.name); // output `Tom Preston-Werner`

function component() {
  const element = document.createElement('div');

  // lodash（目前通过一个 script 引入）对于执行这一行是必需的
  // lodash 在当前 script 中使用 import 引入
  element.innerHTML = _.join(['Hello', '宇宙第一前端'], ' ');
  element.classList.add('hello');

  const myIcon = new Image()
  myIcon.src = Icon

  element.appendChild(myIcon)
  console.log(Data);
  console.log(Notes);

  return element;
}

document.body.appendChild(component());