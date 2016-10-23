class ChangeMedicalAttention < ActiveRecord::Migration[5.0]
  def change
    remove_column :intake_forms, :medical_attention, :boolean
    add_column :intake_forms, :needs_medical_attention, :string
  end
end
