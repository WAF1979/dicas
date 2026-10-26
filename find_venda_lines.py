with open('app.js', 'r', encoding='utf-8') as f:
    lines = f.readlines()

for i, l in enumerate(lines):
    l_low = l.lower()
    if 'venda' in l_low or 'promo' in l_low or 'imperd' in l_low:
        print(f"Line {i+1}: {l.strip()[:100]}")
