'use strict';
import "./css/main.scss"

if (module.hot) {
  module.hot.accept()
}

const obj = {
  a: 'a',
  b: 'b',
  c: {
    cd: 'cd'
  }
}

console.log(obj?.c?.cd,obj?.f?.fa)