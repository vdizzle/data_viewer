module Helpers
  Dir['app/helpers/*.rb'].each do |file|
    autoload File.basename(file, '.rb').camelize, file
  end
end
