# Render Deployment Guide for Minecraft Hebrew Commands Generator

## Project Overview
This project consists of:
- **Frontend**: React application (`client/` directory)
- **Backend**: Node.js/Express API with SQLite database (`server/` directory)
- **Database**: SQLite file-based database (automatically created)

## ✅ FIXED: Deployment Configuration

### Root Cause of Previous Issues:
1. **Module Resolution**: Render was trying to start server from root directory but dependencies were in server subdirectory
2. **Build Context**: Build script wasn't properly handling monorepo structure on Render
3. **Working Directory**: Start command needed to run from server directory context

### Files Modified for Render Deployment:
1. **`server/server.js`** - Updated to serve React build files in production
2. **`package.json`** - FIXED build and start scripts for proper monorepo handling
3. **`render.yaml`** - NEW: Proper Render service configuration for monorepos
4. **`Procfile`** - FIXED: Start command runs from server directory
5. **`.gitignore`** - Allow client build directory to be committed

### Fixed Configuration Details:
- **Build Command**: `cd client && npm ci && npm run build && cd ../server && npm ci`
- **Start Command**: `cd server && npm start`
- **Working Directory**: Explicitly change to server directory before starting

### Environment Variables Required on Render:
- `NODE_ENV=production` (automatically set by render.yaml)
- `CORS_ORIGIN=*` (configured in render.yaml)
- `PORT` (automatically provided by Render)

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

#### Option A: Using render.yaml (Recommended - FIXED)
1. The included `render.yaml` file will automatically configure the service with fixed settings
2. Simply connect the repository and Render will use the configuration file
3. The service will be created with optimal monorepo handling automatically
4. ✅ **Fixed Issues**: Proper build and start commands for monorepo structure

#### Option B: Manual Dashboard Configuration
1. Go to [Render Dashboard](https://dashboard.render.com/)
2. Click "New +" → "Web Service"
3. Connect your GitHub repository: `https://github.com/Meir83/minecraft-hebrew-commands`
4. Configure the service with FIXED settings:
   - **Name**: `minecraft-hebrew-commands`
   - **Environment**: `Node`
   - **Region**: `Oregon (US West)`
   - **Branch**: `master`
   - **Build Command**: `cd client && npm ci && npm run build && cd ../server && npm ci`
   - **Start Command**: `cd server && npm start`
5. Add Environment Variables:
   - `NODE_ENV`: `production`
   - `CORS_ORIGIN`: `*`
6. Click "Create Web Service"

#### ⚠️ IMPORTANT: Use the FIXED commands above, not the old ones!

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

### ✅ RESOLVED: "Cannot find module 'express'" Error
**Root Cause**: Render was trying to start the server from the root directory, but Express was installed in the server subdirectory.

**Fix Applied**:
- Changed start command to `cd server && npm start`
- Updated build command to properly install server dependencies
- Added render.yaml with correct working directory handling

### ✅ RESOLVED: "Cannot find module '/opt/render/project/src/server.js'" Error
**Root Cause**: Incorrect path specification in start command.

**Fix Applied**:
- Updated start command to use relative path with proper working directory
- Changed from `node server/server.js` to `cd server && npm start`

### Common Issues (Updated):
1. **Build Fails**: ✅ Fixed - Check that monorepo dependencies are properly installed in both client and server directories
2. **API 404**: Verify API routes are correctly prefixed with `/api`
3. **Database Issues**: Check server logs for SQLite initialization errors
4. **Module Not Found**: ✅ Fixed - Ensure start command runs from correct directory context

### Debug Commands:
```bash
# Test build locally (use the same commands as Render)
cd client && npm ci && npm run build && cd ../server && npm ci

# Test production server locally (use the same start command as Render)
cd server && NODE_ENV=production npm start

# Alternative local test
NODE_ENV=production npm run start
```

### Render-Specific Debugging:
```bash
# Check if your build produces the expected files
ls -la client/build/
ls -la server/node_modules/express/

# Verify your server can find dependencies
cd server && node -e "console.log(require('express'))"
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