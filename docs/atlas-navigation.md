# Project Atlas navigation

The application uses React Router's `HashRouter` because the production GitHub Pages deployment cannot guarantee server-side SPA rewrites. The fragment is therefore the route (`/#/atlas`), and plain section links such as `#pipeline` replaced that route instead of identifying content inside Atlas.

Atlas now uses one deterministic, HashRouter-compatible scheme: `/#/atlas?section=pipeline`. The query value is part of the routed fragment, survives refresh and external entry, and creates normal history entries for back/forward navigation. Historic section-only fragments are upgraded on startup, and historic Atlas hashes are normalised after routing:

- `#model` → `/#/atlas?section=overview`
- `#process` → `/#/atlas?section=validation`
- `#standard` → `/#/atlas?section=evidence`
- `#about` → `/#/atlas?section=leadership`
- unchanged semantic names such as `#pipeline`, `#research`, and `#partners` map to their matching Atlas sections

Clean-path and historic routed hashes such as `/atlas#pipeline` and `/#/atlas#model` are accepted through the deployment fallback and normalised to the query form without adding a history entry. Invalid `section` values safely open the top of Atlas.

The canonical public Atlas route remains `/#/atlas`; migrating to pathname routing would make direct refreshes deployment-dependent.
