from email.mime import image
from PIL import Image
import os
import json

path = 'C:\\Users\\XXX\\Desktop\\pbl\\images'
images = {
    'title':'images',
    'sum':0,
    'items':[]
}
folder = os.listdir(path)


for file in folder:
    try:
        i = Image.open(file)
        images['sum']+=1
        images['items'].append({
            'url':file,
            'width':i.width,
            'height':i.height
        })
        i.close()
    except:
        pass

json_ = json.dumps(images,indent=2)
with open('images.js','w') as f:
    f.write(json_)