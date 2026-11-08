import fs from 'node:fs';
import path from 'node:path';
import {spawnSync} from 'node:child_process';
const root=process.cwd();
const result=spawnSync(process.execPath,['quartz/bootstrap-cli.mjs','build'],{stdio:'inherit'});
if(result.status!==0)process.exit(result.status||1);
// Preserve the exact filenames of the dedicated interactive graph page.
for(const name of ['index.html','graph.css','graph.js','data.json']){
 fs.copyFileSync(path.join(root,'content/graph',name),path.join(root,'public/graph',name));
}
fs.writeFileSync(path.join(root,'public/.nojekyll'),'');
for(const name of ['index','index.css','index.js']){
 const obsolete=path.join(root,'public/graph',name);
 if(fs.existsSync(obsolete))fs.unlinkSync(obsolete);
}
const expected=JSON.parse(fs.readFileSync(path.join(root,'content/graph/data.json'),'utf8'));
for(const note of expected.notes){
 if(!fs.existsSync(path.join(root,'public',note.id+'.html')))throw new Error('Missing public note '+note.id);
}
console.log('Verified all public note pages and copied the interactive graph.');
for(const slug of ['platform','tide-composer','maintenance']){
 const html=fs.readFileSync(path.join(root,'public',slug+'.html'),'utf8');
 for(const marker of ['archive-navigation','case-capabilities','archive-lightbox','case-figure']){
  if(!html.includes(marker))throw new Error('Missing '+marker+' on '+slug);
 }
}
const home=fs.readFileSync(path.join(root,'public/index.html'),'utf8');
if((home.match(/class="work-card"/g)||[]).length!==3)throw new Error('Expected three intact project cards');
console.log('Verified case navigation, capability panels, image viewer and three project cards.');
