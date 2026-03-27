## What is React.js?
- React.js is a JavaScript library for building user interfaces, especially single-page applications (SPA).
- It was developed by Facebook (Meta).
- React allows developers to build interactive and reusable UI components.

## Why Use React?
- React is popular because it provides:

1. Component-Based Architecture
- Applications are built using small reusable components.

```t
App
 ├── Navbar
 ├── Sidebar
 ├── Content
 └── Footer
```

2. Fast Performance (Virtual DOM)
- React uses Virtual DOM instead of updating the real DOM directly.
- Process:

```t
User Action
↓
Virtual DOM Update
↓
Compare with Previous Virtual DOM
↓
Update only changed elements in Real DOM
```
- This makes React very fast.


3. Reusability
- Components can be reused across different parts of the application.

```t
<Button />
<Card />
<UserProfile />
```

4. Strong Ecosystem
React works well with:

- Node.js
- Express
- MongoDB
- Redux
- Next.js

This forms the MERN Stack.

## Installing React

- Modern React apps are usually created using Vite or Create React App.
- Using Vite (Recommended)

```t
npm create vite@latest my-app
```

- Select:

```t
React
```

- Then run:

```t
cd my-app
npm install
npm run dev
```

## React Project Structure

Example project:

```t
my-app
│
├── node_modules
├── public
├── src
│   ├── App.jsx
│   ├── main.jsx
│   ├── components
│   │    └── Navbar.jsx
│
├── package.json
└── vite.config.js
```
- All React code lives inside src.


## JSX (JavaScript XML)

- React uses JSX, which looks like HTML inside JavaScript.

Example: 

```js
function App() {
  return (
    <h1>Hello Vaibhav</h1>
  )
}
```

- JSX is converted into JavaScript using Babel.

- JSX rules:

1. Only one parent element

Vaild: 

```js
return (
  <div>
    <h1>Hello</h1>
    <p>React</p>
  </div>
)
```

## Components

- React UI is built using components.

Two types: 

1. Functional Components (Modern) 

```js
function Welcome() {
  return <h1>Hello React</h1>;
}
```

2. Arrow Function Component

```js
const Welcome = () => {
  return <h1>Hello React</h1>;
}
```

## Props (Properties)

- Props are used to pass data from parent to child component.

Example: 

Parent component: 
```js
function App() {
  return <User name="Vaibhav" age="22" />;
}
```

Child component:
```js
function User(props) {
  return (
    <h2>
      Name: {props.name} Age: {props.age}
    </h2>
  );
}
```