# Git HUD

<div align="center">
  <p>Fast and intuitive Git client UI for modern developers.</p>
  <p>
    <img src="https://img.shields.io/badge/license-MIT-green.svg" alt="MIT License" />
    <img src="https://img.shields.io/badge/package%20manager-pnpm%2010.26.2-F69220?logo=pnpm&logoColor=white" alt="pnpm 10.26.2" />
    <img src="https://img.shields.io/badge/context-git%20client-111827" alt="Git client context" />
  </p>
</div>

## Introduction

`sync` is a Git HUD UI designed to give modern developers a faster, clearer way to work with repositories. It focuses on surfacing Git state, activity, and workflow actions in an interface that stays easy to scan and quick to use.

The application is built with Electron, React, TypeScript, and Vite. That stack keeps the experience desktop-native while still allowing the UI to stay responsive and iteration-friendly.

## Main Capabilities

- desktop Git client experience with a HUD-style interface
- fast access to repository status and workflow actions
- clear visual context for branches, commits, and changes
- Electron-based shell with React and TypeScript rendering
- Vite-powered development and build workflow
- pnpm-based dependency and script management

## Product Focus

This repository is organized around the frontend experience needed for a modern Git client.

- **Git Context:** repository state, branches, commits, diffs, and history
- **HUD Interface:** dense but readable information layout that favors speed
- **Developer Workflow:** review, stage, commit, sync, and inspect with minimal friction
- **Desktop Delivery:** Electron packaging for Windows, macOS, and Linux
- **Frontend Quality:** maintainable UI structure, predictable state, and clear interaction design

## Getting Started

Install dependencies with pnpm:

```bash
pnpm install
```

Start the local development environment:

```bash
pnpm dev
```

Run type checks before shipping changes:

```bash
pnpm typecheck
```

Run the linter when validating code quality:

```bash
pnpm lint
```

Build the application for production:

```bash
pnpm build
```

Create platform-specific packages:

```bash
pnpm build:win
pnpm build:mac
pnpm build:linux
```

## Project Metadata

- Package: `software`
- Version: `1.0.0`
- Author: AvalSoft
- License: MIT
- Package manager: pnpm `10.26.2`

## Repository

- Homepage: [https://github.com/chishiyac/sync#readme](https://github.com/chishiyac/sync#readme)
- Issues: [https://github.com/chishiyac/sync/issues](https://github.com/chishiyac/sync/issues)
- Repository: [https://github.com/chishiyac/sync.git](https://github.com/chishiyac/sync.git)

## Development Notes

Keep the UI focused on Git workflow speed, clarity, and visual hierarchy. Prefer compact, actionable interfaces that help developers understand repository state at a glance and move through common tasks with fewer steps.

## License

This project is licensed under the MIT License.
