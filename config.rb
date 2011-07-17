# Please see the included rake task for deploying the Sass files. Just run 'rake sass' to get a ready-to-use, compressed stylesheet.

# If you're using Compass enhancements like 'image-url' (http://compass-style.org/reference/compass/helpers/urls/) you need
# to regenerate the Sass files based on your live http_path


# Set this to the root of your project (usually where this file lives) when deployed:
http_path = (environment == :production) ? "/compass-boilerplate"  : "/sub-folder/compass-boilerplate"

css_dir = "stylesheets"
sass_dir = "sass"
images_dir = "images"
javascripts_dir = "javascripts"

# You can select your preferred output style here (can be overridden via the command line):
output_style = (environment == :production) ? :compressed : :expanded

# To enable relative paths to assets via compass helper functions. Uncomment:
# relative_assets = true

# To disable debugging comments that display the original location of your selectors. Uncomment:
line_comments = false

# Don't append query strings ('?2011051020102') to assets:
asset_cache_buster :none
