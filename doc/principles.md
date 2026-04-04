# Design System

> a flexible framework to create a minimal and adaptable UI

## Functionality

> inputs, outputs and links

A web document is like a **function**, with _inputs_ and _outputs_.

The client can get information via the **outputs**, which is the information displayed on the page.

Users can interact with the page through the **inputs**, which are all the interactive elements, for example form controls like buttons, text inputs, and sliders.

Another category is represented by _links_, which are **pointers** to other documents that provide other functionalities.

## Bend rules

Straight lines do not exist. Geodetics are curves.

So the rules in this document should be adapted case by case. Creating a web document is a creative process. The recommendation is not to just grab the whole CSS implementation _"as is"_ but to copy only the things that make sense and optionally modify them according to the specific web page or project.

## HTML tags

Prefer using HTML tags with no classes, and take into consideration the _semantic_ meaning of each tag.

Every HTML tag that can be emitted by a Markdown parser (compatible with the _CommonMark Spec_) should be styled to provide a good design _out of the box_.

## Golden Section

Use sizes based on the _Golden Section_.
Phi is `1.618`, so for example:

- small font size = base font size / Phi
- heading 1 font size = heading 2 font size \* Phi
- default `line-height` is Phi

## Typography

Prefer using _System Fonts_, with the following typefaces:

- _Serif Fonts_ for headings and other elements that need emphasis.
- _Monospaced Fonts_ for code and technology related elements.
- _Sans Serif Fonts_ for content and other elements.

Optionally use two sans serif font families to differentiate between content and form elements.

## Spacing based on Fibonacci Sequence

Define the smallest possible unit, for instance `--unit-1: 2px`, to be used to draw lines like a border width.
The second unit will be double the first unit.
All other units are the sum of the two previous ones, following the _Fibonacci Sequence_.

## Colors

Define an _accent color_; it can be the brand color or even black. It will be used to drive attention and create highlights, for example on a focused element.

Create _paper_ and _ink_ color shades, which are background and text colors, respectively.

Color shades provide elevation. For example, a form can have a _paper color_ that is not the same as the page body. A form input should have a lighter color, and a button should have a darker color. Inputs should look behind their form. Buttons should look a bit elevated to make them look clickable.

A color can be associated with an intentetion, for example a common choice is to use red for danger.
In this case keep prefer to keep consistency, otherwise feel free to use a full spectrum color palette where it makes sense.
