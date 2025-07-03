# 🚀 Deployment Guide

## Architecture
- **Frontend**: Astro/React → Netlify
- **Backend**: PHP/Docker → Railway/Render

## 1. Backend Deployment (Railway - Recommended)

### Step 1: Push to GitHub
```bash
git add .
git commit -m "Configure for deployment"
git push origin main
```

### Step 2: Deploy to Railway
1. Go to [railway.app](https://railway.app)
2. Sign up with GitHub
3. Click "New Project" → "Deploy from GitHub repo"
4. Select your repository
5. Railway auto-detects Docker and deploys
6. Copy your app URL (e.g., `https://yourapp.railway.app`)

## 2. Frontend Deployment (Netlify)

### Step 1: Deploy to Netlify
1. Go to [netlify.com](https://netlify.com)
2. Sign up with GitHub
3. Click "New site from Git"
4. Select your repository
5. Configure build settings:
   - **Base directory**: `frontend`
   - **Build command**: `npm run build`
   - **Publish directory**: `frontend/dist`

### Step 2: Add Environment Variables
1. In Netlify dashboard → Site settings → Environment variables
2. Add variable:
   - **Key**: `PUBLIC_API_URL`
   - **Value**: Your Railway backend URL (e.g., `https://yourapp.railway.app`)
3. Redeploy your site

## 3. Alternative Backend Options

### Render (Free tier)
1. Go to [render.com](https://render.com)
2. Connect GitHub → Create Web Service
3. Choose Docker environment
4. Free tier available (spins down after inactivity)

### DigitalOcean App Platform
1. Go to [cloud.digitalocean.com](https://cloud.digitalocean.com)
2. Create App → GitHub source
3. Auto-detects Docker
4. $5/month minimum

## 4. Local Development

```bash
# Start backend
docker-compose up

# Start frontend (in another terminal)
cd frontend
npm install
npm run dev
```

## 5. Environment Variables

### Frontend (.env in frontend directory)
```
PUBLIC_API_URL=http://localhost:8000  # Development
PUBLIC_API_URL=https://yourapp.railway.app  # Production
```

## 6. Testing Deployment

1. Visit your Netlify URL
2. Open browser dev tools → Network tab
3. Try generating a map
4. Verify API calls go to your backend URL
5. Check for CORS errors (should be resolved by PHP headers)

## Troubleshooting

### CORS Issues
- Backend already has CORS headers configured
- Verify `Access-Control-Allow-Origin: *` in API responses

### API Connection Issues
- Check `PUBLIC_API_URL` environment variable
- Verify backend is running and accessible
- Test backend directly: `https://yourapp.railway.app/api/generate-map.php`

## Costs
- **Railway**: $5/month
- **Render**: Free tier available
- **Netlify**: Free for frontend hosting
- **Total**: $0-5/month 