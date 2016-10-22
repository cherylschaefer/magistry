$(document).ready( function () {

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

  $('input[name="intake_form[gender]"]').change(function() {
    alert("got a gender change");
    var value = $(this).find('option:selected').val();
    alert(value);
    if (value == "Female") {
      $("#age-question").show();
      $("#gender-question").hide();
    }
  });

  $('input[name="intake_form[age]"]').change(function() {
    var value = $(this).val();
    if (value.length > 0) {
      $("#location-question").show();
      $("#age-question").hide();
    }
  });

  $('input[name="intake_form[location]"]').change(function() {
    var value = $(this).val();
    if (value.length > 0) {
      $("#place-to-sleep-question").show();
      $("#location-question").hide();
    }
  });

  $('input[name="intake_form[medical-attention]"]').change(function() {
    var value = $(this).val();
    if (value.length > 0) {
      $("#medical-attention-question").hide();
    }
  });

});
