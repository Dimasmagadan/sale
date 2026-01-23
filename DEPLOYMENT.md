# Deployment Instructions

## GitHub Pages Setup

### One-Time Setup

1. **Go to Repository Settings**
   - Navigate to your repository on GitHub
   - Click "Settings" tab
   - Click "Pages" in the left sidebar

2. **Configure Source**
   - Under "Source", select "GitHub Actions"
   - This enables the automated deployment workflow

3. **First Deployment**
   - Push to the `main` branch
   - The GitHub Actions workflow will automatically build and deploy
   - Visit `https://dimasmagadan.github.io/sale` after deployment completes

### Automatic Deployment

Every time you push to the `main` branch, GitHub Actions will:
1. Install dependencies
2. Build the static site
3. Deploy to GitHub Pages

You can monitor deployment status in the "Actions" tab of your repository.

## Local Development

### Prerequisites
- Node.js 18 or higher
- npm (comes with Node.js)

### Commands

```bash
# Install dependencies
npm install

# Start development server
npm run dev
# Opens at http://localhost:4321/sale

# Build for production
npm run build

# Preview production build
npm run preview
```

## Adding/Editing Content

### Add a New Item

1. Create a new JSON file in `content/items/`
   - Example: `content/items/my-item.json`
   - The filename becomes the URL slug

2. Add item data using this structure:
```json
{
  "title": "Item Name",
  "price": 50,
  "description": "Item description",
  "condition": "Like New",
  "ageRange": "3-8 years",
  "images": [
    "https://example.com/image1.jpg",
    "https://example.com/image2.jpg"
  ],
  "availability": "available"
}
```

3. Commit and push to GitHub
```bash
git add content/items/my-item.json
git commit -m "Add new item: my-item"
git push
```

4. GitHub Actions will automatically rebuild and deploy

### Mark Item as Sold

1. Open the item's JSON file (e.g., `content/items/my-item.json`)
2. Change `"availability": "available"` to `"availability": "sold"`
3. Save, commit, and push

### Update Contact Information

1. Open `src/config/site.config.ts`
2. Update the `telegram` section:
```typescript
telegram: {
  username: 'your_actual_username',
  link: 'https://t.me/your_actual_username'
}
```
3. Save, commit, and push

## Customization

### Change Colors

Edit `src/config/site.config.ts`:
```typescript
theme: {
  colors: {
    primary: '#3b82f6',      // Main color
    primaryHover: '#2563eb', // Hover state
    // ... other colors
  }
}
```

### Change Site Information

Edit `src/config/site.config.ts`:
```typescript
name: 'Your Site Name',
description: 'Your site description',
```

## Troubleshooting

### Build Fails
- Check the Actions tab for error details
- Ensure all JSON files are valid (no syntax errors)
- Verify all image URLs are accessible

### Links Don't Work
- Make sure `base` in `astro.config.mjs` matches your repo name
- Use relative paths (e.g., `/items/slug`) not absolute URLs

### Images Not Loading
- Verify image URLs are publicly accessible
- Check that URLs use HTTPS
- Consider using image hosting services like Unsplash, Imgur, or Cloudinary

## Performance Tips

- Use optimized images (WebP format recommended)
- Keep image file sizes under 500KB
- Use external image hosting to keep repository size small
- The site is already configured for optimal loading with lazy loading
