class Product < ApplicationRecord
  belongs_to :manufacturer, optional: true
  belongs_to :category
  has_many :product_assets
end
