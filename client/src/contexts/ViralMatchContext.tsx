import { createContext, useContext, useState, ReactNode } from "react";
import { PlayerScoreData } from "@/lib/firebase";

interface ViralMatchStats {
  followers: number;
  likes: number;
  engagement: number;
  viralPoints: number;
  shares: number;
}

interface ViralMatchContextType {
  stats: ViralMatchStats;
  playerData: PlayerScoreData | null;
  userId: string | null;
  isLoggedIn: boolean;
  updateStats: (updates: Partial<ViralMatchStats>) => void;
  addFollowers: (amount: number) => void;
  addLikes: (amount: number) => void;
  addEngagement: (amount: number) => void;
  addViralPoints: (amount: number) => void;
  addShares: (amount: number) => void;
  login: (userId: string, playerData: PlayerScoreData) => void;
  logout: () => void;
}

const ViralMatchContext = createContext<ViralMatchContextType | undefined>(undefined);

export function ViralMatchProvider({ children }: { children: ReactNode }) {
  const [stats, setStats] = useState<ViralMatchStats>({
    followers: 0,
    likes: 0,
    engagement: 0,
    viralPoints: 0,
    shares: 0,
  });
  const [playerData, setPlayerData] = useState<PlayerScoreData | null>(null);
  const [userId, setUserId] = useState<string | null>(null);

  const updateStats = (updates: Partial<ViralMatchStats>) => {
    setStats((prev) => ({ ...prev, ...updates }));
  };

  const addFollowers = (amount: number) => {
    setStats((prev) => ({ ...prev, followers: prev.followers + amount }));
  };

  const addLikes = (amount: number) => {
    setStats((prev) => ({ ...prev, likes: prev.likes + amount }));
  };

  const addEngagement = (amount: number) => {
    setStats((prev) => ({ ...prev, engagement: prev.engagement + amount }));
  };

  const addViralPoints = (amount: number) => {
    setStats((prev) => ({ ...prev, viralPoints: prev.viralPoints + amount }));
  };

  const addShares = (amount: number) => {
    setStats((prev) => ({ ...prev, shares: prev.shares + amount }));
  };

  const login = (newUserId: string, data: PlayerScoreData) => {
    setUserId(newUserId);
    setPlayerData(data);
    // Update stats with Firebase data
    setStats({
      followers: data.Followers || 0,
      likes: data.Likes || 0,
      engagement: 0, // Calculate from other metrics if needed
      viralPoints: data.viralscore || 0,
      shares: 0, // Not in Firebase data
    });
  };

  const logout = () => {
    setUserId(null);
    setPlayerData(null);
    // Reset stats to default
    setStats({
      followers: 0,
      likes: 0,
      engagement: 0,
      viralPoints: 0,
      shares: 0,
    });
  };

  return (
    <ViralMatchContext.Provider
      value={{
        stats,
        playerData,
        userId,
        isLoggedIn: !!userId && !!playerData,
        updateStats,
        addFollowers,
        addLikes,
        addEngagement,
        addViralPoints,
        addShares,
        login,
        logout,
      }}
    >
      {children}
    </ViralMatchContext.Provider>
  );
}

export function useViralMatch() {
  const context = useContext(ViralMatchContext);
  if (context === undefined) {
    throw new Error("useViralMatch must be used within a ViralMatchProvider");
  }
  return context;
}
