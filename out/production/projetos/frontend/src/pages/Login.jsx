import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login, getTokenPayload } from "../services/authService";
import useAuthRedirect from "../hooks/useAuthRedirect";

const Login = () => {
  useAuthRedirect(); // Redireciona usuário logado para o dashboard automaticamente

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await login({ email, password });

      if (response && response.token) {
        localStorage.setItem("token", response.token);

        const payload = getTokenPayload();
        if (payload?.sub) {
          localStorage.setItem("userEmail", payload.sub); // salva o e-mail
        } else {
          console.warn("E-mail do usuário não encontrado no token");
        }

        navigate("/dashboard");
      }
    } catch (error) {
      console.error(error);
      alert("Erro ao fazer login. Verifique suas credenciais.");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <form onSubmit={handleSubmit} className="p-6 bg-white shadow-md rounded">
        <h2 className="text-2xl font-bold mb-4">Login</h2>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="block w-full p-2 border rounded mb-4"
        />
        <input
          type="password"
          placeholder="Senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="block w-full p-2 border rounded mb-4"
        />
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded"
        >
          Entrar
        </button>
      </form>
    </div>
  );
};

export default Login;
