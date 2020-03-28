class RemoveDetailsInTodos < ActiveRecord::Migration[6.0]
  def change
    remove_column :todos, :details, :string
  end
end
