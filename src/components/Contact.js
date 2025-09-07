export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-black">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Interested in an assistant that fits your <span className="gold-gradient">specific needs</span>?
        </h2>
        <p className="text-xl text-gray-400 mb-8">
          Our Support work 24/24 and 7/7, to receive your inquiries and assist you with any issues or questions you may have
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a 
            href="https://wa.me/18606013469?text=Hello! I'm interested in your IPTV services. Can you provide more information?"
            target="_blank"
            rel="noopener noreferrer"
            className="accent-button text-lg px-8 py-4 inline-flex items-center justify-center"
          >
            Contact us
          </a>
        </div>
      </div>
    </section>
  );
}
