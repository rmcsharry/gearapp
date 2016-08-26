class Category < ApplicationRecord
  has_many :products

  def total_weight
    total_grams ||= total_products(:g)
    total_ounces ||= total_products(:oz)
    Hash.[](grams: (total_grams + total_ounces.convert_to(:g)).value,
            ounces: (total_ounces + total_grams.convert_to(:oz)).value)
  end

private
  def total_products(weight_unit)
    Measured::Weight.new(self.products.where('weight_unit = ?', weight_unit).sum(:weight_value), weight_unit)
  end

end
