import { AppShell } from "./layouts/AppShell";
import { ProductsPage } from "../modules/products/pages/ProductsPage";

function App() {
  return (
    <AppShell>
      <ProductsPage />
    </AppShell>
  );
}

export default App;
