import React from "react";
import { useCart } from "../context/CartContext";

const Cart = () => {
  const { cart, removeFromCart, updateQuantity, total } = useCart();

  return (
    <div className="container mx-auto p-5">
      <h1 className="text-2xl font-bold mb-4">🛒 Tu Carrito</h1>

      {cart.length === 0 ? (
        <p>El carrito está vacío</p>
      ) : (
        <div className="space-y-4">
          {cart.map((item) => (
            <div key={item.id} className="flex items-center gap-4 border-b pb-2">
              <img src={item.image} alt={item.name} className="w-20 h-20 object-cover" />
              <div className="flex-1">
                <h2 className="font-bold">{item.name}</h2>
                <p>${item.price}</p>
              </div>
              <div className="flex items-center gap-2">
                <button onClick={() => updateQuantity(item.id, item.quantity - 1)} className="px-2 border">-</button>
                <span>{item.quantity}</span>
                <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="px-2 border">+</button>
              </div>
              <button onClick={() => removeFromCart(item.id)} className="text-red-600 hover:underline ml-4">
                Eliminar
              </button>
            </div>
          ))}

          <div className="text-right mt-4">
            <h2 className="text-xl font-bold">Total: ${total.toLocaleString("es-CO")}</h2>
            <button className="mt-2 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
              Finalizar compra
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
