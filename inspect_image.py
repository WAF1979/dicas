from PIL import Image

im = Image.open('assets/imagem_central.jpg')
print('assets/imagem_central.jpg size:', im.size)

# Let's save a reduced version or inspect text in the image
# Let's see what is in the top left, top right, center, etc.
# In the user's screenshot, "VENDAS IMPERDÍVEIS" is near the top or behind the modal!
# Let's check if the text "VENDAS IMPERDÍVEIS" is on the image!
# Let's crop the top half of assets/imagem_central.jpg
w, h = im.size
crop_top = im.crop((0, 0, w, int(h * 0.4)))
crop_top.save('crop_top_imagem_central.jpg', quality=85)

print("Saved crop_top_imagem_central.jpg")
