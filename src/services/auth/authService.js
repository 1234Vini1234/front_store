import { apiPost } from "../http/apiClient";

export function loginUser(credentials) {
  return apiPost("/api/auth/login", credentials);
}

export function registerUser(payload) {
  return apiPost("/api/auth/register", payload);
}
