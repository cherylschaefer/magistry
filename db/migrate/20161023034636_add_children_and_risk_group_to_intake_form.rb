class AddChildrenAndRiskGroupToIntakeForm < ActiveRecord::Migration[5.0]
  def change
    add_column :intake_forms, :children, :integer
    add_column :intake_forms, :lgbtq, :boolean
    add_column :intake_forms, :hiv, :boolean
    add_column :intake_forms, :abuse_victim, :boolean
  end
end
