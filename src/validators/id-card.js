import {getBirthdayFromIDCard} from "../utils";

export const validateIdCard = (str, flag = false) => {
	const res = {
		state: true, msg: ''
	}
	// 类型检查
	if (typeof str !== 'string') {
		res.state = false
		res.msg = '必须输入内容'
		return flag ? res : res.state;
	}
	// 长度检查
	str = str.trim()
	if (str.length !== 18) {
		res.state = false
		res.msg = '身份证号长度不符合规定！'
		return flag ? res : res.state;
	}
	// 正则校验 身份证号码最后一位可能为字符X
	str = str.toUpperCase()
	const reg = new RegExp(/^\d{17}([0-9]|X)$/)
	if (!reg.test(str)) {
		res.state = false
		res.msg = '身份证号长度不正确或不符合规定！'
		return res
	}
	// 省市校验 验证前2位
	const aCity = {
		11: '北京',
		12: '天津',
		13: '河北',
		14: '山西',
		15: '内蒙古',
		21: '辽宁',
		22: '吉林',
		23: '黑龙江 ',
		31: '上海',
		32: '江苏',
		33: '浙江',
		34: '安徽',
		35: '福建',
		36: '江西',
		37: '山东',
		41: '河南',
		42: '湖北',
		43: '湖南',
		44: '广东',
		45: '广西',
		46: '海南',
		50: '重庆',
		51: '四川',
		52: '贵州',
		53: '云南',
		54: '西藏',
		61: '陕西',
		62: '甘肃',
		63: '青海',
		64: '宁夏',
		65: '新疆',
		71: '台湾',
		81: '香港',
		82: '澳门',
		91: '国外'
	}
	if (aCity[parseInt(str.substring(0, 2))] === null) {
		res.state = false
		res.msg = '身份证号不是中国大陆证件号码！'
		return flag ? res : res.state;
	}
	// 验证生日 大于今天的一定是不对的
	const birthday = getBirthdayFromIDCard(str)
	console.log(new Date(birthday).getTime(), new Date().getTime())
	if (new Date(birthday).getTime() > new Date().getTime()) {
		res.state = false
		res.msg = '身份证号出生日期不正确！'
		return flag ? res : res.state;
	}
	// 校验位
	const arrExp = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2]// 加权因子
	const arrValid = [1, 0, 'X', 9, 8, 7, 6, 5, 4, 3, 2]// 校验码
	let sum = 0
	for (let i = 0; i < str.length - 1; i++) {
		// 对前17位数字与权值乘积求和
		sum += parseInt(str.substring(i, i + 1), 10) * arrExp[i]
	}
	// 计算模（固定算法）
	const idx = sum % 11
	// 检验第18为是否与校验码相等
	if (arrValid[idx].toString() !== str.substring(17, 18).toUpperCase()) {
		res.state = false
		res.msg = '身份证号不正确或不符合规定！'
		return flag ? res : res.state;
	}

	// 统一返回类型
	return flag ? res : res.state;
}
