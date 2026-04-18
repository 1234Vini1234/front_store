import { useState } from "react";

export function AuthForm({ mode, onSubmit, loading, error, onToggleMode }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();
    await onSubmit({ name, email, password });
  }

  return (
    <section className="auth-card">
      <div className="auth-card__header">
        <span className="auth-badge">Acesso restrito</span>
        <h2>{mode === "login" ? "Entrar no sistema" : "Criar nova conta"}</h2>
        <p>Use seu email e senha para acessar o catálogo.</p>
      </div>

      <form className="auth-form" onSubmit={handleSubmit}>
        {mode === "register" && (
          <label>
            Nome
            <input
              value={name}
              onChange={(event) => setName(event.target.value)}
              type="text"
              autoComplete="name"
              placeholder="Seu nome"
              required
            />
          </label>
        )}

        <label>
          Email
          <input
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            type="email"
            autoComplete="email"
            placeholder="voce@exemplo.com"
            required
          />
        </label>

        <label>
          Senha
          <input
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            type="password"
            autoComplete={mode === "login" ? "current-password" : "new-password"}
            placeholder="Sua senha"
            required
          />
        </label>

        {error && <p className="status error">{error}</p>}

        <button className="primary-button" type="submit" disabled={loading}>
          {loading ? "Processando..." : mode === "login" ? "Entrar" : "Cadastrar"}
        </button>
      </form>

      <button className="link-button" type="button" onClick={onToggleMode}>
        {mode === "login" ? "Nao tenho conta ainda" : "Ja tenho conta"}
      </button>
    </section>
  );
}
