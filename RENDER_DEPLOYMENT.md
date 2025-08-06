# Render Deployment Guide for Minecraft Hebrew Commands Generator

## Project Overview
This project consists of:
- **Frontend**: React application (`client/` directory)
- **Backend**: Node.js/Express API with SQLite database (`server/` directory)
- **Database**: SQLite file-based database (automatically created)

## Deployment Configuration

### Files Modified for Render Deployment:
1. **`server/server.js`** - Updated to serve React build files in production
2. **`package.json`** - Updated build and start scripts for Render
3. **`client/package.json`** - Removed development proxy setting
4. **`render.yaml`** - Render service configuration
5. **`.gitignore`** - Allow client build directory to be committed

### Environment Variables Required on Render:
- `NODE_ENV=production` (automatically set)
- `PORT=10000` (Render default)
- `CORS_ORIGIN=*` (allow all origins in production)

## Step-by-Step Deployment Instructions

### 1. Prepare Repository
```bash
# Add all changes
git add .

# Commit deployment configurations
git commit -m "Configure project for Render deployment

- Update server to serve React build files in production
- Configure build scripts for Render
- Add render.yaml configuration file
- Remove client proxy setting for production
- Update .gitignore to allow build directory"

# Push to GitHub
git push origin master
```

### 2. Deploy to Render

#### Option A: Using Render Dashboard
1. Go to [Render Dashboard](https://dashboard.render.com/)
2. Click "New +" → "Web Service"
3. Connect your GitHub repository: `https://github.com/Meir83/minecraft-hebrew-commands`
4. Configure the service:
   - **Name**: `minecraft-hebrew-commands`
   - **Environment**: `Node`
   - **Region**: `Oregon (US West)`
   - **Branch**: `master`
   - **Build Command**: `npm run build`
   - **Start Command**: `npm start`
5. Add Environment Variables:
   - `NODE_ENV`: `production`
   - `CORS_ORIGIN`: `*`
6. Click "Create Web Service"

#### Option B: Using render.yaml (Recommended)
1. The included `render.yaml` file will automatically configure the service
2. Simply connect the repository and Render will use the configuration file
3. The service will be created with optimal settings automatically

### 3. Verify Deployment

After deployment, verify these endpoints:
- **Health Check**: `https://your-app-name.onrender.com/health`
- **Frontend**: `https://your-app-name.onrender.com/`
- **API**: `https://your-app-name.onrender.com/api/generate-command` (POST)

## Project Structure in Production

```
Production App Structure:
├── server/                 # Backend API
│   ├── server.js          # Main server (serves React + API)
│   ├── routes/            # API routes
│   ├── services/          # Business logic
│   └── database/          # SQLite database
└── client/build/          # React production build (served by server)
```

## How It Works in Production

1. **Single Server**: The Node.js server handles both API routes and static file serving
2. **Static Files**: React build files are served from `client/build/`
3. **API Routes**: All `/api/*` requests go to the Express API
4. **Client Routing**: All other requests serve the React `index.html` for client-side routing
5. **Database**: SQLite database is automatically created on first run

## Database Considerations

- **SQLite**: Used for simplicity and automatic setup
- **Data Persistence**: Database file is stored in the container (will reset on redeploys)
- **For Production**: Consider migrating to PostgreSQL for data persistence

To upgrade to PostgreSQL later:
1. Add PostgreSQL database in Render
2. Update database connection in `server/database/db.js`
3. Add `DATABASE_URL` environment variable

## Monitoring and Maintenance

### Health Monitoring
- Health endpoint: `/health`
- Returns server status and timestamp
- Used by Render for health checks

### Logs
- Access logs through Render dashboard
- Server logs include database initialization and request processing

### Updates
- Push to `master` branch to trigger automatic redeployment
- Build time: ~2-3 minutes (includes npm install and React build)

## Troubleshooting

### Common Issues:
1. **Build Fails**: Check that all dependencies are in `package.json`
2. **API 404**: Verify API routes are correctly prefixed with `/api`
3. **Database Issues**: Check server logs for SQLite initialization errors

### Debug Commands:
```bash
# Test build locally
npm run build

# Test production server locally
NODE_ENV=production npm start
```

## Security Notes

- Environment variables are properly configured
- Database access is application-level only
- CORS is configured for production use
- Helmet middleware provides security headers

## Cost Optimization

- **Starter Plan**: Free tier suitable for development/demo
- **Auto-sleep**: Service sleeps after 15 minutes of inactivity on free tier
- **Upgrade**: Consider paid plan for production use to avoid sleep

## Success Indicators

✅ Build completes successfully  
✅ Health endpoint responds  
✅ Frontend loads correctly  
✅ API endpoints function  
✅ Database initializes with sample data  
✅ Hebrew command generation works  

The application should now be fully functional on Render with both frontend and backend working seamlessly together!