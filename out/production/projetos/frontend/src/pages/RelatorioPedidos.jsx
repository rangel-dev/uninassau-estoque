import React from "react";
// import jsPDF from "jspdf"; // Dependência para criação de PDFs (comentar por enquanto)
// import "jspdf-autotable"; // Extensão para tabelas do jsPDF (comentar por enquanto)

const RelatoriosPedidos = () => {
  // Função de exemplo (desativada temporariamente)
  const gerarRelatorio = () => {
    // const doc = new jsPDF(); // Inicialização do jsPDF
    // doc.text("Relatório de Pedidos", 14, 10); // Adiciona um título ao PDF
    // const colunas = ["ID do Pedido", "Cliente", "Data", "Valor Total"];
    // const dados = [
    //   ["001", "João Silva", "05/04/2025", "R$ 150,00"],
    //   ["002", "Maria Oliveira", "03/04/2025", "R$ 300,00"],
    //   ["003", "Carlos Lima", "01/04/2025", "R$ 100,00"],
    // ];
    // doc.autoTable({ head: [colunas], body: dados, startY: 20 });
    // doc.save("relatorio-pedidos.pdf"); // Gera e baixa o arquivo PDF
    console.log("Função de geração de relatório desativada");
  };

  return (
    <div className="p-4">
      <h1 className="text-lg font-medium">Relatórios de Pedidos</h1>
      <p className="mt-4">Gere relatórios dos pedidos realizados de forma rápida e eficiente.</p>
      <button
        onClick={gerarRelatorio}
        className="mt-4 inline-block px-6 py-3 text-center rounded-sm border border-blue-600 bg-blue-600 text-sm font-medium text-white hover:bg-transparent hover:text-blue-600 focus:ring-3 focus:outline-hidden"
      >
        Gerar Relatório de Pedidos (Desativado)
      </button>
    </div>
  );
};

export default RelatoriosPedidos;
