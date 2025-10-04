import { useState } from "react";
import { MessageCircle, Clock, Instagram, Youtube } from "lucide-react";

const Contact = () => {
  const [activeTab, setActiveTab] = useState<"instagram" | "youtube">("instagram");

  const openWhatsApp = () => {
    window.open(
      "https://wa.me/1234567890?text=Hi, I have a question about UrbanDos clothing!",
      "_blank"
    );
  };

  const openInstagram = () => {
    window.open("https://instagram.com/urbandos", "_blank");
  };

  const contactMethods = [
    {
      title: "WhatsApp",
      description: "Fast & direct communication",
      icon: <MessageCircle size={24} className="text-white" />,
      action: openWhatsApp,
      btnText: "Message Us",
      color: "bg-green-500",
    },
    {
      title: "Support Hours",
      description: "Mon-Fri: 9AM-8PM | Sat-Sun: 10AM-6PM",
      icon: <Clock size={24} className="text-white" />,
      action: null,
      btnText: "",
      color: "bg-blue-500",
    },
    {
      title: "Instagram",
      description: "Follow for latest drops",
      icon: <Instagram size={24} className="text-white" />,
      action: openInstagram,
      btnText: "Follow Us",
      color: "bg-pink-500",
    },
  ];

  // Dummy media
  const instagramReels = [
    "https://www.instagram.com/reel/DOBtFCKEwF3/embed",
    "https://www.instagram.com/reel/DNoA7Vqs4_2/embed",
    "https://www.instagram.com/reel/DOx2deLkRcJ/embed",
    // add more links here
  ];

  const youtubeVideos = [
    "https://www.youtube.com/embed/3nXRA0vCpaE",
    // add more links here
  ];

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6 text-center max-w-5xl">
        <h2 className="text-4xl md:text-5xl font-thin mb-4 tracking-wide text-gray-900">
          Get in Touch
        </h2>
        <p className="text-gray-600 mb-12">
          Questions about sizing, orders, or just want to chat? We're here to help.
        </p>

        {/* Contact Methods */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {contactMethods.map((method) => (
            <div
              key={method.title}
              className="bg-white shadow-md rounded-xl p-6 flex flex-col items-center hover:shadow-xl transition-shadow duration-300"
            >
              <div
                className={`w-16 h-16 flex items-center justify-center rounded-full mb-4 ${method.color}`}
              >
                {method.icon}
              </div>
              <h3 className="text-xl font-medium mb-2">{method.title}</h3>
              <p className="text-gray-500 text-sm mb-4">{method.description}</p>
              {method.action && (
                <button
                  onClick={method.action}
                  className="bg-gray-900 text-white px-5 py-2 rounded-full font-medium hover:bg-gray-800 transition-colors"
                >
                  {method.btnText}
                </button>
              )}
            </div>
          ))}
        </div>

        {/* Tabs for Instagram / YouTube */}
        <div className="mb-12">
          <div className="flex justify-center mb-6">
            <button
              className={`px-6 py-2 font-medium border-b-2 ${
                activeTab === "instagram"
                  ? "border-gray-900 text-gray-900"
                  : "border-transparent text-gray-500"
              }`}
              onClick={() => setActiveTab("instagram")}
            >
              Instagram
            </button>
            <button
              className={`px-6 py-2 font-medium border-b-2 ${
                activeTab === "youtube"
                  ? "border-gray-900 text-gray-900"
                  : "border-transparent text-gray-500"
              }`}
              onClick={() => setActiveTab("youtube")}
            >
              YouTube
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {activeTab === "instagram" &&
              instagramReels.map((link, idx) => (
                <div
                  key={idx}
                  className="bg-white shadow-md rounded-xl overflow-hidden hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="aspect-[9/16] bg-gray-100">
                    <iframe
                      src={link}
                      width="100%"
                      height="100%"
                      allow="autoplay; clipboard-write; encrypted-media; picture-in-picture"
                      allowFullScreen
                      frameBorder="0"
                      className="rounded-xl w-full h-full"
                    />
                  </div>
                </div>
              ))}

            {activeTab === "youtube" &&
              youtubeVideos.map((link, idx) => (
                <div
                  key={idx}
                  className="bg-white shadow-md rounded-xl overflow-hidden hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="aspect-[16/9] bg-gray-100">
                    <iframe
                      src={link}
                      width="100%"
                      height="100%"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      frameBorder="0"
                      className="rounded-xl w-full h-full"
                    />
                  </div>
                </div>
              ))}
          </div>
        </div>

        {/* Footer / Contact Info */}
        <div className="border-t border-gray-200 pt-6 text-gray-600 text-sm">
          Email: <span className="text-gray-900">urbandos7@gmail.com</span> | Phone:{" "}
          <span className="text-gray-900">+91 9003789388</span>
        </div>
      </div>
    </section>
  );
};

export default Contact;
