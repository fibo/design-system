# Favicon

You can start with an empty favicon. Just add this snippet to your `head` pages.

```html
<link rel="icon" href="data:image/x-icon;base64,AA" />
```

Once you have an idea for a logo, you can start creating a 512x512 SVG image like [this logo.svg](../assets/logo.svg).

You can start with something like this.

```svg
<svg
  version="1.1"
  viewPort="0 0 512 512"
  width="512" height="512"
  xmlns="http://www.w3.org/2000/svg"
>
  <rect width="100%" height="100%" fill="black" />
  <circle cx="256" cy="256" r="250" fill="none" stroke="magenta" />
</svg>
```

The rectangle and the circle are just guides. The rectangle could be removed or turned to `transparent`. The circle is usually the area that will contain the logo.

You may want to create several versions of the logo. For example an animated version. For example the favicon may be a streamlined version of the logo. See for example this [favicon.svg](../assets/favicon.svg).

There are also some contexts where the logo could be masked. Usually the safe area is 409x409, so the circle should have a _radius_ smaller than `204`.

You can use [maskable.app](https://maskable.app/) to check you icon.

See also how [Evil Martians recommend to add a favicon](https://evilmartians.com/chronicles/how-to-favicon-in-2021-six-files-that-fit-most-needs).
