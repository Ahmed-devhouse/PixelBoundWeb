import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useEffect, useState } from "react";
import { Users, Heart, TrendingUp, Trophy, Share2, Zap, ChevronUp, ChevronDown } from "lucide-react";
import { useViralMatch } from "@/contexts/ViralMatchContext";

export function ViralMatchStatsBar() {
  const { stats } = useViralMatch();
  const [displayedFollowers, setDisplayedFollowers] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const { scrollY } = useScroll();
  const [lastScrollY, setLastScrollY] = useState(0);

  // Hide/show on scroll
  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > lastScrollY && latest > 100) {
      setIsVisible(false);
    } else {
      setIsVisible(true);
    }
    setLastScrollY(latest);
  });

  // Animate follower count
  useEffect(() => {
    const target = stats.followers;
    if (target === 0) return;

    const duration = 500;
    const steps = 30;
    const increment = (target - displayedFollowers) / steps;
    let current = displayedFollowers;

    const interval = setInterval(() => {
      current += increment;
      if (increment > 0 ? current >= target : current <= target) {
        setDisplayedFollowers(target);
        clearInterval(interval);
      } else {
        setDisplayedFollowers(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(interval);
  }, [stats.followers]);

  const formatNumber = (num: number) => {
    if (num >= 1000000) return `${(num / 1000000).toFixed(1)}M`;
    if (num >= 1000) return `${(num / 1000).toFixed(1)}K`;
    return num.toString();
  };

  const statItems = [
    {
      icon: Users,
      label: "Followers",
      value: displayedFollowers,
      color: "text-sky-400",
      bgColor: "bg-sky-500/20",
      borderColor: "border-sky-400/30",
    },
    {
      icon: Heart,
      label: "Likes",
      value: stats.likes,
      color: "text-pink-400",
      bgColor: "bg-pink-500/20",
      borderColor: "border-pink-400/30",
    },
    {
      icon: Share2,
      label: "Shares",
      value: stats.shares,
      color: "text-purple-400",
      bgColor: "bg-purple-500/20",
      borderColor: "border-purple-400/30",
    },
    {
      icon: TrendingUp,
      label: "Engagement",
      value: stats.engagement,
      color: "text-yellow-400",
      bgColor: "bg-yellow-500/20",
      borderColor: "border-yellow-400/30",
    },
    {
      icon: Trophy,
      label: "Viral Points",
      value: stats.viralPoints,
      color: "text-orange-400",
      bgColor: "bg-orange-500/20",
      borderColor: "border-orange-400/30",
    },
  ];

  return (
    <motion.div
      className="fixed top-[64px] right-4 z-40"
      initial={{ y: -100, opacity: 0 }}
      animate={{ 
        y: isVisible ? 0 : -100,
        opacity: isVisible ? 1 : 0,
      }}
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      <motion.div
        className="bg-black/60 backdrop-blur-xl border border-white/10 rounded-2xl shadow-xl overflow-hidden"
        animate={{ height: isCollapsed ? "auto" : "auto" }}
        transition={{ duration: 0.3 }}
      >
        {/* Collapse/Expand Button */}
        <motion.button
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="w-full flex items-center justify-center gap-2 px-3 py-2 bg-white/5 hover:bg-white/10 transition-colors"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          {isCollapsed ? (
            <ChevronDown className="w-4 h-4 text-white/60" />
          ) : (
            <ChevronUp className="w-4 h-4 text-white/60" />
          )}
        </motion.button>

        {!isCollapsed && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="px-3 py-2 space-y-2"
          >
            {/* Compact Stats */}
            <div className="grid grid-cols-2 gap-2">
              {statItems.slice(0, 4).map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.label}
                    className={`flex items-center gap-1.5 ${item.bgColor} ${item.borderColor} border rounded-lg px-2 py-1.5 backdrop-blur-sm`}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.05 }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <Icon className={`w-3.5 h-3.5 ${item.color} flex-shrink-0`} />
                    <div className="flex flex-col min-w-0">
                      <div className="text-[10px] text-white/50 leading-tight truncate">{item.label}</div>
                      <div className={`text-xs font-bold ${item.color} leading-tight`}>
                        {item.label === "Followers" ? formatNumber(item.value) : item.value}
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Viral Points - Full Width */}
            <motion.div
              className={`flex items-center gap-2 ${statItems[4].bgColor} ${statItems[4].borderColor} border rounded-lg px-2 py-1.5 backdrop-blur-sm`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <Trophy className="w-3.5 h-3.5 text-orange-400 flex-shrink-0" />
              <div className="flex-1">
                <div className="text-[10px] text-white/50 leading-tight">Viral Points</div>
                <div className="text-xs font-bold text-orange-400 leading-tight">{stats.viralPoints}</div>
              </div>
              <div className="flex items-center gap-1">
                <Zap className="w-3 h-3 text-yellow-400" />
                <span className="text-xs font-bold text-yellow-400">
                  Lv.{Math.floor(stats.viralPoints / 20) + 1}
                </span>
              </div>
            </motion.div>

            {/* Compact Progress Bar */}
            <div className="h-1 bg-white/5 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-pink-500 via-purple-500 to-sky-500 rounded-full"
                initial={{ width: 0 }}
                animate={{ width: `${Math.min((stats.viralPoints / 100) * 100, 100)}%` }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              />
            </div>
          </motion.div>
        )}
      </motion.div>
    </motion.div>
  );
}
