## Linkedin Learning 

# HTML Essential Training 

__________________________

## 1. HTML

### 1.1.The role of HTML

The Web is made out of three programming languages, HTML, CSS and Javascript. 

HTML (HyperText Markup Language): Defines the content of a site 

CSS (Cascading Style Sheets): Defines the styling of a site 

 JavaScript: Provides interactivity 

__________________________________

## 2.Formatting Text

Paragraphs : <p> </p>            

Document Object Model (DOM) Tree: The hierarchy and structure of HTML elements, often used for targeting elements in CSS and JavaScript 

Headlines : <h1> </h1> to <h6> </h6> 

### 2.3.Bold and italics:      

<strong> : Importance, seriousness, urgency 

<b> : Bold 

### 2.5.Lists: 
- Unordered lists 
- Ordered lists 
- Definition lists  

<li> : List item 

<ul> : Unordered list 

<ol> : Ordered list 

<dl> : Definition list 

<dt>term</dt> : Definition term

<dd>definition</dd> Definition description

### 2.6.Quotes:

<q> : Stands for "quote"

Inline Elements
- <q>
- <strong>
- <b>
- <i>
- <em>

Block-Level Elements
- <blockquote>
- <p>
- <ul>

### 2.7.Dates and times:

Time element : 
<time>May 8,2025</time>

Date time attribute : 
<time datetime="2025-05-08">May 8, 2025</time>

### 2.8.Code, pre, and br:

<code> </code> : inline element to display code as it is

HTML Entities

- < : &lt;
- > : &gt;

<br> : Line break

<pre> </pre> : spaces

### 2.9.Superscripts, subscripts, and small text:

Subscripts <sub> : Characters that are set below the text baseline (H2O water formula)

Superscripts <sup> : Characters that are set above the text baseline (5^2 : five squared)

MathML: Markup language for math

<small> : To convey something that has very little prominence

_______________________________________________________________

## 3.Understanding the Power of HTML

### 3.2.HTML attributes:

Global Attributes: Attributes that can be applied to any HTML element

The class Attribute: Allows us to target all elements with that class in our CSS or JavaScript

- <p class="intro">
	This is the introduction.
</p>

The id Attribute: Allows us to target a unique element with that id in our CSS of JavaScript 

- <p class="intro" id="article-intro">
	This is the introduction.
</p>

lang Attribute: The lang attribute specifies the language of the element's content. Common examples are "en" for English, "es" for Spanish, "fr" for French, and so on.

- <p lang="fr">Ceci est un paragraphe.</p>

dir Attribute: The dir attribute specifies the text direction of the element's content.

- <p dir="rtl">Write this text right-to-left!</p>

### 3.3.ARIA Roles:

HTML attributes that provide accessible information about that specific element

### 3.5.Weird characters:

Entities:
- &copy;
- &trade;
- &star;

_____________________________

## 4.Linking and Navigation

### 4.1.Links:

The Anchor Element

- <a href="page.html">Link</a>

href stands for Hypertext Reference

HTTP stands for HyperText Transfer Protocol

HTTPS stands for HyperText Transfer Protocol Secure

______________________________________________________

## 5.Images and Graphics

### 5.1.Images:

Image element

- source attribute (src)
- alt attribute 
- width attribute
- height attribute

<img src="img_girl.jpg" alt="Girl in a jacket" width="500" height="600">

### 5.2.Image formats:

- GIF
	- Does well compressing large areas of a single color 
	- Limited color space of 256 colors
	- Can do transparency, with jagged edges
	- Can have multiple frames, and make a little movie

- SVG (Scalable Vector Graphic)

	- Logos, icons, etc
	- Vector file

- JPG: Image format for compressing photos

- PNG

### 5.3.Responsive images:

The srcset Attribute: The srcset attribute specifies the URL of the image to use in different situations. Allows you to specify multiple files to be used based on either viewport width or image pixel width

### 5.4.Responsive width:

The sizes Attribute: Lists which size image to use at which media query

### 5.6.Figure and figcaption:

<figure> : For anything that appears as a figure, illustrating something 

<figcaption> : For demonstration of a concept which needs a caption

______________________________________________________________________

## 6.Media

### 6.1.Audio:

<audio></audio> : Element used to place audio

### 6.4.Embedding other media through iframes:

Embedding: Placing content from one site into the body of a page on another site

_________________________________________________________________________________

## 7.More Ways to Identify Content

### 7.2.Generic elements: div and span

<div> : Block-level element 

<span> : Inline element

_________________________________________

## 8.Putting it all together

### 8.1.The  HTML page:

The head Element: Contains information the browser needs to know, though it won't be displayed on the page

The body Element: Contains the information and content that will be displayed on the page

### 8.2.Document head:

The meta Element:
- Only used inside the head
- Conveys metadata about the page

The link Element: Links to a range of other assets we want to load

The rel Attribute: Tells the browser which kind of asset it is

The href Attribute: Provides the URL to the asset

The  script Element: Tells the browser to load a JavaScript file

### 8.3.Structuring content:

The main Element: Wraps around the main content of the page

The header and footer Elements: Used to mark places on the page where the content is a header or a footer

The article Element: Wrapped around any instance of an article

The section Element: Wraps around sections of content

The aside Element: Marks content that is off to the side or not the main attraction

__________________________________________________________________________

## 10.Structuring Tabular Data

### 10.2.Building table rows

| Element | Name | Purpose | Attributes |
| --- | --- | --- | --- |
| <table></table> | Table | Wraps the whole table |  |
| <tr></tr> | TR - table row | Wraps around a set of elements, defining them as belonging to the same row | colspan, rowspan, headers |
| <th></th> | TH - table header | Defines a header for a column | colspan, rowspan, headers |
| <td></td> | TD - table data | Marks the actual bits of data |  |





