## Linkedin Learning

# CSS Essential Training

__________________________________

## 1.Getting Started 

### 1.3.Referencing CSS:

- External
- Inline
- Internal

_____________________________________________

## 2.Core Concepts

### 2.2.CSS syntax and terminology:

CSS comment: /* This is a comment in css */

### 2.4.The color and property values:

Basic Color Keywords: red, blue, green, black

Extended Color Keywords: mediumseagreen, oldlace, aliceblue, blanchedalmond

RGB: values define colors according to its red, green, and blue components.
	- rgb() function
	- Use rgba() and a fourth value to change the opacity

hsl ( ) and hsla ( )
	- Defines the color value by its hue, saturation, and lightness
	- Also includes an optional alpha component
	/* hue, saturation, lightness, alpha/opacity */
	hsl (270, 60%, 70%)
	hsla (270, 60%, 70%, 0.7)

### 2.5.Type and universal selectors

Type Selectors
- The most basic kind of selector, simple matching pattern

Universal Selector (*)
- Matches to all elements, of any type

### 2.6.Class and ID selectors:

Class Selector
- Add the class attribute to the HTML element
- You define the value
- The value is the selector, starting with a period
- Reusable 
- Can be applied to any element
- Selector only matches to name

ID Selector
- Add the ID attribute to the HTML element
- You define the value 
- The value is the selector, starting with a # symbol
- Can only be used once per page

IDs and In-Page Linking
- Can be used for CSS and in-page linking 
	<a href="#example">Links to a spot on the page</a>
	<section id="example">Link goes here 
	#example { ... }

Naming Conventions: 
- Instead of spaces, use a hyphen or underscore.
	- class="class-name"
	- class="class_name"
	- id="id-name"
	- id="id_name"
- Use meaningful and descriptive names.
- Use easily understood abbreviations.

### 2.7.Descendant selectors:

Document Object Model: The Document Object Model (DOM) represents the relationships between HTML elements.

ctrl + /  to remove or add comment

### 2.9.Inheritance and specificity:

Inheritance: CSS styles can be inherited from the ancestor to descendant elements.

