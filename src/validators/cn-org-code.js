export const validateChinaOrganizationCode = (code, flag = false) => {
    const res = {
        state: true,
        msg: ''
    }
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
        const registrationOrgs = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "N", "Y"]
        if (!registrationOrgs.includes(tempCode[0])) {
            res.state = false;
            res.msg = '登记管理部门代码不正确';
            return flag ? res : false;
        }

        // 机构类别代码
        const typeOrgs = ["1", "2", "3", "9", "4", "5"]
        if (!typeOrgs.includes(tempCode[1])) {
            res.state = false;
            res.msg = '机构类别代码不正确';
            return flag ? res : false;
        }
        // TODO 登记管理机关行政区划码
        // TODO 主体标识码（组织机构代码）
        // 校验码
        const checkCode = validateNewChinaOrganizationCode(tempCode)
        if (checkCode) {
            return flag ? res : res.state;
        } else {
            res.state = false;
            res.msg = '校验码不正确';
            return flag ? res : res.state;
        }

    } else if (tempCode.length === 15) {
        const checkCode = validateOldChinaOrganizationCode(tempCode)
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
}


export const validateNewChinaOrganizationCode = (code) => {
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
}

export const validateOldChinaOrganizationCode = (code) => {
    var ret = false;
    var sum = 0;
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
}