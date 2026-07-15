const fs = require('fs');
let html = fs.readFileSync('legacy/theme-sketchbook.html', 'utf8');

const bodyMatch = html.match(/<body>([\s\S]*?)<\/body>/);
if (!bodyMatch) process.exit(1);
let body = bodyMatch[1];

body = body.replace(/class=/g, 'className=');
body = body.replace(/for=/g, 'htmlFor=');
body = body.replace(/<svg[\s\S]*?<\/svg>/g, '');
body = body.replace(/<img(.*?[^\/])>/g, '<img$1 />');
body = body.replace(/<input(.*?[^\/])>/g, '<input$1 />');
body = body.replace(/<hr(.*?[^\/])>/g, '<hr$1 />');
body = body.replace(/<br(.*?[^\/])>/g, '<br$1 />');
body = body.replace(/<script[\s\S]*?<\/script>/g, '');
body = body.replace(/style="([^"]*)"/g, (match, p1) => {
    // very naive inline style strip to prevent JSX errors
    return '';
});
body = body.replace(/<!--[\s\S]*?-->/g, '');

const jsx = `import React from 'react';
import { useData } from '../../context/DataContext';
import './SketchbookTheme.css';
import SketchbookFilters from './SketchbookFilters';

export default function SketchbookTheme() {
  const data = useData();

  return (
    <div className="sketchbook-theme">
      <SketchbookFilters />
      ${body}
    </div>
  );
}
`;

fs.writeFileSync('src/themes/SketchbookTheme/index.jsx', jsx);
console.log('Generated index.jsx');
