class ProductSerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :weight, :weight_type, :is_shared, :shared_capacity
  belongs_to :manufacturer
  belongs_to :category
end
