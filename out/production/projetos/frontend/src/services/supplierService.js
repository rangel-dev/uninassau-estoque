// src/services/supplierService.js
import api from "./api";

export async function createSupplier(supplierData) {
  try {
    const response = await api.post("/suppliers/register", supplierData, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error in createSupplier:", error);
    throw error;
  }
}

export async function getSupplierById(id) {
  try {
    const response = await api.get(`/suppliers/${id}`, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error in getSupplierById:", error);
    throw error;
  }
}

export async function updateSupplier(id, supplierData) {
  try {
    const response = await api.put(`/suppliers/update/${id}`, supplierData, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error in updateSupplier:", error);
    throw error;
  }
}
