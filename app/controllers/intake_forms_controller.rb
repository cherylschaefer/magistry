class IntakeFormsController < ApplicationController

  def create
    @intake_form = IntakeForm.new(intake_form_params)
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
    params.require(:intake_form).permit(:immediate_danger, :name)
  end
end
