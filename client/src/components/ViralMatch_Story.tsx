import { motion } from "framer-motion";
import { useState } from "react";
import { Heart, Star, TrendingUp, Sparkles, Trophy } from "lucide-react";
import vivi1 from "@assets/story/vivi1.png";
import vivi2 from "@assets/story/vivi2.png";
import vivi3 from "@assets/story/vivi3.png";
import storyBg from "@assets/bg/vm_bg.png";

export function Story() {
  const [likes, setLikes] = useState(0);
  const [stars, setStars] = useState(0);
  const [viralPoints, setViralPoints] = useState(0);
  const [selectedCharacter, setSelectedCharacter] = useState<number | null>(null);
  const [interactiveElements, setInteractiveElements] = useState({
    viviClicked: false,
    challengeClicked: false,
    outfitClicked: false,
  });

  const handleLike = () => {
    setLikes((prev) => prev + 1);
    setViralPoints((prev) => prev + 2);
  };

  const handleStar = () => {
    setStars((prev) => prev + 1);
    setViralPoints((prev) => prev + 10);
  };

  const handleCharacterClick = (index: number) => {
    setSelectedCharacter(index);
    setViralPoints((prev) => prev + 5);
    setTimeout(() => setSelectedCharacter(null), 2000);
  };

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
      
      {/* Interactive floating elements */}
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute pointer-events-none"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, Math.random() * 20 - 10, 0],
            opacity: [0.3, 0.7, 0.3],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: Math.random() * 3 + 2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: Math.random() * 2,
          }}
        >
          <Sparkles className="w-4 h-4 text-pink-400/60" />
        </motion.div>
      ))}

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 sm:px-10 lg:px-16 text-white">
        {/* Viral Points Counter */}
        <motion.div
          className="absolute top-4 right-4 md:top-8 md:right-8 bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 px-4 py-3 flex items-center gap-3"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5 }}
        >
          <Trophy className="w-5 h-5 text-yellow-400" />
          <div>
            <div className="text-xs text-white/60">Viral Points</div>
            <div className="text-lg font-bold text-yellow-400">{viralPoints}</div>
          </div>
        </motion.div>

        <motion.h2
          className="text-center text-4xl sm:text-5xl font-extrabold text-sky-400 mb-12"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Vivi's Story
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left — Story Text with Interactive Elements */}
          <motion.div
            className="space-y-6 text-base sm:text-lg leading-relaxed text-white/90"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <motion.p
              className="relative"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              Meet{" "}
              <motion.span
                className="text-pink-400 font-semibold cursor-pointer inline-block relative"
                onClick={() => {
                  setInteractiveElements((prev) => ({ ...prev, viviClicked: true }));
                  setViralPoints((prev) => prev + 3);
                  setTimeout(() => setInteractiveElements((prev) => ({ ...prev, viviClicked: false })), 1000);
                }}
                whileHover={{ scale: 1.2, rotate: [0, -10, 10, -10, 0] }}
                whileTap={{ scale: 0.9 }}
                animate={interactiveElements.viviClicked ? {
                  scale: [1, 1.3, 1],
                  rotate: [0, 360],
                } : {}}
                transition={{ duration: 0.5 }}
              >
                Vivi
                {interactiveElements.viviClicked && (
                  <motion.div
                    className="absolute -top-8 left-1/2 -translate-x-1/2"
                    initial={{ opacity: 0, y: 0 }}
                    animate={{ opacity: [1, 0], y: -20 }}
                    transition={{ duration: 1 }}
                  >
                    <Sparkles className="w-6 h-6 text-pink-400" />
                  </motion.div>
                )}
              </motion.span>{" "}
              — a cheerful, ambitious girl who dreams of becoming the world's top
              influencer! With her charm, creativity, and unstoppable energy,
              she's ready to conquer the digital world.
            </motion.p>

            <motion.p
              className="relative"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              But it's not going to be easy.{" "}
              <motion.span
                className="text-yellow-400 font-semibold cursor-pointer inline-block"
                onClick={() => {
                  setInteractiveElements((prev) => ({ ...prev, challengeClicked: true }));
                  setViralPoints((prev) => prev + 5);
                  setTimeout(() => setInteractiveElements((prev) => ({ ...prev, challengeClicked: false })), 1000);
                }}
                whileHover={{ scale: 1.15 }}
                whileTap={{ scale: 0.9 }}
                animate={interactiveElements.challengeClicked ? {
                  scale: [1, 1.2, 1],
                  color: ["#fbbf24", "#f59e0b", "#fbbf24"],
                } : {}}
              >
                Vivi must overcome tough challenges
              </motion.span>
              , trends, and rivals in her journey to go viral. Every post, every
              outfit, and every move counts!
            </motion.p>

            <motion.p
              className="relative"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              As you guide her through her adventures, help Vivi grow her fanbase,
              unlock{" "}
              <motion.span
                className="text-purple-400 font-semibold cursor-pointer inline-block"
                onClick={() => {
                  setInteractiveElements((prev) => ({ ...prev, outfitClicked: true }));
                  setViralPoints((prev) => prev + 4);
                  setTimeout(() => setInteractiveElements((prev) => ({ ...prev, outfitClicked: false })), 1000);
                }}
                whileHover={{ scale: 1.15, rotate: [0, 5, -5, 0] }}
                whileTap={{ scale: 0.9 }}
                animate={interactiveElements.outfitClicked ? {
                  scale: [1, 1.2, 1],
                  rotate: [0, 360],
                } : {}}
              >
                stylish outfits
              </motion.span>
              , and spread her positivity to the entire world. Can you help her
              become the ultimate viral star?
            </motion.p>

            <motion.p
              className="text-sky-300 italic font-semibold text-center py-4 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 px-4"
              whileHover={{ scale: 1.05, boxShadow: "0px 0px 30px rgba(56, 189, 248, 0.3)" }}
            >
              🌟 "Go viral, stay real — that's Vivi's motto!" 🌟
            </motion.p>

            {/* Interactive Action Buttons */}
            <div className="flex gap-4 justify-center pt-4">
              <motion.button
                onClick={handleLike}
                className="flex items-center gap-2 bg-pink-500/20 hover:bg-pink-500/30 border border-pink-400/30 rounded-xl px-4 py-2 text-sm font-semibold transition-colors backdrop-blur-sm"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                animate={likes > 0 ? {
                  scale: [1, 1.2, 1],
                } : {}}
              >
                <Heart className="w-4 h-4 text-pink-400" fill={likes > 0 ? "#f472b6" : "none"} />
                <span>{likes}</span>
              </motion.button>

              <motion.button
                onClick={handleStar}
                className="flex items-center gap-2 bg-yellow-500/20 hover:bg-yellow-500/30 border border-yellow-400/30 rounded-xl px-4 py-2 text-sm font-semibold transition-colors backdrop-blur-sm"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                animate={stars > 0 ? {
                  scale: [1, 1.2, 1],
                  rotate: [0, 180, 360],
                } : {}}
              >
                <Star className="w-4 h-4 text-yellow-400" fill={stars > 0 ? "#fbbf24" : "none"} />
                <span>{stars}</span>
              </motion.button>

              <motion.button
                className="flex items-center gap-2 bg-sky-500/20 hover:bg-sky-500/30 border border-sky-400/30 rounded-xl px-4 py-2 text-sm font-semibold transition-colors backdrop-blur-sm"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setViralPoints((prev) => prev + 2)}
              >
                <TrendingUp className="w-4 h-4 text-sky-400" />
                <span>Boost</span>
              </motion.button>
            </div>
          </motion.div>

          {/* Right — Interactive Character Images */}
          <motion.div
            className="grid grid-cols-3 gap-4"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            {[
              { src: vivi1, label: "Vivi Casual" },
              { src: vivi2, label: "Vivi Stylish" },
              { src: vivi3, label: "Vivi Star" },
            ].map((char, index) => (
              <motion.div
                key={index}
                className="relative group cursor-pointer"
                onClick={() => handleCharacterClick(index)}
                whileHover={{ scale: 1.1, zIndex: 10 }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.img
                  src={char.src}
                  alt={char.label}
                  className="rounded-2xl shadow-lg object-cover w-full aspect-square border-2 border-transparent group-hover:border-pink-400/50 transition-all"
                  animate={
                    selectedCharacter === index
                      ? {
                          scale: [1, 1.2, 1],
                          rotate: [0, 5, -5, 0],
                          boxShadow: [
                            "0px 0px 0px rgba(244, 114, 182, 0)",
                            "0px 0px 30px rgba(244, 114, 182, 0.8)",
                            "0px 0px 0px rgba(244, 114, 182, 0)",
                          ],
                        }
                      : {}
                  }
                  transition={{ duration: 0.6 }}
                />
                <motion.div
                  className="absolute inset-0 rounded-2xl bg-gradient-to-t from-pink-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"
                  initial={false}
                />
                {selectedCharacter === index && (
                  <motion.div
                    className="absolute -top-8 left-1/2 -translate-x-1/2"
                    initial={{ opacity: 0, y: 0, scale: 0 }}
                    animate={{ opacity: [1, 0], y: -30, scale: [0, 1, 0] }}
                    transition={{ duration: 1 }}
                  >
                    <div className="bg-pink-500 text-white px-3 py-1 rounded-full text-xs font-bold whitespace-nowrap">
                      +5 Points!
                    </div>
                  </motion.div>
                )}
                <div className="absolute bottom-2 left-2 right-2 text-center">
                  <div className="bg-black/60 backdrop-blur-sm rounded-lg px-2 py-1 text-xs font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                    {char.label}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Interactive Progress Bar */}
        <motion.div
          className="mt-12 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
        >
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 p-6">
            <div className="flex items-center justify-between mb-3">
              <span className="text-sm font-semibold text-white/80">Viral Progress</span>
              <span className="text-sm font-bold text-sky-400">{viralPoints} / 100</span>
            </div>
            <div className="h-3 bg-white/10 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-pink-500 via-purple-500 to-sky-500 rounded-full"
                initial={{ width: 0 }}
                animate={{ width: `${Math.min((viralPoints / 100) * 100, 100)}%` }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              />
            </div>
            {viralPoints >= 100 && (
              <motion.div
                className="mt-4 text-center"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                <div className="inline-flex items-center gap-2 bg-yellow-500/20 border border-yellow-400/30 rounded-full px-4 py-2">
                  <Trophy className="w-5 h-5 text-yellow-400" />
                  <span className="text-yellow-400 font-bold">Viral Star Unlocked! 🌟</span>
                </div>
              </motion.div>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
