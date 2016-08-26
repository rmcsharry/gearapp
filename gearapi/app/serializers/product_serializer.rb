class ProductSerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :is_shared, :shared_capacity
  belongs_to :manufacturer
  belongs_to :category
  has_many :product_assets
end
