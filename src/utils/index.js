// 获取生日信息
export const getBirthdayFromIDCard = (str) => {
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
}
