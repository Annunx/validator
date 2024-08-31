import { validateNumber } from "@annunx/validators";
export const numbers = [
  {
    label: "数字(1)",
    value: validateNumber(1),
    result: validateNumber(1, true),
  },
  {
    label: "字符串(1)",
    value: validateNumber("1"),
    result: validateNumber("1", true),
  },
  {
    label: "科学计数(6E4)",
    value: validateNumber(6e4),
    result: validateNumber(6e4, true),
  },
  {
    label: "字符串(abc)",
    value: validateNumber("abc"),
    result: validateNumber("abc", true),
  },
];
