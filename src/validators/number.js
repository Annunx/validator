export const validateNumber = (n, flag = false) => {
	// 添加类型检查
	if (typeof n !== 'string' && typeof n !== 'number') {
		return {state: false, msg: '输入必须是字符串或数字'};
	}

	// 增强正则表达式，支持科学计数法
	const regex = /^-?\d+(\.\d+)?([eE][-+]?\d+)?$/;
	const res = {
		state: regex.test(String(n)),
		msg: ''
	};

	if (!res.state) {
		res.msg = '不是一个有效的数字';
	}

	// 统一返回类型
	return flag ? res : res.state;
}
