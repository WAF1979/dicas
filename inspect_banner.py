from PIL import Image

im = Image.open('unifort_hotsales_banner.png')
print('unifort_hotsales_banner.png size:', im.size)

# Save a small version to the brain artifact directory so we can read it with read_file
w, h = im.size
small = im.resize((800, int(800 * h / w)), Image.Resampling.LANCZOS)
small.save('C:/Users/Warley/.gemini/antigravity/brain/47623864-3262-4026-b171-f5a78a980ffa/banner_small.png')
print("Saved banner_small.png")
