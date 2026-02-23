## 1️⃣ What is CSS?
- CSS is the language we use to style an HTML document.
- CSS describes how HTML elements should be displayed.


## 2️⃣ CSS Syntax 
A CSS rule consists of a selector and a declaration block:
- The selector points to the HTML element you want to style.
- The declaration block contains one or more declarations separated by semicolons.
- Each declaration includes a CSS property name and a value, separated by a colon.
- Multiple CSS declarations are separated with semicolons, and declaration blocks are surrounded by curly braces.

**Example**
- In this example all ```html<p>``` elements will be center-aligned, with a red text color:
```css
p {
  color: red;
  text-align: center;
}
```

**Example Explained**
1. p is a selector in CSS (it points to the HTML element you want to style: ```html<p>```).
2. color is a property, and red is the property value
3. text-align is a property, and center is the property value

## 3️⃣ Ways to Add CSS

1. In line CSS (Not recommended)
```css
<h1 style="color: red;">Hello</h1>
```
2. Internal CSS
```css
<style>
  h1 { color: red; }
</style>
```
3. External CSS (Best Practice)
```css
<link rel="stylesheet" href="style.css">
```

## 4️⃣ Selectors (Very Important)

CSS selectors are used to "find" (or select) the HTML elements you want to style.

We can divide CSS selectors into five categories:

- Simple selectors (select elements based on name, id, class)
- Combinator selectors (select elements based on a specific relationship between them)
- Pseudo-class selectors (select elements based on a certain state)
- Pseudo-elements selectors (select and style a part of an element)
- Attribute selectors (select elements based on an attribute or attribute value)

1. The CSS id Selector
The id selector uses the id attribute of an HTML element to select a specific element.

The CSS rule below will be applied to the HTML element with id="para1": 
```css
#para1 {
  text-align: center;
  color: red;
}
```
Note that the id name cannot start with a number

2. The CSS class Selector
The class selector selects HTML elements with a specific class attribute.

In this example all HTML elements with class="center" will be red and center-aligned: 
```css
.center {
  text-align: center;
  color: red;
}
```
