require "rake"

task :default => ["compile:dev"]

namespace :compile do
  
  desc "Regular compile"
  task :dev do
    puts `compass compile`
    puts "* Sass compiled"
  end
  
  desc "Compiles the Sass files for production"
  task :production do
    puts `compass compile -e production --force`
    puts "* Sass compiled for production"
  end
  
end