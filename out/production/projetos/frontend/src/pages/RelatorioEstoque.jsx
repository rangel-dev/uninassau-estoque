import React from "react";
// import jsPDF from "jspdf"; // Dependência para criar PDFs (comentar por enquanto)
// import "jspdf-autotable"; // Extensão para tabelas no jsPDF (comentar por enquanto)

const Relatorios = () => {
  // Função de exemplo (desativada temporariamente)
  const gerarRelatorio = () => {
    // const doc = new jsPDF(); // Inicialização do jsPDF
    // doc.text("Relatório de Estoque", 14, 10); // Adiciona um título ao PDF
    // const colunas = ["Nome do Item", "Quantidade", "Categoria", "Data de Entrada"];
    // const dados = [
    //   ["Luvas Cirúrgicas", "150", "Equipamentos Médicos", "05/04/2025"],
    //   ["Máscaras Descartáveis", "300", "EPI", "03/04/2025"],
    //   ["Álcool Gel 500ml", "100", "Higiene", "01/04/2025"],
    // ];
    // doc.autoTable({ head: [colunas], body: dados, startY: 20 });
    // doc.save("relatorio-estoque.pdf"); // Gera e baixa o arquivo PDF
    console.log("Função de geração de relatório desativada");
  };

  return (
    <div className="p-4">
      <h1 className="text-lg font-medium">Relatórios de Estoque</h1>
      <p className="mt-4">Gere relatórios de estoque de forma rápida e fácil.</p>
      <button
        onClick={gerarRelatorio}
        className="mt-4 inline-block px-6 py-3 text-center rounded-sm border border-blue-600 bg-blue-600 text-sm font-medium text-white hover:bg-transparent hover:text-blue-600 focus:ring-3 focus:outline-hidden"
      >
        Gerar Relatório de Estoque (Desativado)
      </button>
    </div>
  );
};

export default Relatorios;
