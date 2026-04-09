## 1. NumPy (Numerical Python)
- NumPy is a Python library used for numerical computing and working with arrays.
- It provides fast operations on large datasets and is widely used in data science and machine learning.


**Installing NumPy**
```bash
pip install numpy
```

**Importing NumPy**
```py
import numpy as np
```

**Creating Arrays**
```py
import numpy as np

arr = np.array([1, 2, 3, 4])
print(arr)
```

**Multi-Dimensional Arrays**
```py
arr = np.array([[1, 2], [3, 4]])
print(arr)
```

**NumPy Array Operations**
```py
arr = np.array([1, 2, 3])

print(arr + 2)
print(arr * 2)
```

**Useful NumPy Functions**
```py
np.zeros(5)      # array of zeros
np.ones(5)       # array of ones
np.arange(0,10)  # range array
np.mean(arr)     # average
np.sum(arr)      # sum
np.max(arr)      # maximum value
```

**Advantages of NumPy**
- Faster than Python lists
- Supports multi-dimensional arrays
- Efficient mathematical operations