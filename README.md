# Manasvi Gottipati — Portfolio

Minimal, dark-mode personal portfolio built with Next.js 15, Tailwind CSS, and Framer Motion. Content is driven by resume data in a case-study format.

## Design

- **Reference**: [Lauren Waller](https://lauren-waller.com/) — typography-led, minimal nav, clear sections.
- **Aesthetic**: Dark surface, subtle borders, Instrument Serif for headings, smooth scroll and entry animations.
- **Layout**: Bento-style project grid with varied card sizes; responsive single-page sections.

## Run locally

If `npm install` fails with `EPERM` on the cache, fix npm cache ownership first:

```bash
sudo chown -R $(whoami) ~/.npm
```

Then:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Structure

- `src/app/` — App router (layout, page, globals).
- `src/components/` — Nav, Hero, Projects (grid + ProjectCard), About, Contact, Footer.
- `src/data/case-studies.ts` — Site config and case study entries (edit here to add/change projects).
- `src/types/case-study.ts` — TypeScript types for case studies and config.

## Build

```bash
npm run build
npm start
```
