export function AppShell({ children, user, onLogout }) {
  return (
    <main className="page">
      <header className="hero">
        <div>
          <h1>Catalogo da Loja</h1>
          <p>Frontend em React conectado ao backend .NET</p>
        </div>
        <div className="user-chip">
          <span>
            {user.name} · {user.tipoPerfil}
          </span>
          <button className="link-button" type="button" onClick={onLogout}>
            Sair
          </button>
        </div>
      </header>
      {children}
    </main>
  );
}
