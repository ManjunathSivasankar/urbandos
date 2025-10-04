import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

interface CartItem {
  id: number;
  name: string;
  color: string;
  size: string;
  price: string;
  quantity: number;
  image?: string;
}

interface CartPageProps {
  cart: CartItem[];
  setCart: React.Dispatch<React.SetStateAction<CartItem[]>>;
  setShowCart: React.Dispatch<React.SetStateAction<boolean>>;
}

const CartPage = ({ cart, setCart, setShowCart }: CartPageProps) => {
  const [customerName, setCustomerName] = useState("");
  const [customerPhone, setCustomerPhone] = useState("");
  const [customerPlace, setCustomerPlace] = useState("");

  const updateQuantity = (index: number, delta: number) => {
    setCart((prev) =>
      prev.map((item, i) =>
        i === index ? { ...item, quantity: Math.max(1, item.quantity + delta) } : item
      )
    );
  };

  const total = cart.reduce(
    (sum, item) => sum + Number(item.price.replace("₹", "")) * item.quantity,
    0
  );

  const handleConfirmOrder = () => {
    if (!customerName || !customerPhone || !customerPlace) {
      alert("Please fill in your Name, Phone Number, and Place before confirming.");
      return;
    }

    const phone = "919003789388"; // ✅ your WhatsApp number

    const orderDetails = cart
      .map(
        (item) =>
          `${item.name} (${item.color}, ${item.size}) x${item.quantity} - ₹${
            Number(item.price.replace("₹", "")) * item.quantity
          }`
      )
      .join("\n");

    const message = `
📦 *New Order Received!*

👤 *Customer Details*
Name: ${customerName}
Phone: ${customerPhone}
Place: ${customerPlace}

🧾 *Order Details*
${orderDetails}

💰 *Total:* ₹${total}
    `;

    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, "_blank");

    // Optional: clear cart & fields
    setCart([]);
    setCustomerName("");
    setCustomerPhone("");
    setCustomerPlace("");
    setShowCart(false);
  };

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 z-40 bg-black/30 backdrop-blur-sm"
        onClick={() => setShowCart(false)}
      ></div>

      {/* Side Drawer */}
      <div className="fixed right-0 top-0 h-full w-[70%] md:w-3/4 lg:w-3/4 bg-white shadow-2xl z-50 flex flex-col transition-transform duration-300">
        {/* Header */}
        <div className="flex justify-between items-center p-6 border-b">
          <h1 className="text-2xl font-bold">Your Cart</h1>
          <button
            className="text-gray-500 hover:text-gray-700 text-2xl font-bold"
            onClick={() => setShowCart(false)}
          >
            &times;
          </button>
        </div>

        {/* Cart Items */}
        <div className="flex-1 overflow-y-auto p-6 space-y-4">
          {cart.length === 0 ? (
            <div className="flex items-center justify-center h-48 text-gray-400 text-lg">
              Your cart is empty.
            </div>
          ) : (
            cart.map((item, index) => (
              <div
                key={index}
                className="flex flex-col sm:flex-row sm:justify-between sm:items-center p-4 bg-gray-50 rounded-xl shadow-sm border hover:shadow-md transition gap-4"
              >
                {/* Product Info */}
                <div className="flex items-center gap-4">
                  <div className="w-20 h-20 bg-gray-100 rounded-lg flex items-center justify-center overflow-hidden">
                    {item.image ? (
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <span className="text-sm text-gray-400">{item.color}</span>
                    )}
                  </div>
                  <div>
                    <p className="font-semibold text-lg break-words">{item.name}</p>
                    <p className="text-gray-500 text-sm">Color: {item.color}</p>
                    <p className="text-gray-500 text-sm">Size: {item.size}</p>
                  </div>
                </div>

                {/* Controls & Price */}
                <div className="flex items-center justify-between sm:justify-end gap-4 w-full sm:w-auto">
                  <div className="flex items-center border rounded-lg overflow-hidden">
                    <button
                      className="px-3 py-1 bg-gray-200 hover:bg-gray-300"
                      onClick={() => updateQuantity(index, -1)}
                    >
                      -
                    </button>
                    <span className="px-4 py-1">{item.quantity}</span>
                    <button
                      className="px-3 py-1 bg-gray-200 hover:bg-gray-300"
                      onClick={() => updateQuantity(index, 1)}
                    >
                      +
                    </button>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold text-lg">
                      ₹{Number(item.price.replace("₹", "")) * item.quantity}
                    </p>
                    <button
                      className="text-red-500 text-sm mt-1 hover:text-red-600"
                      onClick={() => setCart((prev) => prev.filter((_, i) => i !== index))}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer with User Details + Confirm */}
        {cart.length > 0 && (
          <div className="border-t p-6 flex flex-col gap-4">
            {/* Customer Details Form */}
            <div className="flex flex-col gap-3">
              <input
                type="text"
                placeholder="Your Name"
                value={customerName}
                onChange={(e) => setCustomerName(e.target.value)}
                className="border border-gray-300 rounded-lg p-2 w-full focus:outline-none focus:ring-2 focus:ring-green-400"
              />
              <input
                type="tel"
                placeholder="Your Phone Number"
                value={customerPhone}
                onChange={(e) => setCustomerPhone(e.target.value)}
                className="border border-gray-300 rounded-lg p-2 w-full focus:outline-none focus:ring-2 focus:ring-green-400"
              />
              <input
                type="text"
                placeholder="Your Place (City / Area)"
                value={customerPlace}
                onChange={(e) => setCustomerPlace(e.target.value)}
                className="border border-gray-300 rounded-lg p-2 w-full focus:outline-none focus:ring-2 focus:ring-green-400"
              />
            </div>

            {/* Total + Confirm Button */}
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 mt-4">
              <span className="text-xl font-bold">Total: ₹{total}</span>
              <button
                className="w-full md:w-auto bg-green-500 text-white py-3 px-6 rounded-xl font-semibold hover:bg-green-600 transition"
                onClick={handleConfirmOrder}
              >
                Confirm Order via WhatsApp
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default CartPage;
