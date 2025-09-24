import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, X } from 'lucide-react';

import tshirtBlack from '@/assets/oversized/black.png';
import tshirtwhite from '@/assets/oversized/white.png';
import tshirtaqua from '@/assets/oversized/Aqua.png';
import tshirtmaroon from '@/assets/oversized/Dark Maroon.png';
import tshirtred from '@/assets/oversized/red.png';
import sweatblack from '@/assets/sweatshirts/black.png';
import sweatwhite from '@/assets/sweatshirts/white.png';
import sweatliteblue from '@/assets/sweatshirts/liteblue.png';
import sweatbottelgreen from '@/assets/sweatshirts/Bottle Green.png';
import dropwhite from '@/assets/dropshoulder/white.png';
import dropblack from '@/assets/dropshoulder/black.png';
import dropbeige from '@/assets/dropshoulder/Beige.png';
import sizeImg from '@/assets/size.jpeg';

const categoryData = {
  'oversized-tshirts': {
    name: 'Oversized T-Shirts',
    description: 'Unisex !! 220Gsm Premium Cotton Oversized Tees',
    products: [
      { id: 1, color: 'Black', image: tshirtBlack, price: '₹349', stock: { M: 5, L: 2, XL: 0 } },
      { id: 2, color: 'White', image: tshirtwhite, price: '₹349', stock: { M: 3, L: 4, XL: 1 } },
      { id: 3, color: 'Aqua', image: tshirtaqua, price: '₹349', stock: { M: 2, L: 3, XL: 2 } },
      { id: 4, color: 'Dark Maroon', image: tshirtmaroon, price: '₹349', stock: { M: 1, L: 2, XL: 1 } },
      { id: 5, color: 'Red', image: tshirtred, price: '₹349', stock: { M: 4, L: 0, XL: 3 } },
    ],
  },
  sweatshirts: {
    name: 'Sweatshirts',
    description: 'Cotton Sweatshirt-Unisex!! 240Gsm French Terry',
    products: [
      { id: 1, color: 'Black', image: sweatblack, price: '₹459', stock: { M: 3, L: 2, XL: 1 } },
      { id: 2, color: 'White', image: sweatwhite, price: '₹459', stock: { M: 4, L: 3, XL: 2 } },
      { id: 3, color: 'Lite Blue', image: sweatliteblue, price: '₹459', stock: { M: 2, L: 1, XL: 3 } },
      { id: 4, color: 'Bottle Green', image: sweatbottelgreen, price: '₹459', stock: { M: 1, L: 2, XL: 2 } },
    ],
  },
  dropshoulder: {
    name: 'Drop-Shoulder',
    description: 'Cotton Drop-shoulder - Unisex !! 210Gsm (Single jersey Cotton)',
    products: [
      { id: 1, color: 'Black', image: dropblack, price: '₹349', stock: { M: 2, L: 2, XL: 1 } },
      { id: 2, color: 'White', image: dropwhite, price: '₹349', stock: { M: 1, L: 3, XL: 2 } },
      { id: 3, color: 'Beige', image: dropbeige, price: '₹349', stock: { M: 0, L: 2, XL: 1 } },
    ],
  },
};

interface CartItem {
  id: number;
  color: string;
  size: string;
  price: string;
  quantity: number;
  image: string;
}

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
          `${item.color} (${item.size}) x${item.quantity} - ₹${Number(item.price.replace("₹", "")) * item.quantity}`
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

const CategoryPage = ({ cart, setCart }: { cart: CartItem[]; setCart: React.Dispatch<React.SetStateAction<CartItem[]>> }) => {
  const { categoryId } = useParams();
  const navigate = useNavigate();
  const [previewImage, setPreviewImage] = useState<string | null>(null);
  const [openProduct, setOpenProduct] = useState<number | null>(null);
  const [showCart, setShowCart] = useState(false);
  const [showPayment, setShowPayment] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const category = categoryData[categoryId as keyof typeof categoryData];

  if (!category) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Category not found</h1>
          <button onClick={() => navigate('/')} className="hero-button">
            Back to Home
          </button>
        </div>
      </div>
    );
  }

  const handleSizeClick = (product: any, size: string) => {
    const existingIndex = cart.findIndex((item) => item.id === product.id && item.size === size);

    if (existingIndex !== -1) {
      const updatedCart = [...cart];
      updatedCart[existingIndex].quantity += 1;
      setCart(updatedCart);
    } else {
      setCart([
        ...cart,
        {
          id: product.id,
          color: product.color,
          image: product.image,
          price: product.price,
          size,
          quantity: 1,
        },
      ]);
    }

    setShowCart(true);
    setOpenProduct(null);
  };

  return (
    <div className="min-h-screen bg-background pt-0">
      <div className="container mx-auto px-6 py-8">
        <button
          onClick={() => navigate('/')}
          className="flex items-center text-foreground hover:text-grey transition-colors duration-200 mb-8"
        >
          <ArrowLeft size={20} className="mr-2" />
          Back to Collection
        </button>

        <div className="text-center mb-12 fade-in">
          <h1 className="text-4xl md:text-5xl font-thin tracking-widest text-foreground mb-4">
            {category.name.toUpperCase()}
          </h1>
          <p className="text-lg text-muted-foreground font-light tracking-wide">{category.description}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {category.products.map((product, index) => (
            <div key={product.id} className="product-card group" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="aspect-square overflow-hidden bg-secondary">
                <img src={product.image} alt={`${category.name} in ${product.color}`} className="product-image" />
              </div>

              <div className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-xl font-medium tracking-wide text-foreground">{product.color}</h3>
                  <span className="text-xl font-medium text-foreground">{product.price}</span>
                </div>

                {openProduct === product.id ? (
                  <div className="mb-4">
                    <p className="text-sm text-muted-foreground mb-3 font-light tracking-wide">
                      Select Size to Add to Cart:
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {Object.entries(product.stock).map(([size, qty]) => (
                        <button
                          key={size}
                          disabled={qty === 0}
                          onClick={() => handleSizeClick(product, size)}
                          className={`py-2 px-4 rounded-full text-sm font-semibold transition-all duration-200 shadow-sm border ${
                            qty === 0
                              ? 'bg-gray-200 text-gray-400 border-gray-200 cursor-not-allowed'
                              : 'bg-white text-foreground border-gray-300 hover:bg-primary hover:text-white'
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
                    onClick={() => setOpenProduct(product.id)}
                    className="w-full py-2 px-4 rounded-md bg-primary text-white font-semibold hover:bg-primary/90 transition"
                  >
                    Order Now
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
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
                <img
                  src={item.image}
                  alt={item.color}
                  className="w-16 h-16 md:w-20 md:h-20 object-cover rounded-lg"
                />
                <div>
                  <p className="font-semibold">{item.color}</p>
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


      {previewImage && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
          onClick={() => setPreviewImage(null)}
        >
          <div className="relative max-w-4xl w-full px-4 flex justify-center">
            <div className="relative inline-block">
              <img
                src={sizeImg}
                alt="Preview"
                className="max-h-[80vh] max-w-full mx-auto rounded-lg shadow-lg object-contain"
              />
              <button
                className="absolute top-2 right-2 bg-black/70 text-white p-2 rounded-full hover:bg-black/90 transition"
                onClick={(e) => {
                  e.stopPropagation();
                  setPreviewImage(null);
                }}
              >
                <X size={20} />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CategoryPage;
