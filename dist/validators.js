(function(g,f){typeof exports==='object'&&typeof module!=='undefined'?module.exports=f():typeof define==='function'&&define.amd?define(f):(g=typeof globalThis!=='undefined'?globalThis:g||self,g["'@annunx/validators'"]=f());})(this,(function(){'use strict';const validateNumber = (n, flag = false) => {
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
};const validateEmail = (email, flag = false) => {
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
};// 虚拟网络运营商
const MVNO = [
	{
		company: '中国电信',
		no: ['1700', '1701', '1702', '162']
	},
	{
		company: '中国移动',
		no: ['1703', '1705', '1706', '165']
	},
	{
		company: '中国联通',
		no: ['1704', '1707', '1708', '1709', '171', '167']
	}
];

// 移动网络运营商
const MNO = [
	{
		company: '中国移动',
		no: [
			'134',
			'135',
			'136',
			'137',
			'138',
			'139',
			'147',
			'150',
			'151',
			'152',
			'157',
			'158',
			'159',
			'178',
			'182',
			'183',
			'184',
			'187',
			'188',
			'198'
		]
	},
	{
		company: '中国电信',
		no: ['133', '153', '173', '177', '180', '181', '189', '191', '199']
	},
	{
		company: '中国联通',
		no: [
			'130',
			'131',
			'132',
			'155',
			'156',
			'166',
			'175',
			'176',
			'185',
			'186'
		]
	},
	{
		company: '中国广电',
		no: [
			'192'
		]
	}
];

function validateMobile(mobile, flag = false, vno = false) {
	const res = {
		state: false,
		msg: ''
	};
	// 非空
	if (!mobile) {
		res.msg = '手机号码为空';
		return flag ? res.state : res
	}
	// 长度验证
	mobile = mobile.trim();
	if (mobile.length !== 11) {
		res.msg = '手机号码长度不符合！';
		return flag ? res.state : res
	}
	// 验证是否是运营商号段
	const mobilePrefix = [];
	MNO.forEach(item => {
		for (let i = 0; i < item.no.length; i++) {
			mobilePrefix.push(item.no[i]);
		}
	});
	// 检测是否验证虚拟网络运营商
	if (vno) {
		MVNO.forEach(item => {
			for (let i = 0; i < item.no.length; i++) {
				mobilePrefix.push(item.no[i]);
			}
		});
	}
	if (mobilePrefix.includes(mobile.substring(0, 3)) || mobilePrefix.includes(mobile.substring(0, 4))) {
		res.state = true;
		res.msg = '';
	}
	return flag ? res.state : res
}// 获取生日信息
const getBirthdayFromIDCard = (str) => {
	// 检查身份证号是否为18位
	if (str.length !== 18) {
		return '无效的身份证号码';
	}

	// 提取生日信息
	const year = str.substring(6, 10);
	const month = str.substring(10, 12);
	const day = str.substring(12, 14);

	// 返回生日日期
	return `${year}-${month}-${day}`;
};const validateIdCard = (str, flag = false) => {
	const res = {
		state: true, msg: ''
	};
	// 类型检查
	if (typeof str !== 'string') {
		res.state = false;
		res.msg = '必须输入内容';
		return flag ? res : res.state;
	}
	// 长度检查
	str = str.trim();
	if (str.length !== 18) {
		res.state = false;
		res.msg = '身份证号长度不符合规定！';
		return flag ? res : res.state;
	}
	// 正则校验 身份证号码最后一位可能为字符X
	str = str.toUpperCase();
	const reg = new RegExp(/^\d{17}([0-9]|X)$/);
	if (!reg.test(str)) {
		res.state = false;
		res.msg = '身份证号长度不正确或不符合规定！';
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
	};
	if (aCity[parseInt(str.substring(0, 2))] === null) {
		res.state = false;
		res.msg = '身份证号不是中国大陆证件号码！';
		return flag ? res : res.state;
	}
	// 验证生日 大于今天的一定是不对的
	const birthday = getBirthdayFromIDCard(str);
	console.log(new Date(birthday).getTime(), new Date().getTime());
	if (new Date(birthday).getTime() > new Date().getTime()) {
		res.state = false;
		res.msg = '身份证号出生日期不正确！';
		return flag ? res : res.state;
	}
	// 校验位
	const arrExp = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2];// 加权因子
	const arrValid = [1, 0, 'X', 9, 8, 7, 6, 5, 4, 3, 2];// 校验码
	let sum = 0;
	for (let i = 0; i < str.length - 1; i++) {
		// 对前17位数字与权值乘积求和
		sum += parseInt(str.substring(i, i + 1), 10) * arrExp[i];
	}
	// 计算模（固定算法）
	const idx = sum % 11;
	// 检验第18为是否与校验码相等
	if (arrValid[idx].toString() !== str.substring(17, 18).toUpperCase()) {
		res.state = false;
		res.msg = '身份证号不正确或不符合规定！';
		return flag ? res : res.state;
	}

	// 统一返回类型
	return flag ? res : res.state;
};const validateChinaOrganizationCode = (code, flag = false) => {
    const res = {
        state: true,
        msg: ''
    };
    // 非空控制
    if (!code) {
        res.state = false;
        return flag ? res : false;
    }
    // 添加类型检查
    if (typeof code !== 'string') {
        res.state = false;
        res.msg = '输入必须是字符串';
        return flag ? res : false;
    }

    // 长度检查
    const tempCode = code.trim();
    if (tempCode.length === 18) {
        // 登记管理部门代码
        const registrationOrgs = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "N", "Y"];
        if (!registrationOrgs.includes(tempCode[0])) {
            res.state = false;
            res.msg = '登记管理部门代码不正确';
            return flag ? res : false;
        }

        // 机构类别代码
        const typeOrgs = ["1", "2", "3", "9", "4", "5"];
        if (!typeOrgs.includes(tempCode[1])) {
            res.state = false;
            res.msg = '机构类别代码不正确';
            return flag ? res : false;
        }
        // TODO 登记管理机关行政区划码
        // TODO 主体标识码（组织机构代码）
        // 校验码
        const checkCode = validateNewChinaOrganizationCode(tempCode);
        if (checkCode) {
            return flag ? res : res.state;
        } else {
            res.state = false;
            res.msg = '校验码不正确';
            return flag ? res : res.state;
        }

    } else if (tempCode.length === 15) {
        const checkCode = validateOldChinaOrganizationCode(tempCode);
        if (checkCode) {
            return flag ? res : res.state;
        } else {
            res.state = false;
            res.msg = '校验码不正确';
            return flag ? res : res.state;
        }
    } else {
        res.state = false;
        res.msg = '输入必须是15位或18位字符';
        return flag ? res : false;
    }
};


const validateNewChinaOrganizationCode = (code) => {
    // 1. 统一代码由十八位的阿拉伯数字或大写英文字母（不使用I、O、Z、S、V）组成
    const baseCharArr = "0123456789ABCDEFGHJKLMNPQRTUWXY".split("");
    // 18位校验码对应值
    const factorArr = [1, 3, 9, 27, 19, 26, 16, 17, 20, 29, 25, 13, 8, 24, 10, 30, 28];
    // 计算级数之和
    let count = 0;
    // 遍历信用代码,查找对应的位置并把字母转为对应的值
    // 因为只取前17位作为基数来计算校验码，所以取值 17
    for (let i = 0; i < 17; i++) {
        const a = baseCharArr.indexOf(code[i] + "") * factorArr[i]; // 获得对应位置的值(其实与脚标相同)并与加权因子相乘
        count += a; //将相乘的结果汇总
    }
    // 级数之和对31求余,再用31减去余数, 求出校验码字符值
    const idx = 31 - (count % 31);
    // 获取原始校验码字符 与计算的对比
    const validateCode = baseCharArr[idx % baseCharArr.length];
    const lastChar = code.split('').pop();
    return validateCode === lastChar;
};

const validateOldChinaOrganizationCode = (code) => {
    var ret = false;
    var s = [];
    var p = [];
    var a = [];
    var m = 10;
    p[0] = m;
    for (let i = 0; i < code.length; i++) {
        a[i] = parseInt(code.substring(i, i + 1), m);
        s[i] = (p[i] % (m + 1)) + a[i];
        if (0 === s[i] % m) {
            p[i + 1] = 10 * 2;
        } else {
            p[i + 1] = (s[i] % m) * 2;
        }
    }
    if (1 === s[14] % m) {
        //营业执照编号正确!
        ret = true;
    } else {
        //营业执照编号错误!
        ret = false;
    }

    return ret;
};var index = {
    validateNumber,
    validateEmail,
    validateMobile,
    validateIdCard,
    validateChinaOrganizationCode
};return index;}));