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
    <section className="align-middle w-[550px] mx-auto rounded-3xl border border-white/40 bg-white/90 text-slate-800 shadow-[0_24px_80px_rgba(2,6,23,0.35)] backdrop-blur-xl flex flex-col px-8 py-10 sm:px-12">
      <div>
        <span className="inline-flex rounded-full bg-slate-900 px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-white">
          Acesso restrito
        </span>
        <h2 className="mt-4 font-[Sora] text-2xl font-bold leading-tight text-slate-900 sm:text-3xl">
          {mode === "login" ? "Entrar no sistema" : "Criar nova conta"}
        </h2>
        <p className="mt-2 text-sm text-slate-600">
          Use seu email e senha para acessar o catalogo.
        </p>
      </div>

      <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
        {mode === "register" && (
          <label className="block text-sm font-semibold text-slate-700">
            Nome
            <input
              className="mt-2 w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-base outline-none transition focus:border-slate-500 focus:ring-2 focus:ring-slate-300"
              value={name}
              onChange={(event) => setName(event.target.value)}
              type="text"
              autoComplete="name"
              placeholder="Seu nome"
              required
            />
          </label>
        )}

        <label className="block text-sm font-semibold text-slate-700">
          Email
          <input
            className="mt-2 w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-base outline-none transition focus:border-slate-500 focus:ring-2 focus:ring-slate-300"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            type="email"
            autoComplete="email"
            placeholder="voce@exemplo.com"
            required
          />
        </label>

        <label className="block text-sm font-semibold text-slate-700">
          Senha
          <input
            className="mt-2 w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-base outline-none transition focus:border-slate-500 focus:ring-2 focus:ring-slate-300"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            type="password"
            autoComplete={mode === "login" ? "current-password" : "new-password"}
            placeholder="Sua senha"
            required
          />
        </label>

        {error && (
          <p className="rounded-xl border border-red-200 bg-red-50 px-3 py-2 text-sm font-medium text-red-700">
            {error}
          </p>
        )}

        <button
          className="inline-flex w-full items-center justify-center rounded-xl bg-slate-900 px-4 py-3 font-semibold text-white transition hover:bg-slate-800 disabled:cursor-progress disabled:opacity-70"
          type="submit"
          disabled={loading}
        >
          {loading ? "Processando..." : mode === "login" ? "Entrar" : "Cadastrar"}
        </button>
      </form>

      <p className="mt-5 text-center text-sm text-slate-600">
        {mode === "login" ? "Nao tem conta ainda?" : "Ja tem conta?"} {" "}
        <button
          className="font-semibold text-slate-900 underline decoration-slate-400 underline-offset-4 hover:decoration-slate-900"
          type="button"
          onClick={onToggleMode}
        >
          {mode === "login" ? "Criar agora" : "Entrar"}
        </button>
      </p>
    </section>
  );
}
