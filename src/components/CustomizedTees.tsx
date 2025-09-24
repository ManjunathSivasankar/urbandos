import React, { useState, useEffect } from "react";
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
    stock: { S: 3, M: 2, L: 1 }
  },
  {
    id: 2,
    name: "Custom Design 2",
    image: "https://i.postimg.cc/cLBGDZWQ/Whats-App-Image-2025-08-08-at-17-54-56.jpg",
    description: "Urban art custom print",
    price: "₹699",
    stock: { S: 3, M: 2, L: 1 }
  },
  {
    id: 3,
    name: "Custom Design 3",
    image: "https://i.postimg.cc/pTQzKg5b/image.png",
    description: "Minimalist custom design",
    price: "₹599",
    stock: { S: 3, M: 2, L: 1 }
  },
  {
    id: 4,
    name: "Custom Design 4",
    image: "https://i.postimg.cc/Jh5zxmxq/image.png",
    description: "Bold graphic custom tee",
    price: "₹749",
    stock: { S: 3, M: 2, L: 1 }
  },
  {
    id: 5,
    name: "Custom Design 5",
    image: "https://i.postimg.cc/63VbTb9T/image.png",
    description: "Bold graphic custom tee",
    instagramUrl: "https://www.instagram.com/p/DOOhkCyjF3-/?img_index=1",
    price: "₹799",
    stock: { S: 3, M: 2, L: 1 }
  },
  {
    id: 6,
    name: "Custom Design 6",
    image: "https://i.postimg.cc/gkb3kyjL/image.png",
    description: "Bold graphic custom tee",
    instagramUrl: "https://www.instagram.com/p/DOf9MGiEXa_/?img_index=1",
    price: "₹699",
    stock: { S: 3, M: 2, L: 1 }
  },
  {
    id: 7,
    name: "Custom Design 7",
    image: "https://i.postimg.cc/qMmBZ0PB/image.png",
    description: "Bold graphic custom tee",
    instagramUrl: "https://www.instagram.com/p/DOtJVzuj0HG/?img_index=1",
    price: "₹849",
    stock: { S: 3, M: 2, L: 1 }
  },
  {
    id: 8,
    name: "Custom Design 8",
    image: "https://i.postimg.cc/fLKkzdrm/image.png",
    description: "Bold graphic custom tee",
    instagramUrl: "https://www.instagram.com/p/YOUR_POST_ID_4",
    price: "₹799",
    stock: { S: 3, M: 2, L: 1 }
  }
];

const CustomizedTees = ({ cart, setCart }: CustomizedTeesProps) => {
  const [openProduct, setOpenProduct] = useState<number | null>(null);
  const [showAll, setShowAll] = useState(false);
  const [navigateData, setNavigateData] = useState<CartItem | null>(null); // temp holder for navigation
  const navigate = useNavigate();

  const handleSizeClick = (tee: Tee, size: string) => {
    const cartItem: CartItem = {
      id: tee.id,
      name: tee.name,
      size,
      price: tee.price,
      quantity: 1,
      image: tee.image,
    };

    setCart(prev => {
      const index = prev.findIndex(item => item.id === tee.id && item.size === size);
      let updated;
      if (index !== -1) {
        updated = [...prev];
        updated[index].quantity += 1;
      } else {
        updated = [...prev, cartItem];
      }
      return updated;
    });

    setNavigateData(cartItem); // trigger navigation after cart is updated
    setOpenProduct(null);
  };

  // Effect to navigate once cart is updated
  useEffect(() => {
    if (navigateData) {
      navigate("/cart", { state: { from: "/", item: navigateData } });
      setNavigateData(null);
    }
  }, [navigateData, navigate]);

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
    </section>
  );
};

export default CustomizedTees;
