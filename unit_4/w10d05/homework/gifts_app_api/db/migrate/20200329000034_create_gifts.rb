class CreateGifts < ActiveRecord::Migration[6.0]
  def change
    create_table :gifts do |t|
      t.string :description
      t.string :value
      t.string :event
      t.string :gift_giver
    end
  end
end
