class ProductSerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :is_shared, :shared_capacity, :weight_value, :weight_unit
  belongs_to :manufacturer
  belongs_to :category
  has_many :product_assets
end
