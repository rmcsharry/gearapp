class AddWeightTypeToProducts < ActiveRecord::Migration[5.0]
  def up
    add_column :products, :weight_type, :integer, default: 1
    add_index :products, :weight_type
  end
  def down
    remove_column :products, :weight_type
  end
end
