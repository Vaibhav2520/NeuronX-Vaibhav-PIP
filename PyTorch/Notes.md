## PyTorch
1. Introduction
- PyTorch is an open-source machine learning and deep learning framework developed by Meta Platforms.

It is widely used for:

- Deep learning
- Computer vision
- Natural language processing
- Research in AI

PyTorch is popular because it provides flexibility and easy debugging using Python.

2. Installing PyTorch

Install using pip:

```bash
pip install torch torchvision
```

```py
Import PyTorch:
```

3. Tensors

- A tensor is the core data structure in PyTorch.
- It is similar to NumPy arrays, but can run on GPU for faster computation.

**Create a Tensor**

```py
import torch

tensor = torch.tensor([1, 2, 3])
print(tensor)
```

**Tensor with Zeros or Ones**
```py
torch.zeros(3)

torch.ones(3)
```

**Random Tensor**

```py
torch.rand(3,3)
```

4. Tensor Operations

- Basic mathematical operations:

```py
a = torch.tensor([1,2,3])
b = torch.tensor([4,5,6])

print(a + b)
print(a * b)
```

5. Tensor Shape

- Check the shape of a tensor.

```py
x = torch.rand(3,4)

print(x.shape)
```

6. GPU Support

PyTorch can use GPU acceleration.

- Check GPU availability:

```py
torch.cuda.is_available()
```

- Move tensor to GPU:

```py
tensor = tensor.to("cuda")
```

7. Automatic Differentiation (Autograd)

- PyTorch automatically calculates gradients using Autograd.

```py
x = torch.tensor(2.0, requires_grad=True)

y = x ** 2

y.backward()

print(x.grad)
```

8. Neural Network Module

- PyTorch provides tools for building neural networks using torch.nn.

- Example:

```py
import torch.nn as nn

model = nn.Linear(2,1)
```

- This creates a simple neural network layer.


9. Loss Function

- Loss functions measure how wrong the model predictions are.