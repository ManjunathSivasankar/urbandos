import { MessageCircle, Clock, Instagram } from 'lucide-react';

const Contact = () => {
  const openWhatsApp = () => {
    window.open('https://wa.me/1234567890?text=Hi, I have a question about UrbanDos clothing!', '_blank');
  };

  const openInstagram = () => {
    window.open('https://instagram.com/urbandos', '_blank');
  };

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center slide-up">
          <h2 className="text-4xl md:text-5xl font-thin tracking-widest text-foreground mb-8">
            GET IN TOUCH
          </h2>

          <p className="text-lg text-muted-foreground font-light leading-relaxed mb-12">
            Questions about sizing, orders, or just want to chat? We're here to help.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {/* WhatsApp */}
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <MessageCircle className="text-primary-foreground" size={24} />
              </div>
              <h3 className="text-xl font-medium tracking-wide text-foreground mb-2">
                WhatsApp
              </h3>
              <p className="text-muted-foreground font-light mb-4">
                Fast and direct communication
              </p>
              <button onClick={openWhatsApp} className="whatsapp-button">
                Message Us
              </button>
            </div>

            {/* Support Hours */}
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="text-primary-foreground" size={24} />
              </div>
              <h3 className="text-xl font-medium tracking-wide text-foreground mb-2">
                Support Hours
              </h3>
              <p className="text-muted-foreground font-light">
                Monday - Friday: 9AM - 8PM<br />
                Saturday - Sunday: 10AM - 6PM
              </p>
            </div>

            {/* Instagram */}
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Instagram className="text-primary-foreground" size={24} />
              </div>
              <h3 className="text-xl font-medium tracking-wide text-foreground mb-2">
                Instagram
              </h3>
              <p className="text-muted-foreground font-light mb-4">
                Follow for latest drops
              </p>
              <button onClick={openInstagram} className="whatsapp-button">
                Follow Us
              </button>
            </div>
          </div>

          {/* Instagram Reels Section */}
          <div className="mb-12">
            <h3 className="text-2xl md:text-3xl font-thin tracking-widest text-foreground mb-8 text-center">
              LATEST REELS
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {/* Replace these URLs with real embed links from Instagram */}

              <div className="bg-card rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300">
                <div className="aspect-[9/16] bg-muted flex items-center justify-center">
                  <iframe
                    src="https://www.instagram.com/reel/DM70It4IjxF/embed"
                    width="100%"
                    height="100%"
                    allow="autoplay; clipboard-write; encrypted-media; picture-in-picture"
                    allowFullScreen
                    frameBorder="0"
                    className="rounded-lg w-full h-full"
                  ></iframe>
                </div>
              </div>

            </div>
          </div>

          <div className="border-t border-border pt-8">
            <p className="text-muted-foreground font-light">
              Email: <span className="text-foreground">urbandos7@gamil.com</span><br/>
              Phone: <span className="text-foreground">+91 9345974814</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
