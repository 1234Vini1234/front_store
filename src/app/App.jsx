import { AppShell } from "./layouts/AppShell";
import { AuthPage } from "../modules/auth/pages/AuthPage";
import { ProductsPage } from "../modules/products/pages/ProductsPage";
import { useAuth } from "../hooks/useAuth";
import { useState } from "react";

function App() {
  const { user, loading, error, login, register, logout } = useAuth();
  const [mode, setMode] = useState("login");

  async function handleSubmit(credentials) {
    if (mode === "login") {
      await login(credentials.email, credentials.password);
      return;
    }

    await register(credentials.name, credentials.email, credentials.password);
  }

  return (
    <>
      {!user ? (
        <AuthPage
          mode={mode}
          onSubmit={handleSubmit}
          loading={loading}
          error={error}
          onToggleMode={() => setMode(mode === "login" ? "register" : "login")}
        />
      ) : (
        <AppShell user={user} onLogout={logout}>
          <ProductsPage />
        </AppShell>
      )}
    </>
  );
}

export default App;
