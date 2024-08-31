import { validateIdCard } from "@annunx/validators";
export const ids = [
  {
    label: "430111197002083740",
    value: validateIdCard("430111197002083740"),
    result: validateIdCard("430111197002083740", true),
  },
];
