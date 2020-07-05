#!/usr/bin/env python3
import sys
import cv2

arr = cv2.imread(sys.argv[1])
for y in range(arr.shape[0]):
    for x in range(arr.shape[1]):
        b, g, r = arr[y][x]
        if r > 128 and g > 128 and b > 128:
            r, g, b = 255, 255, 255
        else:
            r, g, b = 70, 130, 180
        arr[y][x] = [b, g, r]
cv2.imwrite('grayscale.png', arr)
