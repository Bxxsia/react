
import { useContext } from 'react';
import { CartContext } from './CartContext';

function Cart() {
  const context = useContext(CartContext);
  if (!context) return null;

  const { cart, removeFromCart } = context;

  return (
    <div>
      <h2>내 카트</h2>
      {cart.length === 0 ? (
        <p>카트에 상품이 없습니다.</p>
      ) : (
        cart.map((item, index) => (
          <div key={index}>
            {item.name} - {item.price}원
            <button onClick={() => removeFromCart(item.id)}>삭제</button>
          </div>
        ))
      )}
    </div>
  );
}

export default Cart;
