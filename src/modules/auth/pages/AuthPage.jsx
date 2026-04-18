import { AuthForm } from "../components/AuthForm";
import loginBackdrop from "../../../assets/login-backdrop.svg";

export function AuthPage({ mode, onSubmit, loading, error, onToggleMode }) {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#0f141a] text-slate-50">
      <img
        src={loginBackdrop}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover opacity-55"
      />

      <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(8,13,20,0.96)_10%,rgba(8,13,20,0.58)_55%,rgba(8,13,20,0.92)_100%)]" />

      <div className="relative mx-auto grid min-h-screen max-w-6xl gap-10 px-5 py-8 md:px-8 lg:grid-cols-[minmax(0,1fr)_430px] lg:items-center">
        <section className="max-w-2xl">
          <span className="inline-flex rounded-full border border-amber-300/55 bg-amber-100/15 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-amber-100">
            Lojinha online
          </span>

          <p className="mt-5 max-w-xl text-base leading-relaxed text-slate-200 md:text-lg">
            Cadastre qualquer email e senha para acessar o catalogo. Este ambiente e
            de demonstracao, ideal para testar o fluxo sem usar dados reais.
          </p>

        </section>

        <AuthForm
          mode={mode}
          onSubmit={onSubmit}
          loading={loading}
          error={error}
          onToggleMode={onToggleMode}
        />
      </div>
    </main>
  );
}
