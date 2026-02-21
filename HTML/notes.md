## 1️⃣ What is HTML?
HTML (HyperText Markup Language) is the standard markup language used to structure web pages.

It defines:

- Headings
- Paragraphs
- Links
- Images
- Forms
- Tables
- Layout structure

HTML is not a programming language — it is a markup language.

-----------------------------------------------------------------------------------------------------------------

## 2️⃣ Basic HTML Structure -

```html
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Document Title</title>
</head>
<body>
    <h1>Hello World</h1>
</body>
</html> 
```

## Explanation:
```html
- <!DOCTYPE html> → Defines HTML5
- <html> → Root element
- <head> → Metadata
- <body> → Visible content
```

---------------------------------------------------------------------------------------------------------------------------

## 3️⃣ Headings
```html
- <h1>Main Heading</h1>
- <h2>Sub Heading</h2>
- <h3>Section Heading</h3>
- <h4>Heading 4</h4>
- <h5>Heading 5</h5>
- <h6>Heading 6</h6>
```

Search engines use the headings to index the structure and content of your web pages.
Users often skim a page by its headings. It is important to use headings to show the document structure.
h1 headings should be used for main headings, followed by h2 headings, then the less important h3, and so on.

---------------------------------------------------------------------------------------------------------------------------

## 4️⃣ Paragraph & Text Formatting

The HTML p element defines a paragraph.

A paragraph always starts on a new line, and browsers automatically add some white space (a margin) before and after a paragraph.

**Ex -** 
```html
<p>This is a paragraph.</p>
<p>This is another paragraph.</p>
```

**HTML Display**

You cannot be sure how HTML will be displayed.
Large or small screens, and resized windows will create different results.
With HTML, you cannot change the display by adding extra spaces or extra lines in your HTML code.
The browser will automatically remove any extra spaces and lines when the page is displayed.

**HTML Horizontal Rule**

The hr tag defines a thematic break in an HTML page, and is most often displayed as a horizontal rule

**The HTML pre Element**

The text inside a pre element is displayed in a fixed-width font (usually Courier), and it preserves both spaces and line breaks.

**HTML Formatting Elements**

Formatting elements were designed to display special types of text:
```html
- <b> - Bold text
- <strong> - Important text
- <i> - Italic text
- <em> - Emphasized text
- <mark> - Marked text
- <small> - Smaller text
- <del> - Deleted text
- <ins> - Inserted text
- <sub> - Subscript text
- <sup> - Superscript text
```
---------------------------------------------------------------------------------------------------------------------------

## 5️⃣ HTML Links 

**HyperLinks**

HTML links are hyperlinks.
You can click on a link and jump to another document.
When you move the mouse over a link, the mouse arrow will turn into a little hand.

**Syntax**

The HTML a tag defines a hyperlink. It has the following syntax:
```html
<a href="url">link text</a>
```
**The target Attribute**

By default, the linked page will be displayed in the current browser window. To change this, you must specify another target for the link.

The target attribute specifies where to open the linked document.

The target attribute can have one of the following values:

_self - Default. Opens the document in the same window/tab as it was clicked
_blank - Opens the document in a new window or tab
_parent - Opens the document in the parent frame
_top - Opens the document in the full body of the window

 **Absolute URLs vs. Relative URLs**

Both examples above are using an absolute URL (a full web address) in the href attribute.

A local link (a link to a page within the same website) is specified with a relative URL (without the "https://www" part):

Ex :
```html
<h2>Absolute URLs</h2>
<p><a href="https://www.w3.org/">W3C</a></p>
<p><a href="https://www.google.com/">Google</a></p>

<h2>Relative URLs</h2>
<p><a href="html_images.asp">HTML Images</a></p>
<p><a href="/css/default.asp">CSS Tutorial</a></p>
```

# Use an Image as a Link
```html
<a href="default.asp">
<img src="smiley.gif" alt="HTML tutorial" style="width:42px;height:42px;">
</a>
```
---------------------------------------------------------------------------------------------------------------------------

## 6️⃣ HTML Images

**HTML Images Syntax**

- The HTML img tag is used to embed an image in a web page.
- Images are not technically inserted into a web page; images are linked to web pages. The img tag creates a holding space for the referenced image.
- The img tag is empty, it contains attributes only, and does not have a closing tag.
- The img tag has two required attributes:
- src - Specifies the path to the image
- alt - Specifies an alternate text for the image
```html
<img src="url" alt="alternatetext">
```
**Image Size - Width and Height**
```html
 <img src="lol.jpg" alt="Laughing out Loud" style="width:300px;height:700px;">
```
 You can use the width and height attributes:
```html
 <img src="lol.jpg" alt="Laughing out Loud" width="400" height="500">
```
---------------------------------------------------------------------------------------------------------------------------

