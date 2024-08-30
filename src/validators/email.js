export const validateEmail = (email, flag = false) => {
  // 类型检查
  if (typeof email !== 'string') {
    return { state: false, msg: '输入必须是字符串' };
  }

  // 增强正则表达式，确保能够正确验证各种合法的电子邮件地址格式
  const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const res = {
    state: regex.test(email),
    msg: ''
  };

  if (!res.state) {
    res.msg = '不是一个有效的电子邮件地址';
  }

  // 统一返回类型
  return flag ? res : res.state;
}
