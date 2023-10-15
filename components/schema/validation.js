import * as Yup from "yup";

export const loginValidation = Yup.object().shape({
  email: Yup.string().required(),
  password: Yup.string().required(),
});
