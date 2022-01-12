/* eslint-disable @typescript-eslint/no-explicit-any */
export default function classNames(...args: Array<any | undefined | Array<any>>): Array<any> {
  const classNamesList = [];

  for (const arg of args) {
    if (typeof arg === "object" && Array.isArray(arg)) {
      const [value, condition] = arg;

      if (condition) classNamesList.push(value);
    } else classNamesList.push(arg);
  }

  return classNamesList;
}
