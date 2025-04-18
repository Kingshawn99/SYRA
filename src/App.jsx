import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Footer from './Footer'

function PreviewImage() {
  return (
    <div className="w-full lg:flex-1 lg:pl-20 relative lg:mt-[-40px] lg:max-w-[820px] lg:ml-[-12%]">
      <div className="absolute -top-12 -right-12 w-[120%] opacity-20 blur-sm hidden lg:block">
        <video src="/Syra.mp4" alt="Background Preview" className="w-full" autoPlay loop muted playsInline />
      </div>
      <div className="relative z-10 lg:mt-[40px] lg:ml-[-140px] max-w-[820px]">
        {/* Preview Video */}
        <video src="/Syra.mp4" alt="SYRA Extension Preview" className="w-full" autoPlay loop muted playsInline />
      </div>
    </div>
  );
}

// Add new animation variants at the top with other variants
const pageTransitionVariants = {
  exit: {
    opacity: 0,
    transition: { duration: 0.5 }
  }
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.3
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      type: "spring",
      damping: 12,
      stiffness: 100
    }
  }
};

const logoVariants = {
  hidden: { opacity: 0, scale: 0.8, rotate: -180 },
  visible: { 
    opacity: 1, 
    scale: 1, 
    rotate: 0,
    transition: {
      type: "spring",
      damping: 20,
      stiffness: 100
    }
  }
};

const headerVariants = {
  hidden: { y: -50, opacity: 0 },
  visible: { 
    y: 0, 
    opacity: 1,
    transition: {
      type: "spring",
      damping: 20,
      stiffness: 100,
      delay: 0.2
    }
  }
};

// Update the radial wave animation variant
const radialWaveVariants = {
  animate: {
    scale: [1, 1.4, 1],
    opacity: [0.4, 0, 0.4],
    transition: {
      duration: 1.5,
      repeat: Infinity,
      ease: [0.4, 0, 0.2, 1] // Custom easing for sharp wave effect
    }
  }
};

// Add these new animation variants
const mainContentVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.6, -0.05, 0.01, 0.99]
    }
  }
};

const staggerContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3
    }
  }
};

// Update buttonHoverVariants
const buttonHoverVariants = {
  hover: {
    scale: 1.05,
    boxShadow: "0 0 20px rgba(23,78,132,0.5)",
    transition: {
      duration: 0.2,
      ease: "easeInOut"
    }
  },
  tap: {
    scale: 0.95
  }
};

const cardHoverVariants = {
  hover: {
    scale: 1.02,
    boxShadow: "0 20px 30px rgba(23,78,132,0.2)",
    y: -5,
    transition: {
      duration: 0.2,
      ease: "easeInOut"
    }
  }
};

// Update planCardVariants to remove color change
const planCardVariants = {
  initial: { opacity: 0, y: 50 },
  animate: (index) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay: index * 0.2,
      ease: [0.4, 0, 0.2, 1]
    }
  }),
  hover: {
    scale: 1.03,
    y: -10,
    transition: {
      duration: 0.3,
      ease: "easeInOut"
    }
  }
};

// Add new FAQ animation variants
const faqPanelVariants = {
  closed: {
    height: 0,
    opacity: 0,
    transition: {
      height: { duration: 0.3, ease: [0.4, 0, 0.2, 1] },
      opacity: { duration: 0.2 }
    }
  },
  open: {
    height: "auto",
    opacity: 1,
    transition: {
      height: { duration: 0.3, ease: [0.4, 0, 0.2, 1] },
      opacity: { duration: 0.3, delay: 0.1 }
    }
  }
};

// Add new FAQ hover variants
const faqCardHoverVariants = {
  hover: {
    backgroundColor: "rgba(23,78,132,0.1)",
    transition: {
      duration: 0.2,
      ease: "easeInOut"
    }
  }
};

