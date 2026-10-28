
import { useContext } from 'react';
import { CartContext } from './CartContext';

const products = [
  { id: 1, name: '상품 A', price: 100 },
  { id: 2, name: '상품 B', price: 200 },
  { id: 3, name: '상품 C', price: 300 },
];

function ProductList() {
  const context = useContext(CartContext);
  if (!context) return null;

  return (
    <div>
      <h2>상품 목록</h2>
      {products.map(product => (
        <div key={product.id}>
          {product.name} - {product.price}원
          <button onClick={() => context.addToCart(product)}>
            카트에 추가
          </button>
        </div>
      ))}
    </div>
  );
}

export default ProductList;