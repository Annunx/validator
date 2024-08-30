// 虚拟网络运营商
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
]

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
]

export function validateMobile(mobile, flag = false, vno = false) {
	const res = {
		state: false,
		msg: ''
	}
	// 非空
	if (!mobile) {
		res.msg = '手机号码为空'
		return flag ? res.state : res
	}
	// 长度验证
	mobile = mobile.trim()
	if (mobile.length !== 11) {
		res.msg = '手机号码长度不符合！'
		return flag ? res.state : res
	}
	// 验证是否是运营商号段
	const mobilePrefix = []
	MNO.forEach(item => {
		for (let i = 0; i < item.no.length; i++) {
			mobilePrefix.push(item.no[i])
		}
	})
	// 检测是否验证虚拟网络运营商
	if (vno) {
		MVNO.forEach(item => {
			for (let i = 0; i < item.no.length; i++) {
				mobilePrefix.push(item.no[i])
			}
		})
	}
	if (mobilePrefix.includes(mobile.substring(0, 3)) || mobilePrefix.includes(mobile.substring(0, 4))) {
		res.state = true
		res.msg = ''
	}
	return flag ? res.state : res
}
