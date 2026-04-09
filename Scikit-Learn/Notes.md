## Scikit-Learn

1. Introduction
Scikit-Learn is a Python library used for machine learning.
It provides tools for data analysis, model building, and prediction.

It works well with libraries like:

- NumPy
- Pandas
- Matplotlib

2. Installing Scikit-Learn

- Install using pip:
```bash
pip install scikit-learn
```
- Import library:
```py
import sklearn
```

3. Key Machine Learning Types

**Supervised Learning**
- Model learns from labeled data.

Examples:
- Spam detection
- House price prediction

Algorithms:

- Linear Regression
- Logistic Regression
- Decision Tree
- K-Nearest Neighbors

**Unsupervised Learning**
- Model finds patterns in unlabeled data.

Examples:
- Customer segmentation
- Market analysis

Algorithms:
- K-Means Clustering
- PCA (Dimensionality Reduction)


4. Basic Workflow in Scikit-Learn

Typical machine learning process:

1. Import libraries
2. Load dataset
3. Split data into training and testing sets
4. Train model
5. Make predictions
6. Evaluate model

```py
from sklearn.model_selection import train_test_split
from sklearn.linear_model import LinearRegression
```

5. Dataset Example

```py
from sklearn.datasets import load_iris

data = load_iris()

print(data.data)
print(data.target)
```

6. Train Test Split

- Split data into training and testing sets.

```py
from sklearn.model_selection import train_test_split

X = data.data
y = data.target

X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.2
)
```

7. Training a Model

```py
from sklearn.linear_model import LinearRegression
model = LinearRegression()
model.fit(X_train, y_train)
```

8. Making Predictions

```py
predictions = model.predict(X_test)

print(predictions)
```

9. Model Evaluation

- Check how well the model performs.

```py
from sklearn.metrics import accuracy_score
accuracy = accuracy_score(y_test, predictions)
print(accuracy)
```

10. Common Algorithms in Scikit-Learn

Linear Regression
- Used for predicting continuous values.

Logistic Regression
- Used for classification problems.

Decision Tree
- Used for classification and regression.

K-Nearest Neighbors (KNN)
- Classifies data based on nearest data points.

11. Feature Scaling

Feature scaling improves model performance.

```py
from sklearn.preprocessing import StandardScaler

scaler = StandardScaler()

X_scaled = scaler.fit_transform(X)
```

