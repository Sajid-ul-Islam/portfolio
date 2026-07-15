import os
import json

with open('raw_widgets.html', 'r', encoding='utf-8') as f:
    raw_html = f.read()

jsx_code = """import React, { useEffect } from 'react';

export default function VanillaWidgets() {
  useEffect(() => {
    const scripts = [
      '/js/ai-bot.min.js',
      '/js/terminal.min.js',
      '/js/command-palette.min.js',
      '/js/floating-widgets.min.js',
      '/js/theme-switcher-ripple.min.js'
    ];

    const loadScript = (src) => {
      return new Promise((resolve) => {
        const script = document.createElement('script');
        script.src = src;
        script.async = true;
        script.onload = resolve;
        script.onerror = resolve; // Continue even if one fails
        document.body.appendChild(script);
      });
    };

    const loadSequentially = async () => {
      for (const src of scripts) {
        await loadScript(src);
      }
    };
    loadSequentially();

    return () => {};
  }, []);

  return (
    <div dangerouslySetInnerHTML={{ __html: %s }} />
  );
}
""" % (json.dumps(raw_html))

os.makedirs('src/components/Shared', exist_ok=True)
with open('src/components/Shared/VanillaWidgets.jsx', 'w', encoding='utf-8') as f:
    f.write(jsx_code)
