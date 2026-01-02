import { createContext, useContext, useState, ReactNode } from "react";

interface ViralMatchStats {
  followers: number;
  likes: number;
  engagement: number;
  viralPoints: number;
  shares: number;
}

interface ViralMatchContextType {
  stats: ViralMatchStats;
  updateStats: (updates: Partial<ViralMatchStats>) => void;
  addFollowers: (amount: number) => void;
  addLikes: (amount: number) => void;
  addEngagement: (amount: number) => void;
  addViralPoints: (amount: number) => void;
  addShares: (amount: number) => void;
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

  return (
    <ViralMatchContext.Provider
      value={{
        stats,
        updateStats,
        addFollowers,
        addLikes,
        addEngagement,
        addViralPoints,
        addShares,
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
