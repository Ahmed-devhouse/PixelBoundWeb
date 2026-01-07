# Vercel Deployment Guide

This guide will help you deploy your PixelBound Web application to Vercel.

## Prerequisites

1. A Vercel account (sign up at [vercel.com](https://vercel.com))
2. Your project pushed to GitHub, GitLab, or Bitbucket
3. Your Supabase database URL ready

## Deployment Steps

### Step 1: Prepare Your Repository

1. **Commit all changes** to your repository:
   ```bash
   git add .
   git commit -m "Prepare for Vercel deployment"
   git push
   ```

### Step 2: Deploy to Vercel

#### Option A: Deploy via Vercel Dashboard (Recommended)

1. Go to [vercel.com](https://vercel.com) and sign in
2. Click **"Add New Project"**
3. Import your repository (GitHub/GitLab/Bitbucket)
4. Vercel will auto-detect the project settings
5. Configure the following:

   **Build Settings:**
   - Framework Preset: **Other**
   - Build Command: `npm run build`
   - Output Directory: `dist/public`
   - Install Command: `npm install`

   **Environment Variables:**
   - `DATABASE_URL` - Your Supabase PostgreSQL connection string
   - `NODE_ENV` - `production`
   - `PORT` - (optional, Vercel handles this automatically)

6. Click **"Deploy"**

#### Option B: Deploy via Vercel CLI

1. **Install Vercel CLI** (if not already installed):
   ```bash
   npm i -g vercel
   ```

2. **Login to Vercel**:
   ```bash
   vercel login
   ```

3. **Deploy**:
   ```bash
   vercel
   ```

4. **Follow the prompts:**
   - Set up and deploy? **Yes**
   - Which scope? (Select your account)
   - Link to existing project? **No** (for first deployment)
   - Project name? (Press Enter for default)
   - Directory? (Press Enter for current directory)
   - Override settings? **No**

5. **Set environment variables**:
   ```bash
   vercel env add DATABASE_URL
   # Paste your Supabase connection string when prompted
   
   vercel env add NODE_ENV production
   ```

6. **Deploy to production**:
   ```bash
   vercel --prod
   ```

### Step 3: Configure Environment Variables

In your Vercel project dashboard:

1. Go to **Settings** → **Environment Variables**
2. Add the following variables:

   | Variable | Value | Environment |
   |----------|-------|-------------|
   | `DATABASE_URL` | Your Supabase connection string | Production, Preview, Development |
   | `NODE_ENV` | `production` | Production, Preview, Development |

   **Important**: Make sure your `DATABASE_URL` is properly URL-encoded if it contains special characters.

### Step 4: Verify Database Connection

After deployment:

1. Your database tables should already exist (from `npm run db:push` locally)
2. If not, you can run migrations via Vercel CLI:
   ```bash
   vercel env pull .env.local
   npm run db:push
   ```

### Step 5: Test Your Deployment

1. Visit your Vercel deployment URL (e.g., `https://your-project.vercel.app`)
2. Test the contact form to ensure it's saving to your database
3. Check Vercel logs for any errors:
   - Go to **Deployments** → Click on your deployment → **Functions** tab

## Project Structure for Vercel

```
PixelBoundWeb/
├── api/
│   └── index.ts          # Vercel serverless function entry point
├── server/
│   ├── index.ts          # Express app (exported for Vercel)
│   ├── routes.ts         # API routes
│   └── ...
├── client/               # Frontend React app
├── dist/
│   └── public/          # Built static files (generated)
├── vercel.json          # Vercel configuration
└── package.json
```

## How It Works

1. **Build Phase**: Vercel runs `npm run build` which:
   - Builds the React frontend to `dist/public`
   - TypeScript is compiled

2. **Runtime**: 
   - API requests (`/api/*`) are handled by the Express server via `api/index.ts`
   - Static files are served from `dist/public`
   - All other routes fall back to `index.html` for client-side routing

3. **Serverless Functions**: The Express app runs as a serverless function on Vercel

## Important: Routing Configuration

The `vercel.json` is configured to:
- Route `/api/*` requests to the serverless function (Express API)
- Route all other requests to `index.html` (for client-side routing with Wouter)

This means:
- ✅ `/api/contact` → Handled by Express serverless function
- ✅ `/viral-match` → Serves `index.html`, then Wouter handles client-side routing
- ✅ `/` → Serves `index.html`, then Wouter handles client-side routing

## Troubleshooting

### 500 Error on Routes (like /viral-match)

If you get a `500: INTERNAL_SERVER_ERROR` or `FUNCTION_INVOCATION_FAILED` when visiting routes like `/viral-match`:

**Solution**: The `vercel.json` should route non-API requests to `index.html`, not to the API function. Make sure your `vercel.json` has:

```json
{
  "rewrites": [
    {
      "source": "/api/(.*)",
      "destination": "/api"
    },
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ]
}
```

**Not**:
```json
{
  "source": "/(.*)",
  "destination": "/api"  // ❌ This causes 500 errors on client routes
}
```

### Build Fails

- **Error: "Cannot find module"**
  - Make sure all dependencies are in `package.json`
  - Check that `node_modules` is not in `.gitignore` (it shouldn't be - Vercel installs it)

- **Error: "Build directory not found"**
  - Verify `vite.config.ts` has correct `outDir: "dist/public"`
  - Check that build command completes successfully

### Runtime Errors

- **500 Error on API routes**
  - Check Vercel function logs in the dashboard
  - Verify `DATABASE_URL` is set correctly
  - Ensure database tables exist (run `npm run db:push` if needed)

- **404 on routes**
  - Verify `vercel.json` rewrites are correct
  - Check that static files are being served properly

### Database Connection Issues

- **"Cannot connect to database"**
  - Verify `DATABASE_URL` is correct in Vercel environment variables
  - Check if your Supabase database allows connections from Vercel IPs
  - Ensure password is URL-encoded if it contains special characters

### Environment Variables Not Working

- Make sure variables are set for the correct environment (Production/Preview/Development)
- Redeploy after adding new environment variables
- Use `vercel env pull` to verify locally

## Custom Domain (Optional)

1. Go to **Settings** → **Domains**
2. Add your custom domain
3. Follow DNS configuration instructions
4. Vercel will automatically provision SSL certificates

## Continuous Deployment

Vercel automatically deploys when you push to your main branch:
- **Production**: Deploys from `main`/`master` branch
- **Preview**: Deploys from other branches and pull requests

## Monitoring

- **Analytics**: Enable in **Settings** → **Analytics**
- **Logs**: View in **Deployments** → Select deployment → **Functions** tab
- **Performance**: Check **Speed Insights** in the dashboard

## Additional Resources

- [Vercel Documentation](https://vercel.com/docs)
- [Vercel CLI Reference](https://vercel.com/docs/cli)
- [Serverless Functions Guide](https://vercel.com/docs/functions)

---

**Need Help?** Check Vercel's [support documentation](https://vercel.com/support) or your deployment logs.



