Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  resources :intake_forms
  get "results/sheila", to: 'welcome#sheila'
  get "results/scott", to: 'welcome#scott'
  get "results/travis", to: 'welcome#travis'

  root 'welcome#index'
end
