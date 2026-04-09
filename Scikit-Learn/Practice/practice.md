1. Load the Iris Dataset
Problem
Load the Iris dataset and print its features and target values.

- Solution

```py
from sklearn.datasets import load_iris

data = load_iris()

print(data.data)
print(data.target)
```

2. Check Dataset Shape
Problem
Print the shape of the dataset.

- Solution

```py
from sklearn.datasets import load_iris

data = load_iris()

print(data.data.shape)
```

3. Split Dataset into Training and Testing
Problem
Split the dataset into 80% training and 20% testing data.

- Solution
```py
from sklearn.model_selection import train_test_split
from sklearn.datasets import load_iris

data = load_iris()

X = data.data
y = data.target

X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.2
)
```

4. Train a Linear Regression Model
Problem
Train a Linear Regression model.

- Solution
```py
from sklearn.linear_model import LinearRegression

model = LinearRegression()

model.fit(X_train, y_train)
```