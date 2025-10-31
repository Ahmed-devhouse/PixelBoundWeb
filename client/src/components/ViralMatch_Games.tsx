import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import heroBg from "@assets/bg/vm_bg.png";
import game1 from "@assets/games/game1.png";
import game2 from "@assets/games/game2.png";
import game3 from "@assets/games/game3.png";
import game4 from "@assets/games/game4.png";
import game5 from "@assets/games/game5.png";
import game6 from "@assets/games/game6.png";
import game7 from "@assets/games/game7.png";
import game8 from "@assets/games/game8.png";

export function Games() {
  const games = [
    {
      title: "Viral Match 3D",
      image: game1,
      description: "Help Vivi match and go viral in this stylish puzzle adventure.",
      link: "/play/viral-match-3d",
    },
    {
      title: "Emoji Pop",
      image: game2,
      description: "Pop emojis and express your mood in this fun, colorful game!",
      link: "/play/emoji-pop",
    },
    {
      title: "Influencer Run",
      image: game3,
      description: "Run, collect fans, and dodge haters to boost your popularity!",
      link: "/play/influencer-run",
    },
    {
      title: "Style Star",
      image: game4,
      description: "Dress up Vivi and shine on the runway with your viral outfits.",
      link: "/play/style-star",
    },
    {
      title: "Dance Fever",
      image: game5,
      description: "Tap to the beat and help Vivi dominate the dance floor!",
      link: "/play/dance-fever",
    },
    {
      title: "Trend Maker",
      image: game6,
      description: "Create trends and become the next viral sensation!",
      link: "/play/trend-maker",
    },
    {
      title: "Selfie Saga",
      image: game7,
      description: "Capture perfect selfies and grow your follower base!",
      link: "/play/selfie-saga",
    },
    {
      title: "Hashtag Hero",
      image: game8,
      description: "Master the hashtags and conquer the social world!",
      link: "/play/hashtag-hero",
    },
  ];

  return (
    <section
      id="games"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden font-[Montserrat,sans-serif] py-24"
    >
      {/* Background */}
      <motion.div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBg})` }}
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 10, ease: "easeOut" }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/90" />

      {/* Floating Title */}
      <motion.h2
        className="relative z-10 text-4xl sm:text-5xl font-extrabold text-sky-400 mb-12 text-center"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true }}
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      >
        Play Our Games
      </motion.h2>

      {/* Games Grid */}
      <div className="relative z-10 container mx-auto px-6 sm:px-8 lg:px-12">
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.15 } },
          }}
        >
          {games.map((game, index) => (
            <motion.div
              key={index}
              className="bg-white/10 backdrop-blur-lg rounded-3xl overflow-hidden shadow-lg border border-white/10 flex flex-col group relative"
              variants={{
                hidden: { opacity: 0, y: 40 },
                visible: { opacity: 1, y: 0 },
              }}
              whileHover={{
                scale: 1.05,
                boxShadow: "0px 0px 30px rgba(56, 189, 248, 0.3)",
              }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              {/* Game Image */}
              <div className="relative aspect-video overflow-hidden">
                <motion.img
                  src={game.image}
                  alt={game.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />
              </div>

              {/* Details */}
              <div className="flex flex-col justify-between flex-grow p-6 text-white">
                <div>
                  <motion.h3
                    className="text-xl font-bold mb-2 text-sky-300"
                    whileHover={{ scale: 1.05 }}
                  >
                    {game.title}
                  </motion.h3>
                  <p className="text-sm text-white/80 mb-4 leading-relaxed">
                    {game.description}
                  </p>
                </div>

                <motion.div whileHover={{ y: -2 }}>
                  <Button
                    size="lg"
                    className="bg-sky-400 text-white border-2 border-sky-400 hover:bg-sky-500 hover:border-sky-500 rounded-full px-4 py-1 text-sm font-semibold transition w-full"
                    onClick={() => window.open(game.link, "_blank")}
                  >
                    Play Now
                  </Button>
                </motion.div>
              </div>

              {/* Subtle glow pulse */}
              <motion.div
                className="absolute inset-0 rounded-3xl border border-sky-400/20 pointer-events-none"
                animate={{
                  opacity: [0.2, 0.6, 0.2],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
