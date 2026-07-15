import re

with open('legacy/theme-tactical.html', 'r', encoding='utf-8') as f:
    html = f.read()

start_str = '<div class="fab-container">'
start_idx = html.find(start_str)

end_str = '<div class="keyboard-hint d-none d-lg-block">'
end_idx = html.find(end_str)

rest = html[end_idx:]
match = re.search(r'</div>\s*</', rest)
if match:
    actual_end_idx = end_idx + match.start() + 6
else:
    actual_end_idx = end_idx + len(end_str) + 100

raw_widgets = html[start_idx:actual_end_idx]

with open('raw_widgets.html', 'w', encoding='utf-8') as f:
    f.write(raw_widgets)
