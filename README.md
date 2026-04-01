# service_store

Frontend React + Vite para consumo do backend `store_front`.

## Estrutura

- `src/app/`: estrutura base da aplicacao
- `src/modules/`: modulos de dominio (feature-first)
- `src/hooks/`: hooks compartilhados do projeto
- `src/services/`: acesso a API e regras de comunicacao
- `src/types/`: tipagens e contratos de dados
- `src/styles/`: estilos globais
- `index.html`: entrada da aplicacao
- `vite.config.js`: configuracao do Vite

### Estrutura de modulo

Cada modulo deve conter pelo menos:

- `components/`
- `pages/`
- `layouts/`

Exemplo atual:

- `src/modules/products/components/`
- `src/modules/products/pages/`
- `src/modules/products/layouts/`

## Responsabilidade das pastas globais

- `src/hooks/`: hooks reutilizaveis entre modulos
- `src/services/http/`: cliente base HTTP
- `src/services/products/`: service especifico do modulo de produtos
- `src/types/`: definicoes de tipos dos contratos de dados

## Como rodar com o backend

1. Suba o backend em outro terminal:

```powershell
dotnet run --project ..\store_front\store_front.csproj
```

2. Suba o frontend nesta pasta:

```powershell
npm install
npm run dev
```

3. Acesse no navegador:

- Frontend: `http://localhost:5173`
- API backend: `http://localhost:5161`

## Variavel de ambiente da API

No frontend, a base da API e definida por `VITE_API_BASE_URL`.

Arquivo de exemplo:

- `.env.example`
