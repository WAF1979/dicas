with open('index.html', 'r', encoding='utf-8') as f:
    lines = f.readlines()

for i, l in enumerate(lines):
    l_low = l.lower()
    for w in ['venda', 'imperd', 'promo', 'btn-back-hub']:
        if w in l_low:
            print(f"[{w}] Line {i+1}: {l.strip()[:100]}")
