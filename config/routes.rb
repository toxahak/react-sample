Rails.application.routes.draw do
  
  root 'application#home'
   
  namespace :api do
    resources :comments, defaults: {format: 'json'}
  end

end
