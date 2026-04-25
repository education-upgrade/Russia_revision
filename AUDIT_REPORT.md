# Repository Audit (April 25, 2026)

This audit focuses on `index.html`, PWA files, and static assets in this repository.

## Scope reviewed
- `index.html` (markup, accessibility, performance, maintainability)
- `service-worker.js` (cache strategy, resilience, offline behavior)
- `manifest.webmanifest` (PWA metadata consistency)
- Static file layout and naming consistency

## High-priority findings

1. **Service worker install could silently fail pre-caching everything.**
   - Previous code used one `cache.addAll(...)` call and swallowed errors with an empty `catch`.
   - Any single bad/blocked/oversized asset could cause the whole pre-cache install to fail.
   - **Fix applied:** switched to `Promise.allSettled` and per-file `cache.add(url)` so one failed asset does not block all others.

2. **Precache list included non-critical heavy/non-app files.**
   - Included `gemini_generated_video_EA512AAF.mp4` and `README_PWA.txt`.
   - Large media in install-time pre-cache increases first-install failure risk and storage pressure.
   - **Fix applied:** removed these from `PRECACHE_URLS`.

3. **Manifest colors mismatched UI theme.**
   - App uses a very light pastel UI while manifest used near-black theme/background colors.
   - This causes inconsistent install splash / launcher theming.
   - **Fix applied:** aligned manifest `background_color` and `theme_color` to `#f3f7fb`.

## Medium-priority recommendations (not yet implemented)

1. **Split `index.html` into modular files.**
   - At over 23k lines, it is hard to maintain and review safely.
   - Move CSS and JS into separate files (e.g., `styles/`, `scripts/`) and keep HTML structural.

2. **Add automated lint checks.**
   - Add an HTML and JS lint pass (e.g., HTMLHint + ESLint) to catch regressions early.

3. **Strengthen runtime error telemetry.**
   - Add optional debug logging around service worker lifecycle (`install`, `activate`, `fetch`) for troubleshooting.

4. **Review all `innerHTML` writes.**
   - Many are likely safe with current static data, but centralize and enforce escaping for user-derived strings.

5. **Normalize static asset naming.**
   - Current repo mixes spaces, casing, and punctuation in paths (e.g., `Lesson infographics/Topic 2 line .PNG`).
   - Normalize names for portability and cleaner URL handling.

## Low-priority recommendations

1. **Create a lightweight smoke test script.**
   - Verify key files exist and key selectors initialize without JS errors.

2. **Document deployment cache-busting policy.**
   - Keep manifest/query versioning and service worker cache naming in sync with release notes.

## Summary
The most impactful stability fixes were in the PWA caching path, and they are now applied. Remaining recommendations are mainly maintainability and hardening improvements.
