import { MessageCircle, Clock, Instagram } from 'lucide-react';

const Contact = () => {
  const openWhatsApp = () => {
    window.open('https://wa.me/+919345974814?text=Hi, I have a question about UrbanDos clothing!', '_blank');
  };

  const openInstagram = () => {
    window.open('https://www.instagram.com/urban.dos/', '_blank');
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

          <div className="border-t border-border pt-8">
            <p className="text-muted-foreground font-light">
              Email: <span className="text-foreground">urbandos7@gmail.com</span><br/>
              Phone: <span className="text-foreground">+91 9345974814</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;