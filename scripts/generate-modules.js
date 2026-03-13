
const fs=require('fs')
for(let i=0;i<80;i++){
 fs.writeFileSync(`packages/ui/module${i}.js`,`export default function m${i}(){return null}`)
}
