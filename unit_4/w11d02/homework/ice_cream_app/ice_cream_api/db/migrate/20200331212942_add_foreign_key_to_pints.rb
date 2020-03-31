class AddForeignKeyToPints < ActiveRecord::Migration[6.0]
  def change
    add_column :pints, :ice_cream_id, :integer
  end
end
