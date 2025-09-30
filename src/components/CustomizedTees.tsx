import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

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
  images: string[]; // multiple images
  price: string;
  stock: { [key: string]: number };
  instagramUrl?: string;
}

interface CustomizedTeesProps {
  cart: CartItem[];
  setCart: React.Dispatch<React.SetStateAction<CartItem[]>>;
}

// ✅ Tees data
const customizedTees: Tee[] = [
  {
    id: 1,
    name: "Custom Design 1",
    images: [
      "https://i.postimg.cc/cLBGDZWQ/Whats-App-Image-2025-08-08-at-17-54-56.jpg",
      "https://i.postimg.cc/cLBGDZWQ/Whats-App-Image-2025-08-08-at-17-54-56.jpg",
      "https://i.postimg.cc/cLBGDZWQ/Whats-App-Image-2025-08-08-at-17-54-56.jpg",
    ],
    price: "₹649",
    stock: { S: 3, M: 2, L: 1, XL: 2, XXL: 1 },
  },
  {
    id: 2,
    name: "Custom Design 2",
    images: [
      "https://i.postimg.cc/cLBGDZWQ/Whats-App-Image-2025-08-08-at-17-54-56.jpg",
      "https://i.postimg.cc/cLBGDZWQ/Whats-App-Image-2025-08-08-at-17-54-56.jpg",
      "https://i.postimg.cc/cLBGDZWQ/Whats-App-Image-2025-08-08-at-17-54-56.jpg",
    ],
    price: "₹699",
    stock: { S: 3, M: 2, L: 1, XL: 3, XXL: 2 },
  },
  {
    id: 3,
    name: "Custom Design 3",
    images: [
      "https://i.postimg.cc/pTQzKg5b/image.png",
      "https://i.postimg.cc/pTQzKg5b/image.png",
      "https://i.postimg.cc/pTQzKg5b/image.png",
    ],
    price: "₹599",
    stock: { S: 2, M: 2, L: 2, XL: 2, XXL: 2 },
  },
  {
    id: 4,
    name: "Custom Design 4",
    images: [
      "https://i.postimg.cc/Jh5zxmxq/image.png",
      "https://i.postimg.cc/Jh5zxmxq/image.png",
      "https://i.postimg.cc/Jh5zxmxq/image.png",
    ],
    price: "₹749",
    stock: { S: 2, M: 2, L: 2, XL: 1, XXL: 2 },
  },
  {
    id: 5,
    name: "Custom Design 5",
    images: [
      "https://i.postimg.cc/63VbTb9T/image.png",
      "https://i.postimg.cc/63VbTb9T/image.png",
      "https://i.postimg.cc/63VbTb9T/image.png",
    ],
    instagramUrl: "https://www.instagram.com/p/DOOhkCyjF3-/?img_index=1",
    price: "₹799",
    stock: { S: 2, M: 2, L: 2, XL: 2, XXL: 2 },
  },
  {
    id: 6,
    name: "Custom Design 6",
    images: [
      "https://i.postimg.cc/gkb3kyjL/image.png",
      "https://i.postimg.cc/gkb3kyjL/image.png",
      "https://i.postimg.cc/gkb3kyjL/image.png",
    ],
    instagramUrl: "https://www.instagram.com/p/DOf9MGiEXa_/?img_index=1",
    price: "₹699",
    stock: { S: 2, M: 2, L: 2, XL: 2, XXL: 2 },
  },
  {
    id: 7,
    name: "Custom Design 7",
    images: [
      "https://i.postimg.cc/qMmBZ0PB/image.png",
      "https://i.postimg.cc/qMmBZ0PB/image.png",
      "https://i.postimg.cc/qMmBZ0PB/image.png",
    ],
    instagramUrl: "https://www.instagram.com/p/DOtJVzuj0HG/?img_index=1",
    price: "₹849",
    stock: { S: 2, M: 2, L: 2, XL: 2, XXL: 2 },
  },
  {
    id: 8,
    name: "Custom Design 8",
    images: [
      "https://i.postimg.cc/fLKkzdrm/image.png",
      "https://i.postimg.cc/fLKkzdrm/image.png",
      "https://i.postimg.cc/fLKkzdrm/image.png",
    ],
    instagramUrl: "https://www.instagram.com/p/YOUR_POST_ID_4",
    price: "₹799",
    stock: { S: 2, M: 2, L: 2, XL: 2, XXL: 2 },
  },
];

