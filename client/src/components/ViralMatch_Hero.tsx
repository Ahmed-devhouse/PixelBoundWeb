import { Button } from "@/components/ui/button";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { useState, useEffect } from "react";
import { Heart, Share2, Play, TrendingUp, Users, Sparkles, Zap } from "lucide-react";
import featuredGame from "@assets/featured_game/feature.png";
import heroBg from "@assets/bg/vm_bg.png";

export function HeroSection() {
  const [followers, setFollowers] = useState(0);
  const [likes, setLikes] = useState(0);
  const [engagement, setEngagement] = useState(0);
  const [clickedElements, setClickedElements] = useState({
    viral: false,
    challenges: false,
    influencer: false,
  });
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [particles, setParticles] = useState<Array<{ id: number; x: number; y: number }>>([]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  // Animate follower count on mount
  useEffect(() => {
    const targetFollowers = 125000;
    const duration = 2000;
    const steps = 60;
    const increment = targetFollowers / steps;
    let current = 0;
    const interval = setInterval(() => {
      current += increment;
      if (current >= targetFollowers) {
        setFollowers(targetFollowers);
        clearInterval(interval);
      } else {
        setFollowers(Math.floor(current));
      }
    }, duration / steps);
    return () => clearInterval(interval);
  }, []);

  // Track mouse position for interactive particles
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const handleLike = () => {
    setLikes((prev) => prev + 1);
    setEngagement((prev) => prev + 5);
    // Add particle effect
    const newParticle = {
      id: Date.now(),
      x: mousePosition.x,
      y: mousePosition.y,
    };
    setParticles((prev) => [...prev, newParticle]);
    setTimeout(() => {
      setParticles((prev) => prev.filter((p) => p.id !== newParticle.id));
    }, 1000);
  };

  const handleShare = () => {
    setEngagement((prev) => prev + 10);
    setFollowers((prev) => prev + Math.floor(Math.random() * 50) + 10);
  };

  const handleInteractiveClick = (element: "viral" | "challenges" | "influencer") => {
    setClickedElements((prev) => ({ ...prev, [element]: true }));
    setEngagement((prev) => prev + 3);
    setTimeout(() => {
      setClickedElements((prev) => ({ ...prev, [element]: false }));
    }, 1000);
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden font-[Montserrat,sans-serif]">
      {/* Animated Background */}
      <motion.div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBg})` }}
        initial={{ scale: 1.2, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 4, ease: "easeOut" }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/70 to-sky-950/80" />

      {/* Floating Particles (animated glow dots) */}
      {[...Array(20)].map((_, i) => (
        <motion.span
          key={i}
          className="absolute bg-sky-400/60 rounded-full blur-sm cursor-pointer"
          style={{
            width: Math.random() * 8 + 4,
            height: Math.random() * 8 + 4,
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -20, 0],
            opacity: [0.6, 1, 0.6],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: Math.random() * 5 + 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          whileHover={{ scale: 2, opacity: 1 }}
          onClick={() => {
            setEngagement((prev) => prev + 1);
            setFollowers((prev) => prev + 1);
          }}
        />
      ))}

      {/* Interactive click particles */}
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute pointer-events-none"
          style={{
            left: particle.x,
            top: particle.y,
          }}
          initial={{ opacity: 1, scale: 0 }}
          animate={{ opacity: [1, 0], scale: [0, 2], y: -50 }}
          transition={{ duration: 1 }}
        >
          <Heart className="w-6 h-6 text-pink-400" fill="#f472b6" />
        </motion.div>
      ))}

      {/* Content */}
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 items-center w-full container mx-auto px-6 sm:px-8 lg:px-12 py-20 gap-16 lg:gap-24">
        {/* LEFT SIDE */}
        <motion.div
          className="text-center lg:text-left text-white space-y-8 max-w-2xl mx-auto lg:mx-0"
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          {/* Stats Counter */}
          <motion.div
            className="flex gap-4 justify-center lg:justify-start mb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <motion.div
              className="bg-white/10 backdrop-blur-lg rounded-xl border border-white/20 px-4 py-2 flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
            >
              <Users className="w-4 h-4 text-sky-400" />
              <div>
                <div className="text-xs text-white/60">Followers</div>
                <div className="text-sm font-bold text-white">
                  {followers.toLocaleString()}
                </div>
              </div>
            </motion.div>
            <motion.div
              className="bg-white/10 backdrop-blur-lg rounded-xl border border-white/20 px-4 py-2 flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
            >
              <TrendingUp className="w-4 h-4 text-pink-400" />
              <div>
                <div className="text-xs text-white/60">Engagement</div>
                <div className="text-sm font-bold text-white">{engagement}</div>
              </div>
            </motion.div>
          </motion.div>

          <motion.h1
            className="font-extrabold text-5xl sm:text-6xl md:text-7xl leading-tight"
            initial={{ scale: 0.95 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <motion.span
              className="block text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-pink-400 to-violet-400 animate-gradient-x cursor-pointer"
              whileHover={{ scale: 1.05 }}
              onClick={() => handleInteractiveClick("viral")}
            >
              WELCOME TO
              {clickedElements.viral && (
                <motion.span
                  className="absolute -top-4 left-1/2 -translate-x-1/2"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: [1, 0], scale: [0, 1, 0], y: -20 }}
                  transition={{ duration: 1 }}
                >
                  <Sparkles className="w-6 h-6 text-pink-400" />
                </motion.span>
              )}
            </motion.span>
            <motion.span
              className="block text-7xl sm:text-8xl mt-2 bg-clip-text text-transparent bg-gradient-to-r from-pink-400 via-sky-400 to-purple-400 animate-gradient-x cursor-pointer relative"
              whileHover={{ scale: 1.05 }}
              onClick={() => {
                setEngagement((prev) => prev + 5);
                setFollowers((prev) => prev + 10);
              }}
            >
              Viral Match
            </motion.span>
          </motion.h1>

          <motion.p
            className="text-base sm:text-lg md:text-xl text-white/80 leading-relaxed font-medium max-w-md mx-auto lg:mx-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 1 }}
          >
            Help Vivi rise to fame —{" "}
            <motion.span
              className="text-pink-400 font-semibold cursor-pointer inline-block"
              onClick={() => handleInteractiveClick("viral")}
              whileHover={{ scale: 1.15, rotate: [0, -5, 5, 0] }}
              whileTap={{ scale: 0.9 }}
              animate={clickedElements.viral ? {
                scale: [1, 1.2, 1],
                color: ["#f472b6", "#ec4899", "#f472b6"],
              } : {}}
            >
              go viral
            </motion.span>
            ,{" "}
            <motion.span
              className="text-yellow-400 font-semibold cursor-pointer inline-block"
              onClick={() => handleInteractiveClick("challenges")}
              whileHover={{ scale: 1.15 }}
              whileTap={{ scale: 0.9 }}
              animate={clickedElements.challenges ? {
                scale: [1, 1.2, 1],
                color: ["#fbbf24", "#f59e0b", "#fbbf24"],
              } : {}}
            >
              conquer challenges
            </motion.span>
            , and become a top{" "}
            <motion.span
              className="text-purple-400 font-semibold cursor-pointer inline-block"
              onClick={() => handleInteractiveClick("influencer")}
              whileHover={{ scale: 1.15, rotate: [0, 5, -5, 0] }}
              whileTap={{ scale: 0.9 }}
              animate={clickedElements.influencer ? {
                scale: [1, 1.2, 1],
                rotate: [0, 360],
              } : {}}
            >
              influencer
            </motion.span>
            !
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-6"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 1 }}
          >
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
              <Button
                size="lg"
                className="bg-sky-400 text-white border-2 border-sky-400 hover:bg-sky-500 hover:border-sky-500 rounded-full px-6 py-2 text-base font-semibold shadow-lg shadow-sky-500/30 transition flex items-center gap-2"
                onClick={() => scrollToSection("games")}
              >
                <Play className="w-4 h-4" />
                Explore
              </Button>
            </motion.div>

            {/* Interactive Engagement Buttons */}
            <motion.div
              className="flex gap-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            >
              <motion.button
                onClick={handleLike}
                className="bg-pink-500/20 hover:bg-pink-500/30 border border-pink-400/30 rounded-full px-4 py-2 flex items-center gap-2 text-sm font-semibold backdrop-blur-sm transition-colors"
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
                onClick={handleShare}
                className="bg-purple-500/20 hover:bg-purple-500/30 border border-purple-400/30 rounded-full px-4 py-2 flex items-center gap-2 text-sm font-semibold backdrop-blur-sm transition-colors"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Share2 className="w-4 h-4 text-purple-400" />
                Share
              </motion.button>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* RIGHT SIDE — FEATURED GAME */}
        <motion.div
          className="relative flex justify-center lg:justify-end items-center w-full"
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2, delay: 0.6, ease: "easeOut" }}
        >
          <motion.div
            className="relative w-full max-w-md sm:max-w-lg lg:max-w-xl rounded-3xl overflow-hidden backdrop-blur-md bg-white/5 border border-white/10 shadow-2xl hover:shadow-sky-400/40 transition-all duration-500 cursor-pointer group"
            whileHover={{ scale: 1.05, rotate: 1 }}
            onClick={() => {
              setEngagement((prev) => prev + 15);
              setFollowers((prev) => prev + 25);
              scrollToSection("games");
            }}
          >
            <motion.img
              src={featuredGame}
              alt="Featured Game"
              className="w-full h-full object-cover"
              initial={{ scale: 1.1 }}
              animate={{ scale: 1 }}
              transition={{ duration: 5, ease: "easeOut" }}
              whileHover={{ scale: 1.1 }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/40 to-transparent group-hover:from-black/40 transition-all" />
            
            {/* Interactive overlay elements */}
            <motion.div
              className="absolute top-4 right-4 bg-white/10 backdrop-blur-lg rounded-full p-2 border border-white/20 opacity-0 group-hover:opacity-100 transition-opacity"
              whileHover={{ scale: 1.1, rotate: 90 }}
            >
              <Zap className="w-5 h-5 text-yellow-400" />
            </motion.div>

            <div className="absolute bottom-4 left-4 right-4 text-white font-semibold drop-shadow-lg">
              <motion.h3
                className="text-2xl font-bold mb-1"
                whileHover={{ scale: 1.05 }}
              >
                Viral Match 3D
              </motion.h3>
              <p className="text-sm text-white/80 mb-3">Featured Game</p>
              
              {/* Interactive play button */}
              <motion.div
                className="inline-flex items-center gap-2 bg-sky-400/80 hover:bg-sky-400 rounded-full px-4 py-2 text-sm font-bold transition-colors"
                whileHover={{ scale: 1.05, x: 5 }}
                whileTap={{ scale: 0.95 }}
                onClick={(e) => {
                  e.stopPropagation();
                  scrollToSection("games");
                }}
              >
                <Play className="w-4 h-4" fill="white" />
                Play Now
              </motion.div>
            </div>

            {/* Glow effect on hover */}
            <motion.div
              className="absolute inset-0 rounded-3xl border-2 border-sky-400/0 group-hover:border-sky-400/50 transition-colors pointer-events-none"
              animate={{
                boxShadow: [
                  "0px 0px 0px rgba(56, 189, 248, 0)",
                  "0px 0px 40px rgba(56, 189, 248, 0.4)",
                  "0px 0px 0px rgba(56, 189, 248, 0)",
                ],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
