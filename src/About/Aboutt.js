import { motion } from "framer-motion";

export default function Aboutt() {
  return (
    <div
      className="relative w-full h-[500px] mt-20 bg-cover bg-center grid grid-cols-1 md:grid-cols-2 items-center"
      style={{ backgroundImage: "url('./assets/images/section_bg03.png')" }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-35" />

      <div />

      <motion.div
        initial={{ opacity: 0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.65, ease: "easeOut" }}
        className="relative z-10 px-6 md:px-16 max-w-lg"
      >
        <p className="section-label" style={{ color: "#ff5600" }}>
          Stay in the Loop
        </p>
        <h2 className="text-3xl md:text-4xl font-bold leading-snug mt-2 text-white"
            style={{ fontFamily: "'Playfair Display', serif" }}>
          Get Exclusive Offers<br />Delivered to You
        </h2>
        <p className="mt-4 text-gray-200" style={{ fontFamily: "'Inter', sans-serif", lineHeight: 1.75 }}>
          Subscribe to our newsletter and be the first to know about seasonal
          menus, special events, and members-only promotions.
        </p>

        <div className="flex mt-6 rounded-lg overflow-hidden shadow-lg">
          <input
            type="email"
            placeholder="Your email address"
            className="px-4 py-3 w-full border-0 focus:outline-none text-gray-800"
            style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.95rem" }}
          />
          <button
            className="bg-orange-500 text-white px-6 font-semibold hover:bg-orange-600 transition-colors duration-300 whitespace-nowrap"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Subscribe
          </button>
        </div>
      </motion.div>
    </div>
  );
}