const CustomizedTees = ({ cart, setCart }: CustomizedTeesProps) => {
  const [openProduct, setOpenProduct] = useState<number | null>(null);
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [showAll, setShowAll] = useState(false);
  const [gallery, setGallery] = useState<{ images: string[]; index: number } | null>(null);

  const navigate = useNavigate();

  const handleSizeClick = (tee: Tee) => {
    if (!selectedSize) {
      alert("Please select a size!");
      return;
    }

    let addedItem: CartItem = {
      id: tee.id,
      name: tee.name,
      size: selectedSize,
      price: tee.price,
      quantity: 1,
      image: tee.images[0],
    };

    setCart((prev) => {
      const index = prev.findIndex((item) => item.id === tee.id && item.size === selectedSize);
      if (index !== -1) {
        const updated = [...prev];
        updated[index].quantity += 1;
        return updated;
      } else {
        return [...prev, addedItem];
      }
    });

    setOpenProduct(null);
    setSelectedSize(null);
  };

  const visibleTees = showAll ? customizedTees : customizedTees.slice(0, 4);

  return (
    <section className="py-16 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">🎨 Customized Tees</h2>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-8">
          {visibleTees.map((tee) => (
            <div
              key={tee.id}
              className="group bg-card border border-border rounded-none hover:shadow-md transition-all duration-300"
            >
              {/* Image (click → gallery modal) */}
              <div
                className="aspect-square overflow-hidden bg-secondary cursor-pointer relative"
                onClick={() => setGallery({ images: tee.images, index: 0 })}
              >
                <img
                  src={tee.images[0]}
                  alt={tee.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {tee.images.length > 1 && (
                  <span className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
                    +{tee.images.length - 1}
                  </span>
                )}
              </div>

              <div className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-lg font-medium text-foreground">{tee.name}</h3>
                  <span className="text-lg font-semibold text-foreground">{tee.price}</span>
                </div>

                {openProduct === tee.id ? (
                  <div className="mb-4 space-y-3">
                    <p className="text-sm text-muted-foreground">Select Size:</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {Object.keys(tee.stock).map((size) => (
                        <button
                          key={size}
                          disabled={tee.stock[size] === 0}
                          onClick={() => setSelectedSize(size)}
                          className={`py-2 px-4 rounded-full text-sm font-medium transition border ${
                            selectedSize === size
                              ? "bg-primary text-white border-primary"
                              : tee.stock[size] === 0
                              ? "bg-gray-200 text-gray-400 border-gray-200 cursor-not-allowed"
                              : "bg-white text-foreground border-gray-300 hover:bg-primary hover:text-white"
                          }`}
                        >
                          {size} {/* ✅ Only size, no stock number */}
                        </button>
                      ))}
                    </div>

                    {/* Add to Cart */}
                    <button
                      onClick={() => handleSizeClick(tee)}
                      className="w-full py-2 px-4 rounded-md bg-green-500 text-white font-semibold hover:bg-green-600 transition"
                    >
                      Add to Cart
                    </button>

                    {/* View on Instagram */}
                    {tee.instagramUrl && (
                      <a
                        href={tee.instagramUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full block text-center py-2 px-4 rounded-md bg-pink-500 text-white font-semibold hover:bg-pink-600 transition"
                      >
                        View on Instagram
                      </a>
                    )}

                    <button
                      onClick={() => setOpenProduct(null)}
                      className="w-full py-2 px-4 rounded-md border border-gray-300 text-gray-600 hover:bg-gray-100 transition"
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

        {/* View All / Show Less Button */}
        {customizedTees.length > 4 && (
          <div className="text-center">
            <button
              onClick={() => setShowAll(!showAll)}
              className="px-6 py-2 bg-primary text-white rounded-md font-semibold hover:bg-primary/90 transition"
            >
              {showAll ? "Show Less" : "View All"}
            </button>
          </div>
        )}
      </div>

      {/* Gallery Modal */}
      {gallery && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
          onClick={() => setGallery(null)}
        >
          <button
            onClick={() => setGallery(null)}
            className="absolute top-4 right-4 text-white text-3xl"
          >
            ✕
          </button>
          <div className="relative w-full max-w-lg px-4" onClick={(e) => e.stopPropagation()}>
            <img
              src={gallery.images[gallery.index]}
              alt="Gallery"
              className="w-full max-h-[80vh] object-contain rounded-lg"
            />
            {/* Prev */}
            <button
              onClick={() =>
                setGallery((prev) =>
                  prev
                    ? {
                        ...prev,
                        index: (prev.index - 1 + prev.images.length) % prev.images.length,
                      }
                    : prev
                )
              }
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-white text-black px-3 py-1 rounded"
            >
              ‹
            </button>
            {/* Next */}
            <button
              onClick={() =>
                setGallery((prev) =>
                  prev ? { ...prev, index: (prev.index + 1) % prev.images.length } : prev
                )
              }
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-white text-black px-3 py-1 rounded"
            >
              ›
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default CustomizedTees;
