class ApplicationController < Sinatra::Base
  get '/bikes' do
    # Get all bikes
    bikes = Bike.all
    bikes.to_json
  end

  post '/bikes' do
    # Create a new bike
    bike = Bike.new(params)
    if bike.save
      status 201
      bike.to_json
    else
      status 400
      { error: 'Failed to create bike' }.to_json
    end
  end

  delete '/bikes/:id' do
    bike = Bike.find(params[:id])
    if bike.destroy
      status 204
    else
      status 400
      { error: 'Failed to delete bike' }.to_json
    end
  end

  get '/bikes/search' do
    # Search bikes by description
    description = params[:description]
    bikes = Bike.where('description LIKE ?', "%#{description}%")
    bikes.to_json
  end
end
