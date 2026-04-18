import { useEffect, useState } from "react";
import { loginUser, registerUser } from "../services/auth/authService";

const AUTH_STORAGE_KEY = "lojinha.auth";

function loadStoredUser() {
  if (typeof window === "undefined") {
    return null;
  }

  const rawValue = window.localStorage.getItem(AUTH_STORAGE_KEY);
  if (!rawValue) {
    return null;
  }

  try {
    return JSON.parse(rawValue);
  } catch {
    return null;
  }
}

export function useAuth() {
  const [user, setUser] = useState(() => loadStoredUser());
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (user) {
      window.localStorage.setItem(AUTH_STORAGE_KEY, JSON.stringify(user));
      return;
    }

    window.localStorage.removeItem(AUTH_STORAGE_KEY);
  }, [user]);

  async function login(email, password) {
    setLoading(true);
    setError("");

    try {
      const authenticatedUser = await loginUser({ email, password });
      setUser(authenticatedUser);
      return authenticatedUser;
    } catch (err) {
      setError(err.message);
      throw err;
    } finally {
      setLoading(false);
    }
  }

  async function register(name, email, password) {
    setLoading(true);
    setError("");

    try {
      const registeredUser = await registerUser({ name, email, password });
      setUser(registeredUser);
      return registeredUser;
    } catch (err) {
      setError(err.message);
      throw err;
    } finally {
      setLoading(false);
    }
  }

  function logout() {
    setUser(null);
    setError("");
  }

  return {
    user,
    loading,
    error,
    login,
    register,
    logout,
  };
}
