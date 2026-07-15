import re
import sys

def convert_html_to_jsx(html_string):
    # 1. Convert class to className
    jsx = re.sub(r'\bclass=', 'className=', html_string)
    
    # 2. Convert for to htmlFor
    jsx = re.sub(r'\bfor=', 'htmlFor=', jsx)
    
    # 3. Self-close empty tags
    empty_tags = ['img', 'br', 'hr', 'input', 'meta', 'link']
    for tag in empty_tags:
        # Match <tag ... > but not if it's already self closed <tag ... />
        pattern = re.compile(rf'<{tag}\b([^>]*?)(?<!/)>', re.IGNORECASE)
        jsx = pattern.sub(rf'<{tag}\1 />', jsx)
        
    # 4. Remove inline styles (too complex to reliably parse to JSON here, just strip them to avoid errors for now)
    jsx = re.sub(r'\bstyle="[^"]*"', '', jsx)
    
    # 5. Remove HTML comments
    jsx = re.sub(r'<!--[\s\S]*?-->', '', jsx)
    
    # 6. Convert SVG properties like stroke-width to strokeWidth, etc.
    svg_props = [
        'stroke-width', 'stroke-linecap', 'stroke-linejoin', 'fill-rule', 'clip-rule', 
        'stroke-miterlimit', 'fill-opacity', 'stroke-dasharray', 'stroke-dashoffset', 'stop-color'
    ]
    for prop in svg_props:
        camel = prop.split('-')[0] + prop.split('-')[1].capitalize()
        jsx = re.sub(rf'\b{prop}=', f'{camel}=', jsx)
        
    return jsx

if __name__ == '__main__':
    if len(sys.argv) < 3:
        print("Usage: python html_to_jsx.py <input> <output>")
        sys.exit(1)
        
    input_file = sys.argv[1]
    output_file = sys.argv[2]
    
    with open(input_file, 'r', encoding='utf-8') as f:
        html = f.read()
        
    # extract body content if possible
    body_match = re.search(r'<body[^>]*>([\s\S]*?)</body>', html, re.IGNORECASE)
    if body_match:
        html = body_match.group(1)
        
    # strip script tags
    html = re.sub(r'<script[\s\S]*?</script>', '', html, flags=re.IGNORECASE)
    
    jsx = convert_html_to_jsx(html)
    
    # Wrap in a generic component
    component_name = "ThemeComponent"
    if "sketchbook" in input_file.lower():
        component_name = "SketchbookTheme"
    elif "tactical" in input_file.lower():
        component_name = "TacticalTheme"
    elif "ironforge" in input_file.lower():
        component_name = "IronforgeTheme"
        
    final_jsx = f"""import React from 'react';
import {{ useData }} from '../../context/DataContext';

export default function {component_name}() {{
  const data = useData();

  return (
    <>
      {{/* WARNING: This is auto-generated JSX. Check for any remaining JSX errors. */}}
      {jsx}
    </>
  );
}}
"""

    with open(output_file, 'w', encoding='utf-8') as f:
        f.write(final_jsx)
        
    print(f"Converted {input_file} to {output_file}")
