import os

matches = []
for root, dirs, files in os.walk(r'C:\Users\Warley\Desktop'):
    # skip large binary folders if any
    for f in files:
        if f.endswith(('.html', '.js', '.css', '.json', '.txt', '.md', '.py', '.bat')):
            p = os.path.join(root, f)
            try:
                with open(p, 'r', encoding='utf-8', errors='ignore') as fp:
                    content = fp.read()
                if 'imperd' in content.lower():
                    matches.append((p, 'utf-8'))
                elif 'vendas imper' in content.lower():
                    matches.append((p, 'utf-8'))
            except Exception:
                pass

print(f"Total text file matches found: {len(matches)}")
for m in matches:
    print(m)
