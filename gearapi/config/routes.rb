Rails.application.routes.draw do
  mount_ember_app :frontend, to: "/"

  resources :product_assets
  resources :products
  resources :categories
  resources :manufacturers
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
