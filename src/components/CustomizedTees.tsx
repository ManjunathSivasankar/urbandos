import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { X } from "lucide-react";

interface CartItem {
  id: number;
  name: string;
  size: string;
  price: string;
  quantity: number;
  image?: string;
}

interface Tee {
  id: number;
  name: string;
  image: string;
  description: string;
  price: string;
  stock: { [key: string]: number };
  instagramUrl?: string;
}

interface CustomizedTeesProps {
  cart: CartItem[];
  setCart: React.Dispatch<React.SetStateAction<CartItem[]>>;
}

const customizedTees: Tee[] = [
  {
    id: 1,
    name: "Custom Design 1",
    image: "https://i.postimg.cc/cLBGDZWQ/Whats-App-Image-2025-08-08-at-17-54-56.jpg",
    description: "Personalized street design",
    price: "₹649",
    stock: { S: 3, M: 2, L: 1 },
  },
  {
    id: 2,
    name: "Custom Design 2",
    image: "https://i.postimg.cc/cLBGDZWQ/Whats-App-Image-2025-08-08-at-17-54-56.jpg",
    description: "Urban art custom print",
    price: "₹699",
    stock: { S: 3, M: 2, L: 1 },
  },
  {
    id: 3,
    name: "Custom Design 3",
    image: "https://i.postimg.cc/pTQzKg5b/image.png",
    description: "Minimalist custom design",
    price: "₹599",
    stock: { S: 3, M: 2, L: 1 },
  },
  {
    id: 4,
    name: "Custom Design 4",
    image: "https://i.postimg.cc/Jh5zxmxq/image.png",
    description: "Bold graphic custom tee",
    price: "₹749",
    stock: { S: 3, M: 2, L: 1 },
  },
  {
    id: 5,
    name: "Custom Design 5",
    image: "https://i.postimg.cc/63VbTb9T/image.png",
    description: "Bold graphic custom tee",
    instagramUrl: "https://www.instagram.com/p/DOOhkCyjF3-/?img_index=1",
    price: "₹799",
    stock: { S: 3, M: 2, L: 1 },
  },
  {
    id: 6,
    name: "Custom Design 6",
    image: "https://i.postimg.cc/gkb3kyjL/image.png",
    description: "Bold graphic custom tee",
    instagramUrl: "https://www.instagram.com/p/DOf9MGiEXa_/?img_index=1",
    price: "₹699",
    stock: { S: 3, M: 2, L: 1 },
  },
  {
    id: 7,
    name: "Custom Design 7",
    image: "https://i.postimg.cc/qMmBZ0PB/image.png",
    description: "Bold graphic custom tee",
    instagramUrl: "https://www.instagram.com/p/DOtJVzuj0HG/?img_index=1",
    price: "₹849",
    stock: { S: 3, M: 2, L: 1 },
  },
  {
    id: 8,
    name: "Custom Design 8",
    image: "https://i.postimg.cc/fLKkzdrm/image.png",
    description: "Bold graphic custom tee",
    instagramUrl: "https://www.instagram.com/p/YOUR_POST_ID_4",
    price: "₹799",
    stock: { S: 3, M: 2, L: 1 },
  },
];

