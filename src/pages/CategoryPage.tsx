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

import regularBlack from "@/assets/regular/black.jpg";
import regularBlack1 from "@/assets/regular/black1.jpg";
import regularBlack2 from "@/assets/regular/black2.jpg";

import regularWhite from "@/assets/regular/white.jpg";
import regularWhite1 from "@/assets/regular/white1.jpg";
import regularWhite2 from "@/assets/regular/white2.jpg";

import regularBlue from "@/assets/regular/blue.jpg";
import regularBlue1 from "@/assets/regular/blue1.jpg";
import regularBlue2 from "@/assets/regular/blue2.jpg";

import regularYellow from "@/assets/regular/yellow.jpg";
import regularYellow1 from "@/assets/regular/yellow1.jpg";
import regularYellow2 from "@/assets/regular/yellow2.jpg";


import regularRed from "@/assets/regular/red.jpg";
import regularRed1 from "@/assets/regular/red1.jpg";
import regularRed2 from "@/assets/regular/red2.jpg";

import regularDarkGray from "@/assets/regular/darkgray.jpg";
import regularDarkGray1 from "@/assets/regular/darkgray1.jpg";
import regularDarkGray2 from "@/assets/regular/darkgray2.jpg";

import regularGray from "@/assets/regular/gray.jpg";
import regularGray1 from "@/assets/regular/gray1.jpg";
import regularGray2 from "@/assets/regular/gray2.jpg";



const categoryData = {
  "oversized-tshirts": {
    name: "Oversized T-Shirts",
    description: "Unisex !! 220Gsm Premium Cotton Oversized Tees",
    products: [
      {
        id: 1,
        color: "Black",
        images: [tshirtBlack],
        price: "₹349",
        stock: { M: 5, L: 2, XL: 0 },
      },
      {
        id: 2,
        color: "White",
        images: [tshirtwhite],
        price: "₹349",
        stock: { M: 3, L: 4, XL: 1 },
      },
      {
        id: 3,
        color: "Aqua",
        images: [tshirtaqua],
        price: "₹349",
        stock: { M: 2, L: 3, XL: 2 },
      },
      {
        id: 4,
        color: "Dark Maroon",
        images: [tshirtmaroon],
        price: "₹349",
        stock: { M: 1, L: 2, XL: 1 },
      },
      {
        id: 5,
        color: "Red",
        images: [tshirtred],
        price: "₹349",
        stock: { M: 4, L: 0, XL: 3 },
      },
    ],
  },
  sweatshirts: {
    name: "Sweatshirts",
    description: "Cotton Sweatshirt-Unisex!! 240Gsm French Terry",
    products: [
      {
        id: 1,
        color: "Black",
        images: [sweatblack],
        price: "₹459",
        stock: { M: 3, L: 2, XL: 1 },
      },
      {
        id: 2,
        color: "White",
        images: [sweatwhite],
        price: "₹459",
        stock: { M: 4, L: 3, XL: 2 },
      },
      {
        id: 3,
        color: "Lite Blue",
        images: [sweatliteblue],
        price: "₹459",
        stock: { M: 2, L: 1, XL: 3 },
      },
      {
        id: 4,
        color: "Bottle Green",
        images: [sweatbottelgreen],
        price: "₹459",
        stock: { M: 1, L: 2, XL: 2 },
      },
    ],
  },
  dropshoulder: {
    name: "Drop-Shoulder",
    description: "Cotton Drop-shoulder - Unisex !! 210Gsm (Single jersey Cotton)",
    products: [
      {
        id: 1,
        color: "Black",
        images: [dropblack],
        price: "₹349",
        stock: { M: 2, L: 2, XL: 1 },
      },
      {
        id: 2,
        color: "White",
        images: [dropwhite],
        price: "₹349",
        stock: { M: 1, L: 3, XL: 2 },
      },
      {
        id: 3,
        color: "Beige",
        images: [dropbeige],
        price: "₹349",
        stock: { M: 0, L: 2, XL: 1 },
      },
    ],
  },
  "regular-tshirts": {
    name: "Regular Shirts",
    description: "Premium Cotton Regular Fit Shirts - Unisex",
    products: [
      {
        id: 1,
        color: "Black",
        images: [regularBlack, regularBlack1, regularBlack2], // 👈 multiple images
        price: "₹399",
        stock: { M: 3, L: 2, XL: 1 },
      },
      {
        id: 2,
        color: "White",
        images: [regularWhite, regularWhite1, regularWhite2],
        price: "₹399",
        stock: { M: 4, L: 2, XL: 2 },
      },
      {
        id: 3,
        color: "Blue",
        images: [regularBlue, regularBlue1, regularBlue2],
        price: "₹399",
        stock: { M: 2, L: 3, XL: 1 },
      },
      {
        id: 4,
        color: "Yellow",
        images: [regularYellow, regularYellow1, regularYellow2],
        price: "₹399",
        stock: { M: 2, L: 3, XL: 1 },
      },
            {
        id: 5,
        color: "Red",
        images: [regularRed, regularRed1, regularRed2],
        price: "₹399",
        stock: { M: 2, L: 3, XL: 1 },
      },
            {
        id: 6,
        color: "Dark Gray",
        images: [regularDarkGray, regularDarkGray1, regularDarkGray2],
        price: "₹399",
        stock: { M: 2, L: 3, XL: 1 },
      },
            {
        id: 7,
        color: "Gray",
        images: [regularGray, regularGray1, regularGray2],
        price: "₹399",
        stock: { M: 2, L: 3, XL: 1 },
      },
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

  // gallery state
  const [openGallery, setOpenGallery] = useState<{ productId: number; index: number } | null>(null);

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
          name: category.name,
          color: product.color,
          image: product.images[0],
          price: product.price,
          size: selectedSize,
          quantity: quantity,
        },
      ]);
    }

    setOpenProduct(null);
    setSelectedSize(null);
    setQuantity(1);
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
<div
  className="aspect-square overflow-hidden bg-secondary cursor-pointer relative"
  onClick={() => setOpenGallery({ productId: product.id, index: 0 })}
