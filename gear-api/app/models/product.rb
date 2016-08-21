class Product < ApplicationRecord
  belongs_to :manufacturer, optional: true
  belongs_to :category
  has_many :products

  enum weight_type: { grams: 1, ounces: 2 }
end
