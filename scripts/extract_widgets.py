import re

with open('src/themes/TacticalTheme/index.jsx', 'r', encoding='utf-8') as f:
    code = f.read()

start_str = '<div className="fab-container">'
start_idx = code.find(start_str)

end_str = '<div className="keyboard-hint d-none d-lg-block">'
end_idx = code.find(end_str)

# find the closing div of keyboard hint
rest = code[end_idx:]
match = re.search(r'</div>\s*</>', rest)
if match:
    actual_end_idx = end_idx + match.start() + len('</div>')
else:
    actual_end_idx = end_idx + len(end_str) + 100 # rough fallback

widgets_jsx = code[start_idx:actual_end_idx]

with open('temp_widgets.jsx', 'w', encoding='utf-8') as f:
    f.write(widgets_jsx)

new_code = code[:start_idx] + code[actual_end_idx:]
with open('src/themes/TacticalTheme/index.jsx', 'w', encoding='utf-8') as f:
    f.write(new_code)
