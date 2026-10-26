from PIL import Image

im = Image.open('assets/imagem_central.jpg')
w, h = im.size
print(f"Size: {w}x{h}")

# Let's save a resized version (e.g. 800x446) so we can inspect what the entire image shows
small = im.resize((800, int(800 * h / w)), Image.Resampling.LANCZOS)
small.save('C:/Users/Warley/.gemini/antigravity/brain/47623864-3262-4026-b171-f5a78a980ffa/imagem_central_small.jpg')
print("Saved imagem_central_small.jpg to brain artifact directory!")
