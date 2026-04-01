import { useProducts } from "../../../hooks/useProducts";
import { ProductCard } from "../components/ProductCard";
import { ProductsLayout } from "../layouts/ProductsLayout";

export function ProductsPage() {
  const { products, loading, error } = useProducts();

  if (loading) {
    return <p className="status">Carregando produtos...</p>;
  }

  if (error) {
    return <p className="status error">{error}</p>;
  }

  return (
    <ProductsLayout>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </ProductsLayout>
  );
}
