#!/usr/bin/env bash
# verify_site.sh — the website quality ratchet.
# Local gate before any merge. CI runs the same checks plus axe + Lighthouse.
# Checks: build green · JSON-LD valid · forbidden-token (voice) scan.
# axe + Lighthouse run in CI (and locally if the tools are present).
set -euo pipefail

cd "$(dirname "$0")/.."
FAIL=0

say() { printf '\n=== %s ===\n' "$1"; }

say "1/4 build"
npm run build

say "2/4 JSON-LD validity"
node -e '
const fs=require("fs"),path=require("path");
if(!fs.existsSync("dist")){console.error("no dist/ — build did not emit output");process.exit(1);}
const walk=d=>fs.readdirSync(d,{withFileTypes:true}).flatMap(e=>{const p=path.join(d,e.name);return e.isDirectory()?walk(p):[p];});
const html=walk("dist").filter(f=>f.endsWith(".html"));
let n=0,bad=0;
for(const f of html){const s=fs.readFileSync(f,"utf8");
  for(const m of s.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)){n++;try{JSON.parse(m[1]);}catch(e){bad++;console.error("invalid JSON-LD in",f,"-",e.message);}}}
console.log(`JSON-LD blocks: ${n}, invalid: ${bad}`);
process.exit(bad>0?1:0);
'

say "3/4 forbidden-token scan (src/ only)"
# Hard voice rules from .learn/glossary.md. Banned on the public site regardless of context.
if grep -rniE "\bequit(y|able)\b|passionate about|driven by|on a mission to|believes in the power of|bringing together a unique blend|wasn'?t luck|did(n'?t| not) happen by accident|none of (it|this) was guaranteed|not by chance|no shortcuts to" src/; then
  echo "FORBIDDEN TOKEN found in src/ — see .learn/glossary.md"; FAIL=1
else
  echo "no forbidden tokens"
fi

say "4/4 axe + Lighthouse (CI-primary)"
if command -v lhci >/dev/null 2>&1; then
  lhci autorun || FAIL=1
else
  echo "lhci not installed locally — enforced in CI (.github/workflows/ci.yml)"
fi

if [ "$FAIL" -ne 0 ]; then
  echo; echo "VERIFY FAILED"; exit 1
fi
echo; echo "VERIFY PASSED"
