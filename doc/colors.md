# Use every color!

It is a common practice to choose a _primary_ color for a brand.
It is fine to do so. However a design should be free to range to every color if it looks good.

## Paper and ink

Remember at school when you started writing, or even before when you started coloring.
We all started with **paper** and **ink**.
Same when you create a website: imagine to have _paper_ that can be white or colored; then you can use _ink_ to write or draw on it.

The CSS variable names could follow this metaphore. You can start with something like

    :root {
      --accent-color: black;

      --paper-1: #fff;
      --paper-2: #eee;
      --paper-3: #ddd;

      --ink-1: #000;
      --ink-2: #111;
      --ink-3: #222;
    }

Notice that the snippet above is using pure black and pure white.
Pure neutral grays look flat. You may want to mix a bit of color, like blue, purple or the brand color into your _shades of grays_.
