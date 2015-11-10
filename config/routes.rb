Rails.application.routes.draw do

  namespace :api do
    resources :comments, defaults: {format: 'json'}
  end

end
