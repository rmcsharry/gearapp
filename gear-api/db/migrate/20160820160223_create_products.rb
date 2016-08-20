class CreateProducts < ActiveRecord::Migration[5.0]
  def change
    create_table :products do |t|
      t.references :manufacturer, foreign_key: true
      t.references :category, foreign_key: true, null: false
      t.string :name, null: false
      t.string :description
      t.numeric :weight
      t.string :weight_unit
      t.boolean :is_shared, default: false
      t.integer :shared_capacity, default: 0, limit: 1

      t.timestamps
    end
  end
end
