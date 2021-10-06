import * as Yup from "yup";

export const SignUpSchema = Yup.object().shape({
  username: Yup.string()
    .trim()
    .min(2, "Username too Short")
    .max(50, "Username too Long")
    .required("Username is required"),
  password: Yup.string().required("Password is required"),
  confirmPassword: Yup.string()
    .required("Please confirm your password")
    .oneOf([Yup.ref("password"), null], "Passwords didn't match"),
  email: Yup.string().email("Not a valid email").required("Email is required"),
  birthdate: Yup.object().shape({
    month: Yup.number().required().notOneOf([-1], "Please select a month"),
    day: Yup.string().required("Please enter a day"),
    year: Yup.string().required("Please enter a year"),
  }),
});
