import React, { useEffect, useState } from "react";
import { Save, LogOut } from "lucide-react";
import { toast } from "react-toastify";

const Userperfil = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    cpf: "",
    phoneNumber: "",
    birthday: "",
    avatarUrl:
      "https://images.unsplash.com/photo-1600486913747-55e5470d6f40?ixlib=rb-1.2.1&auto=format&fit=crop&w=1770&q=80",
  });

  const token = localStorage.getItem("token");

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await fetch("http://localhost:8080/user/me", {
          headers: { Authorization: `Bearer ${token}` },
        });
        if (!response.ok) throw new Error("Erro ao carregar perfil");
        const data = await response.json();
        setUser({ ...user, ...data });
      } catch {
        toast.error("Erro ao carregar informações do perfil");
      }
    };

    fetchProfile();
  }, []);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setUser((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:8080/user/me", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(user),
      });
      if (!response.ok) throw new Error("Erro ao atualizar perfil");
      toast.success("Perfil atualizado com sucesso!");
    } catch {
      toast.error("Erro ao atualizar perfil");
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.href = "/login";
  };

  return (
    <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8 bg-white text-gray-900">
      <div className="sm:mx-auto sm:w-full sm:max-w-2xl">
        <div className="bg-blue-600 p-6 rounded-t-lg">
          <div className="flex items-center space-x-4">
            <img
              className="h-20 w-20 rounded-full border-2 border-white object-cover"
              src={user.avatarUrl}
              alt={`${user.name}'s avatar`}
            />
            <div>
              <h1 className="text-2xl font-bold text-white">{user.name}</h1>
              <p className="text-gray-200">{user.email}</p>
            </div>
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          className="bg-gray-50 p-6 rounded-b-lg shadow-sm space-y-6"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <InputField id="name" label="Nome" value={user.name} onChange={handleChange} />
            <InputField id="email" label="Email" type="email" value={user.email} onChange={handleChange} />
            <InputField id="cpf" label="CPF" value={user.cpf} onChange={handleChange} />
            <InputField id="phoneNumber" label="Telefone" value={user.phoneNumber} onChange={handleChange} />
            <InputField id="birthday" label="Data de Nascimento" type="date" value={user.birthday} onChange={handleChange} />
          </div>

          <div className="flex justify-between items-center mt-6">
            <button
              type="submit"
              className="flex items-center gap-2 rounded-lg bg-green-600 px-4 py-2 text-white font-medium hover:bg-green-700"
            >
              <Save className="w-4 h-4" /> Salvar
            </button>

            <button
              type="button"
              onClick={handleLogout}
              className="flex items-center gap-2 rounded-lg border border-gray-300 px-4 py-2 text-gray-700 hover:bg-gray-100 transition"
              >
              <LogOut className="w-4 h-4" /> Sair
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

const InputField = ({ id, label, type = "text", value, onChange }) => (
  <div>
    <label htmlFor={id} className="block text-sm font-medium text-gray-700">
      {label}
    </label>
    <input
      type={type}
      id={id}
      value={value}
      onChange={onChange}
      className="mt-1 block w-full rounded-md border border-gray-300 p-2 focus:border-indigo-600 focus:ring-2 focus:ring-indigo-600"
    />
  </div>
);

export default Userperfil;
