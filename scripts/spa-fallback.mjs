// GitHub Pages has no server-side routing. Serving a copy of index.html as 404.html
// lets deep links such as /mdb-group-website/capabilities load the React app,
// which then renders the correct route on the client.
import { copyFileSync } from 'node:fs';

copyFileSync('dist/index.html', 'dist/404.html');
console.log('SPA fallback: dist/404.html created');
