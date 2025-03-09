import { Link } from 'react-router-dom';

const Dashboard = () => {
  return (
    <div className="bg-green-500 text-white p-4">
      <h1 className="text-2xl font-bold">Produtos</h1>
      <nav className="mt-4">
        <Link to="/estoque" className="mr-4 text-blue-200 hover:text-blue-400">
          Estoque
        </Link>
        <Link to="/produtos" className="mr-4 text-blue-200 hover:text-blue-400">
          Cadastros
        </Link>
        <Link to="/relatorios" className="mr-4 text-blue-200 hover:text-blue-400">
          Relatórios
        </Link>
      </nav>
    </div>
  );
};

export default Dashboard;