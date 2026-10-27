# Commit plan (run one at a time, as you finish each step)

git init && git branch -M main
1. git add package.json tsconfig.json next.config.mjs postcss.config.mjs .gitignore && git commit -m "chore: set up Next.js, TypeScript and Tailwind"
2. git add app/globals.css && git commit -m "style: add colour, font and focus design tokens"
3. git add components/Button.tsx components/Section.tsx components/Logo.tsx public/mark.svg && git commit -m "feat: add Button, Section and Logo components"
4. git add components/Navbar.tsx components/Footer.tsx app/layout.tsx && git commit -m "feat: add sticky navbar with mobile menu, footer and root layout"
5. git add lib/content.ts components/Mockup.tsx components/FooterCta.tsx && git commit -m "feat: add site content and hero pipeline mockup"
6. git add components/FAQ.tsx app/page.tsx && git commit -m "feat: build home page with FAQ accordion"
7. git add components/ScreenPlaceholder.tsx app/features && git commit -m "feat: add features page with alternating rows and comparison table"
8. git add components/PricingPlans.tsx app/pricing && git commit -m "feat: add pricing page with billing toggle and FAQ"
8b. git add components/TrialForm.tsx && git commit -m "feat: add trial form with validation and success state"
8c. git add app/robots.ts app/sitemap.ts && git commit -m "feat: add robots and sitemap"
9. (after Lighthouse fixes) git commit -am "fix: accessibility and performance fixes from Lighthouse"
10. git add README.md && git commit -m "docs: add README with setup, decisions and assumptions"
