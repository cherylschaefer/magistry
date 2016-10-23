class IntakeFormsController < ApplicationController

  def create
    @intake_form = IntakeForm.new(intake_form_params)
    # For a real app, we'd have a db of likely services to show that would be tagged based on their individual answers.
    # this'll show the idea for the weekend
    if @intake_form.save
      if @intake_form.name == "Sheila" || @intake_form.name == "sheila"
        redirect_to results_sheila_path
      else
        redirect_to results_scott_path
      end
    end
  end

  private
  def intake_form_params
    params.require(:intake_form).permit(:immediate_danger, :name, :gender, :age_range, :location, :place_to_sleep, :needs_medical_attention)
  end
end
