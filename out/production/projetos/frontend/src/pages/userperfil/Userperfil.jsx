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

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) return toast.error("Token não encontrado.");

        const response = await fetch("http://localhost:8080/user/me", {
          headers: { Authorization: `Bearer ${token}` },
        });

        if (!response.ok) throw new Error("Erro ao carregar perfil");
        const data = await response.json();
        setUser((prev) => ({ ...prev, ...data }));
      } catch {
        toast.error("Erro ao carregar informações do perfil");
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prev) => ({ ...prev, [name]: value }));
  };

  const handleLogout = () => {
    localStorage.clear();
    window.location.href = "/login";
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem("token");
      const response = await fetch("http://localhost:8080/user/update", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(user),
      });

      if (!response.ok) throw new Error();
      toast.success("Perfil atualizado com sucesso!");
    } catch {
      toast.error("Erro ao atualizar perfil");
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen text-gray-600">
        Carregando perfil...
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto mt-10 p-8 bg-white rounded-2xl shadow-lg animate-fade-in">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-4">
          <img
            src={user.avatarUrl}
            alt="Avatar do usuário"
            className="w-14 h-14 rounded-full border shadow"
          />
          <h2 className="text-2xl font-bold text-gray-800">Meu Perfil</h2>
        </div>
        <button
          onClick={handleLogout}
          className="flex items-center gap-2 text-red-500 hover:text-red-600 transition-colors"
        >
          <LogOut size={20} /> Sair
        </button>
      </div>

      <form onSubmit={handleSubmit} className="space-y-5">
        {[
          { label: "Nome", name: "name" },
          { label: "E-mail", name: "email", type: "email" },
          { label: "CPF", name: "cpf" },
          { label: "Telefone", name: "phoneNumber" },
          { label: "Data de Nascimento", name: "birthday", type: "date" },
        ].map(({ label, name, type = "text" }) => (
          <div key={name}>
            <label htmlFor={name} className="block text-sm font-medium text-gray-700 mb-1">
              {label}
            </label>
            <input
              id={name}
              name={name}
              type={type}
              value={user[name]}
              onChange={handleChange}
              required={["name", "email"].includes(name)}
              className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all placeholder:text-sm"
            />
          </div>
        ))}

        <button
          type="submit"
          className="mt-4 w-full flex items-center justify-center gap-2 px-4 py-2 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition-all shadow-sm"
        >
          <Save size={18} /> Salvar alterações
        </button>
      </form>
    </div>
  );
};

export default Userperfil;
