class CreatePints < ActiveRecord::Migration[6.0]
  def change
    create_table :pints do |t|
      t.integer :pints_sold
      t.integer :pints_made
      t.decimal :profit_per_pint
      t.string :month

      t.timestamps
    end
  end
end
