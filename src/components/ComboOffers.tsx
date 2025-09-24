import { useNavigate } from "react-router-dom";

const comboOffers = [
  {
    id: "oversized-combo",
    title: "Buy 2 Oversized Tees",
    price: "₹999",
    description: "Mix & match any 2 oversized t-shirts",
    originalPrice: "₹1,398",
    savings: "Save ₹399",
    image:
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=300&fit=crop&crop=center",
    categoryId: "oversized-tshirts", // 👈 linked category
  },
  {
    id: "sweatshirt-duo",
    title: "Any 2 Sweatshirts",
    price: "₹1,149",
    description: "Limited time offer - Premium quality",
    originalPrice: "₹1,598",
    savings: "Save ₹449",
    image:
      "https://images.unsplash.com/photo-1554734867-bf3c00a49371?w=400&h=300&fit=crop&crop=center",
    categoryId: "sweatshirts", // 👈 linked category
  },
];

const ComboOffers = () => {
  const navigate = useNavigate();

  const orderCombo = (categoryId: string) => {
    navigate(`/category/${categoryId}`);
  };

  return (
    <section id="combo-offers" className="py-20 bg-secondary">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 slide-up">
          <h2 className="text-4xl md:text-5xl font-thin tracking-widest text-foreground mb-4">
            🔥 COMBO OFFERS & DEALS
          </h2>
          <p className="text-lg text-muted-foreground font-light tracking-wide">
            Exclusive combo packs at unbeatable prices
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {comboOffers.map((combo, index) => (
            <div
              key={combo.id}
              className="combo-card group bg-card border border-border rounded-none hover:shadow-[var(--shadow-medium)] transition-all duration-300 ease-out cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="aspect-[4/3] overflow-hidden bg-secondary">
                <img
                  src={combo.image}
                  alt={combo.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                />
              </div>

              <div className="p-6">
                <div className="flex items-center gap-2 mb-2">
                  <span className="bg-primary text-primary-foreground px-2 py-1 text-xs font-medium tracking-wide">
                    COMBO DEAL
                  </span>
                  <span className="text-sm text-muted-foreground line-through">
                    {combo.originalPrice}
                  </span>
                </div>

                <h3 className="text-xl font-medium tracking-wide text-foreground mb-2">
                  {combo.title}
                </h3>

                <p className="text-muted-foreground font-light text-sm tracking-wide mb-4">
                  {combo.description}
                </p>

                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <span className="text-2xl font-medium text-foreground">
                      {combo.price}
                    </span>
                  </div>
                  <span className="text-xs text-grey bg-silver-light px-2 py-1 font-medium">
                    {combo.savings}
                  </span>
                </div>

                <button
                  onClick={() => orderCombo(combo.categoryId)}
                  className="w-full bg-primary text-primary-foreground hover:bg-grey hover:text-white transition-all duration-300 ease-out px-6 py-3 rounded-none font-medium tracking-wide border border-primary hover:border-grey"
                >
                  ORDER THIS COMBO
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-sm text-muted-foreground font-light tracking-wide">
            Limited time offers • Premium quality guaranteed • Free shipping on
            combos
          </p>
        </div>
      </div>
    </section>
  );
};

export default ComboOffers;
