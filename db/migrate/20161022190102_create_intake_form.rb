class CreateIntakeForm < ActiveRecord::Migration[5.0]
  def change
    create_table :intake_forms do |t|
      t.boolean :immediate_danger
      t.string :name
      t.string :gender
      t.string :age_range
      t.string :location
      t.boolean :place_to_sleep
      t.boolean :medical_attention
    end
  end
end
