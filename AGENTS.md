<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

## ANTHARA architecture
- Use a shared wellness provider for browser-local reflections and check-ins; explicit local storage is the prototype privacy boundary.
- Give each primary navigation destination its own TanStack content route and unique metadata so navigation and deep links work consistently.
- Compose the scripted companion preview from AI Elements; do not add live AI or automated distress assessment without an explicit consent and server-side implementation.
- Keep wellness data types and transformations in src/lib/wellness.ts so persistence, journal, and summaries share one contract.
