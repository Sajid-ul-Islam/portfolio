import re

file_path = 'src/themes/IronforgeTheme/index.jsx'
with open(file_path, 'r', encoding='utf-8') as f:
    code = f.read()

start_str = '<div className="fab-container">'
start_idx = code.find(start_str)

end_str = '<div className="keyboard-hint d-none d-lg-block">'
end_idx = code.find(end_str)

if start_idx != -1 and end_idx != -1:
    rest = code[end_idx:]
    match = re.search(r'</div>\s*</', rest)
    if match:
        actual_end_idx = end_idx + match.start() + len('</div>')
    else:
        actual_end_idx = end_idx + len(end_str) + 100 

    new_code = code[:start_idx] + code[actual_end_idx:]
    with open(file_path, 'w', encoding='utf-8') as f:
        f.write(new_code)
    print("Successfully removed global widgets from IronforgeTheme.")
else:
    print("Could not find start or end string.")
