class DeleteWeightColumnsFromProduct < ActiveRecord::Migration[5.0]
  def up
    remove_column :products, :weight_type
    remove_column :products, :weight
  end
  def down
    add_column :products, :weight_type, :string
    add_column :products, :weight, :numeric
  end
end
