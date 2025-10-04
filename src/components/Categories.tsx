import { useNavigate } from 'react-router-dom';
import oversized from '@/assets/oversizedfront.png';
import sweatshirt from '@/assets/sweatshirtfront.png';
import comingsoon from '@/assets/comingsoon.png';
import dropfront from '@/assets/drop.png';
import regular from '@/assets/regular.jpg'
import hoodie from '@/assets/hoodiecover.webp';
import polo from '@/assets/polo.jpg';
import sweat from '@/assets/sweat.webp';


const categories = [
  {
      id: 'regular-tshirts',
    name: 'Regular T-Shirts',
    description: 'Classic fit. Timeless design.',
    image: regular
  },
  {
    id: 'oversized-tshirts',
    name: 'Oversized T-Shirts',
    description: 'Relaxed fit. Bold statement.',
    image: comingsoon 
  },
    {
    id: 'Polo-Shirts',
    name: 'Polo T-shirts',
    description: 'Relaxed fit. Bold statement.',
    image: polo
  },
  {
    id: 'sweatshirts',
    name: 'Sweatshirts',
    description: 'Comfort meets style.',
    image: sweat
  },
  {
    id: 'hoodies',
    name: 'Hoodies',
    description: 'Urban essential.',
    image: hoodie
  },
    {
    id: 'acid-wash',
    name: 'Acid-Wash-Tees',
    description: 'Urban essential.',
    image: comingsoon
  }
  /*{
    id: 'Dropshoulder',
    name: 'Drop-Shoulder',
    description: 'Comfort meets style.',
    image: dropfront
  },*/
  

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

        {/* Updated grid: 2 columns by default for mobile */}
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {categories.map((category, index) => (
            <div
              key={category.id}
              className="product-card group cursor-pointer"
              onClick={() => handleCategoryClick(category.id)}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="aspect-square overflow-hidden bg-secondary">
                <img
                  src={category.image}
                  alt={category.name}
                  className="product-image object-cover w-full h-full"
                />
              </div>
              <div className="p-4 md:p-6">
                <h3 className="text-sm md:text-xl font-medium tracking-wide text-foreground mb-1 md:mb-2">
                  {category.name}
                </h3>
                <p className="text-xs md:text-sm text-muted-foreground font-light tracking-wide">
                  {category.description}
                </p>
                <div className="mt-2 md:mt-4">
                  <span className="text-xs md:text-sm text-foreground hover:text-gray-500 transition-colors duration-200">
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
