import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, MessageCircle, X } from 'lucide-react';
import tshirtBlack from '@/assets/oversized/black.png';
import tshirtwhite from '@/assets/oversized/white.png';
import tshirtaqua from '@/assets/oversized/Aqua.png';
import tshirtmaroon from '@/assets/oversized/Dark Maroon.png';
import tshirtred from '@/assets/oversized/red.png';
import tshirtskyblue from '@/assets/oversized/Sky Blue.png';
import tshirtteal from '@/assets/oversized/Teal.png';
import tshirtmagenta from '@/assets/oversized/magenta.png';


import sweatblack from '@/assets/sweatshirts/black.png';
import sweatwhite from '@/assets/sweatshirts/white.png';
import sweatliteblue from '@/assets/sweatshirts/liteblue.png';
import sweatbottelgreen from '@/assets/sweatshirts/Bottle Green.png';

import dropwhite from '@/assets/dropshoulder/white.png';
import dropblack from '@/assets/dropshoulder/black.png';
import dropbeige from '@/assets/dropshoulder/Beige.png';





const categoryData = {
  /*'oversized-tshirts': {
    name: 'Oversized T-Shirts 240GSM',
    description: 'Relaxed fit t-shirts for ultimate comfort and style',
    products: [
      { id: 1, color: 'Black', image: tshirtBlack, price: '₹349' },
      { id: 2, color: 'White', image: tshirtwhite, price: '₹349' },
      { id: 3, color: 'Aqua', image: tshirtaqua, price: '₹349' },
      { id: 4, color: 'Dark Maroon', image: tshirtmaroon, price: '₹349' },
      { id: 5, color: 'red', image: tshirtred, price: '₹349' },
      { id: 6, color: 'skyblue', image: tshirtskyblue, price: '₹349' },
      { id: 7, color: 'teal', image: tshirtteal, price: '₹349' },
      { id: 8, color: 'magenta', image: tshirtmagenta, price: '₹349' },

    ]
  },*/
  'sweatshirts': {
    name: 'Sweatshirts',
    description: 'Cotton Sweatshirt-Unisex!! 240Gsm French Terry',
    products: [
      { id: 1, color: 'Black', image: sweatblack, price: '₹459' },
      { id: 2, color: 'white', image: sweatwhite, price: '₹459' },
      { id: 3, color: 'liteblue', image: sweatliteblue, price: '₹459' },
      { id: 4, color: 'bottelgreen', image: sweatbottelgreen, price: '₹459' },
    ]
  },

  'Dropshoulder':{
    name: 'Drop-Shoulder',
    description: 'Cotton Drop-shoulder - Unisex !! 210Gsm (Single jersey Cotton)',
    products: [
      { id: 1, color: 'Black', image: dropblack, price: '₹349' },
      { id: 2, color: 'white', image: dropwhite, price: '₹349' },
      { id: 3, color: 'Beige', image: dropbeige, price: '₹349' },
    ]
    
  },

  /*'regular-tshirts': {
    name: 'Regular T-Shirts',
    description: 'Classic fit t-shirts with premium materials',
    products: [
      { id: 7, color: 'Black', image: tshirtBlack, price: '$35' },
      { id: 8, color: 'White', image: tshirtWhite, price: '$35' },
      { id: 9, color: 'Silver', image: tshirtSilver, price: '$35' },
    ]
  },
  'hoodies': {
    name: 'Hoodies',
    description: 'Urban essentials for street style',
    products: [
      { id: 10, color: 'Black', image: hoodieBlack, price: '$85' },
      { id: 11, color: 'White', image: tshirtWhite, price: '$85' },
      { id: 12, color: 'Silver', image: tshirtSilver, price: '$85' },
    ]
  },
   'acid-wash': {
    name: 'Acid-Wash Tees',
    description: 'Urban essentials for street style',
    products: [
      { id: 10, color: 'Black', image: hoodieBlack, price: '$85' },
      { id: 11, color: 'White', image: tshirtWhite, price: '$85' },
      { id: 12, color: 'Silver', image: tshirtSilver, price: '$85' },
    ]
  } */
};

const sizes = ['M', 'L', 'XL'];

const CategoryPage = () => {
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

  const orderViaWhatsApp = (product: any, size: string) => {
    const message = `Hi, I'd like to order this ${category.name} in ${product.color}, Size ${size}. Price: ${product.price}`;
    const whatsappUrl = `https://wa.me/+919345974814?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="min-h-screen bg-background pt-0">
      <div className="container mx-auto px-6 py-8">
        {/* Back Button */}
        <button
          onClick={() => navigate('/')}
          className="flex items-center text-foreground hover:text-grey transition-colors duration-200 mb-8"
        >
          <ArrowLeft size={20} className="mr-2" />
          Back to Collection
        </button>

        {/* Category Header */}
        <div className="text-center mb-12 fade-in">
          <h1 className="text-4xl md:text-5xl font-thin tracking-widest text-foreground mb-4">
            {category.name.toUpperCase()}
          </h1>
          <p className="text-lg text-muted-foreground font-light tracking-wide">
            {category.description}
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {category.products.map((product, index) => (
            <div
              key={product.id}
              className="product-card group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Clickable Image */}
              <div
                className="aspect-square overflow-hidden bg-secondary cursor-pointer"
                onClick={() => setPreviewImage(product.image)}
              >
                <img
                  src={product.image}
                  alt={`${category.name} in ${product.color}`}
                  className="product-image"
                />
              </div>

              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-medium tracking-wide text-foreground">
                      {category.name}
                    </h3>
                    <p className="text-muted-foreground font-light">
                      Color: {product.color}
                    </p>
                  </div>
                  <span className="text-xl font-medium text-foreground">
                    {product.price}
                  </span>
                </div>

                {/* Size Selection */}
                <div className="mb-6">
                  <p className="text-sm text-muted-foreground mb-3 font-light tracking-wide">
                    Available Sizes:
                  </p>
                  <div className="grid grid-cols-3 gap-2">
                    {sizes.map((size) => (
                      <button
                        key={size}
                        onClick={() => orderViaWhatsApp(product, size)}
                        className="bg-secondary hover:bg-primary hover:text-primary-foreground 
                                 text-foreground border border-border hover:border-primary
                                 py-2 px-4 transition-all duration-300 ease-out
                                 text-sm font-medium tracking-wide flex items-center justify-center gap-2"
                      >
                        <MessageCircle size={14} />
                        {size}
                      </button>
                    ))}
                  </div>
                </div>

                <p className="text-xs text-muted-foreground text-center font-light">
                  Click size to order via WhatsApp
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Image Modal */}
      {previewImage && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
          onClick={() => setPreviewImage(null)}
        >
          <div className="relative max-w-4xl w-full px-4">
            <button
              className="absolute top-4 right-4 text-white hover:text-gray-300"
              onClick={(e) => {
                e.stopPropagation();
                setPreviewImage(null);
              }}
            >
              <X size={28} />
            </button>
            <img
              src={previewImage}
              alt="Preview"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default CategoryPage;
