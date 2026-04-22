**1. Create a Tensor**

Problem
- Create a PyTorch tensor containing numbers [1,2,3,4]

- Solution

```py
import torch

tensor = torch.tensor([1, 2, 3, 4])

print(tensor)
```

**2. Create a Tensor of Zeros**

Problem 
- Create a tensor of 5 zeros.

- Solution

```py
import torch

tensor = torch.zeros(5)

print(tensor)
```

**3. Create a Random Tensor**

Problem

- Create a 3 × 3 random tensor.

- Solution

```py
import torch

tensor = torch.rand(3, 3)

print(tensor)
```

**4. Tensor Addition**

Problem 
- Add two tensors.

- Solution

```py
import torch

a = torch.tensor([1, 2, 3])
b = torch.tensor([4, 5, 6])

result = a + b

print(result)
```

**5. Convert NumPy Array to Tensor**

Problem 
- Convert a NumPy array to a PyTorch tensor.

- Solution

```py
import torch
import numpy as np

arr = np.array([1, 2, 3])

tensor = torch.from_numpy(arr)

print(tensor)
```