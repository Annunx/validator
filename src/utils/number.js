export const isNumber = (n, flag = false) => {
  const res = {
    state: /^-?\d+\.?\d*$/.test(n),
    msg: ''
  }
  if (!res.state) {
    res.msg = '不是一个数字'
  }
  return flag ? res : res.state
}