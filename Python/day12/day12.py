import time
import numpy as np

data_list = list(range(10000000))

start = time.time()
total = sum(data_list)
print("List time", time.time() - start)


data_np = np.array(data_list)
start = time.time()
total = np.sum(data_np)
print("NumPy time: ", time.time() - start)
