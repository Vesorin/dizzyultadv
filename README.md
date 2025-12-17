# The Dizzy Fansite

A React-based website for The Dizzy Fansite.

## Setup

1. Install dependencies:
```bash
npm install
```

2. Run development server:
```bash
npm run dev
```

3. Build for production:
```bash
npm run build
```

## Deployment to GitHub Pages

This project is configured to deploy automatically to GitHub Pages.

### Initial Setup:

1. Create a new repository on GitHub named `dizzyultadv`
2. Push your code to the repository:
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/dizzyultadv.git
git push -u origin main
```

3. Enable GitHub Pages:
   - Go to your repository settings
   - Navigate to "Pages" in the left sidebar
   - Under "Source", select "GitHub Actions"
   - Save the settings

### Automatic Deployment:

Once set up, every push to the `main` branch will automatically deploy your site to:
`https://YOUR_USERNAME.github.io/dizzyultadv/`

The GitHub Actions workflow will handle the build and deployment automatically.

## Images

Place your images in the `public/images/` folder:
- `Header.Png` - Header background and character images
- `BackgroundMain.png` - Main content background

