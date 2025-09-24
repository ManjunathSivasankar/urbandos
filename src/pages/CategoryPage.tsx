import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import tshirtBlack from "@/assets/oversized/black.png";
import tshirtwhite from "@/assets/oversized/white.png";
import tshirtaqua from "@/assets/oversized/Aqua.png";
import tshirtmaroon from "@/assets/oversized/Dark Maroon.png";
import tshirtred from "@/assets/oversized/red.png";
import sweatblack from "@/assets/sweatshirts/black.png";
import sweatwhite from "@/assets/sweatshirts/white.png";
import sweatliteblue from "@/assets/sweatshirts/liteblue.png";
import sweatbottelgreen from "@/assets/sweatshirts/Bottle Green.png";
import dropwhite from "@/assets/dropshoulder/white.png";
import dropblack from "@/assets/dropshoulder/black.png";
import dropbeige from "@/assets/dropshoulder/Beige.png";

const categoryData = {
  "oversized-tshirts": {
    name: "Oversized T-Shirts",
    description: "Unisex !! 220Gsm Premium Cotton Oversized Tees",
    products: [
      { id: 1, color: "Black", image: tshirtBlack, price: "₹349", stock: { M: 5, L: 2, XL: 0 } },
      { id: 2, color: "White", image: tshirtwhite, price: "₹349", stock: { M: 3, L: 4, XL: 1 } },
      { id: 3, color: "Aqua", image: tshirtaqua, price: "₹349", stock: { M: 2, L: 3, XL: 2 } },
      { id: 4, color: "Dark Maroon", image: tshirtmaroon, price: "₹349", stock: { M: 1, L: 2, XL: 1 } },
      { id: 5, color: "Red", image: tshirtred, price: "₹349", stock: { M: 4, L: 0, XL: 3 } },
    ],
  },
  sweatshirts: {
    name: "Sweatshirts",
    description: "Cotton Sweatshirt-Unisex!! 240Gsm French Terry",
    products: [
      { id: 1, color: "Black", image: sweatblack, price: "₹459", stock: { M: 3, L: 2, XL: 1 } },
      { id: 2, color: "White", image: sweatwhite, price: "₹459", stock: { M: 4, L: 3, XL: 2 } },
      { id: 3, color: "Lite Blue", image: sweatliteblue, price: "₹459", stock: { M: 2, L: 1, XL: 3 } },
      { id: 4, color: "Bottle Green", image: sweatbottelgreen, price: "₹459", stock: { M: 1, L: 2, XL: 2 } },
    ],
  },
  dropshoulder: {
    name: "Drop-Shoulder",
    description: "Cotton Drop-shoulder - Unisex !! 210Gsm (Single jersey Cotton)",
    products: [
      { id: 1, color: "Black", image: dropblack, price: "₹349", stock: { M: 2, L: 2, XL: 1 } },
      { id: 2, color: "White", image: dropwhite, price: "₹349", stock: { M: 1, L: 3, XL: 2 } },
      { id: 3, color: "Beige", image: dropbeige, price: "₹349", stock: { M: 0, L: 2, XL: 1 } },
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
  name: string;
}

const CategoryPage = ({
  cart,
  setCart,
  setShowCart,
}: {
  cart: CartItem[];
  setCart: React.Dispatch<React.SetStateAction<CartItem[]>>;
  setShowCart: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const { categoryId } = useParams();
  const [openProduct, setOpenProduct] = useState<number | null>(null);
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [quantity, setQuantity] = useState<number>(1);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const category = categoryData[categoryId as keyof typeof categoryData];
  if (!category) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Category not found</h1>
        </div>
      </div>
    );
  }

  const handleAddToCart = (product: any) => {
    if (!selectedSize) return alert("Please select a size first!");

    const existingIndex = cart.findIndex(
      (item) => item.id === product.id && item.size === selectedSize
    );

    if (existingIndex !== -1) {
      const updatedCart = [...cart];
      updatedCart[existingIndex].quantity += quantity;
      setCart(updatedCart);
    } else {
      setCart([
        ...cart,
        {
          id: product.id,
          name: category.name, // ✅ now includes product category name
          color: product.color,
          image: product.image,
          price: product.price,
          size: selectedSize,
          quantity: quantity,
        },
      ]);
    }

    setOpenProduct(null);
    setSelectedSize(null);
    setQuantity(1);

    // ✅ Auto-open cart popup
    setShowCart(true);
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-6 py-8">
        <div className="text-center mb-12 fade-in">
          <h1 className="text-4xl md:text-5xl font-thin tracking-widest text-foreground mb-4">
            {category.name.toUpperCase()}
          </h1>
          <p className="text-lg text-muted-foreground font-light tracking-wide">
            {category.description}
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {category.products.map((product, index) => (
            <div
              key={product.id}
              className="product-card group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="aspect-square overflow-hidden bg-secondary">
                <img
                  src={product.image}
                  alt={`${category.name} in ${product.color}`}
                  className="product-image"
                />
              </div>
              <div className="p-4">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-lg font-medium tracking-wide text-foreground">
                    {product.color}
                  </h3>
                  <span className="text-lg font-medium text-foreground">{product.price}</span>
                </div>

                {/* Open product → size + qty + add to cart */}
                {openProduct === product.id ? (
                  <div className="space-y-4">
                    <p className="text-sm text-muted-foreground">Select Size:</p>
                    <div className="flex flex-wrap gap-2">
                      {Object.entries(product.stock).map(([size, qty]) => (
                        <button
                          key={size}
                          disabled={qty === 0}
                          onClick={() => setSelectedSize(size)}
                          className={`py-2 px-4 rounded-full text-sm font-semibold transition-all border ${
                            selectedSize === size
                              ? "bg-primary text-white border-primary"
                              : qty === 0
                              ? "bg-gray-200 text-gray-400 border-gray-200 cursor-not-allowed"
                              : "bg-white text-foreground border-gray-300 hover:bg-primary hover:text-white"
                          }`}
                        >
                          {size} ({qty})
                        </button>
                      ))}
                    </div>

                    <div className="flex items-center gap-4">
                      <span className="text-sm text-muted-foreground">Quantity:</span>
                      <div className="flex items-center border rounded-lg">
                        <button
                          onClick={() => setQuantity(Math.max(1, quantity - 1))}
                          className="px-3 py-1 bg-gray-200 hover:bg-gray-300"
                        >
                          -
                        </button>
                        <span className="px-4">{quantity}</span>
                        <button
                          onClick={() => setQuantity(quantity + 1)}
                          className="px-3 py-1 bg-gray-200 hover:bg-gray-300"
                        >
                          +
                        </button>
                      </div>
                    </div>

                    <button
                      onClick={() => handleAddToCart(product)}
                      className="w-full py-2 px-4 rounded-md bg-green-500 text-white font-semibold hover:bg-green-600 transition"
                    >
                      Add to Cart
                    </button>

                    <button
                      onClick={() => {
                        setOpenProduct(null);
                        setSelectedSize(null);
                        setQuantity(1);
                      }}
                      className="w-full py-2 px-4 rounded-md border border-gray-300 text-gray-600 hover:bg-gray-100 transition"
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
    </div>
  );
};

export default CategoryPage;
