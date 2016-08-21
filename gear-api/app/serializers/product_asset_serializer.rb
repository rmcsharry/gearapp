class ProductAssetSerializer < ActiveModel::Serializer
  attributes :id, :name, :url, :mime_type
  belongs_to :product
end
