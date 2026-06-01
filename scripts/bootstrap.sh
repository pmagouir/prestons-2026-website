#!/usr/bin/env bash
# bootstrap.sh — rebuild this node from a clean checkout in under 10 minutes (Lesson 6).
set -euo pipefail
cd "$(dirname "$0")/.."
echo "bootstrapping prestons-2026-website node..."
npm ci
npm run build
echo
echo "ready."
echo "  agents:     .claude/agents/   (orchestrator + 7 specialists)"
echo "  brain snap: .learn/           (canonical, glossary, errors, lessons, brief)"
echo "  references: references/        (11 craft files)"
echo "  verify:     scripts/verify_site.sh"
echo "  run team:   claude --agent site-lead"