// Add new FAQ box hover variants
const faqBoxHoverVariants = {
  initial: {
    boxShadow: "0 0 0 rgba(23,78,132,0)",
    scale: 1
  },
  hover: {
    boxShadow: "0 0 30px rgba(23,78,132,0.15)",
    scale: 1.02,
    transition: {
      duration: 0.3,
      ease: "easeInOut"
    }
  }
};

// Add new compatible box hover variants
const compatibleBoxVariants = {
  initial: {
    boxShadow: "0 0 0 rgba(23,78,132,0)",
    scale: 1
  },
  hover: {
    boxShadow: "0 0 30px rgba(23,78,132,0.15)",
    scale: 1.02,
    transition: {
      duration: 0.3,
      ease: "easeInOut"
    }
  }
};

// Add loadingVariants if not already defined
const loadingVariants = {
  animate: {
    rotate: 360,
    transition: {
      duration: 1,
      repeat: Infinity,
      ease: "linear"
    }
  }
};

// Add social links array
const socialLinks = [
  { icon: "fab fa-twitter", label: "Twitter", url: "https://x.com/Syra_Sol" },
  { icon: "fab fa-telegram-plane", label: "Telegram", url: "https://t.me/Syrasol" }
];

function App() {
  const [openFaq, setOpenFaq] = useState(null)
  const [isLoading, setIsLoading] = useState(false)

  const faqItems = [
    {
      question: "What is SYRA?",
      answer: "SYRA is a powerful browser extension designed for crypto traders and analysts. It detects token bundles and traces developer activity across multiple projects, helping users assess risk and identify potential rugs early. By combining real-time bundle analysis with historical dev tracking, SYRA gives you the edge in a fast-moving market."
    },
    {
      question: "Do I have to pay for SYRA?",
      answer: "No, SYRA is a completely free extension offered to our users. However tokens will have some use case in the near future"
    },
    {
      question: "How can I buy $SYRA?",
      answer: "You can buy $SYRA directly through any platform that offers the ability to swap or buy solana based tokens"
    }
  ]

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className="min-h-screen w-full bg-[#15171C] px-4 sm:px-6 md:px-8 lg:px-20 py-4 sm:py-6 lg:py-12 relative overflow-hidden"
      style={{
        backgroundImage: "url('/Sback.PNG')",
        backgroundSize: "contain",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed"
      }}
    >
      {/* Background Gradients */}
      <div className="absolute inset-0 z-0 bg-[#15171C]/90">
        {/* Ellipse 1 */}
        <div 
          className="absolute w-[761px] h-[1041px] left-[618px] top-[160px]
          bg-[rgba(16,35,48,0.9)] blur-[147px] rotate-[-28.08deg]"
        ></div>

        {/* Ellipse 2 */}
        <div 
          className="absolute w-[641px] h-[917px] left-[-499px] top-[1160px]
          bg-[rgba(16,35,48,0.9)] blur-[147px] rotate-[-28.08deg]"
        ></div>

        {/* Ellipse 3 */}
        <div 
          className="absolute w-[641px] h-[917px] left-[1247px] top-[1681px]
          bg-[rgba(16,35,48,0.9)] blur-[147px] rotate-[23.68deg]"
        ></div>

        {/* Rectangle 1 - Header Overlay */}
        <div 
          className="absolute w-full h-[106px] left-0 top-0
          bg-[#15171C] opacity-50"
        ></div>
      </div>

      {/* Content with relative positioning */}
      <motion.div 
        className="relative z-10"
        initial="hidden"
        animate="visible"
        variants={staggerContainerVariants}
      >
        {/* Header */}
        <motion.header 
          className="flex justify-between items-center mb-8 sm:mb-12 lg:mb-24"
          variants={headerVariants}
        >
          <motion.div 
            className="flex items-center gap-2 sm:gap-3"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <motion.img 
              src="/Syra_PNG.png" 
              alt="SYRA" 
              className="w-32 h-12"
              initial={{ rotate: -180 }}
              animate={{ rotate: 0 }}
              transition={{ duration: 0.5 }}
            />
          </motion.div>

          {/* Add social buttons */}
          <div className="flex items-center gap-4">
            {socialLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/70 hover:text-white transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <i className={`${link.icon} text-2xl`}></i>
              </motion.a>
            ))}
          </div>
        </motion.header>

        {/* Main Content */}
        <motion.div 
          className="flex flex-col lg:flex-row lg:mt-[100px] justify-between items-center lg:items-start gap-6 sm:gap-8 lg:gap-0"
          variants={mainContentVariants}
        >
          {/* Left Section with stagger effect */}
          <motion.div 
            className="w-full lg:flex-1 lg:max-w-[585px] lg:ml-[110px] text-center lg:text-left px-4 sm:px-0"
            variants={staggerContainerVariants}
          >
            <motion.h1 
              className="text-white/70 font-['Montserrat'] text-base sm:text-lg lg:text-xl font-light mb-2 sm:mb-3"
              variants={itemVariants}
            >
              SYRA - AI Extension <span className="text-white/70 font-mono ml-2">CA: LMAOOOOOO</span>
            </motion.h1>
            <motion.h2 
              className="text-white font-['Inter'] text-[16px] sm:text-[22px] md:text-[28px] lg:text-[32px] 
                font-bold leading-[1.4] tracking-normal mb-4 sm:mb-6 lg:mb-8 lg:max-w-[800px]"
              variants={itemVariants}
            >
              The all-in-one extension for bundle detection and developer tracking.
              <br />
              <span className="text-[14px] sm:text-[18px] md:text-[24px] lg:text-[28px] font-normal">
                Find token bundles in real time, break down bundle data, and cross-reference dev wallets with previous token deployments. SYRA empowers users to spot patterns, detect risks, and make informed decisions in real time.
              </span>
            </motion.h2>
            <motion.div
              className="w-full"
            >
              <motion.button
                variants={buttonHoverVariants}
                whileHover="hover"
                whileTap="tap"
                onClick={async () => {
                  setIsLoading(true);
                  await new Promise(resolve => setTimeout(resolve, 2000));
                  window.open('https://chromewebstore.google.com/detail/syra-bundle-and-rug-sniff/flkiopombnndhpfngppjjdogjcahbkji', '_blank');
                  setIsLoading(false);
                }}
                className="bg-[#E8E8E8] w-[280px] py-3 sm:py-3.5 rounded-lg font-['Inter'] text-base sm:text-lg mb-12 sm:mb-16 lg:mb-32 font-bold relative group overflow-hidden"
                disabled={isLoading}
              >
                <motion.div
                  className="absolute inset-0 bg-[#620E0F] transform origin-center -z-0"
                  initial={{ scale: 0 }}
                  whileHover={{ scale: 1 }}
                  transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                  style={{
                    clipPath: "circle(0% at 50% 50%)"
                  }}
                />

                {/* Shine effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full"
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                />

                {isLoading ? (
                  <motion.div 
                    className="flex items-center justify-center gap-2"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                  >
                    <motion.div
                      className="w-5 h-5 border-2 border-[#174E84] border-t-transparent rounded-full"
                      animate={{ 
                        rotate: 360,
                        transition: {
                          duration: 1,
                          repeat: Infinity,
                          ease: "linear"
                        }
                      }}
                    />
                    <span className="relative z-10 transition-colors duration-200">
                      Installing...
                    </span>
                  </motion.div>
                ) : (
                  <div className="flex items-center justify-center gap-2">
                    <img src="/chromeicon.png" alt="Chrome" className="w-5 h-5" />
                    <span className="relative z-10 transition-colors duration-200">
                      Install on Chrome
                    </span>
                  </div>
                )}
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Right Section - Extension Preview */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <PreviewImage />
          </motion.div>
        </motion.div>

        {/* Compatible Section */}
        <motion.div 
          className="mt-8 sm:mt-16 w-full"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-white/70 font-['Teknaf'] text-xs sm:text-sm font-light mb-4 sm:mb-6 text-center tracking-wider uppercase">
            KEY SYRA FEATURES (Dev tracker)
          </h3>
          <div className="flex justify-center gap-4 mb-8">
            <img src="/SS1.png" alt="SYRA Preview" className="w-[200px] sm:w-[300px] md:w-[400px] h-auto rounded-lg shadow-lg" />
            <img src="/ss3.png" alt="SYRA Preview" className="w-[200px] sm:w-[300px] md:w-[400px] h-auto rounded-lg shadow-lg" />
          </div>
          <h3 className="text-white/70 font-['Teknaf'] text-xs sm:text-sm font-light mb-4 sm:mb-6 text-center">
            COMPATIBLE WITH
          </h3>
          <div className="w-full lg:absolute lg:left-[calc(50%-599px)] lg:w-[1198px] h-[80px] sm:h-[100px] lg:h-[145px] 
            flex justify-between items-center px-4 sm:px-8 lg:px-16 
            bg-gradient-to-b from-[rgba(37,37,41,0.3)] to-[rgba(28,28,31,0.3)] border border-[#464646] rounded-[20px] sm:rounded-[30px]
            relative group overflow-hidden"
          >
            {/* Ambient glow effect */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-b from-[#620E0F] to-[#FDE86B] opacity-0 group-hover:opacity-100"
              transition={{ duration: 0.3 }}
            />

            {/* Border glow */}
            <motion.div
              className="absolute inset-0 rounded-[20px] sm:rounded-[30px] border border-[#464646] opacity-0 group-hover:opacity-100"
              style={{
                background: "linear-gradient(to bottom, rgba(23,78,132,0.1), transparent)"
              }}
              transition={{ duration: 0.3 }}
            />

            {/* Shine effect */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full"
              transition={{ duration: 1, ease: "easeInOut" }}
            />

            {/* Content */}
            <div className="flex justify-between items-center w-full gap-2 sm:gap-4 lg:gap-8 relative z-10">
              {/* Update image hover effects */}
              {['pill', 'bull', 'dex-screener', 'octopus', 'gmgn'].map((img, index) => (
                <motion.img
                  key={img}
                  src={`/${img}.png`}
                  alt={img}
                  className="h-[30px] sm:h-[40px] lg:h-[75px]"
                  whileHover={{ 
                    scale: 1.1,
                    filter: "brightness(1.2)",
                    transition: { duration: 0.2 }
                  }}
                  animate={{
                    y: [0, -5, 0],
                    transition: {
                      duration: 2,
                      repeat: Infinity,
                      delay: index * 0.2,
                      ease: "easeInOut"
                    }
                  }}
                />
              ))}
            </div>
          </div>
        </motion.div>

        {/* FAQ Section */}
        <motion.section 
          className="mt-32 sm:mt-40 lg:mt-48 mb-8 sm:mb-12 max-w-[1200px] mx-auto px-4 lg:px-0"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <motion.div 
            className="bg-gradient-to-b from-[rgba(37,37,41,0.3)] to-[rgba(28,28,31,0.3)] 
              border border-[#464646] rounded-[20px] sm:rounded-[30px] p-6 sm:p-8 lg:p-16
              relative group overflow-hidden"
            variants={faqBoxHoverVariants}
            initial="initial"
            whileHover="hover"
          >
            {/* Ambient glow effect */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-b from-[#620E0F] to-[#FDE86B] opacity-0 group-hover:opacity-100"
              transition={{ duration: 0.3 }}
            />

            {/* Border glow */}
            <motion.div
              className="absolute inset-0 rounded-[20px] sm:rounded-[30px] border border-[#464646] opacity-0 group-hover:opacity-100"
              style={{
                background: "linear-gradient(to bottom, rgba(23,78,132,0.1), transparent)"
              }}
              transition={{ duration: 0.3 }}
            />

            {/* Shine effect */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full"
              transition={{ duration: 1, ease: "easeInOut" }}
            />

            {/* Content */}
            <div className="relative z-10">
              <motion.h2 
                className="text-white font-['Teknaf'] text-[32px] sm:text-[40px] text-center mb-8 sm:mb-12"
                animate={{ scale: 1 }}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                FAQ
              </motion.h2>
              <div className="space-y-3 sm:space-y-4">
                {faqItems.map((item, index) => (
                  <motion.div
                    key={index}
                    className="w-full bg-gradient-to-b from-[rgba(37,37,41,0.6)] to-[rgba(28,28,31,0.6)] 
                      rounded-[20px] border border-[#464646]/50 overflow-hidden transition-all duration-300
                      hover:border-[#464646] hover:shadow-[0_0_15px_rgba(70,70,70,0.1)] relative group"
                    animate={openFaq === index ? {
                      background: "linear-gradient(180deg, rgba(37,37,41,0.8) 0%, rgba(28,28,31,0.8) 100%)"
                    } : {}}
                    whileHover={{
                      scale: 1.01,
                      transition: { duration: 0.2 }
                    }}
                  >
                    {/* Hover gradient background */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-[#620E0F] via-[#FDE86B] to-[#620E0F] opacity-0 group-hover:opacity-100"
                      transition={{ duration: 0.3 }}
                    />

                    <motion.button
                      onClick={() => setOpenFaq(openFaq === index ? null : index)}
                      className="w-full text-white/90 font-['Inter'] text-left px-6 sm:px-8 py-4 sm:py-6
                        flex justify-between items-center text-base sm:text-lg group relative
                        hover:text-white transition-all"
                      variants={faqCardHoverVariants}
                      whileHover="hover"
                    >
                      {/* Question text with hover effect */}
                      <motion.span
                        animate={{ color: openFaq === index ? "#fff" : "rgba(255,255,255,0.9)" }}
                        transition={{ duration: 0.2 }}
                        className="relative z-10 group-hover:translate-x-1 transition-transform duration-200"
                      >
                        {item.question}
                      </motion.span>

                      {/* Icon with enhanced animation */}
                      <motion.i 
                        className="fas fa-chevron-down text-sm relative z-10"
                        animate={{ 
                          rotate: openFaq === index ? 180 : 0,
                          color: openFaq === index ? "#fff" : "rgba(255,255,255,0.6)"
                        }}
                        transition={{ duration: 0.3, ease: "anticipate" }}
                        style={{
                          transformOrigin: "center"
                        }}
                      />

                      {/* Shine effect on hover */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full"
                        transition={{ duration: 0.6, ease: "easeInOut" }}
                      />
                    </motion.button>

                    {/* Content panel with enhanced animations */}
                    <motion.div
                      initial="closed"
                      animate={openFaq === index ? "open" : "closed"}
                      variants={faqPanelVariants}
                    >
                      {/* Animated divider */}
                      <motion.div 
                        className="h-[1px] bg-gradient-to-r from-[#464646]/0 via-[#464646]/50 to-[#464646]/0"
                        animate={{
                          scaleX: openFaq === index ? 1 : 0,
                          opacity: openFaq === index ? 1 : 0
                        }}
                        transition={{ duration: 0.3 }}
                      />

                      {/* Answer content with slide animation */}
                      <motion.div 
                        className="px-8 py-6 text-white/80 font-['Inter'] text-base relative z-10"
                        initial={{ y: -10, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.3, delay: 0.1 }}
                      >
                        {item.answer}
                      </motion.div>
                    </motion.div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.section>
      </motion.div>

      <Footer />
    </motion.div>
  )
}

export default App
