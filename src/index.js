import {validateNumber} from './validators/number.js';
import {validateEmail} from './validators/email.js';
import {validateMobile} from './validators/mobile.js';
import {validateIdCard} from './validators/id-card.js';
import {validateChinaOrganizationCode} from "./validators/cn-org-code.js";

export default {
    validateNumber,
    validateEmail,
    validateMobile,
    validateIdCard,
    validateChinaOrganizationCode
}
