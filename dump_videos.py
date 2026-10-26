with open('app.js', 'r', encoding='utf-8') as f:
    text = f.read()

import re
pos_start = text.find('const VIDEOS_DATA = [')
pos_end = text.find('];', pos_start)

print(text[pos_start:pos_end+2])
