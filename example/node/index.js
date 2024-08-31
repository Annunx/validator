// const V = require('@annunx/validators');
// const result = V.validateNumber('123456789');
// console.log(result)

const {validateNumber}  = require('@annunx/validators');
const result = validateNumber('123456789', true);
console.log(result)
