export function ProductCard({ product }) {
  return (
    <article className="card">
      <h2>{product.name}</h2>
      <p>Preco: R$ {product.price.toFixed(2)}</p>
      <p>Estoque: {product.stock}</p>
    </article>
  );
}
