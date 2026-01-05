# Unity WebGL Games Setup Guide

This guide explains how to set up Unity WebGL games to be playable on the Viral Match page.

## Overview

The `UnityGamePlayer` component loads and displays Unity WebGL games in a modal overlay on the same page. When users click "Play Now" on a game card, a fullscreen modal opens with the playable game.

## File Structure

Your Unity WebGL builds should be placed in the `client/public/games/` directory:

```
client/
└── public/
    └── games/
        ├── viral-match-3d/
        │   └── Build/
        │       ├── viral-match-3d.loader.js
        │       ├── viral-match-3d.config.js
        │       ├── viral-match-3d.framework.js
        │       ├── viral-match-3d.wasm
        │       ├── viral-match-3d.data
        │       └── (other Unity build files)
        ├── emoji-pop/
        │   └── Build/
        │       └── ...
        └── (other games...)
```

## How to Add a Unity WebGL Game

### Step 1: Build Your Unity Game for WebGL

1. Open your Unity project
2. Go to **File** → **Build Settings**
3. Select **WebGL** platform
4. Click **Switch Platform** (if needed)
5. Click **Build** or **Build and Run**
6. Choose a build folder (e.g., `WebGLBuild`)

### Step 2: Prepare the Build Files

After building, you'll have a folder with:
- `index.html`
- `Build/` folder containing:
  - `[GameName].loader.js`
  - `[GameName].config.js`
  - `[GameName].framework.js`
  - `[GameName].wasm`
  - `[GameName].data`
  - Other files

### Step 3: Copy to Project

1. Create a folder in `client/public/games/` with your game name (e.g., `viral-match-3d`)
2. Copy the entire `Build/` folder from your Unity build into this folder
3. The structure should be: `client/public/games/viral-match-3d/Build/`

### Step 4: Update Game Configuration

In `client/src/components/ViralMatch_Games.tsx`, make sure the `gamePath` matches your folder name:

```typescript
{
  title: "Viral Match 3D",
  image: game1,
  description: "Help Vivi match and go viral...",
  gamePath: "/games/viral-match-3d", // Must match folder name
}
```

## Game Path Format

The `gamePath` should be:
- **Format**: `/games/[game-folder-name]`
- **Example**: `/games/viral-match-3d`
- **Important**: The folder name in `client/public/games/` must match the last part of `gamePath`

## Unity Build Settings

For best compatibility, configure your Unity WebGL build with:

1. **Compression Format**: 
   - Use **Gzip** or **Brotli** (recommended)
   - Or **Disabled** for testing

2. **Template**: 
   - Use **Default** template (or Minimal if you want a cleaner look)

3. **Memory Size**:
   - Adjust based on your game's needs
   - Default is usually fine for most games

4. **Data Caching**:
   - Enable for better performance

## Testing Locally

1. Place your Unity build files in `client/public/games/[game-name]/Build/`
2. Start the dev server: `npm run dev`
3. Navigate to the Viral Match page
4. Click "Play Now" on a game card
5. The game should load in a modal

## Troubleshooting

### Game Doesn't Load

**Error: "Failed to load Unity loader"**
- Check that the `gamePath` matches the folder structure
- Verify all Unity build files are in the `Build/` folder
- Check browser console for 404 errors

**Error: "Unity loader script did not initialize properly"**
- Make sure the `.loader.js` file is loading correctly
- Check browser console for JavaScript errors
- Verify the Unity build was successful

**Game loads but shows black screen**
- Check Unity build settings (compression, memory)
- Verify all `.data` files are present
- Check browser console for errors

### CORS Issues

If you see CORS errors:
- Make sure files are served from `client/public/` (not external URLs)
- Check Vite configuration allows serving from public folder

### Performance Issues

- Use compression in Unity build settings
- Optimize your Unity game for WebGL
- Consider reducing texture sizes
- Use Unity's WebGL memory profiler

## Example: Adding "Viral Match 3D"

1. Build Unity game → Output: `WebGLBuild/`
2. Create folder: `client/public/games/viral-match-3d/`
3. Copy `WebGLBuild/Build/` → `client/public/games/viral-match-3d/Build/`
4. In `ViralMatch_Games.tsx`, the game already has:
   ```typescript
   {
     title: "Viral Match 3D",
     gamePath: "/games/viral-match-3d",
   }
   ```
5. Done! The game should now be playable.

## Notes

- Games are loaded on-demand when the modal opens
- The Unity instance is cleaned up when the modal closes
- Loading progress is shown during game initialization
- Games run in fullscreen modal for best experience
- All games stay on the same page (no navigation)

## Security Considerations

- Only host games you own or have permission to host
- Unity WebGL games run client-side (no server processing needed)
- Consider file size limits for hosting

---

**Need Help?** Check Unity's [WebGL documentation](https://docs.unity3d.com/Manual/webgl.html) or the browser console for specific errors.

