# EmSAIL website — Featured Research Hero

This is your original homepage with a new research carousel in the hero section. The rest of the page remains as uploaded.

## Preview
Open `index.html` in a browser (or run `python -m http.server 8000` here).

## Image handoff specification
- Master artwork: **1920 × 800 px**, 2.4:1 (2880 × 1200 for high resolution).
- Export: WebP or PNG, ideally under 400–700 KB for fast loading.
- **Do not place titles or buttons inside the artwork**; HTML overlays them.
- Keep the **left 55% visually quiet** to preserve readability; put the main visual in the **right 45%**.
- The outer edges may crop on mobile.
- Replace `imgs/hero-*.svg` with `imgs/hero-*.webp`, then update the `--slide-image` URL in `index.html`.
- Edit each slide's title, subtitle, description, and links in `index.html`. Existing links are placeholder anchors to sections; replace with paper/project URLs when ready.
- Carousel rotates every 6.5 seconds; click arrows or bottom tabs to switch.

**Note:** The supplied site references `imgs/logo.png` and `LiYan.jpg`, but these assets were not uploaded. Copy those existing assets into this folder at the same relative paths to show them.
