# GitHub Pages Deployment Guide

> Last updated: $(date)

This guide will help you deploy your Neo-Brutal Web app to GitHub Pages.

## Prerequisites

1. Your code is pushed to a GitHub repository
2. GitHub Actions are enabled for your repository

## Setup Steps

### 1. Enable GitHub Pages

1. Go to your repository on GitHub
2. Navigate to **Settings** → **Pages**
3. Under **Source**, select **GitHub Actions** (not "Deploy from a branch")
4. Save the settings

### 2. Push Your Code

The GitHub Actions workflow will automatically:
- Build your app when you push to the `main` branch
- Deploy it to GitHub Pages
- Make it available at `https://[your-username].github.io/[repository-name]/`

### 3. (Optional) Manual Deployment

You can also trigger a manual deployment:
1. Go to the **Actions** tab in your repository
2. Select **Deploy to GitHub Pages** workflow
3. Click **Run workflow**

## Important Notes

### Routing

The app uses **HashRouter** instead of BrowserRouter, which means:
- URLs will look like: `https://yoursite.github.io/#/about` instead of `https://yoursite.github.io/about`
- This is necessary because GitHub Pages doesn't support server-side routing for single-page apps
- All routing will work correctly with the hash-based routing

### Repository Name

If your repository name is not `Neo-Brutal-Web`, you may need to update the base path in `vite.config.ts`:

```typescript
export default defineConfig({
  base: '/your-repo-name/',
  // ... rest of config
})
```

However, with HashRouter, this is typically not necessary.

## Troubleshooting

### Build fails
- Check that all dependencies are in `package.json`
- Ensure Node.js version 18+ is available
- Review the Actions logs for specific errors

### Pages not updating
- Wait a few minutes for the deployment to complete
- Check the Actions tab to see if the workflow completed successfully
- Clear your browser cache

### 404 errors on routes
- Ensure you're using HashRouter (already configured in `App.tsx`)
- Routes should start with `#/` when visiting directly

## Custom Domain

To use a custom domain:
1. Add a `CNAME` file to the `public` folder with your domain name
2. Configure DNS settings with your domain provider
3. Update GitHub Pages settings with your custom domain

