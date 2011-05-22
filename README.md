# Johan's Compass Kit

My sort-of personal CSS framework. Using [Sass](http://sass-lang.com) and [Compass](http://compass-style.org).

# What?

This is a collection of Sass files wrapped up in a nice structure to help me start off a new project in no time. 

My Compass Kit is quite stripped – it mainly consists of handy variables, mixins, and functions. I created [Dyluni](https://github.com/johanbrook/dyluni) a while ago, but this is a Compass based version, with a bit cleaner approach.

# Why?

I'm fed up with copying and pasting code. I want to create. Fast.

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

## base.scss

`base.scss` is essentially a 'config' file with variables, mixins, resets, functions, helper classes – basically everything global you'd want to use all over your site. It gets imported before everything else.

## main.scss

The main site file. In here you write your CSS. I recommend you to branch out your site with imports (see below).

## _partials.scss

Thanks to Sass' powerful `@import` command, you're able to pull in external files directly into your main files without extra HTTP requests. Therefore I've divided the header, footer, and form sections into separate files. They are imported into `_partials.scss`, which is imported into `_main.scs`. Prepend a "_" (underscore) to your partials.

## _responsive.scss, _print.scss, and ie.scss

Extra files. `_responsive.scss` includes some media queries (and debug helpers: [http://johanbrook.com/design/css/debugging-css-media-queries](http://johanbrook.com/design/css/debugging-css-media-queries/)).

# Config

## Config.rb

Compass' `config.rb` includes a basic setup, sets some paths, and so on. Feel free to poke around. Especially double-check the `http_path` variable, and set it to the path of this directory. I've used a sample 'compass-boilerplate' name right now. This is important to get right, since various Compass helpers (such as the insanely great [`image_url` function](http://compass-style.org/reference/compass/helpers/urls/) relies on a correct path).

For more info, please see the [Compass configuration reference](http://compass-style.org/help/tutorials/configuration-reference/).

## Rakefile

	$ rake sass
	
	overwrite stylesheets/ie.css 
	overwrite stylesheets/master.css 
	* Sass compiled
	

The Rakefile includes one single `sass` task for quickly generating a production ready, compressed stylesheet.