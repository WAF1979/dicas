from PIL import Image
import numpy as np

im = Image.open(r'C:/Users/Warley/.gemini/antigravity/brain/47623864-3262-4026-b171-f5a78a980ffa/.user_uploaded/media_1793031558806_563c623c.png')
print("Uploaded image size:", im.size)
arr = np.array(im)
print("Unique shapes / colors:")

# Let's inspect the text "VENDAS IMPERDÍVEIS" in this image:
# Where is it?
print(arr.shape)