Specificity: determines how browsers decide which CSS rule takes precedence.
1. universal (*)
2. type (p)
3. class (.example)
4. id (#example)

### 2.10.The cascade and importance:

Importance
- The **!important** keyword overrides source order and specifity

---------------------------------------------------------------------------------------------------------

## 3.The Box Model

### 3.2.Inline, block, and display:

Inline
- Takes up the same space as their content
- Elements are displayed in a line, from the left 
- Elements will only wrap when items cannot fit
- <a>, <span>, <strong>

Block
- Same height as content, same width as container
- Always starts on a new line
- <p>, <h1>, <article>, <section>

The Display Property: Used to change the default behavior of inline and block-level elements

### 3.3.The box model properties:

The Box Model
- Content box
- Padding box 
- Border box 
- Margin box

Box Properties
- Width
- Height
- Padding
- Border
- Margin

Values and Units: For box properties, the <percentage> and <lenght> data types are used.

Absolute <length> Unit
- px: Pixel
- cm: Centimeter
- mm: Millimeter
- in: Inch
- pc: Pica (equal to 1/6 of an inch)
- pt: point (equal to 1/72 of an inch)
- width: 1000px;

Relative <length> Unit
- em: Represents inherited font-size of element
- rem: Represents the font-size of the root element

---------------------------------------------------------------------------------

## 4.Typography

### 4.1.Typography for the web:

Typography: Arranging type for readability and to engage and communicate with the reader.

Typeface: A set of fonts designed with common characteristics, composed of glyphs.

There are five categories of typefaces:
- Script
- Decorative
- Monospace
- Serif
- Sans-serif

### 4.2.Changing the font-family:

Generic font-family Names:
- serif (serif fonts)
- sans-serif (sans-serif fonts)
- monospace (monospace fonts)
- cursive (script or decorative fonts)
- fantasy (decorative fonts)

Web-Safe Fonts: Fonts that are commonly pre-installed on the majority of computers or devices (Examples: Arial, Times New Roman)
Fonts may vary among operating systems.

### 4.3.Font-weight and font-style:

font-weight (property): values are from 100 to 900
- Light
- Regular
- Semi-Bold
- Bold 
- Extra-Bold

font-weight Keywords:
- **normal** is equal to 400 and is also the default for body text
- **bold** is equal to 700 and is the default for headings

font-style (property): There are three values: italic, oblique, and normal.

### 4.7.The font-size property:

font-size (property): px, em, rem

px
- Screens are measured in pixels
- Absolute value, great for accuracy 
- Use whole numbers, avoid decimal
- Browser default = 16px

em
- Named after the letter "m"
- Relative unit
- Can use whole numbers or decimal points
- 1em = inherited font-size

rem
- root em
- Relative unit
- Only relative to the root element (<html>)
- Not affected by parent or ancestor elements

### 4.8.Font shorthand:

Font Shorthand Property:
- font-style
- font-size
- font-weight
- font-family
- font-variant
- line-height

Font Shorthand syntax rules:
- Order matters! font-style, font-variant, and font-weight must precede font-size
- font-variant = normal or small-caps only 
- font-size/line-height
- font-family must be the last value specified

font: italic small-caps bold 24px/1.5 Helvetica, sans-serif;

----------------------------------------------------------------------------------------

## 5.Layouts: Float and Position

### 5.2.The float and clear properties

### 5.3.Float and collapsed container:

Option 1: overflow (property)
- overflow: hidden;
- overflow: auto;
- overflow: scroll;

Option 2:  "clearfix" Hack

Option 3: display (property)

### 5.5.Project: Float and box model fix

### 5.6.Position (property)

- static: not positioned
- relative: relative to current position
- absolute: relative to containing element
- fixed: relative to the viewport
- sticky: relative to containing element and viewport

### 5.7.Position and z-index

---------------------------------------------------------------------------------

## 6.Layouts: Flexbox and Grid

### 6.1.Introduction to Grid and Flexbox:

Flexbox
- Distribution across a single axis

Grid
- Layouts with both rows and columns

### 6.2.Introduction to Flexbox:

Flexbox Terminology
- flex container: the parent element
- flex items: the child elements

### 6.3.Flexbox: Orientation and ordering:

flex-direction (property): 
- Determines the direction of the main axis
- There are four values: row, row-reverse, column and column-reverse.

flex-wrap (property)

### 6.4.Flexible sizing:

flex- Properties:
- flex-basis: sets the initial size of the flex-items
- flex-grow: determines how items will expand if there is extra space in the container
- flex-shrink: determines how items will shrink if there isn't enough space in the container

flex Shorthand 
- flex: grow shrink basis;
- flex: 0 1 100px;

### 6.6.Flexbox: Alignment:

Aligning Items in a Flex Container
- justify-content (property): aligns items on the main axis (horizontally)
- align-items (property): aligns items on the cross axis (vertically)

### 6.8.Introduction to CSS Grid:

- grid container: the parent element.
- grid items: the child elements within the grid container

### 6.9.The explicit grid:

Creating an Explicit Grid:
- grid-template-columns (property)
- grid-template-rows (property)

The Fraction Unit: fr

fr: represents a fraction of the available space in the grid container

grid-template-columns: 1fr 1fr 1fr

repeat ( ) (function)  
repeat([number of tracks], [size of tracks])  
grid-template-columns: repeat (3, 1fr);

Adding Gutters with gap  

gap: 10px;  (rows & columns)
gap 10px 20px; (rows | columns)

### 6.11.Grid placement properties:

Positioning grid Items
- grid-column: 2 / 4;
- grid-row: 1 / 3;

---------------------------------------------------------------------------

## 7.Advanced Selectors

### 7.2.Relational selectors: Combinators:

Child Combinator (>)

Sibling Combinators (+, ~ tilde)

Adjacent Sibling Combinator (+)

General Sibling Combinator (~ tilde)

### 7.4.Pseudo-class selectors: First and last:

: first-child and : last-child

: first-of-type and : last-of-type

## 8.Fluid and Responsive Layouts

### 8.6.Media queries, widths, and breakpoints:














