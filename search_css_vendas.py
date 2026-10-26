with open('styles.css', 'r', encoding='utf-8', errors='ignore') as f:
    text = f.read()

import re
matches = [m.start() for m in re.finditer('venda', text, re.IGNORECASE)]
print(f"Total 'venda' matches in styles.css: {len(matches)}")
for idx in matches:
    print(repr(text[max(0, idx-40):min(len(text), idx+60)]))
