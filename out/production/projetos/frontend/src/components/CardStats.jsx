import React from 'react';
import { 
  ArchiveBoxIcon, 
  CubeIcon, 
  TagIcon, 
  CurrencyDollarIcon, 
  TruckIcon, 
  ExclamationTriangleIcon 
} from '@heroicons/react/24/outline';

const CardStats = () => {
  const stats = [
    { 
      id: 1,
      name: 'Total de Produtos',
      value: '1,240',
      icon: ArchiveBoxIcon, // Nome correto do ícone
      trend: '+5.2%',
      chart: 'bar',
      color: 'bg-blue-100 text-blue-600',
      meta: 1500,
      progress: 82.67 // (1240/1500)*100
    },
    { 
      id: 2,
      name: 'Estoque Baixo',
      value: '28 itens',
      icon: ExclamationTriangleIcon,
      trend: '-3%',
      color: 'bg-orange-100 text-orange-600',
      progress: 18
    },
    { 
      id: 3,
      name: 'Categorias Ativas',
      value: '15',
      icon: TagIcon,
      color: 'bg-indigo-100 text-indigo-600',
      chart: 'radial',
      progress: 75
    },
    { 
      id: 4,
      name: 'Gastos Mensais',
      value: 'R$ 42,5k',
      icon: CurrencyDollarIcon,
      trend: '+18%',
      color: 'bg-green-100 text-green-600',
      chart: 'bar',
      meta: 50000,
      progress: 85 // (42500/50000)*100
    },
    { 
      id: 5,
      name: 'Próx. Vencimento',
      value: '12 itens',
      icon: CubeIcon,
      color: 'bg-red-100 text-red-600',
      progress: 8
    },
    { 
      id: 6,
      name: 'Fornecedores',
      value: '24',
      icon: TruckIcon,
      trend: '+2',
      color: 'bg-teal-100 text-teal-600',
      chart: 'radial',
      progress: 60
    },
  ];

  const RadialProgress = ({ percentage, color }) => {
    // Garantir que o valor seja numérico
    const progress = Number(percentage) || 0;
    
    return (
      <div className="relative w-20 h-20">
        <svg className="w-full h-full" viewBox="0 0 100 100">
          <circle
            className="text-gray-200"
            strokeWidth="8"
            stroke="currentColor"
            fill="transparent"
            r="40"
            cx="50"
            cy="50"
          />
          <circle
            className={color}
            strokeWidth="8"
            strokeLinecap="round"
            stroke="currentColor"
            fill="transparent"
            r="40"
            cx="50"
            cy="50"
            strokeDasharray={`${progress * 2.51} 251`}
            transform="rotate(-90 50 50)"
          />
        </svg>
        <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-base font-semibold">
          {progress}%
        </span>
      </div>
    );
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 p-4">
      {stats.map((stat) => (
        <div 
          key={stat.id}
          className="bg-white rounded-xl shadow-sm p-6 border border-gray-100 hover:shadow-lg transition-all duration-300"
        >
          <div className="flex justify-between items-start gap-4">
            <div className="flex-1 space-y-3">
              <div className="flex items-center gap-3">
                <div className={`flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-lg ${stat.color}`}>
                  <stat.icon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-base font-semibold text-gray-900">{stat.name}</h3>
                  <div className="flex items-baseline gap-2 mt-1">
                    <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                    {stat.trend && (
                      <span className={`text-xs font-medium ${
                        stat.trend.startsWith('+') ? 'text-green-600' : 'text-red-600'
                      }`}>
                        {stat.trend}
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {stat.chart === 'bar' && (
                <div className="mt-4 space-y-1">
                  <div className="flex justify-between text-xs text-gray-600">
                    <span>Meta: {stat.meta}</span>
                    <span>{Math.round(stat.progress)}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className={`${stat.color.split(' ')[0]} rounded-full h-2 transition-all duration-500`}
                      style={{ width: `${stat.progress}%` }}
                    />
                  </div>
                </div>
              )}

              {stat.chart === 'radial' && (
                <div className="mt-4">
                  <p className="text-xs text-gray-600">Capacidade utilizada</p>
                </div>
              )}
            </div>

            {stat.chart === 'radial' && (
              <div className="flex-shrink-0">
                <RadialProgress percentage={stat.progress} color={stat.color} />
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardStats;