class CategorySerializer < ActiveModel::Serializer
  attributes :id, :name, :total_grams, :total_ounces

  def total_grams
    object.total_weight[:grams]
  end

  def total_ounces
    object.total_weight[:ounces]
  end  
end
