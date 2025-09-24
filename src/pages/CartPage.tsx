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
    <>
      {/* Semi-transparent overlay that keeps previous page visible */}
      <div className="fixed inset-0 backdrop-blur-sm bg-black/20 z-40"></div>

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

          {/* Payment Modal (nested) */}
          {showPayment && !paymentSuccess && (
            <div className="absolute inset-0 bg-black/20 flex items-center justify-center p-4">
              <div className="bg-white rounded-2xl w-full max-w-md p-6 flex flex-col gap-4 animate-fade-in">
                {!selectedPayment ? (
                  <>
                    <h2 className="text-2xl font-bold text-center mb-4">Select Payment Method</h2>
                    <div className="flex flex-col gap-3">
                      {[
                        { name: "UPI", icon: "📱" },
                        { name: "Net Banking", icon: "🏦" },
                        { name: "Cash on Delivery", icon: "🛵" },
                      ].map(method => (
                        <button
                          key={method.name}
                          onClick={() => setSelectedPayment(method.name)}
                          className="flex items-center gap-3 py-3 px-4 border rounded-lg hover:bg-primary/10 transition font-medium"
                        >
                          <span className="text-2xl">{method.icon}</span>
                          {method.name}
                        </button>
                      ))}
                    </div>
                    <button
                      className="mt-4 py-3 w-full bg-red-500 text-white rounded-lg font-semibold hover:bg-red-600 transition"
                      onClick={() => setShowPayment(false)}
                    >
                      Cancel
                    </button>
                  </>
                ) : (
                  <>
                    <h2 className="text-2xl font-bold text-center">{selectedPayment}</h2>
                    <div className="bg-gray-50 p-4 rounded-lg border flex flex-col items-center gap-4">
                      {selectedPayment === "Cash on Delivery" && (
                        <p className="text-center font-medium">Pay in cash on delivery.</p>
                      )}
                      {selectedPayment === "UPI" && <p className="text-center">Scan UPI QR codes here.</p>}
                      {selectedPayment === "Net Banking" && (
                        <p className="text-sm text-gray-700 text-left w-full">
                          Account: UrbanDos Pvt Ltd <br />
                          Bank: State Bank of India <br />
                          Account No: 1234567890 <br />
                          IFSC: SBIN0001234
                        </p>
                      )}
                    </div>
                    <div className="flex gap-4 mt-4">
                      <button
                        className="flex-1 py-3 bg-gray-300 rounded-lg font-semibold hover:bg-gray-400"
                        onClick={() => setSelectedPayment(null)}
                      >
                        Back
                      </button>
                      <button
                        className="flex-1 py-3 bg-green-500 text-white rounded-lg font-semibold hover:bg-green-600"
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
            <div className="absolute inset-0 bg-black/20 flex items-center justify-center p-4">
              <div className="bg-white rounded-2xl shadow-2xl max-w-sm w-full p-6 flex flex-col items-center gap-4 animate-fade-in">
                <h2 className="text-2xl font-bold text-green-600">Payment Successful!</h2>
                <p className="text-center">Your order has been placed successfully.</p>
                <button
                  className="w-full py-3 bg-primary text-white rounded-xl font-semibold hover:bg-primary/90 transition"
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
    </>
  );
};

export default CartPage;
