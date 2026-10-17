# Shatchandi Logistic Private Limited — SCL website

A responsive single-page company website built with React, Vite, Tailwind CSS and lucide-react.

## Requirements
- Node.js 20 or newer recommended
- npm

## Run locally
1. Extract the ZIP.
2. Open this folder in VS Code.
3. Open a terminal in this folder.
4. Install dependencies:

   ```bash
   npm install
   ```

5. Start the development server:

   ```bash
   npm run dev
   ```

6. Open the local URL Vite prints, usually `http://localhost:5173`.

## Production build
```bash
npm run build
npm run preview
```
The production website is generated in the `dist` folder.

## Folder structure
```text
src/
├── components/
│   ├── Header/Header.jsx
│   └── Footer/Footer.jsx
├── sections/
│   ├── Hero/Hero.jsx
│   ├── TrustStrip/TrustStrip.jsx
│   ├── About/About.jsx
│   ├── Services/Services.jsx
│   ├── WhyChooseUs/WhyChooseUs.jsx
│   ├── Industries/Industries.jsx
│   ├── Process/Process.jsx
│   ├── CTA/CTA.jsx
│   └── Contact/Contact.jsx
├── styles/index.css
├── App.jsx
└── main.jsx
```

## Before publishing
- In `src/sections/Contact/Contact.jsx`, replace `YOUR_OFFICIAL_EMAIL@example.com` with the official company email.
- Add the confirmed phone number, registered office address and operating hours in Contact.jsx and Footer.jsx.
- Verify that −20°C storage and each listed service reflect the company's actual operating capabilities.
- Replace social links with official company profile URLs or remove the icons if there are no official profiles.
- Images currently use external Unsplash URLs and need an internet connection. For production, download licensed images into `src/assets/` and reference them locally.
- The contact form currently drafts an email using `mailto:`. It does not store submissions in a database. A backend/API integration is needed for direct form submissions.
