# Personal site

A single-page personal site. Built for the Career Accelerator assignment.

**HTML and CSS only.** No JavaScript, no framework, no build step, no
dependencies — open `index.html` in a browser and it runs.

```
index.html    structure
style.css     tokens + layout
```

## Decisions worth explaining

**Two-tier tokens.** Tier 1 is raw values, tier 2 names them by job
(`--surface`, `--text-muted`, `--accent`). Nothing below the token block uses a
raw colour or size, so retheming is one edit in one place. Same discipline as a
real design system, scaled to what a single page justifies.

**No breakpoints for the grids.** `repeat(auto-fit, minmax(260px, 1fr))` lets
the grid choose its own column count from the space available, so there are no
media queries to keep in sync with the content. `clamp()` does the same for
headings — the size is continuous, so there's no width at which it's briefly
wrong.

**Accessibility is structural, not a pass at the end.**

- Skip link that is actually visible on focus
- One `:focus-visible` style covering every interactive element
- 44px minimum on buttons
- Dark mode via `prefers-color-scheme` — no toggle needed, and no JavaScript
- `prefers-reduced-motion` honoured

**Dark mode without JavaScript.** Redefining the tier-2 token names inside one
media query is the entire implementation. Nothing else in the stylesheet knows
which mode is active, which is the payoff for having the token layer at all.

## Status

Coursework. Not published anywhere.
