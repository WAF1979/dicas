from PIL import Image
import numpy as np

im = Image.open('assets/imagem_central.jpg')
arr = np.array(im)

# Look for pixels that match pink/coral text: R > 180, G < 140, B < 150
mask = (arr[:, :, 0] > 180) & (arr[:, :, 1] < 140) & (arr[:, :, 2] < 150)
y_indices, x_indices = np.where(mask)

print(f"Total matching red/coral pixels in imagem_central: {len(y_indices)}")
if len(y_indices) > 0:
    print(f"Y range: {y_indices.min()} to {y_indices.max()}")
    print(f"X range: {x_indices.min()} to {x_indices.max()}")
    # Crop around this region
    ymin, ymax = max(0, y_indices.min() - 20), min(arr.shape[0], y_indices.max() + 20)
    xmin, xmax = max(0, x_indices.min() - 20), min(arr.shape[1], x_indices.max() + 20)
    crop_red = im.crop((xmin, ymin, xmax, ymax))
    crop_red.save('found_red_text.jpg')
    print(f"Saved found_red_text.jpg at box ({xmin}, {ymin}, {xmax}, {ymax})")
