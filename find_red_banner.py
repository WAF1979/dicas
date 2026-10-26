from PIL import Image
import numpy as np

im = Image.open('unifort_hotsales_banner.png')
arr = np.array(im)

mask = (arr[:, :, 0] > 180) & (arr[:, :, 1] < 140) & (arr[:, :, 2] < 150)
y_indices, x_indices = np.where(mask)

print(f"Total matching red/coral pixels in unifort_hotsales_banner: {len(y_indices)}")
if len(y_indices) > 0:
    print(f"Y range: {y_indices.min()} to {y_indices.max()}")
    print(f"X range: {x_indices.min()} to {x_indices.max()}")
