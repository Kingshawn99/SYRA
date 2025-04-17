import { motion } from 'framer-motion';

const Footer = () => {
  const socialLinks = [];

  return (
    <motion.footer 
      className="mt-24 pb-8 relative z-10"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    >
      <div className="max-w-[1200px] mx-auto px-4 lg:px-0">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 border-t border-white/10 pt-8">
          {/* Logo and Copyright */}
          <div className="flex items-center gap-4">
            <img src="/Syra_PNG.png" alt="SYRA" className="w-24 h-8" />
            <span className="text-white/50 font-['Inter'] text-sm">
              © 2025 SYRA. All rights reserved.
            </span>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-6">
            {socialLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/50 hover:text-white transition-colors group"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <i className={`${link.icon} text-lg group-hover:text-[#174E84]`}></i>
              </motion.a>
            ))}
          </div>

          {/* Links */}
          <div className="flex items-center gap-6">
            <motion.a
              href="#"
              className="text-white/50 hover:text-white text-sm font-['Inter'] transition-colors"
              whileHover={{ scale: 1.05 }}
            >
              Terms of Service
            </motion.a>
            <motion.a
              href="#"
              className="text-white/50 hover:text-white text-sm font-['Inter'] transition-colors"
              whileHover={{ scale: 1.05 }}
            >
              Privacy Policy
            </motion.a>
          </div>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer; 