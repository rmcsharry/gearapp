class DeleteWeightUnitFromProducts < ActiveRecord::Migration[5.0]
  def up
    remove_column :products, :weight_unit
  end

  def down
    add_column :products, :weight_unit, :string
  end
end