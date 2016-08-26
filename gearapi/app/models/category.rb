class Category < ApplicationRecord
  has_many :products

  def total_weight
    @grams ||= total_weight_grams
    @ounces ||= total_weight_ounces
    Hash.[](grams: (@grams + @ounces.convert_to(:g)).value,
            ounces: (@ounces + @grams.convert_to(:oz)).value)
  end

private
  def total_weight_grams
    Measured::Weight.new(self.products.where('weight_unit = ?', 'g').sum(:weight_value), :g)
  end
  
  def total_weight_ounces
    Measured::Weight.new(self.products.where('weight_unit = ?', 'oz').sum(:weight_value), :oz)
  end

end
