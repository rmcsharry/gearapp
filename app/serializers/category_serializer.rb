class CategorySerializer < ActiveModel::Serializer
  attributes :id, :name, :total_grams

  def total_grams
    object.total_weight[:grams]
  end
end
