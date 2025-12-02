const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const TARGET_DIRS = ['app', 'components', 'lib', 'content', 'data'];
const out = [];

function walk(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const ent of entries) {
    const full = path.join(dir, ent.name);
    if (ent.isDirectory()) {
      walk(full);
    } else if (ent.isFile()) {
      const ext = path.extname(ent.name).toLowerCase();
      if (['.ts', '.tsx', '.js', '.jsx', '.md', '.mdx'].includes(ext)) {
        try {
          const txt = fs.readFileSync(full, 'utf8');
          // naive string literal extraction
          const strings = [];
          const dq = txt.match(/"([^"\\]*(?:\\.[^"\\]*)*)"/g) || [];
          const sq = txt.match(/'([^'\\]*(?:\\.[^'\\]*)*)'/g) || [];
          const bt = txt.match(/`([^`\\]*(?:\\.[^`\\]*)*)`/g) || [];
          dq.forEach(s=>strings.push(s.slice(1,-1)));
          sq.forEach(s=>strings.push(s.slice(1,-1)));
          bt.forEach(s=>strings.push(s.slice(1,-1)));

          strings.forEach(str => {
            const cleaned = str.replace(/\s+/g, ' ').trim();
            if (cleaned.length >= 50 && /[a-zA-Z]/.test(cleaned)) {
              out.push({ file: path.relative(ROOT, full).replace(/\\/g,'/'), text: cleaned });
            }
          });
        } catch (e) {
          // ignore
        }
      }
    }
  }
}

for (const d of TARGET_DIRS) {
  const p = path.join(ROOT, d);
  if (fs.existsSync(p)) walk(p);
}

// group by file
const grouped = {};
out.forEach(item => {
  grouped[item.file] = grouped[item.file] || [];
  grouped[item.file].push(item.text);
});

const result = Object.keys(grouped).map(f => ({ file: f, snippets: grouped[f] }));
console.log(JSON.stringify(result, null, 2));
