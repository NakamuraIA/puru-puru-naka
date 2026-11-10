import fs from "node:fs"; import path from "node:path";
const root = path.join(process.cwd(), "src");
const files = [];
(function walk(d){ for(const e of fs.readdirSync(d,{withFileTypes:true})){ const p=path.join(d,e.name); e.isDirectory()?walk(p):e.name.endsWith(".js")&&files.push(p);} })(root);

// collect exports per file
const exportsOf = {};
for(const f of files){
  const s = fs.readFileSync(f,"utf8"); const ex = new Set();
  for(const m of s.matchAll(/export\s+(?:async\s+)?function\s+([A-Za-z0-9_$]+)/g)) ex.add(m[1]);
  for(const m of s.matchAll(/export\s+(?:const|let|var)\s+([A-Za-z0-9_$]+)/g)) ex.add(m[1]);
  for(const m of s.matchAll(/export\s*\{([^}]+)\}/g)) m[1].split(",").forEach(x=>ex.add(x.trim().split(/\s+as\s+/).pop()));
  exportsOf[f]=ex;
}

// resolve imports
let problems = 0;
for(const f of files){
  const s = fs.readFileSync(f,"utf8");
  for(const m of s.matchAll(/import\s+([^;]+?)\s+from\s+['"]([^'"]+)['"]/g)){
    const clause=m[1], spec=m[2];
    if(!spec.startsWith(".")) continue;
    const target=path.resolve(path.dirname(f), spec);
    if(!fs.existsSync(target)){ console.log(`MISSING FILE  ${path.relative(process.cwd(),f)} -> ${spec}`); problems++; continue; }
    const names=[...clause.matchAll(/\{([^}]*)\}/g)].map(x=>x[1]).join(",").split(",").map(x=>x.trim().split(/\s+as\s+/)[0]).filter(Boolean);
    for(const n of names){
      if(!exportsOf[target].has(n)){ console.log(`MISSING EXPORT  ${path.relative(process.cwd(),f)}: "${n}" not exported by ${spec}`); problems++; }
    }
  }
}
console.log(problems===0 ? "\nALL IMPORTS RESOLVE" : `\n${problems} problem(s)`);
process.exitCode = problems ? 1 : 0;

