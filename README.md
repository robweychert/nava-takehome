# Rob Weychert: Nava Take Home Exercise for Frontend Developers

## Process

1. **HTML:** I printed out the mockup, scribbled notes on it about how its various elements could be marked up, and sketched out a modal for the data entry requirement. Since this is a pretty simple page, the markup came together quickly, though inevitably some bits needed to be modified to play nicer with the CSS. (I really wanted each household member to be a `dl`, but an `h3`/`ul` combo worked just as well, without doing any harm semantically.)
2. **CSS:** Browser default styles were standardized with Eric Meyer’s trusty [reset](https://meyerweb.com/eric/tools/css/reset/). (I’ve tried other, more modern ones, but his is still my favorite. I like building up the design basically from scratch.) Basic layout came first, using CSS grid with `auto-fill` columns to make the household section responsive. Next I assembled and applied a three-size typographic scale, using a little `clamp()` and `vw` magic to make it respond to the viewport width. I couldn't immediately recognize the typeface, but I knew it was a commonly used one (and probably a free one), and a quick look at the top sans-serif faces on Google Fonts revealed it to be Noto Sans. Once that was in place, I put together a simple spacing scale, including a responsive width for the page margins (`--vertPad`). Color came last, with a few shades each for the brand’s blue and a red alert color, making the text a dark gray to reduce its contrast and make reading a little easier on the eyes.
3. **JS:** I usually write out the basic order of operations in plain English comments before translating those instructions to code. All the interactive bits are written to the page with JS, their structure mapped out in JSON (in `ui-data.js`) and incorporated into the DOM with a function I wrote awhile back and have used on various other projects (`jsonToHtml()`). Most of the rest was some fairly simple functions for form submission and toggling modal visibility, as well as applying various event listeners. Apart from the little `slugify()` function, I wrote every line of JS myself and didn’t incorporate any dependencies.

## Deviations from the mockup

My build isn’t a pixel perfect representation of the mockup (which is a fool’s errand anyway!), but it follows it very closesly. The main deviations are in the color, and they’re barely noticeable: the aforementioned lower-contrast text color; and the mockup’s two blues, which are, in context, barely discernible from each other, so I made a few shades from the header blue and used one to replace the original button blue (as well as giving it a hover color).

## Questions I would have asked the design team

Apart from wanting to know about the site’s audience and how the design and build would best serve them, I’d want to know how the designers were thinking systemically about the design, especially the typography and color. I’d want to know how they envisioned the responsive aspect, if they were thinking about it content-out or container-in, how the various spatial relationships were meant to work.