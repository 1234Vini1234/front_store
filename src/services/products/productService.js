import { apiGet } from "../http/apiClient";

export function getProducts() {
  return apiGet("/api/products");
}
