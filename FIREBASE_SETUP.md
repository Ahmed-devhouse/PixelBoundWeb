# Firebase Setup for Player Login

## Overview

The ViralMatch page now includes a login feature that fetches player data from Firebase Firestore. Players can enter their user ID to load their game statistics.

## Firebase Configuration

Add the following environment variables to your `.env` file:

```env
VITE_FIREBASE_API_KEY=your_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_project_id.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_project_id.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
VITE_FIREBASE_APP_ID=your_app_id
```

## How to Get Firebase Config

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Select your project (or create a new one)
3. Click the gear icon ⚙️ → Project settings
4. Scroll down to "Your apps" section
5. Click on the web app (or create one)
6. Copy the `firebaseConfig` values

## Firestore Collection Structure

The app expects player data in Firestore with the following structure:

**Collection:** `players`  
**Document ID:** User ID (the ID players enter to login, e.g., "B8CFC8BD-2190-5DD0-9C51-0D25CA8FE46B")

**Document Fields:**
- `username` (string)
- `IconId` (number)
- `CurrentCoins` (number)
- `CurrentViralTokens` (number)
- `MaxLevelCleared` (number)
- `Followers` (number)
- `Views` (number)
- `Likes` (number)
- `viralscore` (number)

## Firestore Security Rules

**IMPORTANT:** You must update your Firestore security rules to allow reading player data. The error "Missing or insufficient permissions" means your security rules are blocking access.

### How to Update Security Rules:

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Select your project: **viral-match-b9b7c**
3. Click on **Firestore Database** in the left sidebar
4. Click on the **Rules** tab
5. Replace the rules with:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Allow reading player data (anyone can read)
    match /players/{userId} {
      allow read: if true;
      // Prevent writes from client (only allow server-side writes)
      allow write: if false;
    }
    
    // Default: deny all other access
    match /{document=**} {
      allow read, write: if false;
    }
  }
}
```

6. Click **Publish** to save the rules

### Security Note:
- The above rules allow **anyone** to read player data (public read access)
- If you need more security, you can restrict reads to authenticated users or specific conditions
- Writes are blocked from the client for security (only server-side writes allowed)

## Usage

1. Users click the "Login" button in the stats bar (top-right corner)
2. Enter their player ID
3. Player data is fetched from Firebase and displayed in the stats bar
4. Stats bar shows: Followers, Likes, Views, Viral Score, Coins, Tokens, and Max Level

## Features

- ✅ Simple user ID login (no password required)
- ✅ Fetches all player data from Firebase
- ✅ Displays data in the stats bar
- ✅ Shows username and level when logged in
- ✅ Logout functionality
- ✅ Graceful error handling if Firebase is not configured

