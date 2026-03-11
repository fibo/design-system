# Design System Principles

## Functionality

> inputs, outputs and links

A web document is like a __function__, with _inputs_ and _outputs_.

The client can get information via the __outputs__, that is the information displayed on the page.

She|he|it can interact with the page through the __inputs__, that are all the interactive element for example the form elements like buttons, text input elements, sliders.

Another category is represented by _links_ which are __pointers__ to other documents that will provide other functionalities.

## Bend rules

Straight lines do not exist. Geodetics are curves.

So the rules in this document should be adapted case by case. Creating a web document is a creative process. The recommendation is not to just grab the whole CSS implementation _"as is"_ but to copy only the things that make sense and optionally modify them according to the specific web page or project.

## HTML tags

Prefer using HTML tags with no classes and take into consideration of the _Semantic_ meaning of the tag.

Every HTML tag that can be emitted by a Markdown parser (compatible with _CommonMark Spec_) should be styled in order to display a good design _out of the box_.

## Golden Section

Use sizes based on _Golden Section_.
Phi is `1.618`, so for example

- small font size = base font size / Phi
- heading 1 font size = heading 2 font size * Phi
- default `line-height` is Phi

## Typography

Prefer using _System Fonts_, with the following typefaces:

- _Serif Fonts_ for heading and other elements that need emphasis.
- _Monospaced Fonts_ for code and technology related elements.
- _Sans Serif Fonts_ for content and other elements.

Optionally use two sans serif font families to differentiate between content and form elements.

