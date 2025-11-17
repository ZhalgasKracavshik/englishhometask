import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { LoadingScreen } from './components/LoadingScreen';
import { MouseFollower } from './components/MouseFollower';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', phone: '', company: '', message: '' });
    }, 3000);
  };

  return (
    <>
      <AnimatePresence>
        {isLoading && <LoadingScreen onLoadingComplete={() => setIsLoading(false)} />}
      </AnimatePresence>

      {!isLoading && (
        <div className="min-h-screen bg-black text-white overflow-x-hidden">
          <MouseFollower />

          {/* Animated Background */}
          <div className="fixed inset-0 z-0 pointer-events-none">
            <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-black to-slate-950" />
            <motion.div
              className="absolute inset-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 2 }}
            >
              <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
              <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" />
              <div className="absolute top-1/2 right-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl" />
            </motion.div>
          </div>

          {/* Main Content */}
          <div className="relative z-10">
            {/* Hero Section */}
            <section className="min-h-screen flex items-center justify-center px-4 py-20">
              <div className="max-w-7xl mx-auto w-full">
                {/* Header */}
                <motion.div
                  className="mb-20"
                  initial={{ opacity: 0, y: -50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1 }}
                >
                  <motion.h1
                    className="text-6xl md:text-7xl lg:text-8xl font-black mb-6 leading-tight tracking-tight"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1.2, delay: 0.2 }}
                  >
                    <span className="block text-white">let's roar into</span>
                    <span className="block bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                      the wild together.
                    </span>
                  </motion.h1>
                </motion.div>

                {/* Tagline */}
                <motion.div
                  className="mb-20 max-w-4xl"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 0.4 }}
                >
                  <p className="text-lg md:text-xl lg:text-2xl text-slate-300 leading-relaxed mb-4">
                    <span className="font-bold text-white">IN THE WILDERNESS OF CHANGE,</span> OUR WORLD'S VIEW WILL ROAR INTO A NEW TOMORROW AND BEYOND.
                  </p>
                  <p className="text-2xl md:text-3xl text-white font-black">
                    ASTANA
                  </p>
                </motion.div>

                {/* Two Column Layout */}
                <motion.div
                  className="grid md:grid-cols-2 gap-16 items-start"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 0.6 }}
                >
                  {/* Left Column - Contact Info */}
                  <div>
                    <h3 className="text-sm uppercase tracking-widest text-slate-400 mb-8 font-bold">
                      our hideaway
                    </h3>
                    <div className="space-y-6">
                      <motion.a
                        href="mailto:info@astana.kz"
                        className="flex items-start gap-4 group"
                        whileHover={{ x: 10 }}
                      >
                        <Mail className="w-6 h-6 text-cyan-400 flex-shrink-0 mt-1" />
                        <div>
                          <p className="text-slate-400 text-sm mb-1">Email</p>
                          <p className="text-white text-lg hover:text-cyan-400 transition-colors">
                            info@astana.kz
                          </p>
                        </div>
                      </motion.a>

                      <motion.a
                        href="tel:+77172275555"
                        className="flex items-start gap-4 group"
                        whileHover={{ x: 10 }}
                      >
                        <Phone className="w-6 h-6 text-cyan-400 flex-shrink-0 mt-1" />
                        <div>
                          <p className="text-slate-400 text-sm mb-1">Phone</p>
                          <p className="text-white text-lg hover:text-cyan-400 transition-colors">
                            +7 (717) 227-5555
                          </p>
                        </div>
                      </motion.a>

                      <div className="flex items-start gap-4">
                        <MapPin className="w-6 h-6 text-cyan-400 flex-shrink-0 mt-1" />
                        <div>
                          <p className="text-slate-400 text-sm mb-1">Location</p>
                          <p className="text-white text-lg">Astana, Kazakhstan</p>
                        </div>
                      </div>
                    </div>

                    {/* Social Links */}
                    <div className="mt-12">
                      <p className="text-sm uppercase tracking-widest text-slate-400 mb-6 font-bold">
                        Follow Us
                      </p>
                      <div className="flex gap-6">
                        {['LinkedIn', 'Instagram', 'Twitter', 'Facebook'].map((social) => (
                          <motion.a
                            key={social}
                            href="#"
                            className="text-slate-400 hover:text-cyan-400 transition-colors text-sm font-medium"
                            whileHover={{ scale: 1.1, y: -2 }}
                          >
                            {social}
                          </motion.a>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Right Column - Contact Form */}
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-2xl blur-2xl" />
                    <form onSubmit={handleSubmit} className="relative bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 space-y-6">
                      <h3 className="text-2xl font-bold mb-6">Send Us a Message</h3>

                      <div>
                        <label className="block text-sm uppercase tracking-widest text-slate-400 mb-3 font-bold">
                          Name <span className="text-red-500">*</span>
                        </label>
                        <motion.input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white placeholder-slate-600 focus:outline-none focus:border-cyan-400 focus:bg-white/10 transition-all"
                          placeholder="Your name"
                          whileFocus={{ scale: 1.01 }}
                        />
                      </div>

                      <div>
                        <label className="block text-sm uppercase tracking-widest text-slate-400 mb-3 font-bold">
                          Email <span className="text-red-500">*</span>
                        </label>
                        <motion.input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white placeholder-slate-600 focus:outline-none focus:border-cyan-400 focus:bg-white/10 transition-all"
                          placeholder="your@email.com"
                          whileFocus={{ scale: 1.01 }}
                        />
                      </div>

                      <div>
                        <label className="block text-sm uppercase tracking-widest text-slate-400 mb-3 font-bold">
                          Phone
                        </label>
                        <motion.input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white placeholder-slate-600 focus:outline-none focus:border-cyan-400 focus:bg-white/10 transition-all"
                          placeholder="+1 (555) 000-0000"
                          whileFocus={{ scale: 1.01 }}
                        />
                      </div>

                      <div>
                        <label className="block text-sm uppercase tracking-widest text-slate-400 mb-3 font-bold">
                          Company/Organisation
                        </label>
                        <motion.input
                          type="text"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white placeholder-slate-600 focus:outline-none focus:border-cyan-400 focus:bg-white/10 transition-all"
                          placeholder="Your company"
                          whileFocus={{ scale: 1.01 }}
                        />
                      </div>

                      <div>
                        <label className="block text-sm uppercase tracking-widest text-slate-400 mb-3 font-bold">
                          Tell us about your project <span className="text-red-500">*</span>
                        </label>
                        <motion.textarea
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          required
                          rows={5}
                          className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white placeholder-slate-600 focus:outline-none focus:border-cyan-400 focus:bg-white/10 transition-all resize-none"
                          placeholder="Tell us about your vision for Astana..."
                          whileFocus={{ scale: 1.01 }}
                        />
                      </div>

                      <motion.button
                        type="submit"
                        className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold py-3 rounded hover:from-cyan-600 hover:to-blue-600 transition-all flex items-center justify-center gap-2 group"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <span>{submitted ? '✓ Message Sent!' : 'Submit'}</span>
                        {!submitted && <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />}
                      </motion.button>
                    </form>
                  </div>
                </motion.div>
              </div>
            </section>

            {/* Features Section */}
            <section className="py-20 px-4">
              <div className="max-w-7xl mx-auto">
                <motion.div
                  className="text-center mb-16"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                >
                  <h2 className="text-5xl md:text-6xl font-black mb-6">
                    <span className="block text-white">Why</span>
                    <span className="block bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                      Astana?
                    </span>
                  </h2>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                  {[
                    { icon: '🚀', title: 'Rapid Growth', desc: 'One of world\'s fastest-growing cities' },
                    { icon: '🌍', title: 'Strategic Location', desc: 'Bridge between Europe and Asia' },
                    { icon: '🏛️', title: 'Modern Infrastructure', desc: 'World-class facilities and services' },
                    { icon: '🤝', title: 'Multicultural', desc: '150+ nationalities coexist peacefully' }
                  ].map((feature, idx) => (
                    <motion.div
                      key={idx}
                      className="bg-white/5 backdrop-blur border border-white/10 rounded-xl p-8 hover:border-cyan-400/50 transition-colors"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: idx * 0.1 }}
                      whileHover={{ y: -10 }}
                    >
                      <div className="text-5xl mb-4">{feature.icon}</div>
                      <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                      <p className="text-slate-400">{feature.desc}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </section>

            {/* Stats Section */}
            <section className="py-20 px-4 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10 border-y border-white/10">
              <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                  {[
                    { number: '1.4M+', label: 'Population' },
                    { number: '2,000+', label: 'Buildings' },
                    { number: '150+', label: 'Nationalities' },
                    { number: '99%', label: 'Satisfaction' }
                  ].map((stat, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: idx * 0.1 }}
                    >
                      <h3 className="text-3xl md:text-5xl font-black bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-2">
                        {stat.number}
                      </h3>
                      <p className="text-slate-400 text-sm md:text-base">{stat.label}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </section>

            {/* Contact CTA Section */}
            <section className="py-20 px-4">
              <div className="max-w-4xl mx-auto text-center">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                >
                  <h2 className="text-5xl md:text-6xl font-black mb-6">
                    <span className="block text-white">Ready to explore</span>
                    <span className="block bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                      the future?
                    </span>
                  </h2>
                  <p className="text-slate-300 text-lg md:text-xl mb-8 max-w-2xl mx-auto">
                    Connect with us today and discover how Astana can be your next destination for business, living, or investment.
                  </p>
                  <motion.a
                    href="#contact"
                    className="inline-block bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold py-4 px-10 rounded-lg hover:from-cyan-600 hover:to-blue-600 transition-all text-lg"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Get In Touch →
                  </motion.a>
                </motion.div>
              </div>
            </section>

            {/* Gallery Section */}
            <section className="py-20 px-4 bg-slate-900/30">
              <div className="max-w-7xl mx-auto">
                <motion.div
                  className="text-center mb-16"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                >
                  <h2 className="text-5xl md:text-6xl font-black mb-6">
                    <span className="block text-white">Discover</span>
                    <span className="block bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                      The City
                    </span>
                  </h2>
                  <p className="text-slate-300 max-w-2xl mx-auto text-lg">
                    Explore iconic landmarks and modern attractions that define Astana's unique character
                  </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {[
                    { title: 'Baiterek Tower', subtitle: 'Iconic Symbol', img: 'https://images.unsplash.com/photo-1500462918059-b1a0cb175dd1?ixlib=rb-4.0.3' },
                    { title: 'Khan Shatyr', subtitle: 'Modern Marvel', img: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?ixlib=rb-4.0.3' },
                    { title: 'Astana Arena', subtitle: 'Sports Hub', img: 'https://images.unsplash.com/photo-1479158902221-a8beddc51b59?ixlib=rb-4.0.3' },
                    { title: 'Presidential Palace', subtitle: 'Akorda', img: 'https://images.unsplash.com/photo-1518005020951-7348c3926f65?ixlib=rb-4.0.3' },
                    { title: 'Nur Alem', subtitle: 'Energy Sphere', img: 'https://images.unsplash.com/photo-1495472033497-ce84e9c78af0?ixlib=rb-4.0.3' },
                    { title: 'Parks & Gardens', subtitle: 'Green Spaces', img: 'https://images.unsplash.com/photo-1511379938547-c1f69b13d835?ixlib=rb-4.0.3' }
                  ].map((item, idx) => (
                    <motion.div
                      key={idx}
                      className="group relative overflow-hidden rounded-xl h-64 cursor-pointer"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: idx * 0.1 }}
                      whileHover={{ scale: 1.05 }}
                    >
                      <img
                        src={item.img}
                        alt={item.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
                      <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                        <p className="text-sm text-cyan-400 font-bold uppercase tracking-wider mb-2">
                          {item.subtitle}
                        </p>
                        <h3 className="text-2xl font-bold">{item.title}</h3>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </section>

            {/* Footer Section */}
            <section className="py-20 px-4 border-t border-white/10">
              <div className="max-w-7xl mx-auto">
                <motion.div
                  className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                >
                  <div>
                    <h3 className="text-2xl font-bold mb-6">ASTANA</h3>
                    <p className="text-slate-400">
                      The city of the future where tradition meets innovation.
                    </p>
                  </div>

                  <div>
                    <h4 className="text-sm uppercase tracking-widest text-slate-400 mb-6 font-bold">Quick Links</h4>
                    <ul className="space-y-3">
                      {['Home', 'About', 'Contact', 'Media'].map((link) => (
                        <li key={link}>
                          <motion.a
                            href="#"
                            className="text-slate-400 hover:text-cyan-400 transition-colors"
                            whileHover={{ x: 5 }}
                          >
                            {link}
                          </motion.a>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-sm uppercase tracking-widest text-slate-400 mb-6 font-bold">Connect</h4>
                    <div className="flex gap-6">
                      {['LinkedIn', 'Instagram', 'Twitter', 'Facebook'].map((social) => (
                        <motion.a
                          key={social}
                          href="#"
                          className="text-slate-400 hover:text-cyan-400 transition-colors"
                          whileHover={{ scale: 1.2 }}
                        >
                          {social.slice(0, 3)}
                        </motion.a>
                      ))}
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  className="border-t border-white/10 pt-8 text-center text-slate-500"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                >
                  <p>&copy; 2024 Astana Presentation. All rights reserved.</p>
                </motion.div>
              </div>
            </section>
          </div>
        </div>
      )}
    </>
  );
}
