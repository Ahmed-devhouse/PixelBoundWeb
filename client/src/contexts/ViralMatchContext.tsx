import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { PlayerScoreData, fetchPlayerData } from "@/lib/firebase";

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
  isLoadingAuth: boolean;
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

const STORAGE_KEY_USER_ID = "viralMatch_userId";
const STORAGE_KEY_PLAYER_DATA = "viralMatch_playerData";

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
  const [isLoadingAuth, setIsLoadingAuth] = useState(true);

  // Load saved login state from localStorage on mount
  useEffect(() => {
    const loadSavedAuth = async () => {
      try {
        const savedUserId = localStorage.getItem(STORAGE_KEY_USER_ID);
        const savedPlayerData = localStorage.getItem(STORAGE_KEY_PLAYER_DATA);

        if (savedUserId && savedPlayerData) {
          try {
            const parsedData = JSON.parse(savedPlayerData) as PlayerScoreData;
            
            // Verify the data is still valid by fetching from Firebase
            const freshData = await fetchPlayerData(savedUserId);
            
            if (freshData) {
              // Use fresh data from Firebase
              setUserId(savedUserId);
              setPlayerData(freshData);
              setStats({
                followers: freshData.Followers || 0,
                likes: freshData.Likes || 0,
                engagement: 0,
                viralPoints: freshData.viralscore || 0,
                shares: 0,
              });
              // Update localStorage with fresh data
              localStorage.setItem(STORAGE_KEY_PLAYER_DATA, JSON.stringify(freshData));
            } else {
              // Data no longer exists in Firebase, clear saved state
              localStorage.removeItem(STORAGE_KEY_USER_ID);
              localStorage.removeItem(STORAGE_KEY_PLAYER_DATA);
            }
          } catch (error) {
            console.error("Error loading saved auth:", error);
            // If there's an error, clear invalid saved state
            localStorage.removeItem(STORAGE_KEY_USER_ID);
            localStorage.removeItem(STORAGE_KEY_PLAYER_DATA);
          }
        }
      } catch (error) {
        console.error("Error loading from localStorage:", error);
      } finally {
        setIsLoadingAuth(false);
      }
    };

    loadSavedAuth();
  }, []);

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
    
    // Save to localStorage
    try {
      localStorage.setItem(STORAGE_KEY_USER_ID, newUserId);
      localStorage.setItem(STORAGE_KEY_PLAYER_DATA, JSON.stringify(data));
    } catch (error) {
      console.error("Error saving to localStorage:", error);
    }
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
    
    // Clear localStorage
    try {
      localStorage.removeItem(STORAGE_KEY_USER_ID);
      localStorage.removeItem(STORAGE_KEY_PLAYER_DATA);
    } catch (error) {
      console.error("Error clearing localStorage:", error);
    }
  };

  return (
    <ViralMatchContext.Provider
      value={{
        stats,
        playerData,
        userId,
        isLoggedIn: !!userId && !!playerData,
        isLoadingAuth,
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
