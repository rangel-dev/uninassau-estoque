import React from "react";
import Modal from "./Modal";
import { PhotoIcon } from "@heroicons/react/24/solid";

const ProductModal = ({ isOpen, onClose }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <form className="p-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-8">
          Cadastro de Produto
        </h2>
        {/* Container com mais espaçamento vertical entre os grupos */}
        <div className="space-y-8">
          <div>
            <label
              htmlFor="product-name"
              className="block text-sm font-medium text-gray-900"
            >
              Nome do Produto
            </label>
            <input
              type="text"
              id="product-name"
              name="product-name"
              placeholder="Ex: Luva de Procedimento"
              className="mt-2 block w-full border border-gray-300 rounded-md p-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          <div>
            <label
              htmlFor="category"
              className="block text-sm font-medium text-gray-900"
            >
              Categoria
            </label>
            <select
              id="category"
              name="category"
              className="mt-2 block w-full border border-gray-300 rounded-md p-2 focus:ring-blue-500 focus:border-blue-500"
            >
              <option>Medicamento</option>
              <option>Equipamento</option>
              <option>Suprimento</option>
              <option>Outros</option>
            </select>
          </div>

          <div>
            <label
              htmlFor="supplier"
              className="block text-sm font-medium text-gray-900"
            >
              Fornecedor
            </label>
            <input
              type="text"
              id="supplier"
              name="supplier"
              placeholder="Ex: Fornecedor XYZ"
              className="mt-2 block w-full border border-gray-300 rounded-md p-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          <div>
            <label
              htmlFor="lot"
              className="block text-sm font-medium text-gray-900"
            >
              Lote
            </label>
            <input
              type="text"
              id="lot"
              name="lot"
              placeholder="Ex: 123456"
              className="mt-2 block w-full border border-gray-300 rounded-md p-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          <div>
            <label
              htmlFor="quantity"
              className="block text-sm font-medium text-gray-900"
            >
              Quantidade
            </label>
            <input
              type="number"
              id="quantity"
              name="quantity"
              placeholder="Ex: 50"
              className="mt-2 block w-full border border-gray-300 rounded-md p-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          <div>
            <label
              htmlFor="price"
              className="block text-sm font-medium text-gray-900"
            >
              Preço (R$)
            </label>
            <input
              type="number"
              step="0.01"
              id="price"
              name="price"
              placeholder="Ex: 19.99"
              className="mt-2 block w-full border border-gray-300 rounded-md p-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          <div>
            <label
              htmlFor="expiration"
              className="block text-sm font-medium text-gray-900"
            >
              Data de Validade
            </label>
            <input
              type="date"
              id="expiration"
              name="expiration"
              className="mt-2 block w-full border border-gray-300 rounded-md p-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          <div>
            <label
              htmlFor="location"
              className="block text-sm font-medium text-gray-900"
            >
              Localização
            </label>
            <input
              type="text"
              id="location"
              name="location"
              placeholder="Ex: Estoque A"
              className="mt-2 block w-full border border-gray-300 rounded-md p-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          <div>
            <label
              htmlFor="description"
              className="block text-sm font-medium text-gray-900"
            >
              Descrição
            </label>
            <textarea
              id="description"
              name="description"
              rows="3"
              placeholder="Descreva o produto..."
              className="mt-2 block w-full border border-gray-300 rounded-md p-2 focus:ring-blue-500 focus:border-blue-500"
            ></textarea>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-900">
              Imagem do Produto
            </label>
            <div className="mt-4 flex justify-center rounded-lg border border-dashed border-gray-300 px-6 py-10">
              <div className="text-center">
                <PhotoIcon
                  className="mx-auto h-12 w-12 text-gray-400"
                  aria-hidden="true"
                />
                <div className="mt-4 flex text-sm text-gray-600">
                  <label
                    htmlFor="product-photo"
                    className="relative cursor-pointer rounded-md bg-white font-medium text-indigo-600 hover:text-indigo-500"
                  >
                    <span>Upload a file</span>
                    <input
                      id="product-photo"
                      name="product-photo"
                      type="file"
                      className="sr-only"
                    />
                  </label>
                  <p className="pl-1">ou arraste e solte</p>
                </div>
                <p className="mt-2 text-xs text-gray-500">
                  PNG, JPG, GIF até 10MB
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Botões de Ação */}
        <div className="mt-8 flex items-center justify-end gap-x-6">
          <button
            type="button"
            onClick={onClose}
            className="text-sm font-semibold text-gray-900"
          >
            Cancelar
          </button>
          <button
            type="submit"
            className="rounded-md bg-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Salvar
          </button>
        </div>
      </form>
    </Modal>
  );
};

export default ProductModal;
