from PIL import Image
import numpy as np
import glob

for img_path in sorted(glob.glob('thumb_video-*.jpg')):
    im = Image.open(img_path)
    arr = np.array(im.convert('RGB'))
    # Coral / pink / red text: R > 170, G < 140, B < 150
    mask = (arr[:, :, 0] > 170) & (arr[:, :, 1] < 140) & (arr[:, :, 2] < 150)
    cnt = mask.sum()
    print(f"{img_path}: {im.size}, matching red pixels: {cnt}")
