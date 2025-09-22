import React, { useState } from 'react';

const customizedTees = [
  {
    id: 1,
    name: "Custom Design 1",
    image: "https://i.postimg.cc/cLBGDZWQ/Whats-App-Image-2025-08-08-at-17-54-56.jpg",
    description: "Personalized street design",
    instagramUrl: "https://www.instagram.com/p/DM74cdFIY70/?img_index=1",
    price: "₹649"
  },
 {
    id: 2,
    name: "Custom Design 2", 
    image: "https://i.postimg.cc/cLBGDZWQ/Whats-App-Image-2025-08-08-at-17-54-56.jpg",
    description: "Urban art custom print",
    instagramUrl: "https://www.instagram.com/p/DOCs5NMk7LR/?img_index=1",
    price: "₹699"
  },
  {
    id: 3,
    name: "Custom Design 3",
    image: "https://i.postimg.cc/pTQzKg5b/image.png",
    description: "Minimalist custom design",
    instagramUrl: "https://www.instagram.com/p/DNoCAGXs0am/?img_index=1",
    price: "₹599"
  },
  {
    id: 4,
    name: "Custom Design 4",
    image: "https://i.postimg.cc/Jh5zxmxq/image.png",
    description: "Bold graphic custom tee",
    instagramUrl: "https://www.instagram.com/p/DODGhCMkfo4/?img_index=1",
    price: "₹749"
  },
  {
    id: 5,
    name: "Custom Design 5",
    image: "https://i.postimg.cc/63VbTb9T/image.png",
    description: "Bold graphic custom tee",
    instagramUrl: "https://www.instagram.com/p/DOOhkCyjF3-/?img_index=1",
    price: "₹799"
  },
  {
    id: 6,
    name: "Custom Design 6",
    image: "https://i.postimg.cc/gkb3kyjL/image.png",
    description: "Bold graphic custom tee",
    instagramUrl: "https://www.instagram.com/p/DOf9MGiEXa_/?img_index=1",
    price: "₹699"
  },
  {
    id: 7,
    name: "Custom Design 7",
    image: "https://i.postimg.cc/qMmBZ0PB/image.png",
    description: "Bold graphic custom tee",
    instagramUrl: "https://www.instagram.com/p/DOtJVzuj0HG/?img_index=1",
    price: "₹849"
  },
  {
    id: 8,
    name: "Custom Design 8",
    image: "https://i.postimg.cc/fLKkzdrm/image.png",
    description: "Bold graphic custom tee",
    instagramUrl: "https://www.instagram.com/p/YOUR_POST_ID_4"
  }
];

const CustomizedTees = () => {
  const [showAll, setShowAll] = useState(false);
  const displayedTees = showAll ? customizedTees : customizedTees.slice(0, 2);
  const hasMore = customizedTees.length > 2;

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

        {/* ✅ Grid with centered items */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-8 justify-center">
          {displayedTees.map((tee) => (
            <div
              key={tee.id}
              className="group bg-card rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-105 mx-auto"
            >
              <a
                href={tee.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block aspect-square overflow-hidden"
              >
                <img
                  src={tee.image}
                  alt={tee.name}
                  className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500 bg-white"
                />
              </a>
              <div className="p-4 text-center">
                <h3 className="font-semibold text-foreground mb-2">{tee.name}</h3>
                <p className="text-sm text-muted-foreground mb-2">{tee.description}</p>
                {/* ✅ Price Section */}
                <p className="text-lg font-bold text-primary">{tee.price}</p>
              </div>
            </div>
          ))}
        </div>

        {hasMore && !showAll && (
          <div className="text-center">
            <button
              onClick={() => setShowAll(true)}
              className="px-8 py-2 border border-foreground text-foreground hover:bg-foreground hover:text-background transition-colors rounded"
            >
              View More
            </button>
          </div>
        )}

        {showAll && hasMore && (
          <div className="text-center">
            <button
              onClick={() => setShowAll(false)}
              className="px-8 py-2 border border-foreground text-foreground hover:bg-foreground hover:text-background transition-colors rounded"
            >
              Show Less
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default CustomizedTees;
