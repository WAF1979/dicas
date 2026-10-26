for enc in ['utf-8', 'latin1', 'cp1252', 'utf-16']:
    try:
        with open('app.js', 'r', encoding=enc) as f:
            t = f.read()
        for w in ['venda', 'imperd', 'oferta', 'promo']:
            cnt = t.lower().count(w)
            if cnt > 0:
                print(f"[{enc}] Word '{w}' found {cnt} times!")
    except Exception as e:
        print(enc, e)
