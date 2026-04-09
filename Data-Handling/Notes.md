## Data Handling in Python

- Data handling refers to collecting, cleaning, processing, and analyzing data.
- Common tasks include:

1. Reading datasets
2. Cleaning missing data
3. Filtering data
4. Transforming data

**Reading Data Files**

- Read CSV File

```py
import pandas as pd

df = pd.read_csv("data.csv")
```

**Read Excel File**

```py
df = pd.read_excel("data.xlsx")
```

**Handling Missing Data**

```py
df.isnull()        # check missing values
df.dropna()        # remove missing values
df.fillna(0)       # replace missing values
```

**Filtering Data**

```py
df[df["Age"] > 25]
```

**Sorting Data**

```py
df.sort_values("Age")
```

**Grouping Data**

```py
df.groupby("Department").mean()
```