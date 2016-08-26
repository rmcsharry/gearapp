class AddWeightMeasurementsToProduct < ActiveRecord::Migration[5.0]
  def change
    add_column :products, :weight_value, :decimal, precision: 10, scale: 2
    add_column :products, :weight_unit, :string, limit: 12, default: 'g'
  end
end
