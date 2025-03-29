import * as yup from "yup";

export const userSchema = yup.object().shape({
  name: yup.string().required("Nome é obrigatório"),

  cpf: yup
    .string()
    .required("CPF é obrigatório")
    .transform((value, originalValue) =>
      originalValue ? originalValue.replace(/\D/g, "") : ""
    )
    .matches(/^\d{11}$/, "CPF deve conter 11 dígitos"),

  birthday: yup.string().nullable(),

  phoneNumber: yup
    .string()
    .required("Telefone é obrigatório")
    .transform((value, originalValue) =>
      originalValue ? originalValue.replace(/\D/g, "") : ""
    )
    .min(10, "Telefone inválido"),

  email: yup
    .string()
    .required("Email é obrigatório")
    .email("Email inválido"),

  password: yup
    .string()
    .required("Senha é obrigatória")
    .min(6, "Senha deve ter ao menos 6 caracteres"),

  userType: yup.string().nullable(),
});
