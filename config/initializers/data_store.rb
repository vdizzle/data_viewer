require 'data_store_client'

DataStoreClient.initialize_with_config!(
  YAML.load(ERB.new(File.read('config/data_store.yml')).result)[ENV['RACK_ENV']]
)
