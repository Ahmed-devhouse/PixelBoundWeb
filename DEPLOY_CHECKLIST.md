# Vercel Deployment Checklist

## Pre-Deployment Checklist

- [ ] **Build works locally**: Run `npm run build` and verify it completes without errors
- [ ] **Database is set up**: Run `npm run db:push` to ensure tables exist in Supabase
- [ ] **Environment variables ready**: Have your `DATABASE_URL` connection string ready
- [ ] **Code is committed**: All changes are committed and pushed to your repository

## Files Created for Vercel

✅ `vercel.json` - Vercel configuration
✅ `api/index.ts` - Serverless function entry point
✅ `.vercelignore` - Files to exclude from deployment
✅ `VERCEL_DEPLOYMENT.md` - Detailed deployment guide

## Quick Deploy Steps

### Via Vercel Dashboard (Easiest)

1. Go to [vercel.com](https://vercel.com) → **Add New Project**
2. Import your GitHub/GitLab/Bitbucket repository
3. Configure:
   - **Framework Preset**: Other
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist/public`
   - **Install Command**: `npm install`
4. Add environment variables:
   - `DATABASE_URL` = Your Supabase connection string
   - `NODE_ENV` = `production`
5. Click **Deploy**

### Via Vercel CLI

```bash
# Install Vercel CLI (if not installed)
npm i -g vercel

# Login
vercel login

# Deploy
vercel

# Add environment variables
vercel env add DATABASE_URL
vercel env add NODE_ENV production

# Deploy to production
vercel --prod
```

## Important Notes

1. **Database URL**: Make sure your Supabase `DATABASE_URL` is properly URL-encoded if it contains special characters
2. **Build Output**: The build creates files in `dist/public` - this is configured in `vite.config.ts`
3. **API Routes**: All `/api/*` requests are handled by the Express server via `api/index.ts`
4. **Static Files**: All other routes serve the React app from `dist/public`

## After Deployment

1. ✅ Test your live URL
2. ✅ Test the contact form (verify it saves to database)
3. ✅ Check Vercel function logs for any errors
4. ✅ Verify environment variables are set correctly

## Troubleshooting

- **Build fails**: Check that all dependencies are in `package.json`
- **500 errors**: Check Vercel function logs and verify `DATABASE_URL` is correct
- **404 on routes**: Verify `vercel.json` rewrites are working

See `VERCEL_DEPLOYMENT.md` for detailed troubleshooting.