const PaymentSection = ({
  cart,
  setCart,
  total,
}: {
  cart: CartItem[];
  setCart: React.Dispatch<React.SetStateAction<CartItem[]>>;
  total: number;
}) => {
  const [selectedPayment, setSelectedPayment] = useState<string | null>(null);
  const [paymentSuccess, setPaymentSuccess] = useState(false);

  const handlePaymentConfirm = () => {
    setPaymentSuccess(true);

    const phone = "919345974814";
    const orderDetails = cart
      .map(
        item =>
          `${item.name} (${item.size}) x${item.quantity} - ₹${Number(item.price.replace("₹", "")) * item.quantity}`
      )
      .join("\n");

    const message = `📦 New Order Received!\n\n${orderDetails}\n\nTotal: ₹${total}\nPayment Method: ${selectedPayment}`;
    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, "_blank");
  };

  if (paymentSuccess) {
    return <div className="text-green-600 font-semibold">Payment Success! 🎉</div>;
  }

  return (
    <div className="flex flex-col gap-4">
      {!selectedPayment ? (
        <>
          <p className="font-semibold">Select Payment Method:</p>
          <div className="flex flex-col md:flex-row gap-4">
            {["UPI", "Net Banking", "COD", "Card"].map((method) => (
              <button
                key={method}
                className="py-2 px-4 rounded-xl border font-semibold bg-gray-200 text-gray-700 hover:bg-gray-300 transition"
                onClick={() => setSelectedPayment(method)}
              >
                {method}
              </button>
            ))}
          </div>
        </>
      ) : (
        <div className="p-4 border rounded-xl bg-gray-50">
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
              <p>Pay ₹{total} when your order arrives.</p>
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
  );
};

const CustomizedTees = ({ cart, setCart }: CustomizedTeesProps) => {
  const [openProduct, setOpenProduct] = useState<number | null>(null);
  const [showAll, setShowAll] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const [showPayment, setShowPayment] = useState(false);
  const navigate = useNavigate();

  const handleSizeClick = (tee: Tee, size: string) => {
    let addedItem: CartItem = {
      id: tee.id,
      name: tee.name,
      size,
      price: tee.price,
      quantity: 1,
      image: tee.image,
    };

    setCart(prev => {
      const index = prev.findIndex(item => item.id === tee.id && item.size === size);
      if (index !== -1) {
        const updated = [...prev];
        updated[index].quantity += 1;
        addedItem = updated[index];
        return updated;
      } else {
        return [...prev, addedItem];
      }
    });

    setOpenProduct(null);
    setShowCart(true);
  };

  return (
    <section className="py-16 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">🎨 Customized Tees</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Express your unique style with our custom-designed t-shirts. Each piece is crafted to reflect your personality.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-8">
          {(showAll ? customizedTees : customizedTees.slice(0, 4)).map(tee => (
            <div key={tee.id} className="group bg-card border border-border rounded-none hover:shadow-md transition-all duration-300">
              <div className="aspect-square overflow-hidden bg-secondary">
                <img src={tee.image} alt={tee.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>

              <div className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-lg font-medium text-foreground">{tee.name}</h3>
                  <span className="text-lg font-semibold text-foreground">{tee.price}</span>
                </div>
                <p className="text-sm text-muted-foreground mb-4">{tee.description}</p>

                {openProduct === tee.id ? (
                  <div className="mb-4">
                    <p className="text-sm text-muted-foreground mb-3">Select Size:</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {Object.entries(tee.stock).map(([size, qty]) => (
                        <button
                          key={size}
                          disabled={qty === 0}
                          onClick={() => handleSizeClick(tee, size)}
                          className={`py-2 px-4 rounded-full text-sm font-medium transition border ${
                            qty === 0
                              ? "bg-gray-200 text-gray-400 border-gray-200 cursor-not-allowed"
                              : "bg-white text-foreground border-gray-300 hover:bg-primary hover:text-white"
                          }`}
                        >
                          {size} ({qty})
                        </button>
                      ))}
                    </div>
                    <button
                      onClick={() => setOpenProduct(null)}
                      className="px-4 py-2 text-sm rounded-md border border-gray-300 text-gray-600 hover:bg-gray-100 transition"
                    >
                      Cancel
                    </button>
                  </div>
                ) : (
                  <button
                    onClick={() => setOpenProduct(tee.id)}
                    className="w-full py-2 px-4 rounded-md bg-primary text-white font-semibold hover:bg-primary/90 transition"
                  >
                    Order Now
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>

        {!showAll && customizedTees.length > 4 && (
          <div className="text-center">
            <button
              onClick={() => setShowAll(true)}
              className="px-6 py-2 bg-primary text-white rounded-md font-semibold hover:bg-primary/90 transition"
            >
              View All
            </button>
          </div>
        )}
      </div>

      {/* Cart Modal */}
{/* Cart Modal */}
{showCart && (
  <div className="fixed inset-0 z-50 flex justify-center md:justify-end">
    {/* Overlay */}
    <div
      className="absolute inset-0 backdrop-blur-sm bg-black/20"
      onClick={() => setShowCart(false)}
    ></div>

    {/* Modal */}
    <div
      className="relative bg-white w-full md:w-2/5 h-full max-h-full overflow-auto p-6 z-50 shadow-xl flex flex-col"
      onClick={(e) => e.stopPropagation()}
    >
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold">Your Cart</h2>
        <button onClick={() => setShowCart(false)}>
          <X size={24} />
        </button>
      </div>

      {cart.length === 0 ? (
        <p className="text-center text-gray-500 py-12">Your cart is empty.</p>
      ) : (
        <div className="space-y-4 flex-1 overflow-auto">
          {cart.map((item, idx) => (
            <div key={idx} className="flex justify-between items-center p-4 border rounded-xl">
              <div className="flex items-center gap-4">
                {item.image && (
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-16 h-16 md:w-20 md:h-20 object-cover rounded-lg"
                  />
                )}
                <div>
                  <p className="font-semibold">{item.name}</p>
                  <p>Size: {item.size}</p>
                  <p>Quantity: {item.quantity}</p>
                </div>
              </div>
              <div className="text-right">
                <p className="font-semibold">₹{Number(item.price.replace('₹',''))*item.quantity}</p>
                <button
                  className="text-red-500 text-sm mt-1 hover:text-red-600"
                  onClick={() => setCart(cart.filter((_, i) => i !== idx))}
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {cart.length > 0 && (
        <div className="mt-6 flex flex-col gap-4">
          <span className="text-xl font-bold">
            Total: ₹{cart.reduce((sum, item) => sum + Number(item.price.replace('₹',''))*item.quantity,0)}
          </span>

          {!showPayment ? (
            <button
              onClick={() => setShowPayment(true)}
              className="bg-primary text-white py-2 px-6 rounded-xl font-semibold hover:bg-primary/90 transition"
            >
              Checkout
            </button>
          ) : (
            <PaymentSection
              cart={cart}
              setCart={setCart}
              total={cart.reduce((sum, item) => sum + Number(item.price.replace('₹',''))*item.quantity,0)}
            />
          )}
        </div>
      )}
    </div>
  </div>
)}

    </section>
  );
};

export default CustomizedTees;
