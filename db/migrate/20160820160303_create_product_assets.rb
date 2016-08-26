class CreateProductAssets < ActiveRecord::Migration[5.0]
  def change
    create_table :product_assets do |t|
      t.references :product, foreign_key: true
      t.string :name
      t.string :url
      t.string :mime_type

      t.timestamps
    end
  end
end
