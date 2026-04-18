import { AppShell } from "./layouts/AppShell";
import { AuthPage } from "../modules/auth/pages/AuthPage";
import { ProductsPage } from "../modules/products/pages/ProductsPage";
import { useAuth } from "../hooks/useAuth";
import { Navigate, Route, Routes, useNavigate } from "react-router-dom";

function App() {
  const { user, loading, error, login, register, logout } = useAuth();

  function AuthRoute({ mode }) {
    const navigate = useNavigate();

    async function handleSubmit(credentials) {
      if (mode === "login") {
        await login(credentials.email, credentials.password);
      } else {
        await register(credentials.name, credentials.email, credentials.password);
      }

      navigate("/produtos", { replace: true });
    }

    function handleToggleMode() {
      navigate(mode === "login" ? "/cadastro" : "/login", { replace: true });
    }

    if (user) {
      return <Navigate to="/produtos" replace />;
    }

    return (
      <AuthPage
        mode={mode}
        onSubmit={handleSubmit}
        loading={loading}
        error={error}
        onToggleMode={handleToggleMode}
      />
    );
  }

  function ProtectedProductsRoute() {
    const navigate = useNavigate();

    function handleLogout() {
      logout();
      navigate("/login", { replace: true });
    }

    if (!user) {
      return <Navigate to="/login" replace />;
    }

    return (
      <AppShell user={user} onLogout={handleLogout}>
        <ProductsPage />
      </AppShell>
    );
  }

  return (
    <Routes>
      <Route path="/" element={<Navigate to={user ? "/produtos" : "/login"} replace />} />
      <Route path="/login" element={<AuthRoute mode="login" />} />
      <Route path="/cadastro" element={<AuthRoute mode="register" />} />
      <Route path="/produtos" element={<ProtectedProductsRoute />} />
      <Route path="*" element={<Navigate to={user ? "/produtos" : "/login"} replace />} />
    </Routes>
  );
}

export default App;
