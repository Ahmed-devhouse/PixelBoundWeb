import { motion } from "framer-motion";
import vivi1 from "@assets/story/vivi1.png";
import vivi2 from "@assets/story/vivi2.png";
import vivi3 from "@assets/story/vivi3.png";
import storyBg from "@assets/bg/vm_bg.png";

export function Story() {
  return (
    <section
      id="story"
      className="relative min-h-screen flex items-center justify-center overflow-hidden font-[Montserrat,sans-serif] py-20"
    >
      {/* Background */}
      <motion.div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${storyBg})` }}
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 10, ease: "easeOut" }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 sm:px-10 lg:px-16 text-white">
        <motion.h2
          className="text-center text-4xl sm:text-5xl font-extrabold text-sky-400 mb-12"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Vivi’s Story
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left — Story Text */}
          <motion.div
            className="space-y-6 text-base sm:text-lg leading-relaxed text-white/90"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <p>
              Meet <span className="text-pink-400 font-semibold">Vivi</span> — a
              cheerful, ambitious girl who dreams of becoming the world’s top
              influencer! With her charm, creativity, and unstoppable energy,
              she’s ready to conquer the digital world.
            </p>

            <p>
              But it’s not going to be easy. Vivi must overcome tough challenges,
              trends, and rivals in her journey to go viral. Every post, every
              outfit, and every move counts!
            </p>

            <p>
              As you guide her through her adventures, help Vivi grow her fanbase,
              unlock stylish outfits, and spread her positivity to the entire
              world. Can you help her become the ultimate viral star?
            </p>

            <p className="text-sky-300 italic font-semibold">
              🌟 “Go viral, stay real — that’s Vivi’s motto!” 🌟
            </p>
          </motion.div>

          {/* Right — Character Images */}
          <motion.div
            className="grid grid-cols-3 gap-4"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <motion.img
              src={vivi1}
              alt="Vivi 1"
              className="rounded-2xl shadow-lg object-cover w-full aspect-square"
              whileHover={{ scale: 1.05 }}
            />
            <motion.img
              src={vivi2}
              alt="Vivi 2"
              className="rounded-2xl shadow-lg object-cover w-full aspect-square"
              whileHover={{ scale: 1.05 }}
            />
            <motion.img
              src={vivi3}
              alt="Vivi 3"
              className="rounded-2xl shadow-lg object-cover w-full aspect-square"
              whileHover={{ scale: 1.05 }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
