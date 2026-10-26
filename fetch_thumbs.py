import urllib.request
import os

urls = [
    ('video-uso', 'https://img.youtube.com/vi/Ki_7Dl3bs1k/mqdefault.jpg'),
    ('video-rec', 'https://img.youtube.com/vi/ECnrYHxHtkA/mqdefault.jpg'),
    ('video-con', 'https://img.youtube.com/vi/FebtZcjDpQk/mqdefault.jpg'),
    ('video-sub', 'https://img.youtube.com/vi/sCa-4PLSYXc/mqdefault.jpg'),
    ('video-rel', 'https://img.youtube.com/vi/B-zmvMXfNps/mqdefault.jpg'),
    ('video-mkt', 'https://lh3.googleusercontent.com/d/1zYokJqtHcP1_JwsojfpR2_xMc_DUu63Q=w640'),
    ('video-log', 'https://lh3.googleusercontent.com/d/1ZagC6vH2PKAZ4J3fh1LB0ihFuveNS0TH=w640'),
    ('video-cre', 'https://lh3.googleusercontent.com/d/1bbt9tVhQbV-EniGdO2F7sug6Nbj49Iy7=w640'),
    ('video-ins', 'https://lh3.googleusercontent.com/d/1hM0nICVJh-RL3SYLmdAIEDUkS258gtay=w640')
]

for name, url in urls:
    try:
        req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
        with urllib.request.urlopen(req, timeout=5) as resp:
            data = resp.read()
            outpath = f'thumb_{name}.jpg'
            with open(outpath, 'wb') as f:
                f.write(data)
            print(f"Downloaded {name} ({len(data)} bytes)")
    except Exception as e:
        print(f"Failed {name}: {e}")
