# Vercel API 500 Error Troubleshooting

## Common Causes of 500 Errors on `/api/contact`

### 1. Database Connection Issue

**Symptoms**: 500 error when submitting contact form

**Check**:
1. Go to Vercel Dashboard → Your Project → Settings → Environment Variables
2. Verify `DATABASE_URL` is set correctly
3. Make sure it's set for **Production** environment (and Preview if needed)

**Fix**:
- Ensure your `DATABASE_URL` is the full Supabase connection string
- If password has special characters, make sure they're URL-encoded:
  - `@` → `%40`
  - `[` → `%5B`
  - `]` → `%5D`
  - etc.

**Test**:
Visit: `https://your-app.vercel.app/api/health`
Should return: `{ "success": true, "database": "configured" }`

### 2. Database Tables Don't Exist

**Symptoms**: 500 error with database-related error in logs

**Fix**:
1. Run migrations locally first:
   ```bash
   npm run db:push
   ```
2. Or connect to your Supabase database and verify `contact_messages` table exists

### 3. Missing Environment Variables

**Symptoms**: Function logs show "DATABASE_URL is not defined"

**Fix**:
1. Go to Vercel Dashboard → Settings → Environment Variables
2. Add `DATABASE_URL` with your Supabase connection string
3. **Important**: Redeploy after adding environment variables

### 4. Serverless Function Timeout

**Symptoms**: Request takes too long, times out

**Fix**:
- Check Vercel function logs for timeout errors
- Optimize database queries if needed
- Consider increasing function timeout in Vercel settings (Pro plan)

## How to Check Vercel Logs

1. Go to Vercel Dashboard → Your Project
2. Click on the latest deployment
3. Go to **Functions** tab
4. Click on the function (e.g., `api/index`)
5. View **Logs** tab to see error messages

## Testing the API

### Test Health Endpoint
```bash
curl https://your-app.vercel.app/api/health
```

Expected response:
```json
{
  "success": true,
  "message": "API is healthy",
  "database": "configured"
}
```

### Test Contact Form
```bash
curl -X POST https://your-app.vercel.app/api/contact \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test User",
    "email": "test@example.com",
    "message": "Test message"
  }'
```

Expected response (success):
```json
{
  "success": true,
  "message": "Contact message sent successfully",
  "data": {
    "id": "...",
    "name": "Test User",
    "email": "test@example.com",
    "message": "Test message",
    "createdAt": "..."
  }
}
```

## Quick Fixes

### If DATABASE_URL is missing:
1. Get your Supabase connection string
2. Add it to Vercel environment variables
3. Redeploy

### If database connection fails:
1. Check Supabase dashboard - is database running?
2. Verify connection string is correct
3. Check if IP restrictions are blocking Vercel

### If tables don't exist:
1. Run `npm run db:push` locally (with DATABASE_URL set)
2. Or manually create tables in Supabase dashboard

## Still Having Issues?

1. Check Vercel function logs (most important!)
2. Verify environment variables are set
3. Test the health endpoint
4. Check Supabase dashboard for connection issues
5. Verify the build completed successfully


