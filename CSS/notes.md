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
- Note that the id name cannot start with a number

2. The CSS class Selector
The class selector selects HTML elements with a specific class attribute.

In this example all HTML elements with class="center" will be red and center-aligned: 
```css
.center {
  text-align: center;
  color: red;
}
```
- HTML elements can also refer to more than one class.

In this example the ```html<p>``` element will be styled according to class="center" and to class="large": 

```css
<p class="center large">This paragraph refers to two classes.</p>
```

3. The CSS Universal Selector
- The universal selector (*) selects all HTML elements on the page.

The CSS rule below will affect every HTML element on the page: 
```css
* {
  text-align: center;
  color: blue;
}
```

4. The CSS Grouping Selector
- The grouping selector selects all the HTML elements with the same style definitions.

The grouping selector selects all the HTML elements with the same style definitions.

```css
h2 {
  text-align: center;
  color: red;
}

p {
  text-align: center;
  color: red;
}
```
- It will be better to group the selectors, to minimize the code.
- To group selectors, separate each selector with a comma.

```css
h1, h2, p {
  text-align: center;
  color: red;
}
```

## 5️⃣ CSS Borders

The CSS border properties allow you to specify the style, width, and color of an element's border.

**1.CSS Border Style**

The border-style property specifies what kind of border to display.

The following values are allowed:

- dotted - Defines a dotted border
- dashed - Defines a dashed border
- solid - Defines a solid border
- double - Defines a double border
- groove - Defines a 3D grooved border. The effect depends on the border-color value
- ridge - Defines a 3D ridged border. The effect depends on the border-color value
- inset - Defines a 3D inset border. The effect depends on the border-color value
- outset - Defines a 3D outset border. The effect depends on the border-color value
- none - Defines no border
- hidden - Defines a hidden border

The border-style property can have from one to four values (for the top border, right border, bottom border, and the left border).

**2.CSS Border Width**

- The border-width property specifies the width of the four borders.
- The width can be set as a specific size (in px, pt, cm, em, etc)

# Example

```css
p.one {
  border-style: solid;
  border-width: 5px 20px; /* 5px top and bottom, 20px on the sides */
}

p.two {
  border-style: solid;
  border-width: medium;
}

p.three {
  border-style: dotted;
  border-width: 2px 20px; /* 2px top and bottom, 20px on the sides */
}

p.four {
  border-style: dotted;
  border-width: 25px 10px 4px 35px; /* 25px top, 10px right, 4px bottom and 35px left */
}
```

**3.CSS Rounded Borders**

The border-radius property is used to add rounded borders.

```css
p {
  border: 2px solid red;
  border-radius: 5px;
}
```

## 6️⃣ CSS Padding

The CSS padding properties are used to generate space around an element's content, inside of any defined borders.

With CSS, you have full control over the padding. There are properties for setting the padding for each side of an element (top, right, bottom, and left), and a shorthand property for setting all the padding properties in one declaration.

**Padding - Individual Sides**

CSS has properties for specifying the padding for each side of an element:

- padding-top - sets the top padding of an element
- padding-right - sets the right padding of an element
- padding-bottom - sets the bottom padding of an element
- padding-left - sets the left padding of an element

All the padding properties can have the following values:

- length - specifies a padding in px, pt, cm, etc.
- % - specifies a padding in % of the width of the containing element
- inherit - specifies that the padding should be inherited from the parent element

**Padding - Shorthand Property**

To shorten the code, it is possible to specify all the padding properties in one declaration.

The padding property is a shorthand property for the following individual padding properties:

- padding-top
- padding-right
- padding-bottom
- padding-left

Here is how it works:

If the padding property has four values:

- padding: 25px 50px 75px 100px;
  - top padding is 25px
  - right padding is 50px
  - bottom padding is 75px
  - left padding is 100px

```css
div {
  padding: 25px 50px 75px 100px;  
}
```

## 7️⃣ CSS Box Model

- In CSS, the term "box model" is used when talking about web design and layout.
- The CSS box model is essentially a box that wraps around every HTML element.
- Every box consists of four parts: content, padding, borders and margins.

1. Content - The content of the box, where text and images appear
2. Padding - Clears an area around the content. The padding is transparent
3. Border - A border that goes around the padding and content
4. Margin - Clears an area outside the border. The margin is transparent

**Example**
```css
div {
  width: 300px;
  border: 15px solid green;
  padding: 50px;
  margin: 20px;
}
```
## 8️⃣ CSS Z-index

- The z-index property specifies the stack order of positioned elements.
- The stack order defines which element should be placed in front or behind other elements.
- When elements are positioned, they can overlap other elements.

**Example**

```css
img {
  position: absolute;
  left: 0px;
  top: 0px;
  z-index: -1;
}
```
## 9️⃣ CSS Flexbox

- CSS Flexbox is short for the CSS Flexible Box Layout module.
- Flexbox is a layout model for arranging items (horizontally or vertically) within a container, in a flexible and responsive way.
- Flexbox makes it easy to design a flexible and responsive layout, without using float or positioning.
- CSS Flexbox is used for a one-dimensional layout, with rows OR columns.
- CSS Grid is used for a two-dimensional layout, with rows AND columns.

**A Flex Container with Three Flex Items**
```css
<html>
<head>
<style>
.container {
  display: flex;
  background-color: DodgerBlue;
}

.container div {
  background-color: #f1f1f1;
  margin: 10px;
  padding: 20px;
  font-size: 30px;
}
</style>
</head>
<body>

<div class="container">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</div>

</body>
</html>
```

## CSS Flex Container

1. CSS Flex Container Properties

The flex container element can have the following properties:

- display - Must be set to flex or inline-flex
- flex-direction - Sets the display-direction of flex items
- flex-wrap - Specifies whether the flex items should wrap or not
- flex-flow - Shorthand property for flex-direction and flex-wrap
- justify-content - Aligns the flex items when they do not use all available space on the main-axis (horizontally)
- align-items - Aligns the flex items when they do not use all available space on the cross-axis (vertically)
- align-content - Aligns the flex lines when there is extra space in the cross axis and flex items wrap

2. CSS flex-direction Property

The flex-direction property specifies the display-direction of flex items in the flex container.

- row 
- column
- row-reverse
- column-reverse

The row value is the default value, and it displays the flex items horizontally (from left to right):
```css
.flex-container {
  display: flex;
  flex-direction: row;
}
```

3. CSS flex-wrap Property

The flex-wrap property specifies whether the flex items should wrap or not, if there is not enough room for them on one flex line.

This property can have one of the following values:

- nowrap
- wrap
- wrap-reverse

4. CSS flex-flow Property 

The flex-flow property is a shorthand property for setting both the flex-direction and flex-wrap properties.


```css
.flex-container {
  display: flex;
  flex-flow: row wrap;
}
```

5. CSS Flexbox justify-content

The justify-content property aligns flex items along the main axis (horizontally).

This property can have one of the following values:

- center
- flex-start (default)
- flex-end
- space-around
- space-between
- space-evenly

**Example**
```css
.flex-container {
  display: flex;
  justify-content: center;
}
```


6. CSS Flexbox Align

This page covers align-items, align-content, and true centering with Flexbox.

The align-items property is used to align the flex items vertically (on the cross-axis).

This property can have one of the following values:

- normal (default)
- stretch
- center
- flex-start
- flex-end
- baseline

