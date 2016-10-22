$(document).ready( function () {
  $('input[name="intake_form[immediate_danger]"]').click(function() {
    window.location.assign("http://localhost:3000/results/travis");
  });
});
