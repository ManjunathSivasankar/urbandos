const ComboOffers = () => {
  return (
    <section id="combo-offers" className="py-20 bg-secondary">
      <div className="container mx-auto px-6 text-center">
        {/* Header */}
        <div className="mb-10">
          <h2 className="text-4xl md:text-5xl font-thin tracking-widest text-foreground mb-4">
            🔥 COMBO OFFER 🔥
          </h2>
          <p className="text-lg text-muted-foreground font-light tracking-wide">
            Exclusive weekend combo — Limited Time Offer!
          </p>
        </div>

        {/* Combo Poster Image */}
        <div className="flex justify-center">
          <img
            src="https://i.postimg.cc/rw2w37dN/Chat-GPT-Image-Oct-4-2025-05-36-40-PM.png"
            alt="Combo Offer Poster"
            className="rounded-lg shadow-lg w-[85%] md:w-[55%] lg:w-[45%] object-contain"
          />
        </div>

        {/* Footer note */}
        <div className="text-center mt-12">
          <p className="text-sm text-muted-foreground font-light tracking-wide">
            Premium Quality • Limited Stocks • Offer valid for 24 hours only
          </p>
        </div>
      </div>
    </section>
  );
};

export default ComboOffers;
