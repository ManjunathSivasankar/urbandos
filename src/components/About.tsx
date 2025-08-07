const About = () => {
  return (
    <section id="about" className="py-20 bg-secondary">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center slide-up">
          <h2 className="text-4xl md:text-5xl font-thin tracking-widest text-foreground mb-8">
            ABOUT URBANDOS
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="text-left">
              <p className="text-lg text-muted-foreground font-light leading-relaxed mb-6">
                Born from the streets, crafted for the city. UrbanDos represents the intersection 
                of minimalist design and urban culture.
              </p>
              <p className="text-lg text-muted-foreground font-light leading-relaxed mb-6">
                Every piece is thoughtfully designed with premium materials and attention to detail, 
                creating timeless pieces that transcend trends.
              </p>
              <p className="text-lg text-muted-foreground font-light leading-relaxed">
                Quality over quantity. Substance over style. This is UrbanDos.
              </p>
            </div>
            
            <div className="space-y-8">
              <div className="text-center">
                <h3 className="text-2xl font-light tracking-wide text-foreground mb-2">
                  Premium Materials
                </h3>
                <p className="text-muted-foreground font-light">
                  Only the finest fabrics make it into our collection
                </p>
              </div>
              
              <div className="text-center">
                <h3 className="text-2xl font-light tracking-wide text-foreground mb-2">
                  Minimalist Design
                </h3>
                <p className="text-muted-foreground font-light">
                  Clean lines and timeless aesthetics
                </p>
              </div>
              
              <div className="text-center">
                <h3 className="text-2xl font-light tracking-wide text-foreground mb-2">
                  Urban Culture
                </h3>
                <p className="text-muted-foreground font-light">
                  Inspired by city life and street style
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;