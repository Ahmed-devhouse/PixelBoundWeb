import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useEffect, useState } from "react";
import { Users, Heart, TrendingUp, Trophy, Share2, Zap, ChevronUp, ChevronDown, Coins, LogOut, User } from "lucide-react";
import { useViralMatch } from "@/contexts/ViralMatchContext";
import { ViralMatchLogin } from "./ViralMatch_Login";

export function ViralMatchStatsBar() {
  const { stats, playerData, isLoggedIn, userId, logout, login } = useViralMatch();
  const [displayedFollowers, setDisplayedFollowers] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
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
  }, [stats.followers, displayedFollowers]);

  const handleLoginSuccess = (newUserId: string, data: any) => {
    login(newUserId, data);
    setIsLoginOpen(false);
  };

  const formatNumber = (num: number) => {
    if (num >= 1000000) return `${(num / 1000000).toFixed(1)}M`;
    if (num >= 1000) return `${(num / 1000).toFixed(1)}K`;
    return num.toString();
  };

  // Use Firebase data if logged in, otherwise use local stats
  const statItems = isLoggedIn && playerData ? [
    {
      icon: Users,
      label: "Followers",
      value: playerData.Followers || 0,
      color: "text-sky-400",
      bgColor: "bg-sky-500/20",
      borderColor: "border-sky-400/30",
    },
    {
      icon: Heart,
      label: "Likes",
      value: playerData.Likes || 0,
      color: "text-pink-400",
      bgColor: "bg-pink-500/20",
      borderColor: "border-pink-400/30",
    },
    {
      icon: TrendingUp,
      label: "Views",
      value: playerData.Views || 0,
      color: "text-yellow-400",
      bgColor: "bg-yellow-500/20",
      borderColor: "border-yellow-400/30",
    },
    {
      icon: Trophy,
      label: "Viral Score",
      value: playerData.viralscore || 0,
      color: "text-orange-400",
      bgColor: "bg-orange-500/20",
      borderColor: "border-orange-400/30",
    },
    {
      icon: Coins,
      label: "Coins",
      value: playerData.CurrentCoins || 0,
      color: "text-green-400",
      bgColor: "bg-green-500/20",
      borderColor: "border-green-400/30",
    },
    {
      icon: Zap,
      label: "Tokens",
      value: playerData.CurrentViralTokens || 0,
      color: "text-purple-400",
      bgColor: "bg-purple-500/20",
      borderColor: "border-purple-400/30",
    },
  ] : [
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
        {/* Header with Login/Logout */}
        <div className="flex items-center justify-between px-3 py-2 bg-white/5 border-b border-white/10">
          {isLoggedIn ? (
            <div className="flex items-center gap-2 flex-1 min-w-0">
              <div className="w-6 h-6 rounded-full bg-primary/20 border border-primary/30 flex items-center justify-center flex-shrink-0">
                <User className="w-3.5 h-3.5 text-primary" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-xs font-bold text-white truncate">
                  {playerData?.username || userId}
                </div>
                <div className="text-[10px] text-white/50">Level {playerData?.MaxLevelCleared || 0}</div>
              </div>
            </div>
          ) : (
            <motion.button
              onClick={() => setIsLoginOpen(true)}
              className="flex items-center gap-2 px-3 py-1.5 bg-primary/20 hover:bg-primary/30 border border-primary/30 rounded-lg text-xs font-semibold text-primary transition-colors flex-1"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <User className="w-3.5 h-3.5" />
              Login
            </motion.button>
          )}
          
          {isLoggedIn && (
            <motion.button
              onClick={logout}
              className="p-1.5 hover:bg-red-500/20 rounded-lg transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              title="Logout"
            >
              <LogOut className="w-4 h-4 text-red-400" />
            </motion.button>
          )}
          
          <motion.button
            onClick={() => setIsCollapsed(!isCollapsed)}
            className="p-1.5 hover:bg-white/10 rounded-lg transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            {isCollapsed ? (
              <ChevronDown className="w-4 h-4 text-white/60" />
            ) : (
              <ChevronUp className="w-4 h-4 text-white/60" />
            )}
          </motion.button>
        </div>

        {!isCollapsed && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="px-3 py-2 space-y-2"
          >
            {/* Compact Stats */}
            <div className={`grid gap-2 ${isLoggedIn ? 'grid-cols-2' : 'grid-cols-2'}`}>
              {statItems.slice(0, isLoggedIn ? 6 : 4).map((item, index) => {
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
                        {item.value >= 1000 ? formatNumber(item.value) : item.value.toLocaleString()}
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {!isLoggedIn && (
              <>
                {/* Viral Points - Full Width (only when not logged in) */}
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
              </>
            )}
            
            {isLoggedIn && playerData && (
              <motion.div
                className="flex items-center gap-2 bg-gradient-to-r from-primary/20 to-purple-500/20 border border-primary/30 rounded-lg px-2 py-1.5 backdrop-blur-sm"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                <Trophy className="w-3.5 h-3.5 text-yellow-400 flex-shrink-0" />
                <div className="flex-1">
                  <div className="text-[10px] text-white/50 leading-tight">Max Level</div>
                  <div className="text-xs font-bold text-yellow-400 leading-tight">
                    {playerData.MaxLevelCleared || 0}
                  </div>
                </div>
              </motion.div>
            )}
          </motion.div>
        )}
      </motion.div>
      
      {/* Login Dialog */}
      <ViralMatchLogin
        isOpen={isLoginOpen}
        onClose={() => setIsLoginOpen(false)}
        onLoginSuccess={handleLoginSuccess}
      />
    </motion.div>
  );
}
