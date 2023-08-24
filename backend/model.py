import random
import time
import cv2
import numpy as np
from ultralytics import YOLO
def checkimage(image):
    my_file = open("coco.txt", "r")
    # reading the file
    data = my_file.read()
    # replacing end splitting the text | when newline ('\n') is seen.
    class_list = data.split("\n")
    my_file.close()

    # print(class_list)

    # Generate random colors for class list
    detection_colors = []
    for i in range(len(class_list)):
        r = random.randint(0, 255)
        g = random.randint(0, 255)
        b = random.randint(0, 255)
        detection_colors.append((b, g, r))

    model = YOLO("best.pt", "v8")

    frame_wid = 640
    frame_hyt = 480

    cap = image
    #cap = cv2.VideoCapture("test-video.m4v")
        # Capture frame-by-frame
    # ret, frame = cap.read()
    # if not ret:
    #     print("Can't receive frame (stream end?). Exiting ...")
    detect_params = model.predict(source=[image], conf=0.55, save=False)

    # Convert tensor array to numpy
    DP = detect_params[0].numpy()
    
    return True
        
        # Terminate run when "Q" pressed
        

    # When everything done, release the capture
    