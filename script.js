/**
 * Two small things, both of which have an accessibility reason to exist.
 */

/* The footer year. Hard-coding it means the site quietly starts lying on
   January 1st, and nobody ever notices their own footer. */
document.getElementById('year').textContent = new Date().getFullYear();

/**
 * Dark mode toggle.
 *
 * The page already follows the OS via prefers-color-scheme. This only exists
 * for the case where someone wants the opposite of their system setting, so
 * it writes an explicit data-theme that overrides the media query, and stores
 * the choice so it survives a reload.
 *
 * aria-pressed is kept in sync because a toggle that does not announce its
 * state is a button a screen reader user has to press to understand.
 */
const KEY = 'theme';
const root = document.documentElement;
const button = document.getElementById('theme');

function systemPrefersDark() {
  return window.matchMedia('(prefers-color-scheme: dark)').matches;
}

function apply(theme) {
  if (theme) root.setAttribute('data-theme', theme);
  else root.removeAttribute('data-theme');
  const isDark = theme ? theme === 'dark' : systemPrefersDark();
  button.setAttribute('aria-pressed', String(isDark));
}

/* localStorage throws in some privacy modes. A dead theme toggle is a much
   smaller problem than a page that fails to run its script at all. */
let saved = null;
try { saved = localStorage.getItem(KEY); } catch { /* ignore */ }
apply(saved);

button.addEventListener('click', () => {
  const isDark = root.getAttribute('data-theme') === 'dark'
    || (!root.hasAttribute('data-theme') && systemPrefersDark());
  const next = isDark ? 'light' : 'dark';
  apply(next);
  try { localStorage.setItem(KEY, next); } catch { /* ignore */ }
});
