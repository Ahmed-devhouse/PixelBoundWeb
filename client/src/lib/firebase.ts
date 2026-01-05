import { initializeApp } from "firebase/app";
import { getFirestore, doc, getDoc, collection, query, where, getDocs, limit } from "firebase/firestore";

// Firebase configuration - loaded from environment variables
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY || "AIzaSyDvGefRFF8o2ZksoUGUf2NU3uIINKpQTVw",
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN || "viral-match-b9b7c.firebaseapp.com",
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID || "viral-match-b9b7c",
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET || "viral-match-b9b7c.firebasestorage.app",
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID || "1090616746800",
  appId: import.meta.env.VITE_FIREBASE_APP_ID || "1:1090616746800:web:dc00eac41eddb42cd59ef5",
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID || "G-6DMD6RZGRV",
};

// Initialize Firebase
let app: any = null;
let db: any = null;

try {
  // Always initialize with the provided config (has fallback defaults)
  app = initializeApp(firebaseConfig);
  db = getFirestore(app);
  console.log("Firebase initialized successfully");
} catch (error) {
  console.error("Failed to initialize Firebase:", error);
}

export { db };

// Player data interface matching the C# class
export interface PlayerScoreData {
  username: string;
  IconId: number;
  CurrentCoins: number;
  CurrentViralTokens: number;
  MaxLevelCleared: number;
  Followers: number;
  Views: number;
  Likes: number;
  viralscore: number;
}

// Fetch player data from Firestore
// Tries to match by document ID first
export async function fetchPlayerData(userId: string): Promise<PlayerScoreData | null> {
  if (!db) {
    throw new Error("Firebase is not initialized. Please configure Firebase in your .env file.");
  }

  // Trim and normalize the user ID
  const normalizedUserId = userId.trim();

  try {
    console.log(`Attempting to fetch player data for ID: ${normalizedUserId}`);
    
    // Try to get document by ID (document ID should match exactly)
    const playerRef = doc(db, "players", normalizedUserId);
    console.log(`Firestore path: players/${normalizedUserId}`);
    
    const playerSnap = await getDoc(playerRef);
    
    console.log(`Document exists: ${playerSnap.exists()}`);
    console.log(`Document metadata:`, playerSnap.metadata);

    if (playerSnap.exists()) {
      const data = playerSnap.data();
      console.log("Player data found:", data);
      
      return {
        username: data.username || "",
        IconId: data.IconId || 0,
        CurrentCoins: data.CurrentCoins || 0,
        CurrentViralTokens: data.CurrentViralTokens || 0,
        MaxLevelCleared: data.MaxLevelCleared || 0,
        Followers: data.Followers || 0,
        Views: data.Views || 0,
        Likes: data.Likes || 0,
        viralscore: data.viralscore || 0,
      };
    }

    // If document ID doesn't exist, try querying by userId field (in case documents have auto-generated IDs)
    console.log("Document ID not found, trying query by userId field...");
    const playersRef = collection(db, "players");
    const q = query(playersRef, where("userId", "==", normalizedUserId), limit(1));
    const querySnapshot = await getDocs(q);

    if (!querySnapshot.empty) {
      const doc = querySnapshot.docs[0];
      const data = doc.data();
      console.log("Player data found via userId field query:", data);
      
      return {
        username: data.username || "",
        IconId: data.IconId || 0,
        CurrentCoins: data.CurrentCoins || 0,
        CurrentViralTokens: data.CurrentViralTokens || 0,
        MaxLevelCleared: data.MaxLevelCleared || 0,
        Followers: data.Followers || 0,
        Views: data.Views || 0,
        Likes: data.Likes || 0,
        viralscore: data.viralscore || 0,
      };
    }

    // If still not found, try querying by username as fallback
    console.log("userId field query failed, trying username field...");
    const usernameQuery = query(playersRef, where("username", "==", normalizedUserId), limit(1));
    const usernameSnapshot = await getDocs(usernameQuery);

    if (!usernameSnapshot.empty) {
      const doc = usernameSnapshot.docs[0];
      const data = doc.data();
      console.log("Player data found via username field query:", data);
      
      return {
        username: data.username || "",
        IconId: data.IconId || 0,
        CurrentCoins: data.CurrentCoins || 0,
        CurrentViralTokens: data.CurrentViralTokens || 0,
        MaxLevelCleared: data.MaxLevelCleared || 0,
        Followers: data.Followers || 0,
        Views: data.Views || 0,
        Likes: data.Likes || 0,
        viralscore: data.viralscore || 0,
      };
    }

    console.warn(`No player data found for userId: ${normalizedUserId}`);
    return null;
  } catch (error: any) {
    console.error("Error fetching player data:", error);
    console.error("Error code:", error.code);
    console.error("Error message:", error.message);
    
    // Provide more helpful error messages
    if (error.code === "permission-denied" || error.message?.includes("permissions")) {
      throw new Error("Firestore permission denied. Please update your Firestore security rules to allow reading from 'players' collection. See FIREBASE_SETUP.md for details.");
    } else if (error.code === "not-found") {
      throw new Error(`No player data found for user ID: ${normalizedUserId}`);
    } else {
      throw new Error(error.message || "Failed to fetch player data from Firebase");
    }
  }
}

