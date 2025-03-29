import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createUser } from "../../services/userService";
import { ArrowLeft, Save } from "lucide-react";
import { toast } from "react-toastify";
import { userSchema } from "../../schemas/userSchema";

// Função auxiliar para formatar CPF no padrão xxx.xxx.xxx-xx
const formatCPF = (value) => {
  const digits = value.replace(/\D/g, "").slice(0, 11);
  return digits
    .replace(/(\d{3})(\d)/, "$1.$2")
    .replace(/(\d{3})(\d)/, "$1.$2")
    .replace(/(\d{3})(\d{1,2})$/, "$1-$2");
};

// Função auxiliar para formatar telefone no padrão: +{countryCode} (XX) XXXXX-XXXX
const formatPhone = (input) => {
  const digits = input.replace(/\D/g, "");
  if (!digits) return "";
  let countryCode, areaCode, firstPart, secondPart;
  if (digits.length > 11) {
    countryCode = digits.slice(0, digits.length - 11);
    if (countryCode.length > 3) countryCode = countryCode.slice(0, 3);
    const remaining = digits.slice(digits.length - 11);
    areaCode = remaining.slice(0, 2);
    firstPart = remaining.slice(2, 7);
    secondPart = remaining.slice(7, 11);
  } else {
    countryCode = "55";
    areaCode = digits.slice(0, 2);
    firstPart = digits.slice(2, 7);
    secondPart = digits.slice(7, 11);
  }
  let formatted = `+${countryCode}`;
  if (areaCode) formatted += ` (${areaCode})`;
  if (firstPart) {
    formatted += ` ${firstPart}`;
    if (firstPart.length === 5 && secondPart) {
      formatted += `-${secondPart}`;
    }
  }
  return formatted;
};

// Componente de InputField
const InputField = ({ id, label, type = "text", value, onChange, onBlur, placeholder = "" }) => (
  <div className="w-full">
    <label htmlFor={id} className="block text-sm font-medium text-gray-700 mb-1">
      {label}
    </label>
    <input
      type={type}
      id={id}
      value={value}
      onChange={onChange}
      onBlur={onBlur}
      placeholder={placeholder}
      className="w-full rounded-md border border-gray-300 p-2 focus:border-indigo-600 focus:ring-2 focus:ring-indigo-600"
    />
  </div>
);

const UsuarioCriar = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    cpf: "",
    birthday: "",
    phoneNumber: "",
    email: "",
    password: "",
    confirmPassword: "",
    userType: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    let formattedValue = value;
    if (id === "cpf") {
      formattedValue = formatCPF(value);
    }
    // Para o telefone, o valor é atualizado "cru" enquanto digita.
    setFormData({ ...formData, [id]: formattedValue });
  };

  // Aplica formatação ao telefone quando o campo perde o foco.
  const handlePhoneBlur = () => {
    setFormData({ ...formData, phoneNumber: formatPhone(formData.phoneNumber) });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Verifica se as senhas são iguais.
    if (formData.password !== formData.confirmPassword) {
      toast.error("A senha e a confirmação não coincidem!");
      return;
    }

    console.log("Dados recebidos do formulário:", formData);

    try {
      const parsed = await userSchema.validate(formData, { abortEarly: false });
      console.log("Dados validados com sucesso:", parsed);
      const formattedCPF = formatCPF(parsed.cpf);
      const formattedPhone = formatPhone(parsed.phoneNumber);
      const userData = {
        ...parsed,
        cpf: formattedCPF,
        phoneNumber: formattedPhone,
        birthday: parsed.birthday || null,
        userType: parsed.userType || "ADMIN",
      };
      console.log("Enviando dados para API:", userData);
      await createUser(userData);
      toast.success("Usuário criado com sucesso!");
      navigate("/UsuarioIndex");
    } catch (err) {
      console.error("Erro na validação:", err);
      if (err.inner) {
        err.inner.forEach((issue) => toast.warn(issue.message));
      } else {
        toast.error("Erro inesperado na validação.");
      }
    }
  };

  return (
    <div className="max-w-6xl mx-auto p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-semibold text-indigo-600">Novo Usuário</h1>
        <div className="flex gap-4">
          <button
            type="submit"
            form="usuario-form"
            className="flex items-center gap-2 rounded-lg bg-green-600 px-4 py-2 text-white font-medium hover:bg-green-700 transition"
          >
            <Save className="w-4 h-4" /> Salvar
          </button>
          <a
            href="/user"
            className="flex items-center gap-2 rounded-lg border border-gray-300 px-4 py-2 text-gray-700 hover:bg-gray-100 transition"
          >
            <ArrowLeft className="w-4 h-4" /> Voltar
          </a>
        </div>
      </div>
      <form id="usuario-form" onSubmit={handleSubmit} className="space-y-10 bg-white shadow-xl rounded-2xl p-8">
        {/* Dados Pessoais */}
        <div>
          <h2 className="text-lg font-medium text-indigo-500 mb-4">Dados Pessoais</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            <InputField id="name" label="Nome" value={formData.name} onChange={handleChange} placeholder="Insira o nome" />
            <InputField id="cpf" label="CPF" value={formData.cpf} onChange={handleChange} placeholder="Insira o CPF (somente números)" />
            <InputField id="birthday" label="Data de Nascimento" type="date" value={formData.birthday} onChange={handleChange} />
            <InputField
              id="phoneNumber"
              label="Telefone"
              value={formData.phoneNumber}
              onChange={handleChange}
              onBlur={handlePhoneBlur}
              placeholder="+000 (00) 00000-0000"
            />
          </div>
        </div>
        {/* Informações de Acesso */}
        <div>
          <h2 className="text-lg font-medium text-indigo-500 mb-4">Informações de Acesso</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            <InputField id="email" label="Email" type="email" value={formData.email} onChange={handleChange} placeholder="Insira o email" />
            <InputField id="password" label="Senha" type="password" value={formData.password} onChange={handleChange} placeholder="Insira a senha" />
            <InputField
              id="confirmPassword"
              label="Confirmar Senha"
              type="password"
              value={formData.confirmPassword}
              onChange={handleChange}
              placeholder="Confirme a senha"
            />
            {/* Dropdown para tipo de usuário */}
            <div className="w-full">
              <label htmlFor="userType" className="block text-sm font-medium text-gray-700 mb-1">
                Tipo de Usuário
              </label>
              <select
                id="userType"
                value={formData.userType}
                onChange={handleChange}
                className="w-full rounded-lg border border-gray-300 p-2.5 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
              >
                <option value="">Selecione</option>
                <option value="ADMIN">ADMIN</option>
                <option value="USER">USER</option>
              </select>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default UsuarioCriar;
