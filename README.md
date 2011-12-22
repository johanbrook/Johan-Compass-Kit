# Johan's Compass Kit

### Version 1.5

My sort-of personal CSS framework. Using [Sass](http://sass-lang.com) and [Compass](http://compass-style.org).

[Demo](http://playground.johanbrook.com/css/compass-boilerplate/)

# What is it

**This is a drop-in collection of Sass files wrapped up in a nice structure to help me start off a new project in no time. **

My Compass Kit is quite stripped – it mainly consists of handy variables, mixins, and functions. I created [Dyluni](https://github.com/johanbrook/dyluni) a while ago, but this is a Compass based version, with a bit cleaner approach. Its strength is the file structure: make sure that your Sass files are in order, just like the rest of your app/site. Don't Repeat Yourself, and Convention Over Configuration, etc. A pro tip is to give the Sass files in the `views` directory the same names as your app's views (the same goes for the partials). No more 'finding that special CSS section'.

# What it's not

My Compass Kit is not a large scale "framework" for advanced CSS layouts and magic trickery. It's a base set of files ordered in a file structured meant for reuse. It's a living thing (which means I might change stuff as I see fit, evolved from my own workflow and other best practices).

A great Compass extension for CSS patterns is [Stitch](http://stitchcss.com/) – give that a try as well (the timing functions are to die for).

# Why?

I'm fed up with copying and pasting code. I want to create. Fast. I believe in [DRY](http://en.wikipedia.org/wiki/DRY), and having a collection of Sass files around makes perfect sense. Every file in its place. If you separate the different sections of your site in nice modules, you could reuse the code in a flexible way later on.

# How?

The master file is, yeah, `master.scss`. Everything is imported into that, single file. Reference it from your HTML.

Compile the project (when standing in this directory):

	$ compass compile

If you're in a parent directory, just append the dirname to the end:

	$ compass compile public

... assuming 'public' is the directory where all these files live.

This outputs:

	overwrite stylesheets/ie.css 
	overwrite stylesheets/master.css

To have Compass watch your Sass file, and compile them on-the-fly:

	$ compass watch

(`Ctrl + C` to abort).

## Import scheme

	master
	- library/normalize
	- compass/css3
	
	- base
		- library/variables
		- library/mixins
		- library/helpers
		
		- common
			- common/fonts
			- common/elements
			- common/buttons
			- common/forms
			- common/columns
			- common/animations

	- main	
		- partials
			- partials/header
			- partials/footer
			- partials/post
			
		- views
			- views/home
			
	- responsive
	- print

Compass compiles Sass files into CSS in development mode by default, so your CSS files will be uncompressed in development. Please see below ("Config" section) for quickly compiling for production. You're however able to [override this via the command line](http://compass-style.org/help/tutorials/command-line/).

### _base.scss

`base.scss` is essentially a 'config' file with variables, mixins, resets, functions, helper classes – basically everything global you'd want to use all over your site. It gets imported before everything else.

### _main.scss

The main site file. In here you write your CSS. I recommend you to branch out your site with imports (see below).

### Partials

Thanks to Sass' powerful `@import` command, you're able to pull in external files directly into your main files without extra HTTP requests. Therefore I've divided the header, footer, and form sections into separate files. Prepend a "_" (underscore) to your partials.

### _common.scss

I've discovered that having some common elements in separate files are pretty good. It could be buttons, article styles, or other stuff that your *might* make use of in other places later on.

### _responsive.scss, _print.scss, and ie.scss

Extra files. `_responsive.scss` includes some media queries (and debug helpers: [http://johanbrook.com/design/css/debugging-css-media-queries](http://johanbrook.com/design/css/debugging-css-media-queries/)).


# Custom mixins

	@include debugmessage($message, $color: yellow)

Whenever you want to debug media queries, for instance, use this mixins with a parameter `$message` and an optional parameter of `$color`. It'll be prepended to the body element (i.e. sit as a flash above your content).

	@include stretch($height: true, $width: true)

Stretch an element horizontally (`$width` is true) and vertically (`$height` is true).

## Clearfix

	#element{
		@include clearfix;
	}

Use `@include clearfix` in your SCSS code whenever you want to apply the clearfix hack on a parent element, or the classname `group` in the markup.

# Functions

	#element{
		width: make_fluid(300px);	// make_fluid(measure_in_pixels, $total: $page_width)
	}

In responsive web design, it's handy to calculate percentage widths relative to parent elements. This is easy with Sass – you're able to do it on the fly.

The width of the element above will depend on which base `$page_width` you've set (defaults to 992px). You can provide an optional width for the function to use as a reference in the second parameter.

	#element{
		width: get_columns(4);
	}

Specify an amount of columns, and the function will return a pixel width including gutters.

This saves you a ton of time, and you don't have to use classnames in markup that often. Uses the variables `$column` and `$gutter` (check in `_base.scss`).

All together now:

	#element{
		width: make_fluid(get_columns(4), 800px);
	}


# Config

### Config.rb

Compass' `config.rb` includes a basic setup, sets some paths, and so on. Feel free to poke around. Especially double-check the `http_path` variable, and set it to the path of this directory. I've used a sample 'compass-boilerplate' name right now. This is important to get right, since various Compass helpers (such as the insanely great [`image_url` function](http://compass-style.org/reference/compass/helpers/urls/) relies on a correct path).

For more info, please see the [Compass configuration reference](http://compass-style.org/help/tutorials/configuration-reference/).

### Rakefile

Includes two simple tasks:

	$ rake compile:production
	
	# => overwrite stylesheets/ie.css 
	# => overwrite stylesheets/master.css 
	# => * Sass compiled for production
	
	$ rake compile:dev
	
	# => overwrite stylesheets/ie.css 
	# => overwrite stylesheets/master.css 
	# => * Sass compiled

The Rakefile includes a `compile:production` task for quickly generating a production ready, compressed stylesheet.


# License

Free to use under the [MIT license](http://www.opensource.org/licenses/mit-license.php)

Copyright (C) 2011 by Johan Brook

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
