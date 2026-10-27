# KanchanFlow marketing site

Three-page Next.js marketing site (Home, Features, Pricing) for KanchanFlow, a manufacturing CRM. Built for the Meru Technosoft frontend assignment.

## Run it

```bash
npm install
npm run dev      # http://localhost:3000
npm run build && npm start
```

## Stack
Next.js (App Router, TypeScript), Tailwind CSS v4, `next/font`, `next/image`, lucide-react icons. No UI kits or templates.

## Design decisions
- **Colour** (tokens in `app/globals.css`): graphite `#1b1c1f`, molten gold `#e0a419`, light steel `#e4e8ec`, paper `#f5f6f7`. Gold carries every call to action; dark gold `#7a5200` is used for gold text on light backgrounds to keep contrast above 4.5:1.
- **Type**: Barlow Condensed for headings (bold, factory-signage feel) and IBM Plex Sans for body text (readable in dense tables and forms).
- **Shape**: square corners, thick graphite borders and a hard gold offset shadow on the hero mockup. No gradients.
- **Motion**: one effect only, the pipeline progress bars filling on load. Disabled under `prefers-reduced-motion`.

## Assumptions
- Prices (in INR, before GST) and plan limits are invented for the assignment.
- The product mockups are built from markup, not screenshots, so they stay sharp and light.
- Footer links, social links and "Talk to sales" are placeholders. Update `metadataBase` in `app/layout.tsx` to the real deployed URL.
- No backend: the trial form validates on the client and shows a success state, but sends nothing.

## What I would improve with more time
- Real product screenshots and an Open Graph image per page.
- A real trial sign-up endpoint behind the form.
- Dark mode and a page transition.
- Unit tests for the FAQ and pricing toggle.
