(function(g,f){typeof exports==='object'&&typeof module!=='undefined'?module.exports=f():typeof define==='function'&&define.amd?define(f):(g=typeof globalThis!=='undefined'?globalThis:g||self,g["'@annunx/validators'"]=f());})(this,(function(){'use strict';const isNumber = (n, flag = false) => {
  const res = {
    state: /^-?\d+\.?\d*$/.test(n),
    msg: ''
  };
  if (!res.state) {
    res.msg = '不是一个数字';
  }
  return flag ? res : res.state
};var index = {
  isNumber
};return index;}));