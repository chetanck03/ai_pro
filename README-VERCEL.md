# Deploying AI Assistant to Vercel

This guide explains how to deploy the AI Assistant website to Vercel with MongoDB Atlas integration.

## 🚀 Pre-deployment Setup

### 1. Prepare MongoDB Atlas

1. Create a MongoDB Atlas account at [https://www.mongodb.com/cloud/atlas](https://www.mongodb.com/cloud/atlas)
2. Create a new cluster (free tier is fine)
3. Set up database access:
   - Create a database user with read/write permissions
   - Add your IP to the IP Access List (or allow access from anywhere for development)
4. Get your MongoDB connection string:
   - Click "Connect" on your cluster
   - Choose "Connect your application"
   - Copy the connection string (it looks like: `mongodb+srv://<username>:<password>@cluster0.xxxxx.mongodb.net/ai-assistant`)
   - Replace `<username>` and `<password>` with your database user credentials

### 2. Prepare Your Project

1. Create a Vercel account at [https://vercel.com](https://vercel.com)
2. Install Vercel CLI:
```bash
npm install -g vercel
```

3. Create `vercel.json` in the project root:
```json
{
  "version": 2,
  "builds": [
    {
      "src": "server/index.ts",
      "use": "@vercel/node"
    },
    {
      "src": "client/package.json",
      "use": "@vercel/static-build",
      "config": { "distDir": "dist" }
    }
  ],
  "routes": [
    {
      "src": "/api/(.*)",
      "dest": "server/index.ts"
    },
    {
      "src": "/(.*)",
      "dest": "client/index.html"
    }
  ],
  "env": {
    "MONGODB_URI": "your_mongodb_atlas_uri"
  }
}
```

## 🚀 Deployment Steps

### 1. Login to Vercel
```bash
vercel login
```

### 2. Configure Environment Variables

1. Go to your Vercel project settings
2. Add the following environment variables:
   - `MONGODB_URI`: Your MongoDB Atlas connection string
   - `NODE_ENV`: "production"

### 3. Deploy

1. Push your code to GitHub
2. Import your repository in Vercel:
   - Go to [https://vercel.com/new](https://vercel.com/new)
   - Select your repository
   - Configure the project:
     - Set Framework Preset to "Other"
     - Set Root Directory to "/"
     - Build Command: `cd client && npm run build`
     - Output Directory: `client/dist`
   - Click Deploy

### 4. Verify Deployment

1. Once deployed, Vercel will provide you with a URL
2. Test the following:
   - Frontend loads correctly
   - Authentication works
   - Database operations are successful

## 🔧 Troubleshooting

### Common Issues

1. **MongoDB Connection Issues**
   - Verify your MongoDB Atlas connection string
   - Check if IP access is properly configured
   - Ensure environment variables are set correctly

2. **Build Failures**
   - Check build logs in Vercel dashboard
   - Verify all dependencies are listed in package.json
   - Make sure all required environment variables are set

3. **API Routes Not Working**
   - Check /api routes are properly configured in vercel.json
   - Verify server/index.ts is properly handling API routes
   - Check CORS settings if making frontend requests

## 📝 Project Structure for Vercel

```
/
├── client/             # Frontend code
│   ├── src/           # React source files
│   ├── public/        # Static assets
│   └── index.html     # Entry point
├── server/            # Backend code
│   ├── routes/       # API routes
│   └── index.ts      # Server entry point
├── shared/           # Shared code
├── vercel.json       # Vercel configuration
└── package.json      # Project dependencies
```

## 🔄 Updates and Maintenance

1. **Updating Your Deployment**
   - Push changes to your GitHub repository
   - Vercel will automatically rebuild and deploy

2. **Monitoring**
   - Use Vercel dashboard for deployment monitoring
   - Check MongoDB Atlas dashboard for database metrics

## 🆘 Support

If you encounter any issues:
1. Check Vercel deployment logs
2. Review MongoDB Atlas logs
3. Check for any error messages in the browser console
4. Verify environment variables are correctly set

For more help, visit:
- [Vercel Documentation](https://vercel.com/docs)
- [MongoDB Atlas Documentation](https://docs.atlas.mongodb.com/)