>
  <img
    src={product.images[0]}
    alt={`${category.name} in ${product.color}`}
    className="product-image"
  />

  {/* +N badge */}
  {product.images.length > 1 && (
    <span className="absolute bottom-2 right-2 bg-black bg-opacity-70 text-white text-xs px-2 py-1 rounded">
      +{product.images.length - 1}
    </span>
  )}
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

      {/* Gallery Modal */}
{/* Gallery Modal */}
{openGallery && (
  <div
    className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
    onClick={() => setOpenGallery(null)}   // 👈 background click closes modal
  >
    <button
      onClick={() => setOpenGallery(null)}
      className="absolute top-6 right-6 text-white text-3xl"
    >
      ✕
    </button>

    <div
      className="relative w-full max-w-2xl"
      onClick={(e) => e.stopPropagation()} // 👈 prevent closing when clicking image
    >
      <img
        src={
          category.products.find((p) => p.id === openGallery.productId)?.images[
            openGallery.index
          ]
        }
        alt="Product"
        className="w-full rounded-lg"
      />

      {/* Prev */}
      <button
        onClick={() =>
          setOpenGallery((prev) =>
            prev
              ? {
                  ...prev,
                  index:
                    (prev.index - 1 +
                      (category.products.find((p) => p.id === prev.productId)?.images
                        .length || 0)) %
                    (category.products.find((p) => p.id === prev.productId)?.images.length || 0),
                }
              : prev
          )
        }
        className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white text-black px-3 py-1 rounded"
      >
        ‹
      </button>

      {/* Next */}
      <button
        onClick={() =>
          setOpenGallery((prev) =>
            prev
              ? {
                  ...prev,
                  index:
                    (prev.index + 1) %
                    (category.products.find((p) => p.id === prev.productId)?.images.length || 0),
                }
              : prev
          )
        }
        className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white text-black px-3 py-1 rounded"
      >
        ›
      </button>
    </div>
  </div>
)}

    </div>
  );
};

export default CategoryPage;
