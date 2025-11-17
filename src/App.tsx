import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { LoadingScreen } from './components/LoadingScreen';
import { AnimatedBackground } from './components/AnimatedBackground';
import { PlaceCard } from './components/PlaceCard';
import { InfoSection } from './components/InfoSection';
import { KhanShatyrSection } from './components/KhanShatyrSection';
import { MouseFollower } from './components/MouseFollower';
import { ParallaxText } from './components/ParallaxText';
import { 
  Building2, 
  ShoppingBag, 
  Music, 
  Trees, 
  Hotel, 
  Utensils,
  MapPin,
  TrendingUp,
  Users,
  Landmark,
  Train,
  Plane,
  Bus,
  Wifi,
  Zap,
  Heart,
  Camera,
  Coffee,
  ChevronDown,
  Globe
} from 'lucide-react';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = docHeight > 0 ? scrollTop / docHeight : 0;
      setScrollProgress(scrollPercent);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const touristPlaces = [
    {
      title: 'Байтерек',
      description: 'Символ Астаны высотой 105 метров. Смотровая площадка на высоте 97 метров предлагает захватывающий панорамный вид на весь город.',
      imageUrl: 'https://images.unsplash.com/photo-1677842296338-eeb8c866d22c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxCYXl0ZXJlayUyMFRvd2VyJTIwQXN0YW5hfGVufDF8fHx8MTc2MzM5NDMxMXww&ixlib=rb-4.1.0&q=80&w=1080',
      icon: Landmark
    },
    {
      title: 'Хан Шатыр',
      description: 'Крупнейшее шатровое сооружение в мире. Внутри находится торгово-развлекательный центр с тропическим пляжем и аквапарком.',
      imageUrl: 'https://images.unsplash.com/photo-1684453728966-1a89831fe240?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxLaGFuJTIwU2hhdHlyJTIwQXN0YW5hfGVufDF8fHx8MTc2MzM5NDMxMnww&ixlib=rb-4.1.0&q=80&w=1080',
      icon: Building2
    },
    {
      title: 'Национальный музей',
      description: 'Один из крупнейших музеев Центральной Азии, представляющий историю и культуру Казахстана от древности до наших дней.',
      imageUrl: 'https://images.unsplash.com/photo-1738958047425-dd5dbefa2f78?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25jZXJ0JTIwaGFsbCUyMGludGVyaW9yfGVufDF8fHx8MTc2MzM5NTYxNXww&ixlib=rb-4.1.0&q=80&w=1080',
      icon: Camera
    }
  ];

  const shoppingMalls = [
    {
      title: 'Мега Силк Вей',
      description: 'Крупнейший торговый центр в Казахстане площадью 180,000 м². Более 300 магазинов, кинотеатр IMAX, боулинг и ледовый каток.',
      imageUrl: 'https://images.unsplash.com/photo-1694064500485-405140238c9c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzaG9wcGluZyUyMG1hbGwlMjBpbnRlcmlvcnxlbnwxfHx8fDE3NjMzNzE3OTB8MA&ixlib=rb-4.1.0&q=80&w=1080',
      icon: ShoppingBag
    },
    {
      title: 'Сарыарка',
      description: 'Современный ТРЦ в центре города с премиальными брендами, ресторанами высокой кухни и развлекательными зонами.',
      imageUrl: 'https://images.unsplash.com/photo-1642287040066-2bd340523289?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBjaXR5JTIwbmlnaHR8ZW58MXx8fHwxNzYzMzYyODA1fDA&ixlib=rb-4.1.0&q=80&w=1080',
      icon: Coffee
    },
    {
      title: 'Керуен',
      description: 'Торгово-развлекательный комплекс с аквапарком "Алау", боулингом, кинотеатрами и широким выбором магазинов.',
      imageUrl: 'https://images.unsplash.com/photo-1628630472000-50abc274e3d6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBwYXJrfGVufDF8fHx8MTc2MzM5NTYxNnww&ixlib=rb-4.1.0&q=80&w=1080',
      icon: Music
    }
  ];

  const hotels = [
    {
      title: 'The Ritz-Carlton',
      description: 'Роскошный 5-звездочный отель с панорамным видом на город, спа-центром мирового класса и изысканными ресторанами.',
      imageUrl: 'https://images.unsplash.com/photo-1561501900-3701fa6a0864?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBob3RlbHxlbnwxfHx8fDE3NjMzOTU2MTZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
      icon: Hotel
    },
    {
      title: 'Rixos President',
      description: 'Премиальный отель с уникальным дизайном, включающий множество ресторанов, конференц-залы и wellness-центр.',
      imageUrl: 'https://images.unsplash.com/photo-1666032119084-82351976a922?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXN0YXVyYW50JTIwZWxlZ2FudHxlbnwxfHx8fDE3NjMzMzE2NzZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
      icon: Utensils
    },
    {
      title: 'Hilton Astana',
      description: 'Международный отель премиум-класса с современным дизайном, конференц-залами мирового уровня и роскошным сервисом.',
      imageUrl: 'https://images.unsplash.com/photo-1628630472000-50abc274e3d6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBwYXJrfGVufDF8fHx8MTc2MzM5NTYxNnww&ixlib=rb-4.1.0&q=80&w=1080',
      icon: Trees
    }
  ];

  return (
    <>
      <AnimatePresence>
        {isLoading && <LoadingScreen onLoadingComplete={() => setIsLoading(false)} />}
      </AnimatePresence>

      {!isLoading && (
        <div className="min-h-screen text-white overflow-x-hidden bg-slate-950">
          <MouseFollower />
          
          {/* Progress Bar */}
          <motion.div
            className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 z-50"
            style={{ scaleX: scrollProgress }}
            transition={{ duration: 0.1 }}
          />

          {/* ===== HERO SECTION ===== */}
          <section className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden pt-20">
            <AnimatedBackground />
            
            {/* Animated Gradient Orbs */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <motion.div
                className="absolute w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl"
                animate={{
                  x: [0, 100, -100, 0],
                  y: [0, -100, 100, 0],
                }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                style={{ top: '10%', left: '10%' }}
              />
              <motion.div
                className="absolute w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"
                animate={{
                  x: [0, -100, 100, 0],
                  y: [0, 100, -100, 0],
                }}
                transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
                style={{ bottom: '10%', right: '10%' }}
              />
            </div>

            <div className="relative z-10 text-center max-w-5xl mx-auto">
              {/* Badge */}
              <motion.div
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-400/30 backdrop-blur-md mb-8"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                whileHover={{ scale: 1.05 }}
              >
                <Zap className="w-4 h-4 text-cyan-400" />
                <span className="text-cyan-300 font-medium">Experience the Future</span>
              </motion.div>

              {/* Main Title */}
              <motion.h1
                className="text-7xl md:text-8xl font-black mb-8 bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 via-blue-400 to-purple-500"
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1, ease: 'easeOut' }}
              >
                ASTANA
              </motion.h1>

              {/* Subtitle */}
              <motion.p
                className="text-xl md:text-2xl text-slate-300 mb-12 leading-relaxed"
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1, delay: 0.2, ease: 'easeOut' }}
              >
                Where tradition meets innovation. Discover the beating heart of modern Kazakhstan.
              </motion.p>

              {/* CTA with animated background */}
              <motion.div
                className="relative inline-block"
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1, delay: 0.4 }}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg blur"
                  animate={{ opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                <motion.button
                  className="relative px-8 py-4 bg-slate-950 rounded-lg font-semibold overflow-hidden group"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="relative z-10 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                    Explore Now
                  </span>
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-lg"
                    animate={{ opacity: [0, 1, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  />
                </motion.button>
              </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
              className="absolute bottom-8 left-1/2 -translate-x-1/2"
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <ChevronDown className="w-8 h-8 text-cyan-400" />
            </motion.div>
          </section>

          {/* ===== ABOUT SECTION ===== */}
          <section className="relative py-32 px-4 overflow-hidden">
            <div className="max-w-6xl mx-auto">
              <motion.div
                className="text-center mb-20"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-5xl md:text-6xl font-black mb-6 bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 to-blue-500">
                  The Capital Reimagined
                </h2>
                <p className="text-xl text-slate-400 max-w-2xl mx-auto">
                  Astana represents a bold vision: a modern metropolis that honors Kazakhstan's rich heritage while embracing cutting-edge innovation and technology.
                </p>
              </motion.div>

              {/* Stats Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  { icon: Globe, value: '1.4M+', label: 'Population' },
                  { icon: Building2, value: '2,000+', label: 'Modern Buildings' },
                  { icon: Users, value: '150+', label: 'Nationalities' },
                ].map((stat, idx) => (
                  <motion.div
                    key={idx}
                    className="relative p-8 rounded-2xl bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-cyan-400/20 backdrop-blur-md overflow-hidden group"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: idx * 0.1 }}
                    whileHover={{ y: -10, borderColor: 'rgba(34, 211, 238, 0.5)' }}
                  >
                    {/* Animated background gradient */}
                    <motion.div
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-br from-cyan-500/5 to-blue-500/5 transition-opacity duration-500"
                    />
                    <div className="relative z-10">
                      <stat.icon className="w-12 h-12 text-cyan-400 mb-4" />
                      <div className="text-4xl font-black bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 to-blue-400 mb-2">
                        {stat.value}
                      </div>
                      <div className="text-slate-400">{stat.label}</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Parallax Text Divider */}
          <div className="py-16 overflow-hidden">
            <ParallaxText baseVelocity={-1}>АСТАНА • ASTANA • АСТАНА</ParallaxText>
          </div>

          {/* Khan Shatyr Interactive Section */}
          <KhanShatyrSection />

          {/* Parallax Text Divider */}
          <div className="py-16 overflow-hidden">
            <ParallaxText baseVelocity={1}>ГОРОД БУДУЩЕГО • CITY OF THE FUTURE</ParallaxText>
          </div>

          {/* Tourist Places */}
          <section id="places" className="py-20 px-4 relative">
            <div className="max-w-7xl mx-auto">
              <motion.div
                className="text-center mb-16"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <motion.h2
                  className="mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  Туристические места
                </motion.h2>
                <motion.p
                  className="text-slate-300 max-w-3xl mx-auto text-xl"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                >
                  Откройте для себя уникальные архитектурные шедевры и культурные достопримечательности столицы
                </motion.p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {touristPlaces.map((place, index) => (
                  <PlaceCard key={index} {...place} delay={index * 0.1} />
                ))}
              </div>
            </div>
          </section>

          {/* Shopping Malls */}
          <section className="py-20 px-4 relative">
            <div className="max-w-7xl mx-auto">
              <motion.div
                className="text-center mb-16"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <motion.h2
                  className="mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400 bg-clip-text text-transparent"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  Торгово-развлекательные центры
                </motion.h2>
                <motion.p
                  className="text-slate-300 max-w-3xl mx-auto text-xl"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                >
                  Современные ТРЦ с мировыми брендами, развлечениями и ресторанами
                </motion.p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {shoppingMalls.map((mall, index) => (
                  <PlaceCard key={index} {...mall} delay={index * 0.1} />
                ))}
              </div>
            </div>
          </section>

          {/* Hotels & Restaurants */}
          <section className="py-20 px-4 relative">
            <div className="max-w-7xl mx-auto">
              <motion.div
                className="text-center mb-16"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <motion.h2
                  className="mb-6 bg-gradient-to-r from-orange-400 via-red-400 to-pink-400 bg-clip-text text-transparent"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  Гостиницы и рестораны
                </motion.h2>
                <motion.p
                  className="text-slate-300 max-w-3xl mx-auto text-xl"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                >
                  Роскошные отели и рестораны мирового класса для незабываемого отдыха
                </motion.p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {hotels.map((hotel, index) => (
                  <PlaceCard key={index} {...hotel} delay={index * 0.1} />
                ))}
              </div>
            </div>
          </section>

          {/* Infrastructure */}
          <section id="infrastructure" className="py-20 px-4 relative">
            <div className="max-w-7xl mx-auto">
              <motion.div
                className="text-center mb-16"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <motion.h2
                  className="mb-6 bg-gradient-to-r from-green-400 via-emerald-400 to-teal-400 bg-clip-text text-transparent"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  Инфраструктура города
                </motion.h2>
                <motion.p
                  className="text-slate-300 max-w-3xl mx-auto text-xl"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                >
                  Современная инфраструктура для комфортной жизни и развития
                </motion.p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <InfoSection
                  icon={Train}
                  title="Транспорт"
                  items={[
                    'Международный аэропорт Нурсултан Назарбаев',
                    'Современная система общественного транспорта',
                    'Развитая сеть автомобильных дорог',
                    'Железнодорожный вокзал с высокоскоростными поездами'
                  ]}
                  delay={0}
                />

                <InfoSection
                  icon={Wifi}
                  title="Цифровые технологии"
                  items={[
                    'Бесплатный Wi-Fi в общественных местах',
                    'Система "Умный город"',
                    'Электронное правительство',
                    '5G покрытие в центральных районах'
                  ]}
                  delay={0.1}
                />

                <InfoSection
                  icon={Heart}
                  title="Здравоохранение"
                  items={[
                    'Современные медицинские центры',
                    'Клиники международного уровня',
                    'Специализированные госпитали',
                    'Центры диагностики с новейшим оборудованием'
                  ]}
                  delay={0.2}
                />

                <InfoSection
                  icon={Building2}
                  title="Образование"
                  items={[
                    'Назарбаев Университет',
                    'Международные школы',
                    'Научно-исследовательские центры',
                    'Современные библиотеки и медиатеки'
                  ]}
                  delay={0}
                />

                <InfoSection
                  icon={Trees}
                  title="Парки и отдых"
                  items={[
                    'Центральный парк с велодорожками',
                    'Набережная реки Есиль',
                    'Ботанический сад',
                    'Спортивные комплексы и стадионы'
                  ]}
                  delay={0.1}
                />

                <InfoSection
                  icon={Zap}
                  title="Экология"
                  items={[
                    'Программа "Зеленая столица"',
                    'Солнечные и ветровые электростанции',
                    'Система раздельного сбора отходов',
                    'Экологически чистый общественный транспорт'
                  ]}
                  delay={0.2}
                />
              </div>
            </div>
          </section>

          {/* Why Astana */}
          <section className="py-20 px-4 relative">
            <div className="max-w-6xl mx-auto">
              <motion.div
                className="p-12 rounded-3xl bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10 backdrop-blur-xl border border-blue-400/20"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                whileHover={{ scale: 1.02 }}
              >
                <motion.h2
                  className="text-center mb-12 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"
                  whileHover={{ scale: 1.05 }}
                >
                  Почему Астана?
                </motion.h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <motion.div
                    className="text-center"
                    whileHover={{ y: -10 }}
                    transition={{ duration: 0.3 }}
                  >
                    <motion.div
                      className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-blue-500/20 flex items-center justify-center"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      <TrendingUp className="w-8 h-8 text-blue-400" />
                    </motion.div>
                    <h3 className="mb-3 text-blue-400">Быстрое развитие</h3>
                    <p className="text-slate-300">
                      Один из самых быстрорастущих городов мира с современной инфраструктурой
                    </p>
                  </motion.div>

                  <motion.div
                    className="text-center"
                    whileHover={{ y: -10 }}
                    transition={{ duration: 0.3 }}
                  >
                    <motion.div
                      className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-purple-500/20 flex items-center justify-center"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      <Users className="w-8 h-8 text-purple-400" />
                    </motion.div>
                    <h3 className="mb-3 text-purple-400">Многонациональность</h3>
                    <p className="text-slate-300">
                      Город, где встречаются культуры и традиции разных народов
                    </p>
                  </motion.div>

                  <motion.div
                    className="text-center"
                    whileHover={{ y: -10 }}
                    transition={{ duration: 0.3 }}
                  >
                    <motion.div
                      className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-pink-500/20 flex items-center justify-center"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      <Plane className="w-8 h-8 text-pink-400" />
                    </motion.div>
                    <h3 className="mb-3 text-pink-400">Транспортный хаб</h3>
                    <p className="text-slate-300">
                      Стратегическое расположение между Европой и Азией
                    </p>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </section>

          {/* Footer */}
          <footer className="py-16 px-4 relative border-t border-slate-800/50">
            <motion.div
              className="max-w-7xl mx-auto text-center"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <motion.h3
                className="mb-4 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"
                whileHover={{ scale: 1.05 }}
              >
                АСТАНА
              </motion.h3>
              <p className="text-slate-400 mb-6 text-lg">
                Город будущего, который создается сегодня
              </p>
              <motion.div
                className="flex gap-6 justify-center text-slate-500"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <motion.p whileHover={{ color: '#60a5fa', scale: 1.1 }}>
                  © 2024 Astana Presentation
                </motion.p>
              </motion.div>
            </motion.div>
          </footer>
        </div>
      )}
    </>
  );
}