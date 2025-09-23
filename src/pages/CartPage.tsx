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

    const message = `📦 New Order Received!\n\n${orderDetails}\n\nTotal: ₹${total}`;
    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, "_blank");
  };

  return (
    <div className="fixed inset-0 bg-black/30 flex items-center justify-center z-50 p-4">
      {/* Modal Box */}
      <div className="bg-white rounded-2xl shadow-2xl w-[75%] max-w-6xl h-[75vh] overflow-hidden flex flex-col relative">
        
        {/* Close Button */}
        <button
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-2xl font-bold"
          onClick={() => navigate(from)}
        >
          &times;
        </button>

        {/* Header */}
        <div className="flex justify-between items-center p-6 border-b">
          <h1 className="text-3xl font-bold">Your Cart</h1>
          <span className="text-gray-500 mr-6 mb-3">{cart.length} item(s)</span>
        </div>

        {/* Cart Items */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {cart.length === 0 ? (
            <div className="text-center py-20 text-gray-500 flex-1">
              Your cart is empty.
            </div>
          ) : (
            cart.map((item, index) => (
              <div
                key={index}
                className="flex flex-col md:flex-row justify-between items-center p-4 bg-gray-50 rounded-xl shadow-sm border"
              >
                <div className="flex flex-col md:flex-row md:items-center md:gap-6 w-full">
                  <div className="w-28 h-28 bg-gray-100 rounded-lg flex items-center justify-center overflow-hidden">
                    {item.image ? (
                      <img
                        src={item.image}
                        alt={item.name}
                        className="object-cover w-full h-full"
                      />
                    ) : (
                      <span className="text-sm text-gray-400">{item.color}</span>
                    )}
                  </div>
                  <div className="flex-1 mt-4 md:mt-0">
                    <p className="font-semibold text-lg">{item.name}</p>
                    <p className="text-gray-500">Color: {item.color}</p>
                    <p className="text-gray-500">Size: {item.size}</p>

                    {/* Quantity Controls */}
                    <div className="flex items-center gap-2 mt-2">
                      <button
                        onClick={() => updateQuantity(index, -1)}
                        className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300"
                      >
                        -
                      </button>
                      <span className="px-3 py-1 border rounded">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(index, 1)}
                        className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300"
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>

                {/* Price & Remove */}
                <div className="flex flex-col items-end gap-2 mt-4 md:mt-0">
                  <span className="font-semibold text-lg">
                    ₹{Number(item.price.replace("₹", "")) * item.quantity}
                  </span>
                  <button
                    className="text-red-500 hover:text-red-600 text-sm"
                    onClick={() => setCart(prev => prev.filter((_, i) => i !== index))}
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Total & Checkout */}
        {cart.length > 0 && (
          <div className="border-t p-6 flex flex-col md:flex-row justify-between items-center bg-white">
            <span className="text-xl font-bold">Total: ₹{total}</span>
            <button
              className="mt-4 md:mt-0 w-full md:w-auto bg-primary text-white py-3 px-6 rounded-xl font-semibold hover:bg-primary/90 transition"
              onClick={() => setShowPayment(true)}
            >
              Checkout
            </button>
          </div>
        )}

        {/* Payment Modal (inside cart modal) */}
        {showPayment && !paymentSuccess && (
          <div className="absolute inset-0 bg-black/30 flex items-center justify-center p-4">
            <div className="bg-white rounded-xl shadow-2xl w-96 max-w-[90%] p-6 flex flex-col items-center animate-fade-in">
              {!selectedPayment ? (
                <>
                  <h2 className="text-2xl font-bold mb-6 text-center">Select Payment Method</h2>
                  <div className="grid grid-cols-1 gap-4 w-full">
                    {[
                      { name: "UPI", icon: "📱" },
                      { name: "Net Banking", icon: "🏦" },
                      { name: "Cash on Delivery", icon: "🛵" },
                    ].map((method) => (
                      <button
                        key={method.name}
                        className="flex items-center gap-3 py-3 px-4 w-full border rounded-lg hover:bg-primary/10 transition"
                        onClick={() => setSelectedPayment(method.name)}
                      >
                        <span className="text-2xl">{method.icon}</span>
                        <span className="font-medium text-left">{method.name}</span>
                      </button>
                    ))}
                  </div>
                  <button
                    className="mt-6 w-full py-3 bg-red-500 text-white rounded-lg hover:bg-red-600 transition font-semibold"
                    onClick={() => setShowPayment(false)}
                  >
                    Cancel
                  </button>
                </>
              ) : (
                <>
                  <h2 className="text-2xl font-bold mb-4 text-center">{selectedPayment}</h2>
                  <div className="w-full p-4 bg-gray-50 rounded-lg border flex flex-col items-center gap-4">
                    {selectedPayment === "UPI" && (
                      <div className="flex gap-4">
                        <img src="/path-to-phonepe-qr.png" alt="PhonePe QR" className="w-20 h-20 object-contain" />
                        <img src="/path-to-gpay-qr.png" alt="GPay QR" className="w-20 h-20 object-contain" />
                        <img src="/path-to-paytm-qr.png" alt="Paytm QR" className="w-20 h-20 object-contain" />
                      </div>
                    )}
                    {selectedPayment === "Net Banking" && (
                      <div className="text-left w-full">
                        <p><span className="font-semibold">Account Name:</span> UrbanDos Pvt Ltd</p>
                        <p><span className="font-semibold">Bank:</span> State Bank of India</p>
                        <p><span className="font-semibold">Account No:</span> 1234567890</p>
                        <p><span className="font-semibold">IFSC:</span> SBIN0001234</p>
                      </div>
                    )}
                    {selectedPayment === "Cash on Delivery" && (
                      <p className="text-center font-medium">You will pay in cash when the product is delivered.</p>
                    )}
                  </div>
                  <div className="flex gap-4 mt-6 w-full">
                    <button
                      className="flex-1 py-3 bg-gray-300 rounded-lg hover:bg-gray-400 transition font-semibold"
                      onClick={() => setSelectedPayment(null)}
                    >
                      Back
                    </button>
                    <button
                      className="flex-1 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition font-semibold"
                      onClick={handlePaymentConfirm}
                    >
                      Buy
                    </button>
                  </div>
                </>
              )}
            </div>
          </div>
        )}

        {/* Payment Success */}
        {paymentSuccess && (
          <div className="absolute inset-0 bg-black/30 flex items-center justify-center p-4">
            <div className="bg-white rounded-xl shadow-2xl w-96 max-w-[90%] p-6 flex flex-col items-center animate-fade-in">
              <h2 className="text-2xl font-bold mb-4 text-center text-green-600">Payment Successful!</h2>
              <p className="text-center mb-6">Your order has been placed successfully.</p>
              <button
                className="w-full py-3 bg-primary text-white rounded-lg font-semibold hover:bg-primary/90 transition"
                onClick={() => {
                  setShowPayment(false);
                  setSelectedPayment(null);
                  setPaymentSuccess(false);
                  setCart([]);
                  navigate("/");
                }}
              >
                OK
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};

export default CartPage;
