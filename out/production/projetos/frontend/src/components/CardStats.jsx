import React from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Tooltip, Legend);

const CardStats = () => {
  const data = {
    labels: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun'],
    datasets: [
      {
        label: 'Vendas',
        data: [12, 19, 3, 5, 2, 3],
        borderColor: 'rgba(59, 130, 246, 1)', // blue-500
        backgroundColor: 'rgba(59, 130, 246, 0.2)',
        tension: 0.4,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: { legend: { display: false } },
    scales: {
      x: { display: true },
      y: { display: true },
    },
  };

  return (
    <div className="bg-white shadow rounded-lg p-4 w-full">
      <div className="mb-4">
        <h3 className="text-lg font-semibold text-gray-800">Estatísticas de Vendas</h3>
        <p className="text-sm text-gray-500">Últimos 6 meses</p>
      </div>
      <div className="h-48">
        <Line data={data} options={options} />
      </div>
    </div>
  );
};

export default CardStats;
