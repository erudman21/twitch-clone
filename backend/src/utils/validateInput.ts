import validator from "validator";
import { RegisterInput } from "../resolvers/inputTypes";

export const validateInput = ({ email, password }: RegisterInput) => {
  return validator.isEmail(email) && validator.isStrongPassword(password);
};