## 7️⃣ HTML Tables 
```html
<table>	Defines a table
<th>	Defines a header cell in a table
<tr>	Defines a row in a table
<td>	Defines a cell in a table
<caption>	Defines a table caption
<colgroup>	Specifies a group of one or more columns in a table for formatting
<col>	Specifies column properties for each column within a <colgroup> element
<thead>	Groups the header content in a table
<tbody>	Groups the body content in a table
<tfoot>	Groups the footer content in a table
```
**Table Cells -**

- td stands for table data 
- Everything between td and /td is the content of a table cell.

Ex - 
```html
<table>
  <tr>
    <td>Emil</td>
    <td>Tobias</td>
    <td>Linus</td>
  </tr>
</table>
```

**Table Rows -**

Each Table row starts with tr and ends with a /tr tag

```html
<table>
  <tr>
    <td>Emil</td>
    <td>Tobias</td>
    <td>Linus</td>
  </tr>
  <tr>
    <td>16</td>
    <td>14</td>
    <td>10</td>
  </tr>
</table>
```

**Table Headers -**

Sometimes you want your cells to be table header cells. In those cases use the th tag instead of the td tag:

```html
<table>
  <tr>
    <th>Vaibhav</th>
    <th>Dog</th>
    <th>Rio</th>
  </tr>
  <tr>
    <td>Emil</td>
    <td>Tobias</td>
    <td>Linus</td>
  </tr>
  <tr>
    <td>16</td>
    <td>14</td>
    <td>10</td>
  </tr>
</table>
```
------------------------------------------------------------------------------------------------------------------------------

## 8️⃣ HTML Forms
- An HTML form is used to collect user input. The user input is most often sent to a server for processing.

**The Form Element**
- The HTML form element is used to create an HTML form for user input:

```html
<form>
.
form elements
.
</form>
```
**The Input Element**
- An input element can be displayed in many ways, depending on the type attribute.

| Type | 	Description |
|--------|--------|
| <input type="text"> | Displays a single-line text input field |
| <input type="radio"> | Displays a radio button (for selecting one of many choices) |
| <input type="checkbox">| 	Displays a checkbox (for selecting zero or more of many choices) |
| <input type="submit"> | Displays a submit button (for submitting the form) |
|<input type="button">| 	Displays a clickable button |

---

**Text Field**

- The ```html<input type="text">``` defines a single-line input field for text input.

## Example 

```html
<form>
  <label for="fname">Name:</label><br>
  <input type="text" id="fname" name="fname"><br>
  <label for="lname">Surname:</label><br>
  <input type="text" id="lname" name="lname">
</form>
```

**The Label Element**

The label element also helps users who have difficulty clicking on very small regions (such as radio buttons or checkboxes) - because when the user clicks the text within the label element, it toggles the radio button/checkbox.

**Radio Buttons**

The ```html<input type="radio">``` defines a radio button.

## Example

```html
<p>Choose your favorite Web language:</p>

<form>
  <input type="radio" id="html" name="fav_language" value="HTML">
  <label for="html">HTML</label><br>
  <input type="radio" id="css" name="fav_language" value="CSS">
  <label for="css">CSS</label><br>
  <input type="radio" id="javascript" name="fav_language" value="JavaScript">
  <label for="javascript">JavaScript</label>
</form>
```
------------------------------------------------------------------------------------------------------------------------------

## 9️⃣ Semantic HTML

**What is Semantic HTML?**

Semantic HTML means using HTML elements that clearly describe their meaning to:

- Browsers
- Search engines
- Screen readers
- Developers

```html
<header>
<nav>
<main>
<section>
<article>
<aside>
<footer>
```
**Why Semantic HTML is Important**

✅ 1. SEO (Search Engine Optimization)
- Search engines like Google understand structure better.

✅ 2. Accessibility
- Screen readers depend heavily on semantic structure.

✅ 3. Code Readability
- Instead of:

```html
<div class="header"></div>
<div class="content"></div>
<div class="footer"></div>
```

- We write:

```html
<header></header>
<main></main>
<footer></footer>
```

**Core Semantic Elements**

```html
<header> - Represents introductory content.
<nav> - Defines navigation links.
<main> - Represents main content of the page.
<section> - Represents a thematic grouping of content.
<article> - Represents independent content.
<aside> - Represents side content.
<footer> - Represents footer of page , section and article
```

**Correct Semantic Page Structure**

```html
<!DOCTYPE html>
<html>
<head>
    <title>Semantic Example</title>
</head>
<body>

<header>
    <h1>My Website</h1>
    <nav>
        <a href="#">Home</a>
        <a href="#">Blog</a>
    </nav>
</header>

<main>

<section>
    <h2>Featured Articles</h2>

    <article>
        <h3>HTML Deep Dive</h3>
        <p>Learn semantic HTML...</p>
    </article>

    <article>
        <h3>CSS Flexbox</h3>
        <p>Master layout techniques...</p>
    </article>

</section>

<aside>
    <h3>About Author</h3>
    <p>Vaibhav is a full stack developer...</p>
</aside>

</main>

<footer>
    <p>© 2026 All rights reserved</p>
</footer>

</body>
</html>

```