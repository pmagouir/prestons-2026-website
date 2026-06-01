// gen_og.mjs — generate the Open Graph card at public/og-image.png (1200x630).
// Owned by the perf-seo agent. Re-run after a brand or tagline change:  node scripts/gen_og.mjs
import sharp from 'sharp';

const svg = `<svg width="1200" height="630" viewBox="0 0 1200 630" xmlns="http://www.w3.org/2000/svg">
  <rect width="1200" height="630" fill="#1F3D2B"/>
  <rect x="80" y="156" width="72" height="6" fill="#7A1E2C"/>
  <text x="80" y="312" font-family="Georgia, 'DejaVu Serif', serif" font-size="92" font-weight="700" fill="#F5F5F4">Preston Magouirk</text>
  <text x="80" y="384" font-family="Georgia, 'DejaVu Serif', serif" font-size="36" fill="#AFC2B6">Chief Strategy &amp; Analytics Officer &#183; DC CAP</text>
  <text x="80" y="506" font-family="Georgia, 'DejaVu Serif', serif" font-size="32" fill="#D7E0DA">Strategy that&#39;s tested. Analytics that&#39;s reproducible. AI that&#39;s governed.</text>
</svg>`;

await sharp(Buffer.from(svg)).png().toFile('public/og-image.png');
const m = await sharp('public/og-image.png').metadata();
console.log('og-image.png', `${m.width}x${m.height}`, m.format);
