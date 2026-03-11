# Design Analysis: Reference (Lauren Waller)

## Common design patterns

- **Navigation**: Minimal, text-only nav (WORK, ABOUT, SHOP, CONTACT). No hamburger on desktop; clean horizontal links. Often repeated or staggered for emphasis.
- **Typography**: Strong hierarchy — large display name/title, supporting line (e.g. "Framer Developer and Partner"). Serif or distinctive sans for headlines; body remains readable.
- **Layout**: Single-page feel with clear sections. Plenty of whitespace; content not cramped. Sections feel like "blocks" with clear separation.
- **Project cards**: High-end portfolios use hover states that feel intentional (scale, border glow, or subtle lift). Cards often show one key visual or a simple label.
- **Bio / About**: Short, confident copy. One to two lines that state role + differentiator (e.g. "Award-winning…", "Framer Developer and Partner"). Tone is assured, not boastful.
- **Footer**: Minimal — often just © year. No clutter.
- **Overall feel**: Dark or neutral background, light text. Smooth scroll, subtle motion. "Bespoke" rather than template — custom type, restrained palette, intentional spacing.

## Applied to this portfolio

- Dark mode base (`surface`, `border`, `accent`).
- Bento-style project grid (varied cell sizes).
- Framer Motion for staggered entry and hover.
- Typography-focused hero (name + one-line descriptor).
- About section written from resume in a confident, concise tone.
- Nav: Work | About | Contact (no shop). Smooth scroll to sections.
