import React, { useState } from 'react';

const customizedTees = [
  {
    id: 1,
    name: "Custom Design 1",
    image: "https://i.postimg.cc/cLBGDZWQ/Whats-App-Image-2025-08-08-at-17-54-56.jpg",
    description: "Personalized street design",
    instagramUrl: "https://www.instagram.com/p/DM74cdFIY70/?img_index=1"
  },
/*  {
    id: 2,
    name: "Custom Design 2", 
    image: "https://images.unsplash.com/photo-1583743814966-8936f37f0df3?w=400&h=400&fit=crop&crop=center",
    description: "Urban art custom print",
    instagramUrl: "https://www.instagram.com/p/YOUR_POST_ID_2"
  },
  {
    id: 3,
    name: "Custom Design 3",
    image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=400&h=400&fit=crop&crop=center", 
    description: "Minimalist custom design",
    instagramUrl: "https://www.instagram.com/p/YOUR_POST_ID_3"
  },
  {
    id: 4,
    name: "Custom Design 4",
    image: "https://images.unsplash.com/photo-1562157873-818bc0726f68?w=400&h=400&fit=crop&crop=center",
    description: "Bold graphic custom tee",
    instagramUrl: "https://www.instagram.com/p/YOUR_POST_ID_4"
  }*/
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

        <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6 mb-8">
          {displayedTees.map((tee) => (
            <div
              key={tee.id}
              className="group bg-card rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-105"
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
              <div className="p-4">
                <h3 className="font-semibold text-foreground mb-2">{tee.name}</h3>
                <p className="text-sm text-muted-foreground">{tee.description}</p>
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
