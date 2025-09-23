import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, X, Mail, Phone } from 'lucide-react';

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

/*import dropwhite from '@/assets/dropshoulder/white.png';
import dropblack from '@/assets/dropshoulder/black.png';
import dropbeige from '@/assets/dropshoulder/Beige.png';
import size from '@/assets/size.jpeg';*/

const categoryData = {
 'regular-tshirts': {
    name: 'Oversized T-Shirts',
    description: 'Unisex !! 220Gsm Premium Cotton Oversized Tees',
    products: [
      { id: 1, color: 'Black', image: tshirtBlack, price: '₹349' },
      /*{ id: 2, color: 'White', image: tshirtwhite, price: '₹349' },
      { id: 3, color: 'Aqua', image: tshirtaqua, price: '₹349' },
      { id: 4, color: 'Dark Maroon', image: tshirtmaroon, price: '₹349' },
      { id: 5, color: 'Red', image: tshirtred, price: '₹349' },*/
    ]
  },




  'oversized-tshirts': {
    name: 'Oversized T-Shirts',
    description: 'Unisex !! 220Gsm Premium Cotton Oversized Tees',
    products: [
      { id: 1, color: 'Black', image: tshirtBlack, price: '₹349', stock: { M: 5, L: 2, XL: 0 } },
     /* { id: 2, color: 'White', image: tshirtwhite, price: '₹349', stock: { M: 3, L: 4, XL: 1 } },
      { id: 3, color: 'Aqua', image: tshirtaqua, price: '₹349', stock: { M: 2, L: 3, XL: 2 } },
      { id: 4, color: 'Dark Maroon', image: tshirtmaroon, price: '₹349', stock: { M: 1, L: 2, XL: 1 } },
      { id: 5, color: 'Red', image: tshirtred, price: '₹349', stock: { M: 4, L: 0, XL: 3 } },*/
    ]
  },
  'sweatshirts': {
    name: 'Sweatshirts',
    description: 'Cotton Sweatshirt-Unisex!! 240Gsm French Terry',
    products: [
      { id: 1, color: 'Black', image: sweatblack, price: '₹459', stock: { M: 3, L: 2, XL: 1 } },
     /* { id: 2, color: 'White', image: sweatwhite, price: '₹459', stock: { M: 4, L: 3, XL: 2 } },
      { id: 3, color: 'Lite Blue', image: sweatliteblue, price: '₹459', stock: { M: 2, L: 1, XL: 3 } },
      { id: 4, color: 'Bottle Green', image: sweatbottelgreen, price: '₹459', stock: { M: 1, L: 2, XL: 2 } },*/
  ]
}
};
  /*Dropshoulder: {
    name: 'Drop-Shoulder',
    description: 'Cotton Drop-shoulder - Unisex !! 210Gsm (Single jersey Cotton)',
    products: [
      { id: 1, color: 'Black', image: dropblack, price: '₹349', stock: { M: 2, L: 2, XL: 1 } },
      { id: 2, color: 'White', image: dropwhite, price: '₹349', stock: { M: 1, L: 3, XL: 2 } },
      { id: 3, color: 'Beige', image: dropbeige, price: '₹349', stock: { M: 0, L: 2, XL: 1 } },
    ]
  }
};*/

const CategoryPage = ({ cart, setCart }: { cart: any[], setCart: React.Dispatch<React.SetStateAction<any[]>> }) => {
  const { categoryId } = useParams();
  const navigate = useNavigate();
  const [previewImage, setPreviewImage] = useState<string | null>(null);

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
  // Check if same product (id + size) already exists in cart
  const existingIndex = cart.findIndex(
    (item) => item.id === product.id && item.size === size
  );

  if (existingIndex !== -1) {
    // Increase quantity if already in cart
    const updatedCart = [...cart];
    updatedCart[existingIndex].quantity += 1;
    setCart(updatedCart);
  } else {
    // Add new item with category name as product name
    setCart([
      ...cart,
      {
        ...product,
        name: category.name, // <-- add category name here
        size,
        quantity: 1,
      },
    ]);
  }

  // Navigate to cart if needed
  navigate("/cart", { state: { from: `/category/${categoryId}` } });
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
          <p className="text-lg text-muted-foreground font-light tracking-wide">
            {category.description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {category.products.map((product, index) => (
            <div key={product.id} className="product-card group" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="aspect-square overflow-hidden bg-secondary">
                <img src={product.image} alt={`${category.name} in ${product.color}`} className="product-image" />
              </div>

              <div className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-xl font-medium tracking-wide text-foreground">{category.name}</h3>
                  <span className="text-xl font-medium text-foreground">{product.price}</span>
                </div>

                {/* Size buttons with stock */}
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
                  <p className="text-xs text-muted-foreground text-center font-light">
                    Tap a size to add the product to your cart
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Contact Info */}
      <div className="border-t border-border pt-8 mt-12 pb-8 text-center">
        <p className="text-muted-foreground font-light flex flex-col md:flex-row gap-4 justify-center items-center">
          <a href="mailto:urbandos7@gmail.com" className="flex items-center gap-2 hover:text-primary transition">
            <Mail size={16} /> <span className="text-foreground">urbandos7@gmail.com</span>
          </a>
          <a href="tel:+919345974814" className="flex items-center gap-2 hover:text-primary transition">
            <Phone size={16} /> <span className="text-foreground">+91 9345974814</span>
          </a>
        </p>
      </div>

      {/* Image Modal */}
      {previewImage && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
          onClick={() => setPreviewImage(null)}
        >
          <div className="relative max-w-4xl w-full px-4 flex justify-center">
            <div className="relative inline-block">
              <img src={sizeImg} alt="Preview" className="max-h-[80vh] max-w-full mx-auto rounded-lg shadow-lg object-contain" />
              <button
                className="absolute top-2 right-2 bg-black/70 text-white p-2 rounded-full hover:bg-black/90 transition"
                onClick={(e) => { e.stopPropagation(); setPreviewImage(null); }}
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
