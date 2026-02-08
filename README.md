# React + TypeScript + Vite

- Created Using: npm create vite@latest my-portfolio -- --template react-ts

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(["dist"]),
  {
    files: ["**/*.{ts,tsx}"],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ["./tsconfig.node.json", "./tsconfig.app.json"],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
]);
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from "eslint-plugin-react-x";
import reactDom from "eslint-plugin-react-dom";

export default defineConfig([
  globalIgnores(["dist"]),
  {
    files: ["**/*.{ts,tsx}"],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs["recommended-typescript"],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ["./tsconfig.node.json", "./tsconfig.app.json"],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
]);
```

MAKE YOUR APP LIVE

Step 1: Create a GitHub Repository

1. Go to github.com/new
2. Create a new repository named my-portfolio (or any name you prefer)
3. Keep it Public (required for free Vercel deployment)
4. Don't initialize with README (we already have code)
5. Click Create repository

Step 2: Push Your Code to GitHub
Once you've created the repository, run these commands (replace YOUR_USERNAME with your GitHub username)
cd /Users/nishant/git_repo/rn_repo/my-portfolio
git remote add origin https://github.com/YOUR_GITHUB_USERNAME/my-portfolio.git
git remote add origin https://github.com/nishiarya/my-portfolio.git
git push -u origin main

Step 3: Deploy on Vercel

1. Go to vercel.com
2. Click "Sign Up" → Choose "Continue with GitHub"
3. Authorize Vercel to access your GitHub
4. Click "Add New..." → "Project"
5. Find and select your my-portfolio repository
6. Vercel will auto-detect Vite settings:

- Framework Preset: Vite
- Build Command: npm run build
- Output Directory: dist

1. Click "Deploy"

Step 4: Your Site is Live!
Within 1-2 minutes, your portfolio will be live at:

https://my-portfolio-YOUR_USERNAME.vercel.app
https://my-portfolio-nishiarya.vercel.app

Structure Created
Directory: /public/awards/
Each award now has a "View Certificate" link that points to:
Award Image Filename
AI White Belt ai-white-belt-2025.png
Team Star Award 2025 team-star-award-2025.png
Standing Ovation Award 2025 standing-ovation-2025.png
Leadership Learning Program 2025 leadership-learning-program-2025.png
Information Security and Data Privacy info-security-data-privacy-2025.png
AQT Ninja Award 2022 aqt-ninja-award-2022.png
Express Delivery - First Winner express-delivery-first-winner-2021.png
Pat on Back Award 2020 pat-on-back-2020.png
Digital Warrior EMEA 2018 digital-warrior-emea-2018.png
Pat on Back Award 2018 pat-on-back-2018.png
TechM Excellence 2017 techm-excellence-2017.png
Client Recognition (Sunrise) client-recognition-sunrise-2017.png
Bravo Award 2017 bravo-award-2017.png
Meritorious Mentor 2015 meritorious-mentor-2015.png
Star of the Month 2014 star-of-month-2014.png
Face Off 2012 face-off-2012.png
iApp Innovation 2011 iapp-innovation-2011.png

How to Add Your Images

1. Save your certificate images to: public/awards/
2. Name them exactly as listed above (or in the README file at public/awards/README.md)
3. Supported formats: PNG (recommended), JPG, WebP
   The "View Certificate" link will automatically work once you add the images!

MY WEBSITE URL:
https://my-portfolio-nishiarya.vercel.app/
