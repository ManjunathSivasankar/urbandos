import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import tshirtBlack from "@/assets/oversized/black.png";

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

import black from "@/assets/hoodies/black.jpg";
import black1 from "@/assets/hoodies/black1.jpg";
import black2 from "@/assets/hoodies/black2.jpg";
import black3 from "@/assets/hoodies/black3.jpg";

import white from "@/assets/hoodies/white.jpg";
import white1 from "@/assets/hoodies/white1.jpg";
import white2 from "@/assets/hoodies/white2.jpg";
import white3 from "@/assets/hoodies/white3.jpg";

import cream from "@/assets/hoodies/cream.jpg";
import cream1 from "@/assets/hoodies/cream1.jpg";
import cream2 from "@/assets/hoodies/cream2.jpg";
import cream3 from "@/assets/hoodies/cream3.jpg";

import purple from "@/assets/hoodies/purple.jpg";
import purple1 from "@/assets/hoodies/purple1.jpg";
import purple2 from "@/assets/hoodies/purple2.jpg";
import purple3 from "@/assets/hoodies/purple3.jpg";


// ✅ Category & Products Data
const categoryData = {
  "oversized-tshirts": {
    name: "Oversized T-Shirts",
    description: "Unisex !! 220Gsm Premium Cotton Oversized Tees",
    products: [
      {
        id: 1,
        color: "Black",
        images: [tshirtBlack],
        stock: {
          S: { qty: 5, price: "₹349" },
          M: { qty: 5, price: "₹349" },
          L: { qty: 2, price: "₹349" },
          XL: { qty: 0, price: "₹399" },
          XXL: { qty: 3, price: "₹399" },
        },
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
        stock: {
          S: { qty: 3, price: "₹459" },
          M: { qty: 3, price: "₹459" },
          L: { qty: 2, price: "₹459" },
          XL: { qty: 1, price: "₹499" },
          XXL: { qty: 1, price: "₹499" },
        },
      },
      {
        id: 2,
        color: "White",
        images: [sweatwhite],
        stock: {
          S: { qty: 4, price: "₹459" },
          M: { qty: 3, price: "₹459" },
          L: { qty: 3, price: "₹459" },
          XL: { qty: 2, price: "₹499" },
          XXL: { qty: 1, price: "₹499" },
        },
      },
      {
        id: 3,
        color: "Lite Blue",
        images: [sweatliteblue],
        stock: {
          S: { qty: 2, price: "₹459" },
          M: { qty: 2, price: "₹459" },
          L: { qty: 2, price: "₹459" },
          XL: { qty: 1, price: "₹499" },
          XXL: { qty: 1, price: "₹499" },
        },
      },
      {
        id: 4,
        color: "Bottle Green",
        images: [sweatbottelgreen],
        stock: {
          S: { qty: 1, price: "₹459" },
          M: { qty: 2, price: "₹459" },
          L: { qty: 2, price: "₹459" },
          XL: { qty: 1, price: "₹499" },
          XXL: { qty: 1, price: "₹499" },
        },
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
        stock: {
          S: { qty: 2, price: "₹349" },
          M: { qty: 2, price: "₹349" },
          L: { qty: 2, price: "₹349" },
          XL: { qty: 1, price: "₹399" },
          XXL: { qty: 1, price: "₹399" },
        },
      },
      {
        id: 2,
        color: "White",
        images: [dropwhite],
        stock: {
          S: { qty: 1, price: "₹349" },
          M: { qty: 3, price: "₹349" },
          L: { qty: 3, price: "₹349" },
          XL: { qty: 2, price: "₹399" },
          XXL: { qty: 1, price: "₹399" },
        },
      },
      {
        id: 3,
        color: "Beige",
        images: [dropbeige],
        stock: {
          S: { qty: 0, price: "₹349" },
          M: { qty: 2, price: "₹349" },
          L: { qty: 2, price: "₹349" },
          XL: { qty: 1, price: "₹399" },
          XXL: { qty: 1, price: "₹399" },
        },
      },
    ],
  },

"regular-tshirts": {
  name: "Regular Shirts",
  description: "180 Gsm Regular Half Sleeve (Single Jersey Cotton)",
  products: [
    {
      id: 1,
      color: "Black",
      images: [regularBlack, regularBlack1, regularBlack2],
      stock: {
        S: { qty: 3, price: "₹279" },
        M: { qty: 3, price: "₹279" },
        L: { qty: 2, price: "₹279" },
        XL: { qty: 1, price: "₹299" },
        XXL: { qty: 1, price: "₹299" },
      },
    },
    {
      id: 2,
      color: "White",
      images: [regularWhite, regularWhite1, regularWhite2],
      stock: {
        S: { qty: 4, price: "₹279" },
        M: { qty: 3, price: "₹279" },
        L: { qty: 2, price: "₹279" },
        XL: { qty: 2, price: "₹299" },
        XXL: { qty: 1, price: "₹299" },
      },
    },
    {
      id: 3,
      color: "Blue",
      images: [regularBlue, regularBlue1, regularBlue2],
      stock: {
        S: { qty: 2, price: "₹279" },
        M: { qty: 2, price: "₹279" },
        L: { qty: 3, price: "₹279" },
        XL: { qty: 1, price: "₹299" },
        XXL: { qty: 1, price: "₹299" },
      },
    },
    {
      id: 4,
      color: "Beige",
      images: [regularYellow, regularYellow1, regularYellow2],
      stock: {
        S: { qty: 2, price: "₹279" },
        M: { qty: 2, price: "₹279" },
        L: { qty: 3, price: "₹279" },
        XL: { qty: 1, price: "₹299" },
        XXL: { qty: 1, price: "₹299" },
      },
    },
    {
      id: 5,
      color: "Rust",
      images: [regularRed, regularRed1, regularRed2],
      stock: {
        S: { qty: 2, price: "₹279" },
        M: { qty: 2, price: "₹279" },
        L: { qty: 3, price: "₹279" },
        XL: { qty: 1, price: "₹299" },
        XXL: { qty: 1, price: "₹299" },
      },
    },
    {
      id: 6,
      color: "Olive",
      images: [regularDarkGray, regularDarkGray1, regularDarkGray2],
      stock: {
        S: { qty: 2, price: "₹279" },
        M: { qty: 2, price: "₹279" },
        L: { qty: 3, price: "₹279" },
        XL: { qty: 1, price: "₹299" },
        XXL: { qty: 1, price: "₹299" },
      },
    },
    {
      id: 7,
      color: "Ash",
      images: [regularGray, regularGray1, regularGray2],
      stock: {
        S: { qty: 2, price: "₹279" },
        M: { qty: 2, price: "₹279" },
        L: { qty: 3, price: "₹279" },
        XL: { qty: 1, price: "₹299" },
        XXL: { qty: 1, price: "₹299" },
      },
    },
  ],
 },

 hoodies: {
  name: "Hoodies",
  description: "Hoodies Description",
  products: [
    {
      id: 1,
      color: "Black",
      images: [black, black1, black2, black3],
      stock: {
        S: { qty: 3, price: "₹559" },
        M: { qty: 3, price: "₹559" },
        L: { qty: 2, price: "₹559" },
        XL: { qty: 1, price: "₹569" },
        XXL: { qty: 1, price: "₹569" },
      },
    },
    {
      id: 2,
      color: "White",
      images: [white, white1, white2, white3],
      stock: {
        S: { qty: 4, price: "₹559" },
        M: { qty: 3, price: "₹559" },
        L: { qty: 2, price: "₹559" },
        XL: { qty: 1, price: "₹569" },
        XXL: { qty: 1, price: "₹569" },
      },
    },
    {
      id: 3,
      color: "Beige",
      images: [cream, cream1, cream2, cream3],
      stock: {
        S: { qty: 2, price: "₹559" },
        M: { qty: 2, price: "₹559" },
        L: { qty: 3, price: "₹559" },
        XL: { qty: 1, price: "₹569" },
        XXL: { qty: 1, price: "₹569" },
      },
    },
    {
      id: 4,
      color: "Lavender",
      images: [purple, purple1, purple2, purple3],
      stock: {
        S: { qty: 2, price: "₹559" },
        M: { qty: 2, price: "₹559" },
        L: { qty: 3, price: "₹559" },
        XL: { qty: 1, price: "₹569" },
        XXL: { qty: 1, price: "₹569" },
      },
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
  const [openGallery, setOpenGallery] = useState<{ productId: number; index: number } | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const category = categoryData[categoryId as keyof typeof categoryData];
  if (!category) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h1 className="text-2xl font-bold">Category not found</h1>
      </div>
    );
  }

  const handleAddToCart = (product: any) => {
    if (!selectedSize) return alert("Please select a size first!");
    const selectedStock = product.stock[selectedSize];

    if (!selectedStock || selectedStock.qty === 0) {
      return alert("This size is out of stock!");
    }

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
          price: selectedStock.price,
          size: selectedSize,
          quantity,
        },
      ]);
    }

    setOpenProduct(null);
    setSelectedSize(null);
    setQuantity(1);
    setShowCart(true);
  };

  return (
    <div className="min-h-screen bg-background pt-20">
      <div className="container mx-auto px-4 sm:px-6 py-6 sm:py-8">
        <div className="text-center mb-8 sm:mb-12">
          <h1 className="text-2xl sm:text-4xl md:text-5xl font-thin tracking-widest text-foreground mb-2 sm:mb-4">
            {category.name.toUpperCase()}
          </h1>
          <p className="text-sm sm:text-lg text-muted-foreground">{category.description}</p>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 items-start">
          {category.products.map((product) => (
            <div
              key={product.id}
              className={`flex flex-col bg-white rounded-xl shadow-sm hover:shadow-md transition ${
                openProduct === product.id ? "h-auto" : "h-fit"
              }`}
            >
              {/* Image */}
              <div
                className="aspect-square overflow-hidden bg-secondary cursor-pointer relative"
                onClick={() => setOpenGallery({ productId: product.id, index: 0 })}
              >
                <img
                  src={product.images[0]}
                  alt={product.color}
                  className="w-full h-full object-cover"
                />
                {product.images.length > 1 && (
                  <span className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
                    +{product.images.length - 1}
                  </span>
                )}
              </div>

              {/* Details */}
              <div className="flex flex-col justify-between flex-1 p-3 sm:p-4">
                <div className="flex justify-between items-center mb-2 sm:mb-4">
                  <h3 className="text-base sm:text-lg font-medium truncate">{product.color}</h3>
                  <span className="text-sm sm:text-lg font-semibold text-foreground">
                    From{" "}
                    {Object.values(product.stock).reduce((min, s) =>
                      Number(s.price.replace("₹", "")) < Number(min.price.replace("₹", ""))
                        ? s
                        : min
                    ).price}
                  </span>
                </div>

                {openProduct === product.id ? (
                  <div className="space-y-3 sm:space-y-4">
                    {/* Sizes */}
                    <p className="text-xs sm:text-sm text-muted-foreground">Select Size:</p>
                    <div className="flex flex-wrap gap-2">
                      {Object.entries(product.stock).map(([size, data]) => (
                        <button
                          key={size}
                          disabled={data.qty === 0}
                          onClick={() => setSelectedSize(size)}
                          className={`py-1.5 px-3 rounded-full text-xs sm:text-sm font-medium border ${
                            selectedSize === size
                              ? "bg-primary text-white border-primary"
                              : data.qty === 0
                              ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                              : "bg-white text-foreground border-gray-300 hover:bg-primary hover:text-white"
                          }`}
                        >
                          {size} ({data.qty}) – {data.price}
                        </button>
                      ))}
                    </div>

                    {/* Quantity */}
                    <div className="flex items-center gap-3">
                      <span className="text-xs sm:text-sm text-muted-foreground">Qty:</span>
                      <div className="flex items-center border rounded-lg">
                        <button
                          onClick={() => setQuantity(Math.max(1, quantity - 1))}
                          className="px-2 sm:px-3 py-1 bg-gray-200 hover:bg-gray-300"
                        >
                          -
                        </button>
                        <span className="px-3 sm:px-4">{quantity}</span>
                        <button
                          onClick={() => setQuantity(quantity + 1)}
                          className="px-2 sm:px-3 py-1 bg-gray-200 hover:bg-gray-300"
                        >
                          +
                        </button>
                      </div>
                    </div>

                    {/* Actions */}
                    <button
                      onClick={() => handleAddToCart(product)}
                      className="w-full py-2 rounded-md bg-green-500 text-white text-sm sm:text-base font-semibold hover:bg-green-600 transition"
                    >
                      Add to Cart
                    </button>
                    <button
                      onClick={() => {
                        setOpenProduct(null);
                        setSelectedSize(null);
                        setQuantity(1);
                      }}
                      className="w-full py-2 rounded-md border border-gray-300 text-gray-600 text-sm sm:text-base hover:bg-gray-100 transition"
                    >
                      Cancel
                    </button>
                  </div>
                ) : (
                  <button
                    onClick={() => setOpenProduct(product.id)}
                    className="w-full py-2 rounded-md bg-primary text-white text-sm sm:text-base font-semibold hover:bg-primary/90 transition"
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
      {openGallery && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 px-4"
          onClick={() => setOpenGallery(null)}
        >
          <button
            onClick={() => setOpenGallery(null)}
            className="absolute top-4 right-4 text-white text-3xl"
          >
            ✕
          </button>
          <div
            className="relative w-full max-w-md sm:max-w-lg md:max-w-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={
                category.products.find((p) => p.id === openGallery.productId)?.images[
                  openGallery.index
                ]
              }
              alt="Product"
              className="w-full max-h-[80vh] object-contain rounded-lg"
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
                          (category.products.find((p) => p.id === prev.productId)?.images.length ||
                            0),
                      }
                    : prev
                )
              }
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-white text-black px-2 sm:px-3 py-1 rounded"
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
                          (category.products.find((p) => p.id === prev.productId)?.images.length ||
                            0),
                      }
                    : prev
                )
              }
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-white text-black px-2 sm:px-3 py-1 rounded"
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
