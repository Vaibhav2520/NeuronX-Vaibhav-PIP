## 1. Create a Component with Props
- User Component:

```js
function User(props) {
  return (
    <div>
      <h2>Name: {props.name}</h2>
      <h3>Age: {props.age}</h3>
    </div>
  );
}

export default User;
```

- App Component:

```js
import User from "./User";

function App() {
  return (
    <div>
      <User name="Vaibhav" age="22" />
    </div>
  );
}
```

## 2. Input Field with useState

```js
import { useState } from "react";

function App() {

  const [name, setName] = useState("");

  return (
    <div>

      <input
        type="text"
        placeholder="Enter name"
        onChange={(e) => setName(e.target.value)}
      />

      <h2>{name}</h2>

    </div>
  );
}

export default App;
```

## 3. Toggle Button

```js
import { useState } from "react";

function App(){

  const [dark,setDark] = useState(false);

  return(

    <div>

      <button onClick={()=>setDark(!dark)}>
        {dark ? "Light Mode" : "Dark Mode"}
      </button>

    </div>

  )
}

export default App;
```

## 4. Condtional Rendering

```js
function App() {

  const isLoggedIn = true;

  return (
    <div>
      {isLoggedIn ? <h1>Welcome User</h1> : <h1>Please Login</h1>}
    </div>
  );
}

export default App;
```