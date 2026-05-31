function Cart({ cart }) {
  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="cart-page">
      <h1>Your Cart</h1>

      {cart.length === 0 ? (
        <h3>Cart is Empty</h3>
      ) : (
        <>
          {cart.map((item) => (
            <div key={item.id} className="cart-item">
              <h3>{item.name}</h3>
              <p>Qty: {item.quantity}</p>
              <p>₹{item.price * item.quantity}</p>
            </div>
          ))}

          <h2>Total: ₹{total}</h2>

          <button className="order-btn">
            Place Order
          </button>
        </>
      )}
    </div>
  );
}

export default Cart;