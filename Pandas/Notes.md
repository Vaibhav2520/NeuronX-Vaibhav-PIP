## Pandas 
- Pandas is a library used for data analysis and data manipulation.
- It is commonly used for handling structured data such as tables or spreadsheets.

**Installing Pandas**
```bash
pip install pandas
```

**Importing Pandas**
```py
import pandas as pd
```

**Pandas Data Structures**
- Pandas mainly uses two structures:
1. Series – one-dimensional data
2. DataFrame – two-dimensional table

**Creating a Series**
```py
import pandas as pd

data = pd.Series([10, 20, 30])
print(data)
```

**Creating a DataFrame**
```py
data = {
    "Name": ["Alice", "Bob"],
    "Age": [25, 30]
}

df = pd.DataFrame(data)

print(df)
```

**Viewing Data**
```py
df.head()     # first 5 rows
df.tail()     # last 5 rows
df.info()     # dataset information
df.describe() # statistics summary
```

**Selecting Data**
```py
df["Name"]        # select column
df.loc[0]         # select row
df.iloc[0]        # select row by index
```

**Adding a Column**
```py
df["Salary"] = [50000, 60000]
```

**Removing a Column**
```py
df.drop("Salary", axis=1)
```