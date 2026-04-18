import { AuthForm } from "../components/AuthForm";

export function AuthPage({ mode, onSubmit, loading, error, onToggleMode }) {
  return (
    <main className="auth-page">
      <section className="auth-hero">
        <span className="auth-eyebrow">Lojinha online</span>
        <h1>Entre para acessar o catálogo.</h1>
        <p>
          O login libera a área principal do site e salva sua sessão neste navegador.
        </p>
      </section>

      <AuthForm
        mode={mode}
        onSubmit={onSubmit}
        loading={loading}
        error={error}
        onToggleMode={onToggleMode}
      />
    </main>
  );
}
