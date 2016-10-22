$(document).ready( function () {

  $(".later-questions").hide();

  $('input[name="intake_form[immediate_danger]"]').click(function() {
    var value = $(this).val();
    if (value == "Yes!") {
      window.location.assign("http://localhost:3000/results/travis");
    }
    if (value == "No") {
      $("#name-question").show();
    }
  });

  $('input[name="intake_form[name]"]').change(function() {
    var value = $(this).val();
    if (value.length > 0) {
      alert("value is there");
    }
  });

});
