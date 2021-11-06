import numpy as np
import matplotlib.pyplot as plt
import cv2
from scipy.cluster.vq import whiten
import pandas as pd
from scipy.cluster.vq import kmeans

#image loading will be done here

'''
bgr = cv2.imread("Boy.png")
rgb = cv2.cvtColor(bgr, cv2.COLOR_BGR2RGB)
gray = cv2.cvtColor(bgr, cv2.COLOR_BGR2GRAY)
'''

face_classifier = cv2.CascadeClassifier("haarcascade_frontalface_default.xml")
faces = face_classifier.detectMultiScale(gray)
if faces.all():
    x, y, w, h = faces[0]
    final_face = rgb[y:y+h, x:x+w]
    print("FACE DETECTED")
else:
    print("No face detected!")


#construct to a dataframe for future data process
df = pd.DataFrame()
df['r']=pd.Series(final_face[:,:,0].flatten())
df['g']=pd.Series(final_face[:,:,1].flatten())
df['b']=pd.Series(final_face[:,:,2].flatten())

df['r_whiten'] = whiten(df['r'])
df['g_whiten'] = whiten(df['g'])
df['b_whiten'] = whiten(df['b'])

cluster_centers, distortion = kmeans(df[['r_whiten', 'g_whiten', 'b_whiten']], 1)

r_std, g_std, b_std = df[['r', 'g', 'b']].std()
colors=[]
for color in cluster_centers:
    sr, sg, sb = color
    colors.append((int(sr*r_std), int(sg*g_std), int(sb*b_std)))

# colors contains the face color palette