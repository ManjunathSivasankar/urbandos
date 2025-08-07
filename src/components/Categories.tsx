import { useNavigate } from 'react-router-dom';
import oversized from '@/assets/oversizedfront.png'
import sweatshirt from '@/assets/sweatshirtfront.png';
import comingsoon from '@/assets/comingsoon.png';
import dropfront from '@/assets/drop.png';

const categories = [
  {
    id: 'oversized-tshirts',
    name: 'Oversized T-Shirts',
    description: 'Relaxed fit. Bold statement.',
    image: oversized
  },
  {
    id: 'sweatshirts',
    name: 'Sweatshirts',
    description: 'Comfort meets style.',
    image: sweatshirt
  },
    {
    id: 'Dropshoulder',
    name: 'Drop-Shoulder',
    description: 'Comfort meets style.',
    image: dropfront
  },
  {
    id: 'regular-tshirts',
    name: 'Regular T-Shirts',
    description: 'Classic fit. Timeless design.',
    image: comingsoon
  },
  {
    id: 'hoodies',
    name: 'Hoodies',
    description: 'Urban essential.',
    image: comingsoon
  },
    {
    id: 'acid-wash',
    name: 'Acid-Wash-Tees',
    description: 'Urban essential.',
    image: comingsoon
  }
];

const Categories = () => {
  const navigate = useNavigate();

  const handleCategoryClick = (categoryId: string) => {
    navigate(`/category/${categoryId}`);
  };

  return (
    <section id="categories" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 slide-up">
          <h2 className="text-4xl md:text-5xl font-thin tracking-widest text-foreground mb-4">
            COLLECTION
          </h2>
          <p className="text-lg text-muted-foreground font-light tracking-wide">
            Carefully curated pieces for the modern urban lifestyle
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category, index) => (
            <div
              key={category.id}
              className="product-card group"
              onClick={() => handleCategoryClick(category.id)}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="aspect-square overflow-hidden bg-secondary">
                <img
                  src={category.image}
                  alt={category.name}
                  className="product-image"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-medium tracking-wide text-foreground mb-2">
                  {category.name}
                </h3>
                <p className="text-muted-foreground font-light text-sm tracking-wide">
                  {category.description}
                </p>
                <div className="mt-4">
                  <span className="text-sm text-foreground hover:text-grey transition-colors duration-200 cursor-pointer">
                    EXPLORE →
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;