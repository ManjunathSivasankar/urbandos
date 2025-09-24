import { useState } from 'react';
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
}

const CartPage = ({ cart, setCart }: CartPageProps) => {
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from || "/";
  const [showPayment, setShowPayment] = useState(false);
  const [selectedPayment, setSelectedPayment] = useState<string | null>(null);
  const [paymentSuccess, setPaymentSuccess] = useState(false);

  const updateQuantity = (index: number, delta: number) => {
    setCart(prev =>
      prev.map((item, i) =>
        i === index ? { ...item, quantity: Math.max(1, item.quantity + delta) } : item
      )
    );
  };

  const total = cart.reduce(
    (sum, item) => sum + Number(item.price.replace("₹", "")) * item.quantity,
    0
  );

  const handlePaymentConfirm = () => {
    setPaymentSuccess(true);

    const phone = "919345974814";
    const orderDetails = cart
      .map(
        item =>
          `${item.name} (${item.color}, ${item.size}) x${item.quantity} - ₹${Number(
            item.price.replace("₹", "")
          ) * item.quantity}`
      )
      .join("\n");

    const message = `📦 New Order Received!\n\n${orderDetails}\n\nTotal: ₹${total}\nPayment Method: ${selectedPayment}`;
    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, "_blank");
  };

  return (
    <>
      {/* Blurred background overlay */}
      <div className="fixed inset-0 z-40 backdrop-blur-sm bg-transparent"></div>

      {/* Modal Box */}
      <div className="fixed inset-0 flex items-center justify-center z-50 p-4">
        <div className="bg-white rounded-2xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-hidden flex flex-col relative">
          {/* Close Button */}
          <button
            className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-2xl font-bold z-10 mt-2"
            onClick={() => navigate(from)}
          >
            &times;
          </button>

          {/* Header */}
          <div className="flex justify-between items-center p-6 border-b">
            <h1 className="text-3xl font-bold">Your Cart</h1>
            <span className="text-gray-500 mr-6">{cart.length} item(s)</span>
          </div>

          {/* Cart Items */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            {cart.length === 0 ? (
              <div className="flex items-center justify-center h-48 text-gray-400 text-lg rounded-lg">
                Your cart is empty.
              </div>
            ) : (
              cart.map((item, index) => (
                <div
                  key={index}
                  className="flex flex-col md:flex-row justify-between items-center p-4 bg-gray-50 rounded-xl shadow-sm border hover:shadow-md transition"
                >
                  <div className="flex items-center gap-4 w-full md:w-auto">
                    <div className="w-24 h-24 bg-gray-100 rounded-lg flex items-center justify-center overflow-hidden">
                      {item.image ? (
                        <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                      ) : (
                        <span className="text-sm text-gray-400">{item.color}</span>
                      )}
                    </div>
                    <div>
                      <p className="font-semibold text-lg">{item.name}</p>
                      <p className="text-gray-500 text-sm">Color: {item.color}</p>
                      <p className="text-gray-500 text-sm">Size: {item.size}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 mt-4 md:mt-0">
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
                        onClick={() => setCart(prev => prev.filter((_, i) => i !== index))}
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Summary & Checkout */}
          {cart.length > 0 && (
            <div className="border-t p-6 flex flex-col md:flex-col justify-between items-start bg-white">
              <span className="text-xl font-bold mb-4">Total: ₹{total}</span>

              {!showPayment ? (
                <button
                  className="w-full md:w-auto bg-primary text-white py-3 px-6 rounded-xl font-semibold hover:bg-primary/90 transition"
                  onClick={() => setShowPayment(true)}
                >
                  Checkout
                </button>
              ) : paymentSuccess ? (
                <div className="text-green-600 font-semibold">Payment Success! 🎉</div>
              ) : (
                <div className="flex flex-col gap-4 w-full">
                  <p className="font-semibold">Select Payment Method:</p>
                  <div className="flex flex-col md:flex-row gap-4">
                    {["UPI", "Net Banking", "COD", "Card"].map((method) => (
                      <button
                        key={method}
                        className={`py-2 px-4 rounded-xl border font-semibold transition ${
                          selectedPayment === method
                            ? "bg-primary text-white"
                            : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                        }`}
                        onClick={() => setSelectedPayment(method)}
                      >
                        {method}
                      </button>
                    ))}
                  </div>

                  {/* Payment Modal Details */}
                  {selectedPayment && (
                    <div className="mt-4 p-4 border rounded-xl bg-gray-50 w-full">
                      {selectedPayment === "UPI" && (
                        <div className="flex flex-col items-center">
                          <p className="mb-2 font-semibold">Scan this UPI QR to pay</p>
                          <img src="/path-to-your-upi-qr.png" alt="UPI QR" className="w-40 h-40 object-contain" />
                        </div>
                      )}

                      {selectedPayment === "Net Banking" && (
                        <div>
                          <p className="font-semibold mb-2">Bank Details:</p>
                          <p>Bank: ABC Bank</p>
                          <p>Account: 1234567890</p>
                          <p>IFSC: ABCD0123456</p>
                        </div>
                      )}

                      {selectedPayment === "COD" && (
                        <div>
                          <p className="font-semibold">Cash on Delivery selected.</p>
                          <p>Pay the total amount ₹{total} when your order arrives.</p>
                        </div>
                      )}

                      {selectedPayment === "Card" && (
                        <div className="flex flex-col gap-2">
                          <p className="font-semibold mb-2">Enter Card Details:</p>
                          <input type="text" placeholder="Card Number" className="border rounded p-2 w-full" />
                          <input type="text" placeholder="Name on Card" className="border rounded p-2 w-full" />
                          <div className="flex gap-2">
                            <input type="text" placeholder="Expiry MM/YY" className="border rounded p-2 w-1/2" />
                            <input type="text" placeholder="CVV" className="border rounded p-2 w-1/2" />
                          </div>
                        </div>
                      )}

                      <div className="flex gap-4 mt-4">
                        <button
                          className="bg-green-500 text-white py-2 px-6 rounded-xl font-semibold hover:bg-green-600 transition"
                          onClick={handlePaymentConfirm}
                        >
                          Confirm Payment
                        </button>
                        <button
                          className="bg-gray-200 text-gray-700 py-2 px-6 rounded-xl hover:bg-gray-300 transition"
                          onClick={() => setSelectedPayment(null)}
                        >
                          Cancel
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default CartPage;
