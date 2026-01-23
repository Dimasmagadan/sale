# Kids Items Marketplace

A modern, fast static marketplace website for selling used children's items. Built with Astro and Tailwind CSS, optimized for GitHub Pages deployment.

## 🚀 Features

- **Static Site Generation** - Fast, optimized pages with perfect Lighthouse scores
- **Mobile-First Design** - Responsive layout that works beautifully on all devices
- **Easy Content Management** - Add items using simple JSON files
- **Telegram Integration** - Direct contact link on every page
- **Image Optimization** - Lazy loading and optimized images
- **SEO Friendly** - Meta tags and OpenGraph support for social sharing
- **GitHub Pages Ready** - Automated deployment via GitHub Actions

## 📋 Quick Start

### Prerequisites

- Node.js 18+ installed
- Git installed

### Local Development

1. Clone the repository:
```bash
git clone https://github.com/Dimasmagadan/sale.git
cd sale
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser to `http://localhost:4321`

### Build for Production

```bash
npm run build
npm run preview  # Preview the production build locally
```

## 📝 How to Add Items

Items are stored as JSON files in the `content/items/` directory.

### Step 1: Create a New JSON File

Create a new file in `content/items/` with a descriptive name (e.g., `toy-car.json`). The filename will become the URL slug.

### Step 2: Add Item Data

Use this template:

```json
{
  "title": "Item Title",
  "price": 25,
  "description": "Detailed description of the item.\n\nYou can use multiple paragraphs by separating them with \\n\\n.",
  "condition": "Like New",
  "ageRange": "2-6 years",
  "images": [
    "https://example.com/image1.jpg",
    "https://example.com/image2.jpg"
  ],
  "availability": "available"
}
```

### Field Descriptions

- **title** (required): Item name
- **price** (required): Price in dollars (number, no $ sign)
- **description** (required): Full description, supports line breaks with `\n\n`
- **condition** (required): Item condition (e.g., "Like New", "Good", "Excellent")
- **ageRange** (required): Recommended age range
- **images** (required): Array of 1-5 image URLs
- **availability** (required): Either `"available"` or `"sold"`

### Step 3: Save and Deploy

After adding or editing items:
1. Commit your changes: `git add . && git commit -m "Add new item"`
2. Push to GitHub: `git push`
3. GitHub Actions will automatically build and deploy your changes

## 🔗 How to Change the Telegram Link

All Telegram contact information is managed in a single file: `src/config/site.config.ts`

1. Open `src/config/site.config.ts`
2. Update the telegram section:

```typescript
telegram: {
  username: 'your_telegram_username',
  link: 'https://t.me/your_telegram_username'
}
```

3. Save, commit, and push your changes

The Telegram link will automatically update across:
- Header (on every page)
- Footer (on every page)
- Item detail pages
- Home page

## 🎨 How to Customize Design

Design changes are centralized in two files for easy customization.

### 1. Colors and Theme (`src/config/site.config.ts`)

Edit the `theme.colors` section:

```typescript
theme: {
  colors: {
    primary: '#3b82f6',      // Main accent color (buttons, links)
    primaryHover: '#2563eb', // Hover state for primary color
    secondary: '#64748b',    // Secondary elements
    accent: '#f59e0b',       // Accent highlights
    background: '#ffffff',   // Page background
    text: '#1e293b',         // Main text color
    textLight: '#64748b',    // Light text color
  }
}
```

### 2. Tailwind Configuration

For advanced styling changes, Tailwind CSS classes are used throughout the components. The main files to edit are:

- `src/layouts/Layout.astro` - Site-wide layout, header, footer
- `src/pages/index.astro` - Home page layout
- `src/pages/items/[slug].astro` - Item detail page layout
- `src/components/ItemCard.astro` - Item card component

### Common Customizations

**Change fonts:**
Edit `theme.fonts` in `src/config/site.config.ts`:
```typescript
fonts: {
  sans: 'system-ui, -apple-system, sans-serif',
  heading: 'system-ui, -apple-system, sans-serif',
}
```

**Adjust spacing:**
Edit `theme.spacing` in `src/config/site.config.ts`:
```typescript
spacing: {
  containerMaxWidth: '1280px',
  sectionPadding: '2rem',
}
```

## 🌐 GitHub Pages Deployment

### Initial Setup

1. Go to your repository Settings → Pages
2. Under "Source", select "GitHub Actions"
3. The workflow will run automatically on every push to `main`

### Configuration

The site is configured for GitHub Pages in `astro.config.mjs`:

```javascript
export default defineConfig({
  site: 'https://dimasmagadan.github.io',
  base: '/sale',
  // ...
})
```

**If your repository name is different**, update the `base` value:
- For `https://username.github.io/repo-name`, set `base: '/repo-name'`
- For `https://username.github.io` (user site), set `base: '/'`

Also update `src/config/site.config.ts`:
```typescript
basePath: '/sale', // Change to match your repo name
```

## 📁 Project Structure

```
/
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Actions deployment workflow
├── content/
│   └── items/                  # Item JSON files
│       ├── wooden-blocks-set.json
│       ├── kids-bicycle-blue.json
│       └── baby-activity-gym.json
├── public/                     # Static assets (images, favicon)
│   └── images/
├── src/
│   ├── components/
│   │   └── ItemCard.astro     # Reusable item card component
│   ├── config/
│   │   └── site.config.ts     # Central configuration
│   ├── layouts/
│   │   └── Layout.astro       # Main layout with header/footer
│   ├── pages/
│   │   ├── index.astro        # Home page (items list)
│   │   ├── 404.astro          # 404 error page
│   │   └── items/
│   │       └── [slug].astro   # Dynamic item detail pages
│   └── styles/
│       └── global.css         # Global styles (Tailwind)
├── astro.config.mjs           # Astro configuration
├── package.json
└── README.md
```

## 🔧 Technical Stack

- **Framework:** Astro 5.x
- **Styling:** Tailwind CSS 4.x
- **Deployment:** GitHub Pages
- **CI/CD:** GitHub Actions
- **Language:** TypeScript

## 📱 Performance

This site is optimized for performance:
- ✅ Static site generation (no server required)
- ✅ Optimized images with lazy loading
- ✅ Minimal JavaScript
- ✅ Mobile-first responsive design
- ✅ Fast page loads
- ✅ Target: Lighthouse score ≥90 on mobile

## 🤝 Contributing

1. Add or edit items in `content/items/`
2. Test locally with `npm run dev`
3. Commit and push your changes
4. GitHub Actions will automatically deploy

## 📄 License

This project is open source and available for personal and commercial use.

## 💬 Support

For questions or issues, contact us via [Telegram](https://t.me/your_telegram_username).
