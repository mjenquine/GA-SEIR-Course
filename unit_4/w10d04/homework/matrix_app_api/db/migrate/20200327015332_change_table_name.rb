class ChangeTableName < ActiveRecord::Migration[6.0]
  def change
    rename_table :characters, :matrix_characters
  end
end
