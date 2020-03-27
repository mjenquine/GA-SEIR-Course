class FixDescriptionColumnTypo < ActiveRecord::Migration[6.0]
  def change
    rename_column :characters, :desciption, :description
  end
end
