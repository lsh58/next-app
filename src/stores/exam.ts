import { makeVar } from "@apollo/client";

export const examValue = makeVar("");

export const setValue = (value: string) => {
  examValue(value);
};
