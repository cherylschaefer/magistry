$(document).on('turbolinks:load', function () {

  $(".later-questions").hide();

  $('input[name="intake_form[immediate_danger]"]').click(function() {
    var value = $(this).val();
    if (value == "Yes!") {
      window.location.assign("http://localhost:3000/results/travis");
    }
    if (value == "No") {
      $("#name-question").show();
      $("#danger-question").hide();
    }
  });

  $('input[name="intake_form[name]"]').change(function() {
    var value = $(this).val();
    if (value.length > 0) {
      $("#gender-question").show();
      $("#name-question").hide();
    }
  });

  $("#intake_form_gender").change(function() {
    var value = $(this).find('option:selected').val();
    if (value.length > 0) {
      $("#age-question").show();
      $("#gender-question").hide();
    }
  });

  $("#intake_form_age_range").change(function() {
    var value = $(this).val();
    if (value.length > 0) {
      $("#location-question").show();
      $("#age-question").hide();
    }
  });

  $("#intake_form_location").change(function() {
    var value = $(this).val();
    if (value.length > 0) {
      $("#lgbtq-question").show();
      $("#location-question").hide();
    }
  });

  $('input[name="intake_form[lgbtq]"]').click(function() {
    var value = $(this).val();
    if (value.length > 0) {
      $("#hiv-question").show();
      $("#lgbtq-question").hide();
    }
  });

  $('input[name="intake_form[hiv]"]').click(function() {
    var value = $(this).val();
    if (value.length > 0) {
      $("#abuse-victim-question").show();
      $("#hiv-question").hide();
    }
  });

  $('input[name="intake_form[abuse_victim]"]').click(function() {
    var value = $(this).val();
    if (value.length > 0) {
      $("#place-to-sleep-question").show();
      $("#abuse-victim-question").hide();
    }
  });

  $('input[name="intake_form[place_to_sleep]"]').click(function() {
    var value = $(this).val();
    if (value.length > 0) {
      $("#medical-attention-question").show();
      $("#place-to-sleep-question").hide();
    }
  });

  $("#intake_form_needs_medical_attention").change(function() {
    var value = $(this).val();
    if (value.length > 0) {
      $("#children-question").show();
      $("#medical-attention-question").hide();
    }
  });
});
