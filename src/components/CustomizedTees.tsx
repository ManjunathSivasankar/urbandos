import React, { useState } from 'react';
import { Button } from '@/components/ui/button';

const customizedTees = [
  {
    id: 1,
    name: "Custom Design 1",
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=400&fit=crop&crop=center",
    description: "Personalized street design"
  },
  {
    id: 2,
    name: "Custom Design 2", 
    image: "https://images.unsplash.com/photo-1583743814966-8936f37f0df3?w=400&h=400&fit=crop&crop=center",
    description: "Urban art custom print"
  },
  {
    id: 3,
    name: "Custom Design 3",
    image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=400&h=400&fit=crop&crop=center", 
    description: "Minimalist custom design"
  },
  {
    id: 4,
    name: "Custom Design 4",
    image: "https://images.unsplash.com/photo-1562157873-818bc0726f68?w=400&h=400&fit=crop&crop=center",
    description: "Bold graphic custom tee"
  }
];

const CustomizedTees = () => {
  const [showAll, setShowAll] = useState(false);
  const displayedTees = showAll ? customizedTees : customizedTees.slice(0, 2);
  const hasMore = customizedTees.length > 2;

  const handleOrderWhatsApp = (teeName: string) => {
    const message = `Hi! I want to order this ${teeName}. Please send me the customization details.`;
    const whatsappUrl = `https://wa.me/+919876543210?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section className="py-16 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            🎨 Customized Tees
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Express your unique style with our custom-designed t-shirts. Each piece is crafted to reflect your personality.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6 mb-8">
          {displayedTees.map((tee) => (
            <div
              key={tee.id}
              className="group bg-card rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-105"
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={tee.image}
                  alt={tee.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-foreground mb-2">{tee.name}</h3>
                <p className="text-sm text-muted-foreground mb-4">{tee.description}</p>
                <Button
                  onClick={() => handleOrderWhatsApp(tee.name)}
                  className="w-full bg-foreground text-background hover:bg-foreground/90 transition-colors"
                  size="sm"
                >
                  Order Custom
                </Button>
              </div>
            </div>
          ))}
        </div>

        {hasMore && !showAll && (
          <div className="text-center">
            <Button
              onClick={() => setShowAll(true)}
              variant="outline"
              className="px-8 py-2 border-foreground text-foreground hover:bg-foreground hover:text-background transition-colors"
            >
              View More
            </Button>
          </div>
        )}

        {showAll && hasMore && (
          <div className="text-center">
            <Button
              onClick={() => setShowAll(false)}
              variant="outline" 
              className="px-8 py-2 border-foreground text-foreground hover:bg-foreground hover:text-background transition-colors"
            >
              Show Less
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};

export default CustomizedTees;