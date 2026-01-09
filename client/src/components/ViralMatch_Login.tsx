import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Loader2, LogIn, User } from "lucide-react";
import { motion } from "framer-motion";
import { fetchPlayerData, PlayerScoreData } from "@/lib/firebase";
import { useToast } from "@/hooks/use-toast";

interface ViralMatchLoginProps {
  isOpen: boolean;
  onClose: () => void;
  onLoginSuccess: (userId: string, playerData: PlayerScoreData) => void;
}

export function ViralMatchLogin({ isOpen, onClose, onLoginSuccess }: ViralMatchLoginProps) {
  const [userId, setUserId] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!userId.trim()) {
      toast({
        title: "Error",
        description: "Please enter a user ID",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);
    try {
      const playerData = await fetchPlayerData(userId.trim());
      
      if (playerData) {
        onLoginSuccess(userId.trim(), playerData);
        toast({
          title: "Login successful!",
          description: `Welcome back, ${playerData.username || userId}!`,
        });
        setUserId("");
        onClose();
      } else {
        toast({
          title: "User not found",
          description: `No player data found for user ID: ${userId}`,
          variant: "destructive",
        });
      }
    } catch (error: any) {
      console.error("Login error:", error);
      toast({
        title: "Login failed",
        description: error.message || "Failed to fetch player data. Please check your Firebase configuration.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md bg-black/95 backdrop-blur-xl border border-white/10">
        <DialogHeader>
          <motion.div
            className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-primary/20 border border-primary/30"
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          >
            <User className="w-8 h-8 text-primary" />
          </motion.div>
          <DialogTitle className="text-center text-2xl font-bold text-white">
            Player Login
          </DialogTitle>
          <DialogDescription className="text-center text-white/70">
            Enter your player ID to load your game data
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleLogin} className="space-y-4 mt-4">
          <div className="space-y-2">
            <Label htmlFor="userId" className="text-white/90">
              Player ID
            </Label>
            <Input
              id="userId"
              type="text"
              value={userId}
              onChange={(e) => setUserId(e.target.value)}
              placeholder="Enter your player ID"
              disabled={isLoading}
              className="bg-white/5 border-white/20 text-white placeholder:text-white/40 focus:border-primary/50"
              autoFocus
            />
          </div>

          <Button
            type="submit"
            className="w-full bg-primary hover:bg-primary/90 text-white"
            disabled={isLoading}
          >
            {isLoading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Loading...
              </>
            ) : (
              <>
                <LogIn className="mr-2 h-4 w-4" />
                Login
              </>
            )}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}




