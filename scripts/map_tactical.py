import re

with open('src/themes/TacticalTheme/index.jsx', 'r', encoding='utf-8') as f:
    code = f.read()

code = re.sub(
    r'function TacticalTheme\(\) \{',
    r"import { useData } from '../../context/DataContext';\n\nfunction TacticalTheme() {\n  const data = useData();\n",
    code
)

code = code.replace('<span id="typewriter-h1"></span>', '<span id="typewriter-h1">{data.info.name}</span>')
code = code.replace('<span id="typewriter-p"></span>', '<span id="typewriter-p">{data.info.title}</span>')

with open('src/themes/TacticalTheme/index.jsx', 'w', encoding='utf-8') as f:
    f.write(code)
