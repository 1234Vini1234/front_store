export function AppShell({ children }) {
  return (
    <main className="page">
      <header className="hero">
        <h1>Catalogo da Loja</h1>
        <p>Frontend em React conectado ao backend .NET</p>
      </header>
      {children}
    </main>
  );
}
